import React from "react";
import TrainingPlans from "../../Data/TrainingPlans.js";

const AllPlans = () => {
  console.log("Training plans: ", TrainingPlans);

  return (
    <>
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
            step_2={step_2}
            step_3={step_3}
            key={plans.id} // dlatego wlasnie mapuje po id)
          />
        );
      })}
    </>
  );
};

export default AllPlans;
