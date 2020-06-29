import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { blue } from "@material-ui/core/colors";
import MomentUtils from "@date-io/moment";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  NativeSelect,
  TextField,
  Typography,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  blue900: {
    backgroundColor: blue[900],
  },
  cardContent: {
    marginLeft: "60px",
    marginRight: "10px",
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
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  title: {
    fontSize: 19,
  },
  marginBottom: {
    marginBottom: "30px",
  },
  secondRow: {
    marginBottom: "30px",
    marginTop: "30px",
  },
}));

export default function AdditionalData() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [state, setState] = useState({
    age: "",
    name: "hai",
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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
          avatar={<Avatar className={classes.blue900}>{"€"}</Avatar>}
          subheader={
            <Typography
              component={"span"}
              className={classes.title}
              variant="body2"
            >
              DATE SUPLIMENTARE
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
              <Grid xs={4}>
                <FormControl className={classes.formControl} disabled>
                  <InputLabel htmlFor="name-native-disabled">
                    Dobanda de referinta
                  </InputLabel>
                  <NativeSelect
                    value={state.name}
                    onChange={handleChange}
                    inputProps={{
                      name: "name",
                      id: "name-native-disabled",
                    }}
                  >
                    <option value="hai">ROBOR 6 LUNI</option>
                  </NativeSelect>
                </FormControl>
              </Grid>

              <Grid xs={4}>
                <TextField
                  disabled
                  label="Valoare dobanda de referinta"
                  defaultValue="3,10"
                />
              </Grid>

              <Grid xs={4}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <KeyboardDatePicker
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    label="Data dobanzii de referinta"
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                </MuiPickersUtilsProvider>
              </Grid>

              <Grid container direction="row" className={classes.secondRow}>
                <Grid xs={4}>
                  <TextField label="Marja" defaultValue="6,90" />
                </Grid>

                <Grid xs={4}>
                  <TextField label="Ziua scadenta" defaultValue="5" />
                </Grid>

                <Grid xs={4}>
                  <FormControl style={{ minWidth: 240 }} disabled>
                    <InputLabel htmlFor="name-native-disabled">
                      Curs facturare
                    </InputLabel>
                    <NativeSelect
                      value={state.name}
                      onChange={handleChange}
                      inputProps={{
                        name: "name",
                        id: "name-native-disabled",
                      }}
                    >
                      <option value="hai">BNR + 0.75%</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container direction="row" className={classes.marginBottom}>
                <Grid xs={8}>
                  <FormControl style={{ minWidth: 490 }} disabled>
                    <InputLabel htmlFor="name-native-disabled">
                      Tip scadentar
                    </InputLabel>
                    <NativeSelect
                      value={state.name}
                      onChange={handleChange}
                      inputProps={{
                        name: "name",
                        id: "name-native-disabled",
                      }}
                    >
                      <option value="hai">Redevente egale</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>

                <Grid xs={4}>
                  <FormControl style={{ minWidth: 240 }}>
                    <InputLabel htmlFor="name-native-disabled">
                      Tip oferta
                    </InputLabel>
                    <NativeSelect
                      value={state.name}
                      onChange={handleChange}
                      inputProps={{
                        name: "name",
                        id: "name-native-disabled",
                      }}
                    >
                      <optgroup label="">
                        <option value="hai">Cerere noua</option>
                      </optgroup>
                    </NativeSelect>
                  </FormControl>
                </Grid>
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
