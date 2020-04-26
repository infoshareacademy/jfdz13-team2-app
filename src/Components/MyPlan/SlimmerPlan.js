import React from "react";
import MyTrainingCard from "./MyTrainingCard";
import Heading from "../Heading";
import "../../App.css";

class SlimmerPlan extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch("https://jfdz13-team2-app.firebaseio.com/Slimmer.json")
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

export default SlimmerPlan;
