import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DoubleArrowRoundedIcon from "@material-ui/icons/DoubleArrowRounded";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const StartNowButton = ({ jump, onClicked }) => {
  const classes = useStyles();

  return (
    <div>
      {console.log(jump)}
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
      <Button
        component={Link}
        to={jump}
        onClick={onClicked}
        variant="contained"
        color="primary"
        //style={{ backgroundColor: "#080a1d" }}
        style={{ backgroundColor: "#fe466a" }}
        className={classes.button}
        endIcon={<DoubleArrowRoundedIcon />}
      >
        Start Now
      </Button>
    </div>
  );
};
export default StartNowButton;
