import React from "react";
import firebase from "firebase";
import Heading from "./../Heading";
import PlanCard from "./PlanCard";
import "./../../App.css";

class AllPlans extends React.Component {
  state = {
    data: [],
    chosenPlan: "",
    ref: null,
    user: null
  };

  fetchData = () =>
    fetch("https://jfdz13-team2-app.firebaseio.com/TrainingPlans.json")
      .then(response => response.json())
      .then(data => this.setState({ data }));

  setUser = () => {
    const ref = firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });

    this.setState({ ref });
  };

  addedPlan = title => {
    fetch(
      `https://jfdz13-team2-app.firebaseio.com/UsersData/${this.state.user.uid}.json`,
      {
        method: "PATCH",
        body: JSON.stringify({
          myTrainingPlan: title
        })
      }
    ).then(() => {
      this.setState({
        chosenPlan: title
      });
    });
  };

  componentDidMount() {
    this.fetchData();
    this.setUser();
  }

  componentWillUnmount() {
    this.state.ref();
  }

  render() {
    const { data, user } = this.state;
    console.log(this.state.user);
    return user ? (
      <>
        <Heading content="CHOOSE YOUR PERSONAL TRAINING PLAN" />
        <div className={"training__container"}>
          {data.map(plans => {
            return (
              <PlanCard
                id={plans.id}
                avatar={plans.avatar}
                title={plans.title}
                subheader={plans.subheader}
                goal={plans.goal}
                rating={plans.rating}
                content={plans.content}
                step_1={plans.step_1}
                step_2={plans.step_2}
                step_3={plans.step_3}
                image={plans.image}
                jump={plans.jump}
                key={plans.id}
                addedPlan={this.addedPlan}
              ></PlanCard>
            );
          })}
        </div>
      </>
    ) : (
      <>
        <Heading content="SIGN IN TO CHOOSE TRAINING PLAN" />
        <div className={"training__container"}>
          {data.map(plans => {
            return (
              <PlanCard
                id={plans.id}
                avatar={plans.avatar}
                title={plans.title}
                subheader={plans.subheader}
                goal={plans.goal}
                rating={plans.rating}
                content={plans.content}
                step_1={plans.step_1}
                step_2={plans.step_2}
                step_3={plans.step_3}
                image={plans.image}
                jump={plans.jump}
                key={plans.id}
                addedPlan={this.addedPlan}
              ></PlanCard>
            );
          })}
        </div>
      </>
    );
  }
}

export default AllPlans;
