import React from "react";
import FinancialStructure from "../Financial/FinancialStructure.js";
import { Grid } from "@material-ui/core";
import AdditionalData from "./AdditionalData.js";

const Financial = (props) => {
  return (
    <Grid container spacing={6} direction="column">
      <Grid item xs={12}>
        <FinancialStructure></FinancialStructure>
      </Grid>

      <Grid item xs={12}>
        <AdditionalData></AdditionalData>
      </Grid>
    </Grid>
  );
};

export default Financial;
