import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardHeader,
  Fab,
  Grid,
  Slider,
  Typography,
  Tooltip,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TimelineIcon from "@material-ui/icons/Timeline";
import { blue } from "@material-ui/core/colors";

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  title: {
    fontSize: 19,
    marginBottom: 0,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  icon: {
    backgroundColor: blue[900],
  },
  pos: {
    marginBottom: 12,
  },
});

const marksMonths = [
  {
    value: 12,
    label: "12",
  },
  {
    value: 60,
    label: "60",
  },
];

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

const marksResidualValue = [
  {
    value: 0,
    label: "0",
  },
];

const PeriodCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        avatar={
          <Fab size="small" color="primary" className={classes.icon}>
            <TimelineIcon></TimelineIcon>
          </Fab>
        }
        subheader={
          <Typography className={classes.title} variant="body2">
            PERIOADA
          </Typography>
        }
      />

      <CardContent>
        <Grid
          container
          spacing={5}
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Grid item xs={4}>
            <Typography gutterBottom>Perioada*</Typography>
            <Slider
              ValueLabelComponent={ValueLabelComponent}
              aria-label="custom thumb label"
              min={12}
              step={1}
              max={60}
              defaultValue={24}
              marks={marksMonths}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography gutterBottom>Avans(%)*</Typography>
            <Slider
              ValueLabelComponent={ValueLabelComponent}
              aria-label="custom thumb label"
              defaultValue={25}
              min={10.0}
              step={5.0}
              max={50.0}
              marks={marksAdvancePayment}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography gutterBottom>Valoare reziduala(%)*</Typography>
            <Slider
              ValueLabelComponent={ValueLabelComponent}
              aria-label="custom thumb label"
              max={37.64}
              defaultValue={20}
              marks={marksResidualValue}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

export default PeriodCard;
