import React, { useState } from "react";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Button,
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

const Products = (props) => {
  const [expanded, setExpanded] = useState(false);
  const { classes } = props;
  //const { offerToEdit } = props.props.location.state;

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
    <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      // direction="column"
      // justify="center"
      // alignItems="stretch"
    >
      <Grid item xs={12}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              //   gutterBottom
            ></Typography>

            <Typography variant="h6" component="h2" gutterBottom>
              PRODUSE
            </Typography>

            <Grid container spacing={2} alignItems="center">
              <Grid item xs={4}>
                <Typography>Responsabil: {"Admin Administrator"}</Typography>
              </Grid>

              <Grid item xs={4}>
                <Typography>
                  Partener:
                  {/* {offerToEdit && offerToEdit !== undefined
                ? offerToEdit.partner.firstName +
                  " " +
                  offerToEdit.partner.lastName
                : ""} */}
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <Typography>Sales Channel: {"Vanzari proprii"}</Typography>
              </Grid>
            </Grid>
          </CardContent>

          <CardActions>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              // aria-expanded={expanded}
              // aria-label="show more"
              onClick={handleExpandClick}
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <InputLabel shrink htmlFor="responsible-native-label-placeholder">
                Responsabil
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
                <option value={10}>Cornel Baciu</option>
                <option value={11}>Irina Hobeanu</option>
                <option value={20}>Admin Admin</option>
                <option value={30}>Leontie Fusa</option>
                <option value={40}>Tony Robbins</option>
                <option value={50}>Napoleon Hill</option>
                <option value={60}>Giulia Giulia</option>
                <option value={70}>Gol</option>
              </NativeSelect>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Button
          className={classes.btnBack}
          variant="contained"
          color="primary"
          onClick={() => props.history.goBack()}
        >
          Inapoi
        </Button>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Products);
