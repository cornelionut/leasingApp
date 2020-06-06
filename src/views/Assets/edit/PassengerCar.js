import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import * as actions from "../../../actions/offerAsset";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { withRouter } from "react-router";
import * as queryString from "query-string";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Fab,
  Grid,
  Button,
  IconButton,
  Typography,
  Collapse,
  InputLabel,
  NativeSelect,
  Select,
  withStyles,
} from "@material-ui/core";
import DirectionsCarRoundedIcon from "@material-ui/icons/DirectionsCarRounded";
import { blue } from "@material-ui/core/colors";

const styles = (theme) => ({
  root: {
    minWidth: 200,
  },
  cardContent: {
    textAlign: "center",
    marginLeft: "40px",
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
  fontSizeTypography: {
    fontSize: 16,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "80%",
    maxHeight: "80%",
  },
  blue900: {
    backgroundColor: blue[900],
  },
  title: {
    fontSize: 18,
  },
});

const PassengerCar = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState({
    isLoading: true,
  });

  const {
    classes,
    assetTypes,
    carMakes,
    carModels,
    carVersions,
    leasingDocument,
  } = props;

  const leasingDocumentIdFromUrl = queryString.parse(props.location.search, {
    parseNumbers: true,
  });

  const [localState, setLocalState] = useState({
    assetType: "",
    carMake: "",
    name: "carMake",

    localAssetTypes: [],
    carMakes: [],
    carModels: [],
    carVersions: [],
    leasingDocument: [],
    imageUrl: "",
  });

  // the right lifecycle method to fetch data
  useEffect(() => {
    props.fetchAssetTypes();
    setIsLoading(false);
    setLocalState({
      ...localState,
      localAssetTypes: assetTypes,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    props.fetchCarMakes();
    setIsLoading(false);
    setLocalState({
      ...localState,
      carMakes: carMakes,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    props.fetchCarModels();
    setIsLoading(false);
    setLocalState({
      ...localState,
      carModels: carModels,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    props.fetchCarVersions();
    setIsLoading(false);
    setLocalState({
      ...localState,
      carVersions: carVersions,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    props.fetchLeasingDocument(leasingDocumentIdFromUrl.leasingDocumentId);
    setIsLoading(false);
    setLocalState({
      ...localState,
      leasingDocument: leasingDocument,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   setLocalState({
  //     ...localState,
  //     imageUrl:
  //       leasingDocument[0].document.documentDetail.item.assetHierarchy.imageUrl,
  //   });

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [localState.imageUrl]);

  const handleChangeAssetTypes = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setLocalState({
      ...localState,
      [name]: value,
      carMakes: carMakes.filter(
        (carMake) => carMake.typeId === -2 && carMake.parentId === Number(value)
      ),
    });
  };

  const handleChangeCarMake = (event) => {
    const name = event.target.name;
    setLocalState({
      ...localState,
      [name]: event.target.value,
      carModels: carModels.filter(
        (carModel) =>
          carModel.carMake === event.currentTarget.text &&
          carModel.typeId === -3
      ),
    });
  };

  const handleChangeCarModel = (event) => {
    const name = event.target.name;
    const carModelName = event.currentTarget.text;
    const selectedCarModel = carModels.filter(
      (carModel) => carModel.name === carModelName
    );

    setLocalState({
      ...localState,
      [name]: event.target.value,
      carVersions: carVersions.filter(
        (carVersion) =>
          carVersion.parentId === selectedCarModel[0].assetHierarchyId
      ),
    });
  };

  const handleChangeCarVersion = (event) => {
    const name = event.target.name;

    setLocalState({
      ...localState,
      [name]: event.target.value,
      imageUrl: "bmw-m135i.png",
    });
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return !isLoading ? (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        avatar={
          <Fab size="small" color="primary" className={classes.blue900}>
            <DirectionsCarRoundedIcon></DirectionsCarRoundedIcon>
          </Fab>
        }
        subheader={
          <Typography className={classes.title} variant="body2">
            Autoturism
          </Typography>
        }
      />

      <CardContent className={classes.cardContent}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={3}>
            <Typography variant="body2" className={classes.fontSizeTypography}>
              Bunuri finantate:
              {leasingDocument !== undefined && leasingDocument.length > 0
                ? leasingDocument[0].document.documentDetail.item.assetHierarchy
                    .carMake
                : ""}
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography variant="body2" className={classes.fontSizeTypography}>
              Pret de achizitie fara TVA:
              {leasingDocument !== undefined && leasingDocument.length > 0
                ? leasingDocument[0].document.documentDetail.price +
                  "" +
                  leasingDocument[0].currency.symbol
                : ""}
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography variant="body2" className={classes.fontSizeTypography}>
              Pret de achizitie cu TVA:
              {leasingDocument !== undefined && leasingDocument.length > 0
                ? leasingDocument[0].document.documentDetail.totalValue
                : ""}
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography variant="body2">
              <img
                className={classes.img}
                alt="isn't available"
                src={
                  leasingDocument.length > 0
                    ? process.env.PUBLIC_URL +
                      "/images/cars/" +
                      leasingDocument[0].document.documentDetail.item
                        .assetHierarchy.imageUrl
                    : ""
                }
              />
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions>
        <IconButton
          className={clsx(classes.expand, { [classes.expandOpen]: expanded })}
          onClick={handleExpandClick}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.cardContent}>
          <Grid container spacing={2} alignItems="center">
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={3}>
                <InputLabel shrink htmlFor="assetType-native-label-placeholder">
                  Categorie autoturisme*
                </InputLabel>
                <NativeSelect
                  value={localState.assetType || ""}
                  onChange={handleChangeAssetTypes}
                  inputProps={{
                    name: "assetType",
                    id: "assetType-native-label-placeholder",
                  }}
                >
                  {assetTypes.length > 0 &&
                    assetTypes.map((assetType, index) => (
                      <option
                        key={assetType.assetHierarchyId}
                        value={assetType.assetHierarchyId}
                      >
                        {assetType.name}
                      </option>
                    ))}
                </NativeSelect>
              </Grid>

              <Grid item xs={3}>
                <InputLabel shrink htmlFor="carMake-native-label-placeholder">
                  Marca*
                </InputLabel>
                <Select
                  value={localState.carMake || ""}
                  onChange={handleChangeCarMake}
                  inputProps={{
                    name: "carMake",
                    id: "carMake-native-label-placeholder",
                  }}
                >
                  {localState.carMakes.length > 0 &&
                    localState.carMakes.map((carMake) => (
                      <option
                        key={carMake.assetHierarchyId}
                        value={carMake.assetHierarchyId}
                      >
                        {carMake.name}
                      </option>
                    ))}
                </Select>
              </Grid>

              <Grid item xs={3}>
                <InputLabel shrink htmlFor="carModel-native-label-placeholder">
                  Model*
                </InputLabel>
                <Select
                  value={localState.carModel || ""}
                  onChange={handleChangeCarModel}
                  inputProps={{
                    name: "carModel",
                    id: "carModel-native-label-placeholder",
                  }}
                >
                  {localState.carModels.length > 0 &&
                    localState.carModels.map((carModel, index) => (
                      <option
                        key={carModel.assetHierarchyId}
                        value={carModel.assetHierarchyId}
                      >
                        {carModel.name}
                      </option>
                    ))}
                </Select>
              </Grid>

              <Grid item xs={3}>
                <InputLabel
                  shrink
                  htmlFor="carVersion-native-label-placeholder"
                >
                  Versiune*
                </InputLabel>
                <Select
                  value={localState.carVersion || ""}
                  onChange={handleChangeCarVersion}
                  inputProps={{
                    name: "carVersion",
                    id: "carVersion-native-label-placeholder",
                  }}
                >
                  {localState.carVersions.length > 0 &&
                    localState.carVersions.map((carVersion, index) => (
                      <option key={index} value={carVersion.name}>
                        {carVersion.name}
                      </option>
                    ))}
                </Select>
              </Grid>
            </Grid>

            <Grid container item xs={12} spacing={3}>
              <Grid item xs={9}></Grid>

              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.blue900}
                >
                  Salvare
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  ) : (
    <div className={"loader-offerList"}></div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  assetTypes: state.assetTypes.list,
  carMakes: state.carMakes.list,
  carModels: state.carModels.list,
  carVersions: state.carVersions.list,
  isLoading: state.isLoading,
  leasingDocument: state.leasingDocument.list,
});

const mapActionToProps = {
  fetchAssetTypes: actions.fetchAssetTypes,
  fetchCarMakes: actions.fetchCarMakes,
  fetchCarModels: actions.fetchCarModels,
  fetchCarVersions: actions.fetchCarVersions,
  fetchLeasingDocument: actions.fetchLeasingDocument,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(withRouter(withStyles(styles)(PassengerCar)));
