import React from "react";
import { Button } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  spinning: {
    color: "#000000",
    marginRight: "35px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoaderButton({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) {
  const classes = useStyles();

  return (
    <Button
      className={classes.submit}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <CircularProgress
          size={24}
          thickness={4}
          className={classes.spinning}
        />
      )}
      {props.children}
    </Button>
  );
}
