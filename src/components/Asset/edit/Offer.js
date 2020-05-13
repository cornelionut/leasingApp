import React from "react";
import "../../../Offer.css";
import AssetCard from "../edit/AssetCard.js";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
});

export default function Offer() {
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
        <AssetCard />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <AssetCard />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <AssetCard />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <AssetCard />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <AssetCard />
      </Grid>
    </Grid>
  );
}
