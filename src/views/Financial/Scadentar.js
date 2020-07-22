import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
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
  table: {
    minWidth: 650,
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

function createData(name, principal, dobanda, comisioane, rataLunara, sold) {
  return { name, principal, dobanda, comisioane, rataLunara, sold };
}

const rows = [
  createData("Rata 1", 470.08, 186.5, 0.0, 656.58, "19.529.92"),
  createData("Rata 2", 474.46, 182.12, 0.0, 656.58, "19.055.47"),
  createData("Rata 3", 478.88, 177.69, 0.0, 656.58, "18.576.58"),
  createData("Rata 4", 483.35, 173.23, 0.0, 656.58, "18.093.23"),
  createData("Rata 5", 487.86, 168.72, 0.0, 656.58, "17.605,38"),
  createData("Rata 6", 492.41, 164.17, 0.0, 656.58, "17.112,97"),
  createData("Rata 7", 497.0, 159.58, 0.0, 656.58, "16.615,98"),
  createData("Rata 8", 501.63, 154.94, 0.0, 656.58, "16.114,34"),
  createData("Rata 9", 506.31, 150.27, 0.0, 656.58, "15.608,04"),
  createData("Rata 10", 511.03, 145.54, 0.0, 656.58, "15.097,01"),
  createData("Rata 11", 515.8, 140.78, 0.0, 656.58, "14.581,21"),
  createData("Rata 12", 520.61, 135.97, 0.0, 656.58, "14.060,60"),
  createData("Rata 13", 525.46, 131.12, 0.0, 656.58, "13.535,14"),
  createData("Rata 14", 530.36, 126.22, 0.0, 656.58, "13.004,78"),
  createData("Rata 15", 535.31, 121.27, 0.0, 656.58, "12.469,48"),
  createData("Rata 16", 540.3, 116.28, 0.0, 656.58, "11.929,18"),
  createData("Rata 17", 545.34, 111.24, 0.0, 656.58, "11.383,84"),
  createData("Rata 18", 550.42, 106.15, 0.0, 656.58, "10.833,42"),
  createData("Rata 19", 555.55, 101.02, 0.0, 656.58, "10.277,87"),
  createData("Rata 20", 560.73, 95.84, 0.0, 656.58, "9.717,14"),
  createData("Rata 21", 565.96, 90.61, 0.0, 656.58, "9.151,17"),
  createData("Rata 22", 571.24, 85.33, 0.0, 656.58, "8.579,93"),
  createData("Rata 23", 576.57, 80.01, 0.0, 656.58, "8.003,36"),
  createData("Rata 24", 581.94, 74.63, 0.0, 656.58, "7.421,42"),
  createData("Rata 25", 587.37, 69.2, 0.0, 656.58, "6.834,05"),
  createData("Rata 26", 592.85, 63.73, 0.0, 656.58, "6.241,20"),
  createData("Rata 27", 598.38, 58.2, 0.0, 656.58, "5.642,83"),
  createData("Rata 28", 603.96, 52.62, 0.0, 656.58, "5.038,87"),
  createData("Rata 29", 609.59, 46.99, 0.0, 656.58, "4.429,28"),
  createData("Rata 30", 615.27, 41.3, 0.0, 656.58, "3.814,01"),
  createData("Rata 31", 621.01, 35.57, 0.0, 656.58, "3.193,00"),
  createData("Rata 32", 626.8, 29.77, 0.0, 656.58, "2.566,20"),
  createData("Rata 33", 632.65, 23.93, 0.0, 656.58, "1.933,55"),
  createData("Rata 34", 638.54, 18.03, 0.0, 656.58, "1.295,01"),
  createData("Rata 35", 644.5, 12.08, 0.0, 656.58, "8650,51"),
  createData("Rata 36", 650.51, 6.07, 0.0, 656.58, 0.0),
];

export default function AdditionalData() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

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
              SCADENTAR
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
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="right">Principal</TableCell>
                  <TableCell align="right">Dobanda&nbsp;(lei)</TableCell>
                  <TableCell align="right">Comisioane&nbsp;(lei)</TableCell>
                  <TableCell align="right">Rata lunara&nbsp;(lei)</TableCell>
                  <TableCell align="right">Sold&nbsp;(lei)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.principal}</TableCell>
                    <TableCell align="right">{row.dobanda}</TableCell>
                    <TableCell align="right">{row.comisioane}</TableCell>
                    <TableCell align="right">{row.rataLunara}</TableCell>
                    <TableCell align="right">{row.sold}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Collapse>
    </Card>
  );
}
