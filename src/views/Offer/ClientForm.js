import React, { useState, useEffect, useRef } from "react";
import {
  Grid,
  TextField,
  withStyles,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
} from "@material-ui/core";
import useForm from "./useForm";

const styles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      minWidth: "230",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "230",
  },
  smMargin: {
    margin: theme.spacing(1),
  },
});

const initialFieldValues = {
  fullName: "",
  bloodGroup: "",
  email: "",
  mobile: "",
  name: "",
  age: "",
  address: "",
};

const ClientForm = ({ classes, ...props }) => {
  // const validate = () => {
  //   let temp = {};
  //   temp.fullName = values.fullName !== "" ? "" : "This field is required!";
  //   temp.mobile = values.mobile !== "" ? "" : "This field is required!";
  //   temp.bloodGroup = values.bloodGroup !== "" ? "" : "This field is required!";
  //   temp.email = /^$|.+@.+..+/.test(values.emaul) ? "" : "Email is not valid!";
  //   setErrors({
  //     ...temp,
  //   });

  //   return Object.values(temp).every((x) => x === "");
  // };

  const { values, handleInputChange } = useForm(initialFieldValues);
  //select drop-down material ui fix bug
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  // const handleSave = (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     window.alert("validation succeded");
  //   }
  //   console.log(values);
  // };

  return (
    <form
      autoComplete="off"
      noValidate
      className={classes.root}
      //onSave={handleSave}
    >
      <Grid container>
        <Grid item xs={6}>
          <TextField
            name="fullName"
            variant="outlined"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <TextField
            name="email"
            variant="outlined"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
          />
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel}>Blood Group</InputLabel>
            <Select
              name="bloodGroup"
              value={values.bloodGroup}
              onChange={handleInputChange}
              labelWidth={labelWidth}
            >
              <MenuItem value=""> Select Blood Group</MenuItem>
              <MenuItem value="A+"> A + ve</MenuItem>
              <MenuItem value="B+"> B + ve</MenuItem>
              <MenuItem value="AB+">AB + ve</MenuItem>
              <MenuItem value="0+"> O + ve</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="mobile"
            variant="outlined"
            label="Mobile"
            value={values.mobile}
            onChange={handleInputChange}
          />
          <TextField
            name="name"
            variant="outlined"
            label="Name"
            value={values.name}
            onChange={handleInputChange}
          />
          <TextField
            name="address"
            variant="outlined"
            label="Address"
            value={values.address}
            onChange={handleInputChange}
          />
          <div>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.smMargin}
            >
              Save
            </Button>
            <Button variant="contained">Reset</Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
};

export default withStyles(styles)(ClientForm);
