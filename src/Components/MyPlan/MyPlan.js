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
    const ref = firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
      if (user) {
        this.fetchUsersData().then(() => {
          this.setPlan();
          this.fetchData();
        });
      }
    });
    this.setState({ ref });
  };

  fetchUsersData = () => {
    return fetch("https://jfdz13-team2-app.firebaseio.com/UsersData.json/")
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
    return this.state.dataUsers
      .filter(logedUser => {
        return logedUser.id === this.state.user.uid;
      })
      .map(logedUser => {
        return this.setState({ myPlan: logedUser.myTrainingPlan });
      });
  };

  fetchData = () => {
    fetch(`https://jfdz13-team2-app.firebaseio.com/${this.state.myPlan}.json`)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  };

  componentDidMount() {
    this.setUser();
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
    const {
      data,
      finishedExercises,
      isExerciseInProgress,
      user,
      myPlan
    } = this.state;

    return user ? (
      <>
        <Heading
          content={`MY PLAN - ${myPlan.toUpperCase() ||
            "GO TO ALL PLANS AND CHOOSE YOUR PLAN"}`}
        />

        <div className="training__container">
          {myPlan &&
            data.map(card => (
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
    ) : (
      <div className={"myPlanPage"}>
        <h1 className={"myPlanHeader"}>
          SIGN IN TO CHANGE YOUR BODY, LIVE, FUTURE!
        </h1>
      </div>
    );
  }
}

export default MyPlan;
