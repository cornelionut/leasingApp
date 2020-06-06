import React from "react";
import StepperComponent from "../../../components/Stepper/Stepper.js";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";
import "../../../Offer.css";
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

const Assets = (props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.gridContainer}>
      <Grid item xs={12}>
        <StepperComponent props={props}></StepperComponent>
      </Grid>

      {/* <Grid
        container
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
      </Grid> */}
    </Grid>
  );
};

export default Assets;
