import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/offerAsset";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import Header from "./Header";
import {
  Grid,
  IconButton,
  Paper,
  Typography,
  withStyles,
} from "@material-ui/core";
import { blue, green } from "@material-ui/core/colors";
import Moment from "react-moment";
import "moment-timezone";

const styles = (theme) => ({
  root: {
    flexGrow: 20,
    overflow: "hidden",
    padding: theme.spacing(0, 1),
  },
  editButton: {
    position: "absolute",
    right: "70px",
    padding: "0px",
    color: green[500],
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "47%",
    maxHeight: "47%",
  },
  information: {
    fontSize: 14,
    color: blue[900],
  },
  paper: {
    maxWidth: 3000,
    margin: `${theme.spacing(0.2)}px auto`, //latime intre "carduri"
    padding: theme.spacing(4),
  },
});

const administrator = "Administrator ";

const OfferList = ({ classes, ...props }) => {
  const [localState, setLocalState] = useState({
    imageUrl: "",
    isLoading: true,
  });

  useEffect(() => {
    props.fetchOffers();
    setLocalState({
      ...localState,
      isLoading: false,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.root}>
      <Header></Header>

      {!localState.isLoading && props.offerList.length > 0 ? (
        props.offerList.map((offer) => {
          const {
            imageUrl,
          } = offer.document.documentDetail.item.assetHierarchy;
          const { documentNumber } = offer.document;

          return (
            <Paper className={classes.paper} key={offer.leasingDocumentId}>
              <Grid container direction="column">
                <Grid container justify="center" alignItems="center">
                  <Grid item xs={4} alignItems="center" justify="center">
                    <Typography>
                      <img
                        className={classes.img}
                        alt="isn't available"
                        srcset={
                          process.env.PUBLIC_URL + "/images/cars/" + imageUrl
                        }
                      />
                    </Typography>
                  </Grid>

                  <Grid item xs={4}>
                    <Typography className={classes.information} variant="body2">
                      {"Numar oferta: "}
                      {documentNumber ? documentNumber : ""}
                    </Typography>

                    <Typography className={classes.information} variant="body2">
                      {"Data: "}
                      {
                        <Moment format="DD.MM.YYYY">
                          {offer.document.documentDate
                            ? offer.document.documentDate
                            : ""}
                        </Moment>
                      }
                    </Typography>

                    <Typography className={classes.information} variant="body2">
                      {"Canal vanzare: "}
                      {"Vanzari proprii" ? "Vanzari proprii" : ""}
                    </Typography>

                    <Typography className={classes.information} variant="body2">
                      {"Stare: "}
                      {"Elaborare oferta" ? "Elaborare oferta" : ""}
                    </Typography>

                    <Typography className={classes.information} variant="body2">
                      {"Utilizator: "}
                      {administrator.concat(administrator)}
                    </Typography>
                  </Grid>

                  <Grid item xs={4}>
                    <Typography className={classes.information} variant="body2">
                      {"Client: "}
                      {offer.partner.firstName + " " + offer.partner.lastName}
                    </Typography>

                    <Typography className={classes.information} variant="body2">
                      {"Tip Contract: "}
                      {offer.product.productName}
                    </Typography>

                    <Typography className={classes.information} variant="body2">
                      {"Valoare finantata: "}
                      {offer.amount}
                      {offer.currency.symbol}
                    </Typography>

                    <Typography className={classes.information} variant="body2">
                      {"Comision: "}
                      {offer.commission}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid container xs={12}>
                <Grid item xs={9}></Grid>
                <Grid item xs={3}>
                  <Link
                    to={{
                      pathname: "/admin/editOffer/assets",
                      search:
                        "leasingDocumentId=" +
                        offer.leasingDocumentId.toString(),
                      state: {
                        offerToEdit: offer,
                      },
                    }}
                  >
                    <IconButton className={classes.editButton}>
                      <EditIcon size="medium" />
                    </IconButton>
                  </Link>
                </Grid>
              </Grid>
            </Paper>
          );
        })
      ) : (
        <div className={"loader-offerList"}></div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  offerList: state.offers.list,
});

const mapActionToProps = {
  fetchOffers: actions.fetchOffers,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(OfferList));
