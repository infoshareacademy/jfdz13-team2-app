import React from "react";
import TrainingPlans from "../../Data/TrainingPlans.js";
import AllPlansContainer from "./OneCard.js";

const AllPlans = () => {
  return (
    <>
      {TrainingPlans.map(plans => (
        <AllPlansContainer key={plans.id} card={plans} />
      ))}
    </>
  );
};

export default AllPlans;
