import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "../../Offer.css";
import {
  Button,
  Grid,
  Typography,
  Stepper,
  Step,
  StepButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GeneralData from "views/Assets/edit/GeneralData.js";
import PassengerCar from "views/Assets/edit/PassengerCar.js";
import Products from "views/Products/Products.js";
import Financial from "views/Financial/Financial.js";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
    backgroundColor: blue[900],
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: "inline-block",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  gridContainer: {
    marginTop: "50px",
    paddingLeft: "0px",
    paddingRight: "0px",
  },
}));

function getSteps() {
  return ["Bunuri", "Produse", "Financiar", "Client", "Scoring", "Decizie"];
}

function getStepContent(step, props, classes) {
  switch (step) {
    case 0:
      return (
        <Grid container spacing={6} className={classes.gridContainer}>
          <Grid item xs={12} sm={12} md={12}>
            <GeneralData props={props} />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <PassengerCar props={props} />
          </Grid>
        </Grid>
      );
    case 1:
      return (
        <Grid container spacing={6} className={classes.gridContainer}>
          <Grid item xs={12} sm={12} md={12}>
            <Products props={props} />
          </Grid>
        </Grid>
      );
    case 2:
      return (
        <Grid container spacing={6} className={classes.gridContainer}>
          <Grid item xs={12} sm={12} md={12}>
            <Financial props={props} />
          </Grid>
        </Grid>
      );
    case 3:
      return "Step 4: Introduceti datele clientului!";
    case 4:
      return "Step 5: Calculeaza scoring!";
    case 5:
      return "Step 6: Se va lua decizia!";
    default:
      return "Unknown step";
  }
}

const StepperComponent = (props) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState(new Set());
  const [skipped, setSkipped] = useState(new Set());
  const steps = getSteps();

  const totalSteps = () => {
    return getSteps().length;
  };

  // const isStepOptional = (step) => {
  //   return step === 1;
  // };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  const skippedSteps = () => {
    return skipped.size;
  };

  const completedSteps = () => {
    return completed.size;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps() - skippedSteps();
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed
          // find the first step that has been completed
          steps.findIndex((step, i) => !completed.has(i))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
    // if (step === 1) {
    //   props.history.push("/admin/editOffer/products");
    // }

    // else if (step === 0) {
    //   props.history.push("/admin/editOffer/assets");
    // }
  };

  const handleComplete = () => {
    const newCompleted = new Set(completed);
    newCompleted.add(activeStep);
    setCompleted(newCompleted);

    /**
     * Sigh... it would be much nicer to replace the following if conditional with
     * `if (!this.allStepsComplete())` however state is not set when we do this,
     * thus we have to resort to not being very DRY.
     */
    if (completed.size !== totalSteps() - skippedSteps()) {
      handleNext();
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted(new Set());
    setSkipped(new Set());
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  function isStepComplete(step) {
    return completed.has(step);
  }

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const buttonProps = {};
          // if (isStepOptional(index)) {
          //   buttonProps.optional = (
          //     <Typography variant="caption">Optional</Typography>
          //   );
          // }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepButton
                onClick={handleStep(index)}
                completed={isStepComplete(index)}
                {...buttonProps}
              >
                {label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep, props, classes)}
            </Typography>
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
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
              {/* { isStepOptional(activeStep) &&!completed.has(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )} */}

              {activeStep !== steps.length &&
                (completed.has(activeStep) ? (
                  <Typography variant="caption" className={classes.completed}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleComplete}
                    className={classes.button}
                  >
                    {completedSteps() === totalSteps() - 1
                      ? "Finish"
                      : "Complete Step"}
                  </Button>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(StepperComponent);
