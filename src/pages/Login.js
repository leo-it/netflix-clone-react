import logo from "../images/logo.png";
import { Button, makeStyles, Typography } from "@material-ui/core";
import HeroBanner from "../images/herobanner.jpg";
import { NetflixButton, NetflixInput } from "../styled/styledcomponents";

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={logo} className={classes.logo} alt="logo" />
      <NetflixButton className={classes.session}>Iniciar sesion</NetflixButton>
      <div className={classes.info}>
        <Typography variant="h4" gutterBottom>
          Unlimited film, Tv programmes and more.
        </Typography>
        <Typography variant="h5">
          watch anywhere. Cancel at any time.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Ready to watch ? Enter your email to create or restart your
          membership.
        </Typography>
        <div className={classes.inputBlock}>
          <NetflixInput placeholder="Email address"/>
          <NetflixButton>GET STARTED</NetflixButton>
        </div>
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${HeroBanner})`,
    position: "relative",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  session: {
    position: "fixed",
    zIndex: 15,
    right: 20,
    top: 20,
  },
  info: {
    color: "#fff",
    zIndex: 15,
    textAlign: "center",
    "& h4": {
      fontWeight: 800,
    },
    "& h5": {
      fontWeight: 400,
    },
  },
  logo: {
    position: "fixed",
    top: 5,
    left: 20,
    width: "100px",
    cursor: "pointer",
  },
}));
export default Login;
