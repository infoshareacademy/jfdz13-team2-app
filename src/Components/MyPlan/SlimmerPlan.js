import React from "react";
import MyTrainingCard from "./MyTrainingCard";
import Heading from "../Heading";
import "../../App.css";

class SlimmerPlan extends React.Component {
  state = {
    data: [],
    finishedExercises: [],
    isExerciseInProgress: false
  };

  componentDidMount() {
    fetch("https://jfdz13-team2-app.firebaseio.com/Slimmer.json")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  onExerciseStarted = () => {
    this.setState({
      isExerciseInProgress: true
    });
  };

  onExerciseFinished = id => {
    this.setState({
      isExerciseInProgress: false,
      finishedExercises: [...this.state.finishedExercises, id]
    });
  };

  render() {
    const { data, finishedExercises, isExerciseInProgress } = this.state;

    return (
      <>
        <Heading content={"MY PLAN - SLIMMER"} />
        <div className="training__container">
          {data.map(card => (
            <MyTrainingCard
              key={card.id}
              card={card}
              onExerciseStarted={this.onExerciseStarted}
              onExerciseFinished={this.onExerciseFinished}
              isExerciseInProgress={isExerciseInProgress}
              finishedExercises={finishedExercises}
            />
          ))}
        </div>
      </>
    );
  }
}

export default SlimmerPlan;
