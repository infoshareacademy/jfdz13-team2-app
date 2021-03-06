import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import StartNow from "./StartNow.js";
import VStepper from "./VStepper.js";
import Rating from "./Rating";
import UserProvider from "./../Aplication/UserProvider";
import "./../../App.css";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "30%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: theme.palette.primary.main
  }
}));

export default function PlanCard({
  id,
  avatar,
  title,
  goal,
  rating,
  content,
  step_1,
  step_2,
  step_3,
  image,
  jump,
  addedPlan
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onClicked = () => {
    addedPlan(title);
  };

  return (
    <UserProvider>
      {user => {
        return (
          <>
            <Card
              style={{ alignSelf: "flex-start" }}
              className="classes__root_card"
            >
              {user ? (
                <CardHeader
                  avatar={
                    <Avatar
                      aria-label="recipe"
                      className={classes.avatar}
                      style={{ backgroundColor: "#080a1d" }}
                    >
                      {avatar}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <StartNow jump={jump} onClicked={onClicked} />
                    </IconButton>
                  }
                  title={title}
                  subheader={goal}
                />
              ) : (
                <CardHeader
                  avatar={
                    <Avatar
                      aria-label="recipe"
                      className={classes.avatar}
                      style={{ backgroundColor: "#080a1d" }}
                    >
                      {avatar}
                    </Avatar>
                  }
                  title={title}
                  subheader={goal}
                />
              )}
              <img className={"planCard__image"} src={image} alt={id} />
              <CardContent>
                <Typography
                  variant="body2"
                  style={{ color: "#080a1d" }}
                  component="p"
                >
                  {content}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Rating rating={rating} />

                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <Tooltip title="WORKOUT ROUTINE">
                    <ExpandMoreIcon />
                  </Tooltip>
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography style={{ color: "#080a1d" }} paragraph>
                    WORKOUT ROUTINE:
                  </Typography>
                  <Typography style={{ color: "#080a1d" }} paragraph>
                    The warmup:
                  </Typography>
                  <VStepper step_1={step_1} step_2={step_2} step_3={step_3} />
                </CardContent>
              </Collapse>
            </Card>
          </>
        );
      }}
    </UserProvider>
  );
}
