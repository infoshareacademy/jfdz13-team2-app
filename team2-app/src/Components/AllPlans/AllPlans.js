// import React from "react";
// import style from "./AllPlans.module.css";
// import { Segment } from "semantic-ui-react";

// const AllPlansContainer = () => (
//   <Segment className={style.allPlansContainer} raised>
//     Choose best plan for yourself.
//   </Segment>
// );

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
import { blue } from "@material-ui/core/colors";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import StarHalfRoundedIcon from "@material-ui/icons/StarHalfRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import StartNow from "./StartNow.js";
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
    backgroundColor: blue[500]
  }
}));

export default function AllPlansContainer() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <StartNow />
          </IconButton>
        }
        title="STRONGER"
        subheader="Gain strength"
      />
      <CardMedia
        className={classes.media}
        image="/images/stronger/stronger_main.jpg"
        title="BE STRONGER"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Over the next <strong>3 weeks</strong> you will chellenge every limit
          and build unbelivable <strong>life-changing fittnes</strong> and
          athleticism.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <StarRoundedIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <StarRoundedIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <StarHalfRoundedIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <StarBorderRoundedIcon />
        </IconButton>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

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
        <CardContent style={{ background: "#00BCD4" }}>
          <Typography paragraph>WORKOUT ROUTINE:</Typography>
          <Typography paragraph>The warmup:</Typography>
          <Typography paragraph>
            Before each workout, spend 10 minutes doing a brisk walk, jog, or
            bike ride to get your heart rate up.
          </Typography>
          <Typography paragraph>
            Then for 5–6 minutes do some dynamic stretching. Workout 1–3:
            Full-body approach with a mix of upper- and lower-body strength
            exercises maximizes your time and eases you in. Complete 3 sets of
            each exercise, 10–15 reps each (as noted below).
          </Typography>
          <Typography paragraph>
            Rest 30–60 second between sets and 1–2 minutes between each
            exercise. Workout 4: Combination of cardio-based exercises and
            core-specific moves challenges your endurance.
          </Typography>
          <Typography>
            Treat this routine as a circuit: Complete 1 set of each exercise
            back to back, rest for 1 minute, then repeat 2 more times.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
// export default AllPlansContainer;
