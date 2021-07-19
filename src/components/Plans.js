import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { NetflixButton } from "../styled/styledcomponents";

const Plans = ({ cost, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.standard} variant="h5">
        {children}
      </Typography>
      <NetflixButton>Suscribe</NetflixButton>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {},
}));
export default Plans;
