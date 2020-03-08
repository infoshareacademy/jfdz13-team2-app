import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import Slimmer from "../../Data/Slimmer";
import "../../App.css";

const useStyles = makeStyles(theme => ({
  root: {
    width: 400,
    margin: 10
  },
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const SlimmerTraining = () => {
  const classes = useStyles();

  return (
    <div className="training__container">
      <h1 className="myPlan__title">MY PLAN - SLIMMER</h1>
      <h1 className="myPlan__subtitle">
        Check exercises and when you're ready click:{" "}
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.margin}
        >
          <b>START!!!</b>
        </Button>
      </h1>
      {Slimmer.map(item => (
        <Card key={item.id} className={classes.root}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className="trainingCard__header"
            >
              {item.name}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            alt={item.name}
            image={item.image}
            title={item.name}
          />

          <CardActions className="trainingCard__checkIcon">
            Time: 30 seconds
            <CheckBoxOutlineBlankIcon />
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default SlimmerTraining;
