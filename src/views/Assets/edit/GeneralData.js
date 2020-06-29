import React, { useState } from "react";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Fab,
  Grid,
  IconButton,
  Typography,
  Collapse,
  InputLabel,
  NativeSelect,
  withStyles,
} from "@material-ui/core";
import AssignmentRoundedIcon from "@material-ui/icons/AssignmentRounded";
import { blue } from "@material-ui/core/colors";

const styles = (theme) => ({
  root: {
    minWidth: 200,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  cardContent: {
    marginLeft: "25px",
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
  icon: {
    backgroundColor: blue[900],
  },
  pos: {
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
  },
});

const GeneralData = (props) => {
  const [expanded, setExpanded] = useState(false);
  const { classes } = props;
  const { offerToEdit } = props.props.location.state;

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
      <CardHeader
        avatar={
          <Fab size="small" color="primary" className={classes.icon}>
            <AssignmentRoundedIcon></AssignmentRoundedIcon>
          </Fab>
        }
        subheader={
          <Typography
            component={"span"}
            className={classes.title}
            variant="body2"
          >
            DATE GENERALE
          </Typography>
        }
      />

      <CardContent className={classes.cardContent}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={3}>
            <Typography
              component={"span"}
              variant="body2"
              className={classes.fontSizeTypography}
            >
              Responsabil: {"Admin Administrator"}
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography
              component={"span"}
              variant="body2"
              className={classes.fontSizeTypography}
            >
              Partener:
              {offerToEdit && offerToEdit !== undefined
                ? offerToEdit.partner.firstName +
                  " " +
                  offerToEdit.partner.lastName
                : ""}
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography
              component={"span"}
              variant="body2"
              className={classes.fontSizeTypography}
            >
              Sales Channel: {"Vanzari proprii"}
            </Typography>
          </Grid>

          <Grid item xs={3}>
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
          </Grid>
        </Grid>
      </CardContent>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.cardContent}>
          <Grid container>
            <Grid item xs={12}>
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
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default withStyles(styles)(GeneralData);
