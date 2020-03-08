import React from "react";
import Slimmer from "../../Data/Slimmer";
import MyTrainingCard from "./MyTrainingCard";
import "../../App.css";

const MyPlan = () => {
  return (
    <>
      <h1 className="myPlan__title">MY PLAN - SLIMMER - DAY 1</h1>

      <div className="training__container">
        {Slimmer.map(item => (
          <MyTrainingCard card={item} />
        ))}
      </div>
    </>
  );
};

export default MyPlan;
