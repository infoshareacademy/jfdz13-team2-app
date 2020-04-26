import React from "react";
import MyTrainingCard from "./MyTrainingCard";
import Heading from "../Heading";
import "../../App.css";

class MyPlan extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch("Slimmer.json")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;

    return (
      <>
        <Heading content={"MY PLAN - SLIMMER - DAY 1"} />
        <div className="training__container">
          {data.map(card => (
            <MyTrainingCard key={card.id} card={card} />
          ))}
        </div>
      </>
    );
  }
}

export default MyPlan;
