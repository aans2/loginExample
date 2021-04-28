// Third party libs
import React from "react";
import { Button, CssBaseline } from "@material-ui/core";

// Internal imports
import { useStyles } from "./HomeStyle";
import { useHistory } from "react-router-dom";
import AuthService from "../../services/authService";

function Home(args?: {}) {
  // const classes = useStyles();

  const classes = useStyles();
  const history = useHistory();

  const logout = () => {
    AuthService.logout();
    history.push("/");
  };

  return (
    <div className={classes.wrapper}>
      <CssBaseline />
      <h1>HOME</h1>
      <div>BEM VINDO !!!!</div>
      <Button className={classes.logoutBtn} onClick={logout}>
        Logout
      </Button>
    </div>
  );
}

export default Home;
