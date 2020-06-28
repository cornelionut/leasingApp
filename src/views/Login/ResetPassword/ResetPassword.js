import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import CheckIcon from "@material-ui/icons/Check";
import { TextField, Typography } from "@material-ui/core";
import LoaderButton from "../../../components/LoaderButton/LoaderButton";
import { useFormFields } from "../../../libs/hooksLib";
import { onError } from "../../../libs/errorLib";
import { makeStyles } from "@material-ui/core/styles";
import "./ResetPassword.css";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const ResetPassword = (props) => {
  const classes = useStyles();

  const [fields, handleFieldChange] = useFormFields({
    code: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [codeSent, setCodeSent] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isSendingCode, setIsSendingCode] = useState(false);

  function validateCodeForm() {
    return fields.email.length > 0;
  }

  function validateResetForm() {
    return (
      fields.code.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  }

  async function handleSendCodeClick(event) {
    event.preventDefault();

    setIsSendingCode(true);

    try {
      await Auth.forgotPassword(fields.email);
      setCodeSent(true);
    } catch (error) {
      onError(error);
      setIsSendingCode(false);
    }
  }

  async function handleConfirmClick(event) {
    event.preventDefault();

    setIsConfirming(true);

    try {
      await Auth.forgotPasswordSubmit(
        fields.email,
        fields.code,
        fields.password
      );
      setConfirmed(true);
    } catch (error) {
      onError(error);
      setIsConfirming(false);
    }

    // fetch("http://localhost:51044/api/Login/UpdateUser", {
    //   method: "post",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     Email: fields.email,
    //     Password: fields.password,
    //   }),
    // })
    //   .then((Response) => Response.json())
    //   .then((Result) => {
    //     if (Result.status === "Success") {
    //       this.props.history.push("/Login");
    //       alert("User adaugat cu succes!");
    //     } else
    //       alert(
    //         "Aceasta adresa de email exista deja! Va rugam alegeti alt email!"
    //       );
    //   });
  }

  function renderRequestCodeForm() {
    return (
      <div className={classes.paper}>
        <Typography
          component="h1"
          variant="h5"
          style={{ marginBottom: "10px" }}
        >
          Reset password
        </Typography>
        <form className={classes.form} onSubmit={handleSendCodeClick}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={fields.email}
            onChange={handleFieldChange}
          />
          {/* <FormGroup bsSize="large" controlId="email">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </FormGroup>*/}
          <LoaderButton
            block
            fullWidth
            variant="contained"
            type="submit"
            color="primary"
            bsSize="large"
            isLoading={isSendingCode}
            disabled={!validateCodeForm()}
          >
            Send Confirmation
          </LoaderButton>
        </form>
      </div>
    );
  }

  function renderConfirmationForm() {
    return (
      <form className={classes.form} onSubmit={handleConfirmClick}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="code"
          label="Confirmation Code"
          name="code"
          autoComplete="code"
          autoFocus
          helperText={
            "Please check your email " +
            fields.email +
            " for the confirmation code."
          }
          value={fields.code}
          onChange={handleFieldChange}
        />
        {/* <FormGroup bsSize="large" controlId="code"> */}
        {/* <ControlLabel>Confirmation Code</ControlLabel>
          <FormControl
            autoFocus
            type="tel"
            value={fields.code}
            onChange={handleFieldChange}
          /> */}
        {/* <HelpBlock>
          <div>
            Please check your email ({fields.email}) for the confirmation code.
          </div>
        </HelpBlock> */}

        {/* </FormGroup> */}

        <hr />

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
          autoFocus
          value={fields.password}
          onChange={handleFieldChange}
        />
        {/* <FormGroup bsSize="large" controlId="password">
          <ControlLabel>New Password</ControlLabel>
          <FormControl
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </FormGroup> */}

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
          autoFocus
          value={fields.confirmPassword}
          onChange={handleFieldChange}
        />
        {/* <FormGroup bsSize="large" controlId="confirmPassword">
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            type="password"
            value={fields.confirmPassword}
            onChange={handleFieldChange}
          />
        </FormGroup> */}
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          fullWidth
          variant="contained"
          color="primary"
          isLoading={isConfirming}
          disabled={!validateResetForm()}
        >
          Confirm
        </LoaderButton>
      </form>
    );
  }

  function renderSuccessMessage() {
    return (
      <div className="success">
        <CheckIcon color="primary" fontSize="large" />
        <p>Your password has been reset.</p>
        <p>
          <Link to="/login" style={{ color: "#0f11b3" }}>
            Click here to login with your new credentials.
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="ResetPassword">
      {!codeSent
        ? renderRequestCodeForm()
        : !confirmed
        ? renderConfirmationForm()
        : renderSuccessMessage()}
    </div>
  );
};

export default ResetPassword;
