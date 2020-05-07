import React from "react";
import { Link } from "react-router-dom";
//import TrainingPlans from "./../../../public/TrainingPlans.json";
import Heading from "./../Heading";

// import StrongerPlan from "./Components/MyPlan/StrongerPlan";
// import HarderPlan from "./Components/MyPlan/HarderPlan";
import PlanCard from "./PlanCard";
import "./../../App.css";

class AllPlans extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch("https://jfdz13-team2-app.firebaseio.com/TrainingPlans.json")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  render() {
    const { data } = this.state;

    return (
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
              ></PlanCard>
            );
          })}
        </div>
      </>
    );
  }
}
export default AllPlans;
