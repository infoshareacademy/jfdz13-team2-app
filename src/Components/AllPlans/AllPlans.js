import React from "react";
import TrainingPlans from "../../Data/TrainingPlans.js";
import PlanCard from "./PlanCard";

const AllPlans = () => {
  console.log("TrainingPlans: ", TrainingPlans);
  return (
    <>
      {TrainingPlans.map(plans => {
        console.log("plans: ", plans);
        return (
          <PlanCard
            id={plans.id}
            avatar={plans.avatar}
            title={plans.title}
            goal={plans.goal}
            rating={plans.rating}
            content={plans.content}
            step_1={plans.step_1}
            step_2={plans.step_2}
            step_3={plans.step_3}
            key={plans.id}
          />
        );
      })}
    </>
  );
};

export default AllPlans;
