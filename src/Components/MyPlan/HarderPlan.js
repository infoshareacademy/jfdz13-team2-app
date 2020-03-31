import React from "react";
import Harder from "../../Data/Harder";
import MyTrainingCard from "./MyTrainingCard";
import Typography from "@material-ui/core/Typography";
import "../../App.css";

const HarderPlan = () => {
  return (
    <>
      <Typography variant="h2" component="h2" className="myPlan__title">
        MY PLAN - HARDER - DAY 1
      </Typography>
      <div className="training__container">
        {Harder.map(card => (
          <MyTrainingCard key={card.id} card={card} />
        ))}
      </div>
    </>
  );
};

export default HarderPlan;
