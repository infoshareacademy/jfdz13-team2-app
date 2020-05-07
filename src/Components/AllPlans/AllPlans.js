import React from "react";
import { Link } from "react-router-dom";
//import TrainingPlans from "./../../../public/TrainingPlans.json";
import Heading from "./../Heading";

// import StrongerPlan from "./Components/MyPlan/StrongerPlan";
// import HarderPlan from "./Components/MyPlan/HarderPlan";
import PlanCard from "./PlanCard";
import "./../../App.css";
import UserProvider from "./../Aplication/UserProvider";

class AllPlans extends React.Component {
  state = {
    data: [],
    chosenPlan: ""
  };
  addedPlan = title => {
    this.setState({
      chosenPlan: title
    });
    console.log(title);
    fetch(
      "https://jfdz13-team2-app.firebaseio.com/UsersData/-M6kbvzVHS4Za9cEhNP_",
      {
        method: "PUT",
        body: JSON.stringify({
          myTrainingPlan: this.state.chosenPlan
        })
      }
    ).then(() => {
      this.setState({
        myTrainingPlan: this.state.chosenPlan
      });
    });
  };

  componentDidMount() {
    fetch("https://jfdz13-team2-app.firebaseio.com/TrainingPlans.json")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  render() {
    const { data } = this.state;

    return (
      <UserProvider>
        {user => {
          return user ? (
            <>
              <Heading content="CHOOSE YOUR PERSONAL TRAINING PLAN" />
              <div className={"training__container"}>
                {data.map(plans => {
                  console.log("plans: ", plans);
                  return (
                    <PlanCard
                      component={Link}
                      to="/Components/MyPlan/SlimmerPlan"
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
                      key={plans.id} // dlatego wlasnie mapuje po id)
                      addedPlan={this.addedPlan}
                    ></PlanCard>
                  );
                })}
              </div>
            </>
          ) : (
            <h2>Sign In to choose your training plan!</h2>
          );
        }}
      </UserProvider>
    );
  }
}

export default AllPlans;
