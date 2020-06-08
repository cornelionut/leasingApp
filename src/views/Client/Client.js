import React from "react";
import { Grid } from "@material-ui/core";
import ClientData from "./ClientData.js";

const Client = (props) => {
  return (
    <Grid container spacing={6} direction="column">
      <Grid item xs={12}>
        <ClientData></ClientData>
      </Grid>
    </Grid>
  );
};

export default Client;
