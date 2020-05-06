import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/offerAsset";
import {
  Grid,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Table,
  TableBody,
  withStyles,
} from "@material-ui/core"; //material-ui are pachete pentru componente ca input, checkbox,table etc.
//import OfferAsset from "./OfferAsset";
import ClientForm from "./ClientForm";

const styles = (theme) => ({
  root: {
    "& .MuiTableCell-head": {
      fontSize: "1.25rem",
    },
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
});
//const {classes, props} = props;

const OfferAssetList = ({ classes, ...props }) => {
  //const { fetchAllOfferAssets } = useState(props);

  // //callback function called when the value of X is changed
  useEffect(() => {
    props.fetchAllOfferAssets();
  }, []); //alternative for componentDidMount

  // if pentru verificare props. Daca e gol afisam un mesaj
  return (
    <Paper className={classes.paper} elevation={3}>
      <Grid container>
        <Grid item xs={6}>
          <ClientForm />
        </Grid>

        <Grid item xs={6}>
          <TableContainer>
            <Table>
              <TableHead className={classes.root}>
                <TableRow>
                  {/* <TableCell>IsSH</TableCell>
                                    <TableCell>KmParcursi</TableCell>
                                    <TableCell>Marca</TableCell>
                                    <TableCell>Model</TableCell>
                                    <TableCell>Caroserie</TableCell>
                                    <TableCell>Versiune</TableCell> */}

                  <TableCell>TipAsset(PassengerCar or Commercial)</TableCell>
                  <TableCell>AnSiLunaFabricatie</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.offerAssetList.map((record, index) => {
                  // map are o functie de callback
                  // key va fi diferit pentru fiecare rand
                  return (
                    <TableRow key={index} hover>
                      <TableCell>{record.name}</TableCell>
                      <TableCell>{record.validFrom}</TableCell>
                      <TableCell>{record.validTo}</TableCell>
                      <TableCell>{record.imageUrl}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Paper>
  );
};

//  offerAsset este un obiect cu date (lista) din reducer (export offerAsset)
//  aici am mapat datele intoarse de reducer la offerAssetList
const mapStateToProps = (state) => ({
  offerAssetList: state.offerAsset.list,
});

const mapActionToProps = {
  fetchAllOfferAssets: actions.fetchAll,
};

//  connect este o functie care returneaza o alta functie a carei parametru componenta
//  pentru functia connect vom trimite 2 parametrii (unul care mapeaza state to props si altul care mapeaza action to props)
export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(OfferAssetList));
