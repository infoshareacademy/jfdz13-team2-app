import React from "react";
import Stronger from "../../Data/Stronger";
import MyTrainingCard from "./MyTrainingCard";
import Typography from "@material-ui/core/Typography";
import "../../App.css";

const StrongerPlan = () => {
  return (
    <>
      <Typography variant="h2" component="h2" className="myPlan__title">
        MY PLAN - STRONGER - DAY 1
      </Typography>
      <div className="training__container">
        {Stronger.map(card => (
          <MyTrainingCard key={card.id} card={card} />
        ))}
      </div>
    </>
  );
};

export default StrongerPlan;
