import React from "react";
import Harder from "../../Data/Harder";
import MyTrainingCard from "./MyTrainingCard";
import "../../App.css";

const HarderPlan = () => {
  return (
    <>
      <h1 className="myPlan__title">MY PLAN - SLIMMER - DAY 1</h1>

      <div className="training__container">
        {Harder.map(item => (
          <MyTrainingCard card={item} />
        ))}
      </div>
    </>
  );
};

export default HarderPlan;
