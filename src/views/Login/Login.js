import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  Container,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import LoaderButton from "../../components/LoaderButton/LoaderButton";
import { useAppContext } from "../../libs/contextLib";
import { onError } from "../../libs/errorLib";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import AddAlert from "@material-ui/icons/AddAlert";
// import SnackbarContent from "../../components/Snackbar/SnackbarContent.js";
import "./Login.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#115293",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link to="" className="link" href="https://material-ui.com/">
        Financial Services Leasing
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Login() {
  const { userHasAuthenticated, userIsAdmin } = useAppContext();
  const { isLoggedOut, userHasLoggedOut } = useAppContext();
  const { setOpenSnackbar } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    amount: "",
    email: "",
    password: "",
    errors: { emailError: "", passwordError: "" },
    showPassword: false,
    openSnackbar: false,
  });

  const classes = useStyles();

  function validateForm() {
    return values.email.length > 0 && values.password.length > 0;
  }

  const handleChange = (prop) => (event) => {
    let typedValue = event.target.value;
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    switch (prop) {
      case "email":
        if (re.test(typedValue)) {
          setValues({
            ...values,
            [prop]: event.target.value,
            errors: {
              emailError: "",
            },
          });
        } else {
          setValues({
            ...values,
            [prop]: event.target.value,
            errors: {
              emailError: "Adresa de email nu este valida",
            },
          });
        }
        break;
      case "password":
        if (typedValue.length < 8) {
          setValues({
            ...values,
            [prop]: event.target.value,
            errors: {
              passwordError: "Parola trebuie sa aiba minim 8 caractere",
            },
          });
        } else
          setValues({
            ...values,
            [prop]: event.target.value,
            errors: {
              passwordError: "",
            },
          });
        // console.log(values.errors.passwordError);
        break;
      default:
        setValues({
          ...values,
          [prop]: event.target.value,
        });
        break;
    }
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      await Auth.signIn(values.email, values.password);

      fetch("http://localhost:51044/api/Login/Authenticate", {
        method: "post",

        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          Email: values.email,
          Password: values.password,
        }),
      })
        .then((Response) => Response.json())
        .then((result) => {
          console.log(result);

          if (result.isAdmin === true) {
            userIsAdmin(true);
            userHasAuthenticated(true);
            setOpenSnackbar(true);
          } else if (result.isAdmin === false) {
            userIsAdmin(false);
            userHasAuthenticated(true);
            setOpenSnackbar(true);
          }
        });
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  const handleCloseSnackbar = () => {
    userHasLoggedOut(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {
          <Snackbar
            place="tr"
            color="info"
            icon={AddAlert}
            open={isLoggedOut}
            autoHideDuration={4000}
            onClose={handleCloseSnackbar}
          >
            {<Alert severity="success">You are succesfully logged out!</Alert>}
          </Snackbar>
        }

        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            autoFocus
            required
            fullWidth
            variant="outlined"
            margin="normal"
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange("email")}
            helperText={values.errors.emailError}
            error={Boolean(values.errors.emailError)}
          />

          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            fullWidth
            autoComplete="password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
            error={Boolean(values.errors.passwordError)}
            //   helperText={values.errors.passwordError}
          />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          <LoaderButton
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            bssize="large"
            isLoading={isLoading}
            disabled={!validateForm()}
          >
            Sign in
          </LoaderButton>

          <Grid container>
            <Grid item xs>
              <Link to="/login/reset" className="link">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup" className="link" variant="body2">
                "Don't have an account? Sign Up"
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
