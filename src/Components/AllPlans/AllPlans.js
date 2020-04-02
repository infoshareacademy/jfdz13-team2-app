import React from "react";
import TrainingPlans from "../../Data/TrainingPlans.js";
import PlanCard from "./PlanCard";
import "./../../App.css";

const AllPlans = () => {
  console.log("Training plans: ", TrainingPlans);

  return (
    <div className={"training__container"}>
      {TrainingPlans.map(plans => {
        console.log("plans: ", plans);
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
            key={plans.id} // dlatego wlasnie mapuje po id)
          />
        );
      })}
    </div>
  );
};

export default AllPlans;
