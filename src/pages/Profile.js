import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Header from "../components/Header";
import netflixavatar from "../images/netflixAvatar.jpg";
import Plans from "../components/Plans";
import { NetflixButton } from "../styled/styledcomponents";
const Profile = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />

      <Typography variant="h3">edit</Typography>
      <div className={classes.info}>
        <img src={netflixavatar} alt="avatar" />
        <div classname={classes.details}>
          <div classname={classes.plans}>
            <Typography variant="h6"> email usuario</Typography>
            <Typography variant="h5" gutterBottom>
              Plans
            </Typography>
            <Plans cost={7.99}>Netflix Standard</Plans>
            <Plans cost={11.99}>Netflix Basic</Plans>
            <Plans cost={15.99}>Netflix Premium</Plans>
            <NetflixButton>Sign Out</NetflixButton>
          </div>
        </div>
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    minHeight: "100vh",
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  info: {
      width:"80%",
      display:"flex",
      "& img":{
          height:"100px",
          [theme.breakpoints.down("xs")]:{
              display:"none"
          }
      }
  },
  details:{
      width:"100%",
      marginLeft: theme.spacing(3)
  }
}));
export default Profile;
