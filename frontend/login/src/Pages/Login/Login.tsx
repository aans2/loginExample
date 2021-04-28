// Third party libs
import React, { useRef, useState } from "react";

// material-ui
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

// Internal imports
import { useStyles } from "./LoginStyle";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useHistory } from "react-router";

import AuthService from "../../services/authService";

function Login(props?: {}) {
  const classes = useStyles();
  const history = useHistory();

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlerLogin = () => {
    AuthService.login(username, password).then((data) => {
      history.push("/home");
    });
  };

  const register = () => {
    history.push("/register");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <div className={classes.logoBtn}>
          {" "}
          <Typography variant="h3" component="p" className={classes.logo}>
            Login
          </Typography>
        </div>
        <form className={classes.form} autoComplete="off" noValidate>
          <TextField
            className={classes.inputBox}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="usernick"
            placeholder="Usuário"
            name="usernick"
            autoFocus
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleOutlinedIcon className={classes.accountIcon} />
                </InputAdornment>
              ),
              classes: { notchedOutline: classes.noBorder },
            }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            className={classes.inputBox}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            placeholder="Senha"
            type="password"
            id="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon className={classes.lockIcon} />
                </InputAdornment>
              ),
              classes: { notchedOutline: classes.noBorder },
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={classes.loginBtn}>
            <Button className={classes.submit} onClick={handlerLogin}>
              Entrar
            </Button>
            <Button onClick={register}>Registro</Button>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default Login;
