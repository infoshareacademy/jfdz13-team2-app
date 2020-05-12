import React from "react";
import firebase from "firebase";
import MyTrainingCard from "./MyTrainingCard";
import Heading from "../Heading";
import "../../App.css";

class MyPlan extends React.Component {
  state = {
    data: [],
    dataUsers: [],
    finishedExercises: [],
    isExerciseInProgress: false,
    myPlan: "",
    ref: null,
    user: null
  };

  setUser = () => {
    setTimeout(() => {
      const ref = firebase.auth().onAuthStateChanged(user => {
        this.setState({ user });
      });

      this.setState({ ref });
      console.log(this.state.user);
    }, 500);
  };

  fetchUsersData = () => {
    fetch("https://jfdz13-team2-app.firebaseio.com/UsersData.json/")
      .then(resp => resp.json())
      .then(objectUsers => {
        const keys = Object.keys(objectUsers);
        const arrayUsers = keys.map(key => {
          return {
            id: key,
            ...objectUsers[key]
          };
        });

        this.setState({
          dataUsers: arrayUsers
        });
      });
  };
  setPlan = () => {
    setTimeout(() => {
      console.log(this.state.user);
      console.log(this.state.dataUsers);
      return this.state.dataUsers
        .filter(logedUser => {
          return logedUser.id === this.state.user.uid;
        })
        .map(logedUser => {
          // return console.log(logedUser.myTrainingPlan);
          return this.setState({ myPlan: logedUser.myTrainingPlan });
        });
    }, 1000);
  };

  fetchData = () => {
    setTimeout(() => {
      // const plan = this.state.myPlan;
      fetch(`https://jfdz13-team2-app.firebaseio.com/${this.state.myPlan}.json`)
        .then(response => response.json())
        .then(data => this.setState({ data }));
    }, 1500);
  };

  componentDidMount() {
    this.setUser();
    this.fetchUsersData();
    this.setPlan();
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

  componentWillUnmount() {
    this.state.ref();
  }

  render() {
    this.onWholePlanFinished();
    const { data, finishedExercises, isExerciseInProgress } = this.state;

    console.log(this.state.myPlan);
    return (
      this.state.user && (
        <>
          <Heading
            content={`MY PLAN - ${this.state.myPlan.toUpperCase()} - DAY 1`}
          />
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
