import React from "react";

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
