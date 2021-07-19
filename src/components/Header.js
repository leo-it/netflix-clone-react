import { useEffect, useState } from "react";
import {
  AppBar,
  Avatar,
  IconButton,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import logo from "../images/logo.png";
import { useHistory } from "react-router-dom";
const Header = () => {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const classes = useStyles();
  const hideHeader = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", hideHeader);
  }, [show]);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      className={`${classes.root} ${show && classes.transparent}`}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton onClick={() => history.push("/")}>
          <img src={logo} alt="logo" className={classes.logo} />
        </IconButton>
        <Avatar
          onClick={() => history.push("/profile")}
          variant="square"
          style={{ cursor: "pointer" }}
        />
      </Toolbar>
    </AppBar>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
    top: 0,
    left: 0,
    right: 0,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  transparent: {
    backgroundColor: "transparent",
  },
  logo: {
    width: "100px",
    cursor: "pointer",
  },
}));
export default Header;
