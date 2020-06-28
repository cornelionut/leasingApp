import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import LoaderButton from "../../../components/LoaderButton/LoaderButton";
import { TextField } from "@material-ui/core";
import { useFormFields } from "../../../libs/hooksLib";
import { onError } from "../../../libs/errorLib";
import "./ChangePassword.css";

export default function ChangePassword() {
  const history = useHistory();
  const [fields, handleFieldChange] = useFormFields({
    password: "",
    oldPassword: "",
    confirmPassword: "",
  });
  const [isChanging, setIsChanging] = useState(false);

  function validateForm() {
    return (
      fields.oldPassword.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  }

  async function handleChangeClick(event) {
    event.preventDefault();

    setIsChanging(true);

    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(
        currentUser,
        fields.oldPassword,
        fields.password
      );

      history.push("/admin/settings");
    } catch (error) {
      onError(error);
      setIsChanging(false);
    }
  }

  return (
    <div className="ChangePassword">
      <form onSubmit={handleChangeClick}>
        {/* <FormGroup bsSize="large" controlId="oldPassword">
          <ControlLabel>Old Password</ControlLabel>
          <FormControl
            type="password"
            onChange={handleFieldChange}
            value={fields.oldPassword}
          />
        </FormGroup> */}
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="oldPassword"
          label="Old Password"
          type="oldPassword"
          name="oldPassword"
          autoComplete="oldPassword"
          autoFocus
          value={fields.oldPassword}
          onChange={handleFieldChange}
        />
        <hr />
        {/* <FormGroup bsSize="large" controlId="password">
          <ControlLabel>New Password</ControlLabel>
          <FormControl
            type="password"
            onChange={handleFieldChange}
            value={fields.password}
          />
        </FormGroup> */}
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
        {/* <FormGroup bsSize="large" controlId="confirmPassword">
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            type="password"
            onChange={handleFieldChange}
            value={fields.confirmPassword}
          />
        </FormGroup> */}
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="confirmPassword"
          label="Confirm Password"
          type="confirmPassword"
          name="confirmPassword"
          autoComplete="confirmPassword"
          autoFocus
          value={fields.confirmPassword}
          onChange={handleFieldChange}
        />
        <LoaderButton
          fullWidth
          variant="contained"
          color="primary"
          block
          type="submit"
          bsSize="large"
          disabled={!validateForm()}
          isLoading={isChanging}
        >
          Change Password
        </LoaderButton>
      </form>
    </div>
  );
}
