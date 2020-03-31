import React from "react";
import Slimmer from "../../Data/Slimmer";
import MyTrainingCard from "./MyTrainingCard";
import Heading from "../Heading";
import "../../App.css";

const SlimmerPlan = () => {
  return (
    <>
      <Heading content={"MY PLAN - SLIMMER - DAY 1"} />
      <div className="training__container">
        {Slimmer.map(card => (
          <MyTrainingCard key={card.id} card={card} />
        ))}
      </div>
    </>
  );
};

export default SlimmerPlan;
