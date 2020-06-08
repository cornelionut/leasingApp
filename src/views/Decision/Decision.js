import React from "react";
import { Grid } from "@material-ui/core";
import DecisionSummary from "./DecisionSummary.js";

const Decision = (props) => {
  return (
    <Grid container spacing={6} direction="column">
      <Grid item xs={12}>
        <DecisionSummary></DecisionSummary>
      </Grid>
    </Grid>
  );
};

export default Decision;
