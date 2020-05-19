import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/offerAsset";
import EditIcon from "@material-ui/icons/Edit";
import { green } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import Header from "../list/Header";
import Offer from "../edit/Offer";
import {
  Grid,
  IconButton,
  Paper,
  ButtonBase,
  withStyles,
} from "@material-ui/core";
import Moment from "react-moment";
import "moment-timezone";

const styles = (theme) => ({
  root: {
    flexGrow: 20,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  image: {
    width: "230px",
    height: "230px",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  paper: {
    maxWidth: 3000,
    margin: `${theme.spacing(0.2)}px auto`,
    padding: theme.spacing(3),
  },
  paperButtonsBar: {
    maxWidth: 3000,
    margin: `${theme.spacing(0)}px auto`,
    padding: theme.spacing(0),
  },
  editButton: {
    // position: "absolute",
    //right: "0px",
    // marginLeft: "auto",
    left: "900px",
    // float: "right",
    // align: "right",
    // padding: "10px",
    color: green[500],
    //fontSize: "100px",
  },
});

const administrator = "Administrator ";

const OfferList = ({ classes, ...props }) => {
  const [showEditOffer, setShowEditOffer] = useState(false);
  const [offerToEdit, setOfferToEdit] = useState("");

  useEffect(() => {
    props.fetchOffers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showEditOffer]);

  const displayEditOffer = (id) => {
    setShowEditOffer(!showEditOffer);
    const index = props.offerList.findIndex((offer) => {
      return (offer.leasingDocumentId = id);
    });
    const offerToEdit = Object.assign({}, props.offerList[index]);
    setOfferToEdit(offerToEdit);
  };

  return (
    <div className={classes.root}>
      <Header></Header>

      {!showEditOffer &&
        props.offerList.map((offer, index) => (
          <Paper className={classes.paper} key={offer.leasingDocumentId}>
            {console.log(offer.leasingDocumentId)}
            <Grid
              container
              spacing={2}
              // className={classes.gridContainer}
              //  direction="column"
              //  justify="center"
              alignItems="center"
            >
              <Grid item xs={4}>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="isn't available"
                    src={
                      process.env.PUBLIC_URL +
                      "/images/cars/" +
                      offer.document.documentDetail.item.assetHierarchy.imageUrl
                    }
                  />
                </ButtonBase>
              </Grid>

              <Grid item xs={4}>
                <div>
                  <div>
                    {"Numar oferta: "}
                    <label>
                      {offer.document.documentNumber
                        ? offer.document.documentNumber
                        : ""}
                    </label>
                  </div>
                  <div>
                    {"Data: "}
                    <label>
                      <Moment format="DD.MM.YYYY">
                        {offer.document.documentDate}
                      </Moment>
                    </label>
                  </div>
                  <div>
                    {"Canal vanzare: "}
                    <label>Vanzari proprii</label>
                  </div>
                  <div>
                    {"Stare: "}
                    <label> Elaborare oferta</label>
                  </div>
                  <div>
                    {"Utilizator: "}
                    <label>{administrator.concat(administrator)}</label>
                  </div>
                </div>
              </Grid>

              <Grid item xs={4}>
                <div>
                  <div>
                    {"Client: "}
                    <label>
                      {offer.partner.firstName + " " + offer.partner.lastName}
                    </label>
                  </div>

                  <div>
                    {"Tip Contract: "}
                    <label>{offer.product.productName}</label>
                  </div>

                  <div>
                    {"Valoare finantata: "}
                    <label> {offer.amount}</label> {offer.currency.symbol}
                    {/* {new Intl.NumberFormat("en-GB", {
                      style: "currency",
                      currency: "GBP",
                    }).format(offer.amount)} */}
                  </div>

                  <div>
                    {"Comision: "}
                    <label> {offer.commission}</label>
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <IconButton
                component={Link}
                pathname="/admin/editOffer"
                className={classes.editButton}
                onClick={() => displayEditOffer(offer.leasingDocumentId)}
              >
                <EditIcon></EditIcon>
              </IconButton>
            </Grid>
          </Paper>
        ))}
      {showEditOffer && <Offer props={props} offerToEdit={offerToEdit} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  offerList: state.offers.list, //offersList este din reducer
});

const mapActionToProps = {
  fetchOffers: actions.fetchOffers,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(OfferList));
