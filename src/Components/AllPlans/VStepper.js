import React from "react";
import {
  makeStyles
  // ThemeProvider,
  // createMuiTheme,
} from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: "#2f3244",
//       main: "#080a1d",
//       dark: "#000000",
//       contrastText: "#ffffff",
//     },
//     secondary: {
//       light: "#ff7d98",
//       main: "#fe466a",
//       dark: "#c50040",
//       contrastText: "#000000",
//     },
//   },
// });

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  }
}));

function getSteps() {
  return ["GET READY", "BE PREPARED", "DO THE JOB"];
}

function getStepContent(index, step_1, step_2, step_3) {
  switch (index) {
    case 0:
      return step_1;
    case 1:
      return step_2;
    case 2:
      return step_3;
    default:
      return "Unknown step";
  }
}

export default function VStepper({ step_1, step_2, step_3 }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label} </StepLabel>
            <StepContent>
              <Typography>
                {getStepContent(index, step_1, step_2, step_3)}
              </Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#080a1d" }}
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
