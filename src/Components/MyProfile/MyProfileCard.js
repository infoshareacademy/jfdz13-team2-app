import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Tooltip from "@material-ui/core/Tooltip";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAlt";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import UserPersonalData from "./UserPersonalData";

class MyProfileCard extends React.Component {
  calculateBmi = () =>
    (
      this.props.user.weight / Math.pow(this.props.user.height / 100, 2)
    ).toFixed(1);

  setBmi = () => {
    if (this.calculateBmi() < 18.5) {
      return `underweight`;
    } else if (this.calculateBmi() >= 18.5 && this.calculateBmi() <= 24.9) {
      return `healthy`;
    } else if (this.calculateBmi() >= 25 && this.calculateBmi() <= 29.9) {
      return `overweight`;
    } else {
      return `obesity`;
    }
  };

  render() {
    const {
      avatarUrl,
      name,
      firstTraining,
      myTraining,
      sex,
      age,
      height,
      weight
    } = this.props.user;

    return (
      <>
        <Card className="myProfile">
          <CardHeader
            avatar={
              <img
                className="myProfile__avatar"
                src={avatarUrl}
                alt="myPhoto"
              />
            }
            title={name}
            subheader={`MoveOn since: ${firstTraining}`}
          />
          <hr />
          <CardContent className="myProfile__container">
            <FormControl component="fieldset">
              <FormLabel component="legend">My Training Plan</FormLabel>
              <RadioGroup aria-label="trainingPlan" name="trainingPlan">
                <FormControlLabel
                  value={age}
                  control={<Radio />}
                  label={myTraining}
                />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Sex </FormLabel>
              <RadioGroup aria-label="sex" name="sex">
                <FormControlLabel value={age} control={<Radio />} label={sex} />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Age </FormLabel>
              <RadioGroup aria-label="age" name="age">
                <FormControlLabel value={age} control={<Radio />} label={age} />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Height </FormLabel>
              <RadioGroup aria-label="height" name="height">
                <FormControlLabel
                  value={height}
                  control={<Radio />}
                  label={height}
                />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Weight </FormLabel>
              <RadioGroup aria-label="weight" name="weight">
                <FormControlLabel
                  value={weight}
                  control={<Radio />}
                  label={weight}
                />
              </RadioGroup>
            </FormControl>
          </CardContent>
          <hr />
          <div>
            <CardContent className="myProfile__container">
              <b>My BMI (Body Mass Index): </b>
              {this.calculateBmi()} - {this.setBmi()}
              <ButtonGroup>
                <Tooltip title="underweight">
                  <SentimentDissatisfiedIcon
                    className={
                      this.setBmi() === "underweight"
                        ? "myProfile__bmiIcon"
                        : null
                    }
                  />
                </Tooltip>
                <Tooltip title="healthy">
                  <SentimentSatisfiedAltIcon
                    className={
                      this.setBmi() === "healthy" ? "myProfile__bmiIcon" : null
                    }
                  />
                </Tooltip>
                <Tooltip title="overweight">
                  <SentimentDissatisfiedIcon
                    className={
                      this.setBmi() === "overweight"
                        ? "myProfile__bmiIcon"
                        : null
                    }
                  />
                </Tooltip>
                <Tooltip title="obesity">
                  <SentimentVeryDissatisfiedIcon
                    className={
                      this.setBmi() === "obesity" ? "myProfile__bmiIcon" : null
                    }
                  />
                </Tooltip>
              </ButtonGroup>
            </CardContent>
          </div>
          <hr />
          <UserPersonalData />
        </Card>
      </>
    );
  }
}

export default MyProfileCard;
