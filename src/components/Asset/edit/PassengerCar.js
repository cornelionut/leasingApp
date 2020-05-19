import React, { useState } from "react";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Typography,
  Collapse,
  InputLabel,
  NativeSelect,
  withStyles,
} from "@material-ui/core";

const styles = (theme) => ({
  root: {
    minWidth: 200,
  },
  title: {
    fontSize: 14,
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
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
});

const PassengerCar = (props) => {
  const [expanded, setExpanded] = useState(false);
  const { classes } = props;
  //const { offerToEdit } = props.props;

  const [state, setState] = useState({
    responsible: "",
    name: "Giulia <3",
  });

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
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          //   gutterBottom
        ></Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          Autoturism
        </Typography>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={3}>
            <Typography>Bunuri finantate: {""}</Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography>Pret de achizitie fara TVA:{""}</Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography>Pret de achizitie cu TVA:{""}</Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography>Imagine</Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <InputLabel shrink htmlFor="responsible-native-label-placeholder">
            Categorie autoturisme*
          </InputLabel>
          <NativeSelect
            value={state.age}
            onChange={handleChange}
            inputProps={{
              name: "responsible",
              id: "responsible-native-label-placeholder",
            }}
          >
            <option value="">None</option>
            <option value={10}>Passenger Car</option>
            <option value={20}>Light Commercial{"(<3.5t)"}</option>
            <option value={30}>Macarale</option>
            <option value={40}>Avioane</option>
            <option value={50}>Barci</option>
            <option value={60}>Trenuri</option>
          </NativeSelect>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default withStyles(styles)(PassengerCar);
