import React from "react";
import firebase from "firebase";
import MyTrainingCard from "./MyTrainingCard";
import Heading from "../Heading";
import "../../App.css";

class MyPlan extends React.Component {
  state = {
    data: [],
    finishedExercises: [],
    isExerciseInProgress: false,
    myPlan: "",
    ref: null,
    user: null
  };

  setUser = () => {
    // const ref =
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
      console.log(this.state.user);
    });

    // this.setState({ ref });
  };

  fetchData = () => {
    const plan = this.state.user.uid.myTrainingPlan;
    fetch(`https://jfdz13-team2-app.firebaseio.com/TrainingPlans/${plan}.json`)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  };

  componentDidMount() {
    this.setUser();
    this.fetchData();
  }

  onExerciseStarted = () => {
    this.setState({
      isExerciseInProgress: true
    });
  };

  onExerciseFinished = id => {
    this.setState({
      isExerciseInProgress: false,
      finishedExercises: [...this.state.finishedExercises, id]
    });
  };

  onWholePlanFinished = () => {
    if (this.state.finishedExercises.length === 8) {
      alert("Well done!");
    }
  };

  // componentWillUnmount() {
  //   this.state.ref();
  // }

  render() {
    this.onWholePlanFinished();
    const { data, finishedExercises, isExerciseInProgress } = this.state;

    return (
      this.state.user && (
        <>
          <Heading content={"MY PLAN - SLIMMER - DAY 1"} />
          <div className="training__container">
            {data.map(card => (
              <MyTrainingCard
                key={card.id}
                card={card}
                onExerciseStarted={this.onExerciseStarted}
                onExerciseFinished={this.onExerciseFinished}
                isExerciseInProgress={isExerciseInProgress}
                finishedExercises={finishedExercises}
              />
            ))}
          </div>
        </>
      )
    );
  }
}

export default MyPlan;
