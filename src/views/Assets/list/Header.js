import React from "react";
import { Grid } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

function Header() {
  return (
    <header>
      <Grid container xs={12}>
        <Grid item xs={11}></Grid>
        <Grid item xs={1}>
          <Fab size="small" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    </header>
  );
}

export default Header;
