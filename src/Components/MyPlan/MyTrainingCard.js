import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import StartNow from "../AllPlans/StartNow";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../../App.css";

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
    margin: 10
  },
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const MyTrainingCard = props => {
  const classes = useStyles();
  const { card } = props;

  return (
    <>
      <Card key={card.id} className={classes.root}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className="trainingCard__header"
          >
            {card.name}
          </Typography>
        </CardContent>
        <img alt={card.name} src={card.image} className="trainingCard__image" />

        <CardActions className="trainingCard__checkIcon">
          <StartNow />
          <span className="trainingCard__time">30s</span>
        </CardActions>
      </Card>
    </>
  );
};

export default MyTrainingCard;
