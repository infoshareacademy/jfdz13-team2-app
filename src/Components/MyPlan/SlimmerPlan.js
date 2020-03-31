import React from "react";
import Slimmer from "../../Data/Slimmer";
import MyTrainingCard from "./MyTrainingCard";
import Typography from "@material-ui/core/Typography";
import "../../App.css";

const SlimmerPlan = () => {
  return (
    <>
      <Typography variant="h4" component="h4" className="myPlan__title">
        <b>MY PLAN - SLIMMER - DAY 1</b>
      </Typography>
      <div className="training__container">
        {Slimmer.map(card => (
          <MyTrainingCard key={card.id} card={card} />
        ))}
      </div>
    </>
  );
};

export default SlimmerPlan;
