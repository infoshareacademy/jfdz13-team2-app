import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../../App.css";
import MyPlanButton from "./MyPlanButton";

class MyTrainingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 30,
      exerciseIsStarted: false
    };
  }

  counterTime = () => {
    if (this.state.time) {
      this.setState({
        time: this.state.time - 1
      });
    }
  };

  handleTimer = () => {
    this.setState({
      exerciseIsStarted: !this.state.exerciseIsStarted
    });
    setInterval(this.counterTime, 1000);
  };

  render() {
    return (
      <>
        <Card key={this.props.card.id} className="classes__root">
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={
                this.state.time
                  ? "trainingCard__header"
                  : "trainingCard__header training__card__disabled"
              }
            >
              {this.props.card.name}
            </Typography>
          </CardContent>
          <img
            alt={this.props.card.name}
            src={this.props.card.image}
            className={
              this.state.time
                ? "trainingCard__image"
                : "trainingCard__image training__card__disabled"
            }
          />

          <CardActions className="trainingCard__checkIcon">
            <MyPlanButton
              onClicked={this.handleTimer}
              content={this.state.time ? "START NOW" : "GOOD JOB!!!"}
              disabled={this.state.exerciseIsStarted ? true : false}
            />
            <div className="countdown">
              <div
                className={
                  this.state.time
                    ? "countdown-number"
                    : "countdown-number training__card__disabled"
                }
              >
                {this.state.time}
              </div>
              <svg className="countdown-svg">
                <circle
                  r="18"
                  cx="20"
                  cy="20"
                  style={
                    this.state.exerciseIsStarted
                      ? { animation: "countdown 30s linear forwards" }
                      : null
                  }
                ></circle>
              </svg>
            </div>
          </CardActions>
        </Card>
      </>
    );
  }
}

export default MyTrainingCard;