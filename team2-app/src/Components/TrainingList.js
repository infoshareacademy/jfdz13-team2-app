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
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import TrainingPlans from "../Data/TrainigPlans.js";
import Slimmer from "../Data/Slimmer";
import Stronger from "../Data/Stronger";
import Harder from "../Data/Harder";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 500,
    margin: "0 auto"
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
    backgroundColor: "#fe466a"
  }
}));

export default function TrainingListCards() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <h1
        className={classes.root}
        style={{
          color: "white",
          padding: "25px",
          textAlign: "center",
          fontSize: "40px"
        }}
      >
        Working Plan List
      </h1>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="plan" className={classes.avatar}>
              {TrainingPlans[0].id}
            </Avatar>
          }
          // action={
          //     <IconButton aria-label="settings">
          //         <MoreVertIcon />
          //     </IconButton>
          // }
          title={TrainingPlans[0].name}
          subheader={`Goal: ${TrainingPlans[0].goal}`}
        />
        <CardMedia
          className={classes.media}
          image={TrainingPlans[0].image}
          title={TrainingPlans[0].name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {TrainingPlans[0].content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          {/* <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton> */}
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
            <Typography paragraph>Exercises:</Typography>
            <ol>
              {Stronger.map(item => (
                <li>{item.name}</li>
              ))}
            </ol>
          </CardContent>
        </Collapse>
      </Card>
      <br></br>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="plan" className={classes.avatar}>
              {TrainingPlans[1].id}
            </Avatar>
          }
          // action={
          //     <IconButton aria-label="settings">
          //         <MoreVertIcon />
          //     </IconButton>
          // }
          title={TrainingPlans[1].name}
          subheader={`Goal: ${TrainingPlans[1].goal}`}
        />
        <CardMedia
          className={classes.media}
          image={TrainingPlans[1].image}
          title={TrainingPlans[1].name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {TrainingPlans[1].content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          {/* <IconButton aria-label="share">
                <ShareIcon />
            </IconButton> */}
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
            <Typography paragraph>Exercises:</Typography>
            <ol>
              {Harder.map(item => (
                <li>{item.name}</li>
              ))}
            </ol>
          </CardContent>
        </Collapse>
      </Card>
      <br></br>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="plan" className={classes.avatar}>
              {TrainingPlans[2].id}
            </Avatar>
          }
          // action={
          //     <IconButton aria-label="settings">
          //         <MoreVertIcon />
          //     </IconButton>
          // }
          title={TrainingPlans[2].name}
          subheader={`Goal: ${TrainingPlans[2].goal}`}
        />
        <CardMedia
          className={classes.media}
          image={TrainingPlans[2].image}
          title={TrainingPlans[2].name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {TrainingPlans[2].content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          {/* <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton> */}
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
            <Typography paragraph>Exercises:</Typography>
            <ol>
              {Slimmer.map(item => (
                <li>{item.name}</li>
              ))}
            </ol>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
