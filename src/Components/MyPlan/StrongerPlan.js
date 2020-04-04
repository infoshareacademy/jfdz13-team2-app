import React from "react";
import Stronger from "../../Data/Stronger";
import MyTrainingCard from "./MyTrainingCard";
import Heading from "../Heading";
import "../../App.css";

const StrongerPlan = () => {
  return (
    <>
      <Heading content={"MY PLAN - STRONGER - DAY 1"} />
      <div className="training__container">
        {Stronger.map(card => (
          <MyTrainingCard key={card.id} card={card} />
        ))}
      </div>
    </>
  );
};

export default StrongerPlan;
