import React from "react";
import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  btnSelect: {
    marginTop: "15px",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 18,
  },
  subtitle: {
    fontSize: 15,
    textAlign: "center",
    color: "DodgerBlue",
    marginBottom: 24,
  },
  line: {
    marginTop: 12,
    borderBottom: "1px solid",
    borderBottomColor: "#b3b3b3",
    marginBottom: 12,
  },
  marginRight: {
    position: "absolute",
  },
  includedServicesTitle: {
    fontSize: 16,
    marginTop: 12,
    textAlign: "center",
    marginBottom: 18,
  },
  includedServices: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
export default function OperationalLeasing() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} variant="body2" gutterBottom>
          LEASING OPERATIONAL - PF
        </Typography>
        <Typography className={classes.subtitle} component="h2">
          LO {"&"} INCHIRIERE PE TERMEN LUNG
        </Typography>

        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={4}>
            <Grid item xs>
              <Typography variant="body2">Rata lunara (fara TVA):</Typography>
            </Grid>
          </Grid>
          <Grid>
            <Typography variant="body2">{"1.223.51 RON"}</Typography>
          </Grid>
        </Grid>

        <div className={classes.line}></div>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={4}>
            <Grid item xs>
              <Typography variant="body2">
                Rata lunara (inlusiv TVA):
              </Typography>
            </Grid>
          </Grid>
          <Grid>
            <Typography variant="body2"> {"1.455,97 RON"}</Typography>
          </Grid>
        </Grid>

        <div className={classes.line}></div>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={4}>
            <Grid item xs>
              <Typography variant="body2">Perioada (luni):</Typography>
            </Grid>
          </Grid>
          <Grid>
            <Typography variant="body2">{"54"}</Typography>
          </Grid>
        </Grid>

        <div className={classes.line}></div>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={4}>
            <Grid item xs></Grid>
          </Grid>
          <Grid>
            <Typography variant="body2">{"Min:12  Max:57"}</Typography>
          </Grid>
        </Grid>

        <div className={classes.line}></div>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={4}>
            <Grid item xs>
              <Typography variant="body2">Avans (%):</Typography>
            </Grid>
          </Grid>
          <Grid>
            <Typography variant="body2">{"0%"}</Typography>
          </Grid>
        </Grid>

        <div className={classes.line}></div>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={4}>
            <Grid item xs></Grid>
          </Grid>
          <Grid>
            <Typography variant="body2">{"Min:-  Max:-"}</Typography>
          </Grid>
        </Grid>

        <div className={classes.line}></div>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={4}>
            <Grid item xs>
              <Typography variant="body2">Numar rate garantie:</Typography>
            </Grid>
          </Grid>
          <Grid>
            <Typography variant="body2">{"5"}</Typography>
          </Grid>
        </Grid>

        <div className={classes.line}></div>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={4}>
            <Grid item xs></Grid>
          </Grid>
          <Grid>
            <Typography variant="body2">{"Min:5  Max:10"}</Typography>
          </Grid>
        </Grid>

        <div className={classes.line}></div>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={4}>
            <Grid item xs>
              <Typography variant="body2">Valoare reziduala (%):</Typography>
            </Grid>
          </Grid>
          <Grid>
            <Typography variant="body2">{"29.2%"}</Typography>
          </Grid>
        </Grid>

        <div className={classes.line}></div>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={4}>
            <Grid item xs></Grid>
          </Grid>
          <Grid>
            <Typography variant="body2">{"Min:0  Max:100"}</Typography>
          </Grid>
        </Grid>

        <div className={classes.line}></div>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={4}>
            <Grid item xs>
              <Typography variant="body2">Valoare contract (%):</Typography>
            </Grid>
          </Grid>
          <Grid>
            <Typography variant="body2">{"82.129,45 RON"}</Typography>
          </Grid>
        </Grid>

        <div className={classes.line}></div>
        <Typography variant="body2" className={classes.includedServicesTitle}>
          SERVICII INCLUSE:
        </Typography>

        <Typography className={classes.includedServices}>
          Comision administrare {"0.00 RON"}
        </Typography>

        <Typography className={classes.includedServices}>
          Taxa de inmatriculare {"14.02 RON"}
        </Typography>

        <Typography className={classes.includedServices}>
          Taxa de drum {"9.49 RON"}
        </Typography>

        <Typography className={classes.includedServices}>
          Asigurari si managementul accidentelor {"310.72 RON"}
        </Typography>

        <Typography variant="body2" className={classes.includedServicesTitle}>
          <Button
            color="primary"
            variant="contained"
            className={classes.btnSelect}
          >
            SELECTEAZA
          </Button>
        </Typography>
      </CardContent>
    </Card>
  );
}
