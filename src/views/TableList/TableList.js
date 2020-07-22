import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Stare oferte</h4>
            <p className={classes.cardCategoryWhite}></p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Nume client", "Oras", "Stare", "Valoare"]}
              tableData={[
                ["Cornel Baciu", "Iasi", "Aprobat", "$36,738"],
                ["Irina Hobeanu", "Bucuresti", "Respins", "$23,789"],
                ["Warren Buffet", "Cluj", "Respins", "$56,142"],
                ["Jeff Bezos", "Brasov", "Aprobat", "$38,735"],
                ["Bill Gates", "Craiova", "Respins", "$63,542"],
                ["Mason Porter", "Timisoara", "Aprobat", "$78,615"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>Contracte generate</h4>
            <p className={classes.cardCategoryWhite}></p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Nume client", "City", "Contract"]}
              tableData={[
                ["1", "Bill Gates", "$36,738", "Generat"],
                ["2", "Irina Hobeanu", "$23,789"],
                ["3", "Jeff Bezos", "$56,142", "Spre aprobare"],
                ["4", "Warren Buffet", "$38,735", "Respins"],
                ["5", "Doris Greene", "$63,542", "Generat"],
                ["6", "Cornel Baciu", "$78,615", "Semnat"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
