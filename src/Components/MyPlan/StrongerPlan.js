import React from "react";
import Stronger from "../../Data/Stronger";
import MyTrainingCard from "./MyTrainingCard";
import "../../App.css";

const StrongerPlan = () => {
  return (
    <>
      <h1 className="myPlan__title">MY PLAN - SLIMMER - DAY 1</h1>

      <div className="training__container">
        {Stronger.map(item => (
          <MyTrainingCard card={item} />
        ))}
      </div>
    </>
  );
};

export default StrongerPlan;
