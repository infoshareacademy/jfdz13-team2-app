import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Avatar from "@material-ui/core/Avatar";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAlt";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import { indigo } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import UsersData from "../../Data/UsersData";
import UserPersonalData from "./UserPersonalData";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 700,
    margin: "0 auto"
  },
  avatar: {
    backgroundColor: indigo[500],
    height: "60px",
    width: "60px"
  }
}));

const MyProfile = () => {
  const classes = useStyles();

  const user = UsersData[1];

  const bmi = (user.weight / Math.pow(user.height / 100, 2)).toFixed(2);

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              className={classes.avatar}
              src={user.avatarUrl}
              alt="myPhoto"
            ></Avatar>
          }
          title={user.name}
          subheader={`MoveOn since: ${user.firstTraining}`}
        />
        <hr />
        <CardContent className="myProfile__container">
          <FormControl component="fieldset">
            <FormLabel component="legend">My Training Plan</FormLabel>
            <RadioGroup aria-label="trainingPlan" name="trainingPlan">
              <FormControlLabel
                value={user.myTraining}
                control={<Radio />}
                label={user.myTraining}
              />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender1">
              <FormControlLabel
                value={user.sex}
                control={<Radio />}
                label={user.sex}
              />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel component="legend">Age </FormLabel>
            <RadioGroup aria-label="age" name="age">
              <FormControlLabel
                value={user.age}
                control={<Radio />}
                label={user.age}
              />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel component="legend">Height </FormLabel>
            <RadioGroup aria-label="height" name="height">
              <FormControlLabel
                value={user.height}
                control={<Radio />}
                label={user.height}
              />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel component="legend">Weight </FormLabel>
            <RadioGroup aria-label="weight" name="weight">
              <FormControlLabel
                value={user.weight}
                control={<Radio />}
                label={user.weight}
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
        <hr />
        <div>
          <CardContent className="myProfile__container">
            My BMI (Body Mass Index): <b>{bmi} - obesity</b>
            <ButtonGroup>
              <SentimentDissatisfiedIcon />
              <SentimentSatisfiedAltIcon />
              <SentimentDissatisfiedIcon />
              <SentimentVeryDissatisfiedIcon className="myProfile__bmiIcon" />
            </ButtonGroup>
          </CardContent>
        </div>
        <hr />
        <UserPersonalData />
      </Card>
    </>
  );
};

export default MyProfile;
