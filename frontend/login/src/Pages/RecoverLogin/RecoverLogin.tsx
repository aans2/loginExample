// Third party libs
import React, { useState } from "react";

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
import { useStyles } from "./RecoverLoginStyle";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useHistory } from "react-router-dom";

function RecoverLogin(props?: {}) {
  const [usernick, setUsernick] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  const history = useHistory();

  const handlerLogin = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <div className={classes.logoBtn}>
          {" "}
          <IconButton size="small" className={classes.backBtn}>
            <ArrowBackIcon fontSize="inherit" />
          </IconButton>
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
            value={usernick}
            onChange={(e) => setUsernick(e.target.value)}
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
            <Grid container>
              <Grid item xs className={classes.gridItem}>
                <button type="button" className={classes.forgetBtn}>
                  Esqueceu a senha?
                </button>
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  onClick={handlerLogin}
                  className={classes.submit}
                >
                  Entrar
                </Button>
              </Grid>
            </Grid>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default RecoverLogin;
