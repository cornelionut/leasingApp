import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Grid, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  addButton: {
    // marginLeft: "auto",
    left: "900px",
  },
});

function Header() {
  const classes = useStyles();

  return (
    <header>
      <h3> Lista oferte</h3>
      <Grid>
        <IconButton className={classes.addButton}>
          <AddCircleIcon color="primary" />
        </IconButton>
      </Grid>
    </header>
  );
}

export default Header;
