import React from "react";
import "../../../Offer.css";
import GeneralData from "./GeneralData.js";
import StepperComponent from "../../Stepper/Stepper.js";
import PassengerCar from "./PassengerCar.js";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import "./passengerCars.css";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  btnForward: {
    position: "absolute",
    right: "50px",
  },
  btnBack: {
    position: "absolute",
    left: "50px",
  },
});

const Offer = (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      // direction="column"
      // justify="center"
      // alignItems="stretch"
    >
      <Grid item xs={12}>
        <StepperComponent></StepperComponent>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <GeneralData props={props} />
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <PassengerCar props={props} />
      </Grid>

      <Grid
        container
        //spacing={4}
        // className={classes.gridContainer}
        // alignItems="stretch"
      >
        <Grid item xs={9}>
          <Button
            className={classes.btnBack}
            variant="contained"
            color="primary"
            onClick={() => props.history.goBack()}
          >
            Inapoi
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Link to={"/admin/editOffer/products"}>
            <Button
              className={classes.btnForward}
              variant="contained"
              color="primary"
              //   onClick={() => props.history.goForward()}
            >
              Inainte
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Offer;
