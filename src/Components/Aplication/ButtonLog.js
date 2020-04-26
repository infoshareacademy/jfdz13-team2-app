import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DoubleArrowRoundedIcon from "@material-ui/icons/DoubleArrowRounded";
import { NavLink as Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const ButtonLog = ({ content, jump }) => {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        style={{ backgroundColor: "#fe466a" }}
        className={classes.button}
        component={Link}
        to={jump}
        endIcon={<DoubleArrowRoundedIcon />}
      >
        {content}
      </Button>
    </div>
  );
};
export default ButtonLog;
