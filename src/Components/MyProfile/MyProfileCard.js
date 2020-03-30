import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Avatar from "@material-ui/core/Avatar";
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

// const useStyles = makeStyles(theme => ({
//   root: {
//     maxWidth: 600,
//     margin: "0 auto"
//   },
//   avatar: {
//     backgroundColor: indigo[500],
//     height: "60px",
//     width: "60px"
//   }
// }));

class MyProfileCard extends React.Component {
  calculateBmi = () => {
    const bmi = (
      this.props.user.weight / Math.pow(this.props.user.height / 100, 2)
    ).toFixed(1);
    return bmi;
  };

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
    return (
      <>
        <Card className="myProfile">
          <CardHeader
            avatar={
              <Avatar
                aria-label="recipe"
                className="myProfile__avatar"
                src={this.props.user.avatarUrl}
                alt="myPhoto"
              ></Avatar>
            }
            title={this.props.user.name}
            subheader={`MoveOn since: ${this.props.user.firstTraining}`}
          />
          <hr />
          <CardContent className="myProfile__container">
            <FormControl component="fieldset">
              <FormLabel component="legend">My Training Plan</FormLabel>
              <RadioGroup aria-label="trainingPlan" name="trainingPlan">
                <FormControlLabel
                  value={this.props.user.myTraining}
                  control={<Radio />}
                  label={this.props.user.myTraining}
                />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup aria-label="gender" name="gender1">
                <FormControlLabel
                  value={this.props.user.sex}
                  control={<Radio />}
                  label={this.props.user.sex}
                />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Age </FormLabel>
              <RadioGroup aria-label="age" name="age">
                <FormControlLabel
                  value={this.props.user.age}
                  control={<Radio />}
                  label={this.props.user.age}
                />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Height </FormLabel>
              <RadioGroup aria-label="height" name="height">
                <FormControlLabel
                  value={this.props.user.height}
                  control={<Radio />}
                  label={this.props.user.height}
                />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Weight </FormLabel>
              <RadioGroup aria-label="weight" name="weight">
                <FormControlLabel
                  value={this.props.user.weight}
                  control={<Radio />}
                  label={this.props.user.weight}
                />
              </RadioGroup>
            </FormControl>
          </CardContent>
          <hr />
          <div>
            <CardContent className="myProfile__container">
              My BMI (Body Mass Index):{" "}
              <b>
                {this.calculateBmi()} - {this.setBmi()}
              </b>
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
