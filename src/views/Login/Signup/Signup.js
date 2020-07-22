import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { TextField } from "@material-ui/core";
import LoaderButton from "../../../components/LoaderButton/LoaderButton";
import { useAppContext } from "../../../libs/contextLib";
import { useFormFields } from "../../../libs/hooksLib";
import { onError } from "../../../libs/errorLib";
import { makeStyles } from "@material-ui/core/styles";
import { NotificationManager } from "react-notifications";
import Snackbar from "@material-ui/core/Snackbar";
import AddAlert from "@material-ui/icons/AddAlert";
import MuiAlert from "@material-ui/lab/Alert";
import "./Signup.css";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Signup() {
  const classes = useStyles();

  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
    confirmPassword: "",
    confirmationCode: "",
  });
  const history = useHistory();
  const [newUser, setNewUser] = useState(null);
  const { userHasAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const { userAdded, userIsAdded } = useState(false);

  const handleCloseSnackbar = () => {
    userIsAdded(true);
  };

  function validateForm() {
    return (
      fields.email.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  }

  function validateConfirmationForm() {
    return fields.confirmationCode.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      const newUser = await Auth.signUp({
        username: fields.email,
        password: fields.password,
      });
      setIsLoading(false);
      setNewUser(newUser);
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  async function handleConfirmationSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      await Auth.confirmSignUp(fields.email, fields.confirmationCode);
      await Auth.signIn(fields.email, fields.password);

      NotificationManager.success(
        "Success message",
        "Dealer adaugat cu succes"
      );

      userHasAuthenticated(true);
      history.push("/admin/dashboard");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  function renderConfirmationForm() {
    return (
      <form className={classes.form} onSubmit={handleConfirmationSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="confirmationCode"
          label="Confirmation Code"
          name="confirmationCode"
          autoComplete="confirmationCode"
          autoFocus
          helperText={"Please check your email for the code."}
          value={fields.confirmationCode}
          onChange={handleFieldChange}
        />

        {
          <Snackbar
            place="tr"
            color="info"
            icon={AddAlert}
            open={userAdded}
            autoHideDuration={4000}
            onClose={handleCloseSnackbar}
          >
            {<Alert severity="success">User added succesfully!</Alert>}
          </Snackbar>
        }

        <LoaderButton
          block
          type="submit"
          bsSize="large"
          fullWidth
          variant="contained"
          color="primary"
          isLoading={isLoading}
          disabled={!validateConfirmationForm()}
        >
          Verify
        </LoaderButton>
      </form>
    );
  }

  function renderForm() {
    return (
      <div className={classes.paper}>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={fields.email}
            onChange={handleFieldChange}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="New Password"
            type="password"
            name="password"
            autoComplete="password"
            value={fields.password}
            onChange={handleFieldChange}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            name="password"
            autoComplete="password"
            value={fields.confirmPassword}
            onChange={handleFieldChange}
          />

          <LoaderButton
            block
            type="submit"
            bsSize="large"
            fullWidth
            variant="contained"
            color="primary"
            isLoading={isLoading}
            disabled={!validateForm()}
          >
            Signup
          </LoaderButton>
        </form>
      </div>
    );
  }

  return (
    <div className="Signup">
      {newUser === null ? renderForm() : renderConfirmationForm()}
    </div>
  );
}
