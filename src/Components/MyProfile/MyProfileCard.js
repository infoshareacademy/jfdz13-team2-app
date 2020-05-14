import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import EditIcon from "@material-ui/icons/Edit";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Tooltip from "@material-ui/core/Tooltip";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAlt";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import UserPersonalData from "./UserPersonalData";
import { NavLink } from "react-router-dom";

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
      // avatarUrl,
      firstName,
      lastName,
      date,
      myTrainingPlan,
      sex,
      age,
      height,
      weight
    } = this.props.user;

    const logo = `${firstName.slice(0, 1)}${lastName.slice(0, 1)}`;

    return (
      <>
        <Card className="myProfile">
          <CardHeader
            // avatar={
            //   <img
            //     className="myProfile__avatar"
            //     src={avatarUrl}
            //     alt="myPhoto"
            //   />
            // }
            avatar={
              <Avatar style={{ backgroundColor: "#080a1d" }}>{logo}</Avatar>
            }
            title={`${firstName} ${lastName}`}
            subheader={`MoveOn since: ${date}`}
          />
          <hr />
          <CardContent className="myProfile__container">
            <div>
              <p className="myProfile__userFieldHeading">My Training Plan</p>
              <div className="myProfile__userField">
                <Tooltip title="Choose your plan">
                  <NavLink style={{ color: "black" }} to="/all-plans">
                    <HowToRegIcon />
                  </NavLink>
                </Tooltip>
                <p>{myTrainingPlan}</p>
              </div>
            </div>
            <div>
              <p className="myProfile__userFieldHeading">Sex</p>
              <div className="myProfile__userField">
                <p>{sex}</p>
              </div>
            </div>

            <div>
              <p className="myProfile__userFieldHeading">Age</p>
              <div className="myProfile__userField">
                <p>{age}</p>
              </div>
            </div>
            <div>
              <p className="myProfile__userFieldHeading">Height</p>
              <div className="myProfile__userField">
                <p>{height}</p>
              </div>
            </div>
            <div>
              <p className="myProfile__userFieldHeading">Weight</p>
              <div className="myProfile__userField">
                <p>{weight}</p>
                <EditIcon />
              </div>
            </div>
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
