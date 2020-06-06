import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { blue } from "@material-ui/core/colors";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  Grid,
  IconButton,
  TextField,
  Tooltip,
  Typography,
  Slider,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  advancePaymentLabel: {
    fontSize: 13,
    marginBottom: "16px",
  },
  blue900: {
    backgroundColor: blue[900],
  },
  cardContent: {
    marginLeft: "60px",
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
  title: {
    fontSize: 19,
  },
  marginBottom: {
    marginBottom: "30px",
  },
  marginTopAdvancePaymentGrid: {
    marginTop: "38px",
  },
  marginTopResidualValueGrid: {
    marginTop: "20px",
  },
}));

export default function FinancialStructure() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }

  function valuetext(value) {
    return `${value}°C`;
  }

  function FormRow1() {
    return (
      <React.Fragment>
        <Grid item xs={6}>
          <Typography variant="body2">
            Produs financiar: {"LEASING FINANCIAR - PF"}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">
            Tip contract: {"Leasing Financiar"}
          </Typography>
        </Grid>
      </React.Fragment>
    );
  }

  function FormRow2() {
    return (
      <React.Fragment>
        <Grid item xs={6}>
          <Typography variant="body2">Avans (35%) {"19.250,00 RON"}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">Procent dobanda: {"10%"}</Typography>
        </Grid>
      </React.Fragment>
    );
  }

  function FormRow3() {
    return (
      <React.Fragment>
        <Grid item xs={6}>
          <Typography variant="body2">
            Valoare finantata (65%): {"37.750,00 RON"}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">
            Tip scadentar: {"Rambursare in rate constante"}
          </Typography>
        </Grid>
      </React.Fragment>
    );
  }

  function FormRow4() {
    return (
      <React.Fragment>
        <Grid item xs={6}>
          <Typography variant="body2">
            Valoare reziduala(37.64%): {"20.702,00 RON"}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">Perioada (luni): {"30"}</Typography>
        </Grid>
      </React.Fragment>
    );
  }

  const marksAdvancePayment = [
    {
      value: 10,
      label: "10",
    },
    {
      value: 50,
      label: "50",
    },
  ];

  return (
    <Card>
      <CardHeader
        avatar={<Avatar className={classes.blue900}>{"€"}</Avatar>}
        subheader={
          <Typography className={classes.title} variant="body2">
            STRUCTURA DE FINANTARE
          </Typography>
        }
      />

      <CardContent className={classes.cardContent}>
        <Grid container spacing={1}>
          <Grid container item xs={12}>
            <FormRow1></FormRow1>
          </Grid>

          <Grid container item xs={12}>
            <FormRow2></FormRow2>
          </Grid>

          <Grid container item xs={12}>
            <FormRow3></FormRow3>
          </Grid>

          <Grid container item xs={12}>
            <FormRow4></FormRow4>
          </Grid>

          <Grid container item xs={12}>
            <Grid item xs={9}></Grid>
            <Grid item xs={3}>
              <CardActions disableSpacing>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.cardContent}>
          <Grid container direction="column">
            <Grid
              container
              xs={12}
              direction="row"
              className={classes.marginBottom}
            >
              <Grid xs={6}>
                <TextField
                  disabled
                  label="Produs financiar"
                  defaultValue="LEASING FINANCIAR - PF"
                  style={{ width: 410 }}
                />
              </Grid>
              <Grid xs={3}>
                <TextField disabled label="Moneda" defaultValue="RON" />
              </Grid>
              <Grid xs={3}>
                <TextField
                  disabled
                  label="Tip contract"
                  defaultValue="Leasing financiar"
                />
              </Grid>
            </Grid>

            <Grid
              container
              xs={12}
              direction="row"
              className={classes.marginBottom}
            >
              <Grid xs={3}>
                <TextField disabled label="Comision" defaultValue="20.702,00" />
              </Grid>

              <Grid xs={3}>
                <TextField
                  disabled
                  label="Pret achizitie total"
                  defaultValue="55.000,00"
                />
              </Grid>

              <Grid xs={3}>
                <TextField
                  disabled
                  label="Tip dobanda"
                  defaultValue="variabila"
                />
              </Grid>

              <Grid xs={3}>
                <TextField label="Procent dobanda" defaultValue="10,00" />
              </Grid>
            </Grid>

            <Grid
              container
              spacing={5}
              direction="row"
              alignItems="center"
              justify="space-between"
              className={classes.marginBottom}
            >
              <Grid item xs={3} className={classes.marginTopAdvancePaymentGrid}>
                <Typography className={classes.advancePaymentLabel}>
                  Avans(%)*
                </Typography>
                <Slider
                  ValueLabelComponent={ValueLabelComponent}
                  defaultValue={25}
                  min={10.0}
                  step={5.0}
                  max={50.0}
                  marks={marksAdvancePayment}
                />
              </Grid>

              <Grid item xs={3}>
                <TextField label="Avans*" defaultValue="55.000,00" />
              </Grid>

              <Grid xs={3}>
                <TextField label="Valoare finantata(%)" defaultValue="65,00" />
              </Grid>

              <Grid xs={3}>
                <TextField
                  disabled
                  label="Valoare finantata"
                  defaultValue="10,00"
                />
              </Grid>
            </Grid>

            <Grid
              container
              spacing={5}
              direction="row"
              alignItems="center"
              justify="space-between"
              className={classes.marginBottom}
            >
              <Grid item xs={3} className={classes.marginTopResidualValueGrid}>
                <Typography className={classes.advancePaymentLabel}>
                  Perioada*
                </Typography>
                <Slider
                  min={12}
                  max={60}
                  step={1}
                  defaultValue={24}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider-always"
                  valueLabelDisplay="on"
                />
              </Grid>

              <Grid item xs={3} className={classes.marginTopResidualValueGrid}>
                <Typography className={classes.advancePaymentLabel}>
                  Valoare reziduala(%)*
                </Typography>
                <Slider
                  max={37.64}
                  defaultValue={20}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider-always"
                  valueLabelDisplay="on"
                />
              </Grid>

              <Grid xs={3}>
                <TextField
                  disabled
                  label="Valoare reziduala"
                  defaultValue="20.702,00"
                />
              </Grid>

              <Grid xs={3}></Grid>
            </Grid>

            <Grid
              container
              spacing={5}
              direction="row"
              alignItems="center"
              justify="space-between"
            >
              <Grid item xs={3}>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.blue900}
                >
                  SALVEAZA
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
