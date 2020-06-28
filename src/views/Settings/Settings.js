import React from "react";
import { Link } from "react-router-dom";
import LoaderButton from "../../components/LoaderButton/LoaderButton";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useAppContext } from "../../libs/contextLib";
import "./Settings.css";

const styles = {
  paper: {
    marginTop: "50px",
    marginBottom: " 100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

const useStyles = makeStyles(styles);

export default function Settings() {
  const classes = useStyles();
  const { isAdmin } = useAppContext();

  const handleLinkChageEmail = () => {
    if (isAdmin) {
      return "/admin/changeEmail";
    } else {
      return "/dealer/changeEmail";
    }
  };

  const handleLinkChagePassword = () => {
    if (isAdmin) {
      return "/admin/changePassword";
    } else {
      return "/dealer/changePassword";
    }
  };

  return (
    <div className="Settings">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Change your email / password
        </Typography>
      </div>

      <Link to={handleLinkChageEmail}>
        <LoaderButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          block
          bsSize="large"
        >
          Change Email
        </LoaderButton>
      </Link>

      <Link to={handleLinkChagePassword}>
        <LoaderButton
          b
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          block
          bsSize="large"
        >
          Change Password
        </LoaderButton>
      </Link>
      <hr />
    </div>
  );
}
