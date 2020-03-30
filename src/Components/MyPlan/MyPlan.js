import React from "react";
import Slimmer from "../../Data/Slimmer";
import MyTrainingCard from "./MyTrainingCard";
import Typography from "@material-ui/core/Typography";
import "../../App.css";

const MyPlan = () => {
  return (
    <>
      {/* <h1 className="myPlan__title"></h1> */}
      <Typography variant="h2" component="h2" className="myPlan__title">
        MY PLAN - SLIMMER - DAY 1
      </Typography>
      <div className="training__container">
        {Slimmer.map(card => (
          <MyTrainingCard key={card.id} card={card} />
        ))}
      </div>
    </>
  );
};

export default MyPlan;
