import React from "react";
import "../../../Offer.css";
import GeneralData from "./GeneralData.js";
import PassengerCar from "./PassengerCar.js";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
});

const Offer = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      direction="column"
      justify="center"
      alignItems="stretch"
    >
      <Grid item xs={12} sm={12} md={12}>
        <GeneralData props={props} />
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <PassengerCar props={props} />
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <Button
          variant="contained"
          color="primary"
          // onClick={() => props.history.goBack()}
        >
          Back
        </Button>
      </Grid>
    </Grid>
  );
};

export default Offer;
