import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import HeroBanner from "../images/netflix.png";
const Banner = () => {
  const classes = useStyles();
  const truncate = (string, n) =>
    string?.length > n ? `${string.substr(0, n - 1)} ...` : string;
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant="h2" component="h1">
          Movie Title
        </Typography>
        <div className={classes.buttons}>
          <Button>Play</Button>
          <Button>My List</Button>
        </div>
        <Typography variant="h6" className={classes.description}>
          {truncate(
            "Movie Description Movie Description Movie Description Moviescription Movie Description Movie Description Movie Description  Movie Description Movie Description Movie Description MovieDescription Movie Description Movie Description Movie Description",
            130
          )}
        </Typography>
        <div className={classes.fadeBottom}></div>
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${HeroBanner})`,
    position: "relative",
    height: "440px",
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  },
  fadeBottom: {
    position: "absolute",
    top: "30vh",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    backgroundImage:
      "linear-gradient(180deg, transparent, rgba(37,37,37,0.61),#111)",
  },
  buttons: {
    "& button:hover": {
      color: "#000",
      backgroundColor: "#e6e6e6",
    },
    "& button": {
      cursor: "pointer",
      color: "#fff",
      fontWeight: 700,
      borderRadius: "5px",
      padding: theme.spacing(1, 4, 1, 4),
      marginRight: "1rem",
      backgroundColor: "rgba(51,51,51,0.5",
    },
  },
}));
export default Banner;
