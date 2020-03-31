import React from "react";
import Harder from "../../Data/Harder";
import MyTrainingCard from "./MyTrainingCard";
import "../../App.css";
import Heading from "../Heading";

const HarderPlan = () => {
  return (
    <>
      <Heading content={"MY PLAN - HARDER - DAY 1"} />
      <div className="training__container">
        {Harder.map(card => (
          <MyTrainingCard key={card.id} card={card} />
        ))}
      </div>
    </>
  );
};

export default HarderPlan;
