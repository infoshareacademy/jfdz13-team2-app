import React from "react";
import MyTrainingCard from "./MyTrainingCard";
import "../../App.css";
import Heading from "../Heading";

class HarderPlan extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch("https://jfdz13-team2-app.firebaseio.com/Harder.json")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;

    return (
      <>
        <Heading content={"MY PLAN - HARDER - DAY 1"} />
        <div className="training__container">
          {data.map(card => (
            <MyTrainingCard key={card.id} card={card} />
          ))}
        </div>
      </>
    );
  }
}

export default HarderPlan;
