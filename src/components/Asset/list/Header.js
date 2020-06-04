import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Grid, IconButton } from "@material-ui/core";
import "./Header.css";

function Header() {
  return (
    <header>
      <Grid container xs={12}>
        <Grid item xs={11}></Grid>
        <Grid item xs={1}>
          <IconButton className="addButton">
            <AddCircleIcon color="primary" className="addButton" />
          </IconButton>
        </Grid>
      </Grid>
    </header>
  );
}

export default Header;
