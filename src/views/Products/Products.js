import React, { useEffect } from "react";
import { Grid, withStyles } from "@material-ui/core";
import PeriodCard from "views/Products/PeriodCard.js";
import FinancialLeasing from "views/Products/FinancialLeasing.js";
import OperationalLeasing from "views/Products/OperationalLeasing.js";
import StandardOperationalLeasing from "views/Products/StandardOperationalLeasing.js";

const styles = (theme) => ({
  root: {
    minWidth: 200,
  },
  title: {
    fontSize: 14,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
});

const Products = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <PeriodCard></PeriodCard>
      </Grid>

      <Grid item xs={12}>
        <Grid
          container
          spacing={6}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={4}>
            <FinancialLeasing></FinancialLeasing>
          </Grid>
          <Grid item xs={4}>
            <OperationalLeasing></OperationalLeasing>
          </Grid>
          <Grid item xs={4}>
            <StandardOperationalLeasing></StandardOperationalLeasing>
          </Grid>
        </Grid>

        {/* <Grid item xs={12}>
        <Button
          className={classes.btnBack}
          variant="contained"
          color="primary"
          onClick={() => props.history.goBack()}
        >
          Inapoi
        </Button>
      </Grid> */}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Products);
