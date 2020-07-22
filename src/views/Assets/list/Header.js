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
      <Grid container>
        <Grid item xs={11}></Grid>
        <Grid item xs={1}>
          <Fab size="small" color="primary" className={classes.icon}>
            {/* <Link
              to={{
                pathname: isAdmin
                  ? "/admin/editOffer/assets"
                  : "/dealer/editOffer/assets",
                // search:
                //   "leasingDocumentId=" +
                //   offer.leasingDocumentId.toString(),
                // state: {
                //   offerToEdit: offer,
                // },
              }}
            > */}
            <AddIcon />
            {/* </Link> */}
          </Fab>
        </Grid>
      </Grid>
    </header>
  );
}

export default Header;
