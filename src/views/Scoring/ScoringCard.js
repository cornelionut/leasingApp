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
  Collapse,
  Fab,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
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

export default function ScoringData() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardActions disableSpacing>
        <CardHeader
          avatar={
            <Fab size="small" color="primary" className={classes.icon}>
              <AssignmentTurnedInIcon></AssignmentTurnedInIcon>
            </Fab>
          }
          subheader={
            <Typography
              component={"span"}
              className={classes.title}
              variant="body2"
            >
              RASPUNS SCORING
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
                <TextField
                  disabled
                  label="Raspuns Scoring"
                  defaultValue=""
                  style={{ width: 260 }}
                />
              </Grid>

              <Grid xs={4}>
                <TextField
                  disabled
                  label="Rating client"
                  defaultValue=""
                  style={{ width: 260 }}
                />
              </Grid>

              <Grid xs={4}>
                <TextField
                  disabled
                  label="Tip rating client"
                  defaultValue="Scor New To Market"
                  style={{ width: 260 }}
                />
              </Grid>
            </Grid>

            <Grid container direction="row" style={{ marginTop: 20 }}>
              <Grid xs={4}>
                <TextField
                  disabled
                  label="Rating bun finantat"
                  defaultValue=""
                  style={{ width: 260 }}
                />
              </Grid>

              <Grid xs={4}>
                <TextField
                  disabled
                  label="Criteriu dat indatorare"
                  defaultValue="Not OK"
                  style={{ width: 260 }}
                />
              </Grid>

              <Grid xs={4}>
                <TextField
                  disabled
                  label="Criterii Knock Out"
                  defaultValue="Not OK"
                  style={{ width: 260 }}
                />
              </Grid>
            </Grid>

            <Grid container direction="row" style={{ marginTop: 20 }}>
              <Grid xs={4}>
                <TextField
                  disabled
                  label="Criteriu avans minim"
                  defaultValue="Not OK"
                  style={{ width: 260 }}
                />
              </Grid>

              <Grid xs={3}></Grid>

              <Grid xs={3}></Grid>
            </Grid>

            <Grid
              container
              spacing={5}
              direction="row"
              alignItems="center"
              justify="flex-end"
            >
              <Grid item xs={3}>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.btnSave}
                >
                  Proceseaza scor
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
