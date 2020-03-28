import React from "react";
import TrainingPlans from "../../Data/TrainingPlans.js";

const AllPlans = () => {
  return (
    <>
      {AllPlansContainer.map(plans => (
        <Card key={plans.id} className={classes.root} />
      ))}
    </>
  );
};

export default AllPlans;
