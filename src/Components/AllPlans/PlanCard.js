import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import StartNow from "./StartNow.js";
import VStepper from "./VStepper.js";
import Rating from "./Rating";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "31%"
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
  image
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className={"allPlansContainer"}>
        <div className={"allCards"}>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {avatar}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <StartNow />
                </IconButton>
              }
              title={title}
              subheader={goal}
            />
            <CardMedia className={classes.media} image={image} />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
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
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>WORKOUT ROUTINE:</Typography>
                <Typography paragraph>The warmup:</Typography>
                <VStepper step_1={step_1} step_2={step_2} step_3={step_3} />
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </div>
    </>
  );
}
