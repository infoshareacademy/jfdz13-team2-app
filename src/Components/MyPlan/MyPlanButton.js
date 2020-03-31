import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DoubleArrowRoundedIcon from "@material-ui/icons/DoubleArrowRounded";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const MyPlanButton = ({ onClicked, content, disabled }) => {
  const classes = useStyles();

  return (
    <div>
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<DoubleArrowRoundedIcon />}
        onClick={onClicked}
        content={"Start Now"}
        disabled={disabled}
      >
        {content}
      </Button>
    </div>
  );
};

export default MyPlanButton;
