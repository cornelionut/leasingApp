import React from "react";
import { Grid } from "@material-ui/core";
import ScoringCard from "./ScoringCard.js";

const Scoring = (props) => {
  return (
    <Grid container spacing={6} direction="column">
      <Grid item xs={12}>
        <ScoringCard></ScoringCard>
      </Grid>
    </Grid>
  );
};

export default Scoring;
