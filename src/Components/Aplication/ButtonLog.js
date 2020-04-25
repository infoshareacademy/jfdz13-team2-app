import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DoubleArrowRoundedIcon from "@material-ui/icons/DoubleArrowRounded";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const ButtonLog = () => {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        style={{ backgroundColor: "#fe466a" }}
        className={classes.button}
        endIcon={<DoubleArrowRoundedIcon />}
      ></Button>
    </div>
  );
};
export default ButtonLog;
