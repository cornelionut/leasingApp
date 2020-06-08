import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { blue } from "@material-ui/core/colors";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Collapse,
  Fab,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  NativeSelect,
  TextField,
  Typography,
  Switch,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import "moment-timezone";

const useStyles = makeStyles((theme) => ({
  blue900: {
    backgroundColor: blue[900],
  },
  btnSave: {
    marginTop: "25px",
    backgroundColor: blue[900],
  },
  cardContent: {
    marginLeft: "60px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  expand: {
    marginRight: "15px",
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  formControl: {
    minWidth: 190,
  },
  icon: {
    backgroundColor: blue[900],
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  textFieldDatePicker: {
    marginLeft: theme.spacing(0.1),
    marginRight: theme.spacing(0.1),
    width: 180,
  },
  title: {
    fontSize: 19,
  },
}));

export default function Client() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(true);
  // const [selectedDate, setSelectedDate] = useState(new Date());
  const [state, setState] = useState({
    age: "",
    name: "hai",
    checked: true,
    checkedResident: false,
  });
  // var moment = require("moment");

  // var formatedDate = moment(selectedDate).format("yyyy-mm-dd");

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardActions disableSpacing>
        <CardHeader
          avatar={
            <Fab size="small" color="primary" className={classes.icon}>
              <AccountBoxIcon></AccountBoxIcon>
            </Fab>
          }
          subheader={
            <Typography className={classes.title} variant="body2">
              CLIENT
            </Typography>
          }
        />

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

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.cardContent}>
          <Grid container direction="column">
            <Grid container direction="row">
              <Grid xs={3}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="name-native-disabled">
                    Tip partener
                  </InputLabel>
                  <NativeSelect
                    value={state.name}
                    onChange={handleChange}
                    inputProps={{
                      name: "name",
                      id: "name-native-disabled",
                    }}
                  >
                    <option value={10}>Persoana fizica</option>
                    <option value={20}>Persoana juridica</option>
                  </NativeSelect>
                </FormControl>
              </Grid>

              <Grid xs={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checked}
                      onChange={handleChange}
                      name="checked"
                      color="primary"
                    />
                  }
                  label="Clientul este de acord cu prelucrarea datelor cu caracter personal"
                />
              </Grid>
              <Grid xs={3}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.checkedResidend}
                      onChange={handleChange}
                      color="primary"
                      name="checkedResident"
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                  }
                  label="Nerezident"
                />
              </Grid>
            </Grid>

            <Grid container direction="row" style={{ marginTop: 20 }}>
              <Grid xs={3}>
                <TextField label="CNP *" defaultValue="1950817211185" />
              </Grid>

              <Grid xs={3}>
                <TextField label="Serie si nr *" defaultValue="sz975032" />
              </Grid>

              <Grid xs={3}>
                <TextField label="Nume *" defaultValue="Nume" />
              </Grid>

              <Grid xs={3}>
                <TextField label="Prenume *" defaultValue="Prenume" />
              </Grid>
            </Grid>

            <Grid container direction="row" style={{ marginTop: 20 }}>
              <Grid xs={6}>
                <FormControl style={{ minWidth: 410 }} disabled>
                  <TextField label="Emis de *" defaultValue="SPCLEP" />
                </FormControl>
              </Grid>

              <Grid xs={3}>
                <TextField
                  id="date"
                  label="Emis la"
                  type="date"
                  defaultValue="2020-06-07"
                  className={classes.textFieldDatePicker}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>

              <Grid xs={3}>
                <TextField
                  id="date"
                  label="Valabil pana la"
                  type="date"
                  defaultValue="2020-06-08"
                  className={classes.textFieldDatePicker}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>

        <CardContent className={classes.cardContent}>
          <Grid container direction="column">
            <Grid
              container
              direction="row"
              style={{ marginBottom: 20, marginTop: 30 }}
            >
              <Typography className={classes.title} variant="body2">
                ADRESA DE DOMICILIU
              </Typography>
            </Grid>

            <Grid container direction="row">
              <Grid xs={6}>
                <FormControl style={{ minWidth: 410 }}>
                  <InputLabel htmlFor="name-native-disabled">Tara *</InputLabel>
                  <NativeSelect
                    value={state.name}
                    onChange={handleChange}
                    inputProps={{
                      name: "name",
                      id: "name-native-disabled",
                    }}
                  >
                    <option value={10}>ROMANIA</option>
                    <option value={20}>FRANTA</option>
                  </NativeSelect>
                </FormControl>
              </Grid>

              <Grid xs={6}>
                <FormControl style={{ minWidth: 410 }}>
                  <InputLabel htmlFor="name-native-disabled">
                    Judet *
                  </InputLabel>
                  <NativeSelect
                    value={state.name}
                    onChange={handleChange}
                    inputProps={{
                      name: "name",
                      id: "name-native-disabled",
                    }}
                  >
                    <option value={10}>ARGES</option>
                    <option value={20}>IALOMITA</option>
                  </NativeSelect>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container direction="row" style={{ marginTop: 20 }}>
              <Grid xs={6}>
                <FormControl style={{ minWidth: 410 }}>
                  <InputLabel htmlFor="name-native-disabled">
                    Judet *
                  </InputLabel>
                  <NativeSelect
                    value={state.name}
                    onChange={handleChange}
                    inputProps={{
                      name: "name",
                      id: "name-native-disabled",
                    }}
                  >
                    <option value={10}>ARGES</option>
                    <option value={20}>IALOMITA</option>
                  </NativeSelect>
                </FormControl>
              </Grid>

              <Grid xs={6}>
                <TextField
                  label="Adresa *"
                  defaultValue="Bd Chimiei"
                  style={{ minWidth: 410 }}
                />
              </Grid>
            </Grid>

            <Grid container direction="row" style={{ marginTop: 20 }}>
              <Grid xs={6}>
                <TextField
                  label="Cod postal"
                  defaultValue=""
                  style={{ minWidth: 410 }}
                />
              </Grid>

              <Grid xs={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checked}
                      onChange={handleChange}
                      name="checked"
                      color="primary"
                    />
                  }
                  label="Adresa de corespondenta"
                />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>

        <CardContent className={classes.cardContent}>
          <Grid container direction="column">
            <Grid container direction="row" style={{ marginTop: 30 }}>
              <Typography className={classes.title} variant="body2">
                DATE DE CONTACT
              </Typography>
            </Grid>

            <Grid container direction="row">
              <Grid xs={6}>
                <TextField
                  label="Telefon mobil *"
                  defaultValue=""
                  style={{ minWidth: 410 }}
                />
              </Grid>
              <Grid xs={6}>
                <TextField
                  label="Email *"
                  defaultValue=""
                  style={{ minWidth: 410 }}
                />
              </Grid>
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
                  className={classes.btnSave}
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
