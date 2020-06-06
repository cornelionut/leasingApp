import React from "react";
import { Fab, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { blue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  icon: {
    backgroundColor: blue[900],
  },
});

function Header() {
  const classes = useStyle();
  return (
    <header>
      <Grid container xs={12}>
        <Grid item xs={11}></Grid>
        <Grid item xs={1}>
          <Fab size="small" color="primary" className={classes.icon}>
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    </header>
  );
}

export default Header;
