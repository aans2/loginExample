// Third party libs
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  CssBaseline,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Controller, useForm } from "react-hook-form";
// import classes from "*.module.css";

// Internal imports
import { useStyles } from "./RegisterStyle";
import { useHistory } from "react-router";

import AuthService from "../../services/authService";

interface IFormInput {
  // name: string;
  // userName: string;
  email: string;
  password: string;
  password2: string;
}

const defaultValues = {
  TextField: "",
};

function Register(args?: {}) {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors, isDirty, isValid, dirtyFields },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    AuthService.register(data.email, data.password).then((result) => {
      if (result.status == 200) {
        history.push("/login");
      }
    });
  };

  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.wrapper}>
      <CssBaseline />

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <div className={classes.head}>
            <IconButton
              onClick={history.goBack}
              size="small"
              className={classes.backBtn}
            >
              <ArrowBackIcon fontSize="inherit" />
            </IconButton>
            <Typography
              variant="h6"
              component="span"
              className={classes.titleText}
            >
              Registro de Usuário
            </Typography>
          </div>
          {/* <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{
              required: "Nome é obrigátorio",
              maxLength: {
                value: 10,
                message: "Não deve conter mais de 10 caracteres",
              },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Nome não é valido",
              },
            }}
            render={({ field }) => (
              <TextField
                error={dirtyFields.name && !!errors.name}
                variant="outlined"
                label="Nome"
                className={classes.textField}
                {...field}
              />
            )}
          />
          {errors.name && <p>{errors.name.message}</p>} */}

          {/* <Controller
            name="userName"
            control={control}
            defaultValue=""
            rules={{
              required: "Username é obrigatorio",
              minLength: {
                value: 3,
                message: "Deve conter pelo menos 3 caracteres",
              },
              maxLength: {
                value: 10,
                message: "Não deve conter mais de 10 caracteres",
              },
            }}
            render={({ field }) => (
              <TextField
                error={dirtyFields.userName && !!errors.userName}
                variant="outlined"
                label="Username"
                className={classes.textField}
                {...field}
              />
            )}
          />
          {errors.userName && <p>{errors.userName.message}</p>} */}

          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Email é obrigatorio",
              pattern: {
                value: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
                message: "Email não é válido",
              },
            }}
            render={({ field }) => (
              <TextField
                error={dirtyFields.email && !!errors.email}
                variant="outlined"
                label="Email"
                className={classes.textField}
                {...field}
              />
            )}
          />
          {errors.email && <p>{errors.email.message}</p>}

          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: "Senha é obrigatoria",
              minLength: {
                value: 6,
                message: "Senha deve ter no minimo 6 caracteres",
              },
            }}
            render={({ field }) => (
              <TextField
                error={dirtyFields.password && !!errors.password}
                variant="outlined"
                label="Senha"
                className={classes.textField}
                {...field}
              />
            )}
          />
          {errors.password && <p>{errors.password.message}</p>}

          <Controller
            name="password2"
            control={control}
            defaultValue=""
            rules={{
              required: "Senha é obrigatoria",
              validate: {
                matchesPreviousPassword: (value) => {
                  const { password } = getValues();
                  return password === value || "As senhas não são iguais";
                },
              },
            }}
            render={({ field }) => (
              <TextField
                error={dirtyFields.password2 && !!errors.password2}
                variant="outlined"
                label="Confirmar Senha"
                className={classes.textField}
                {...field}
              />
            )}
          />
          {errors.password2 && <p>{errors.password2.message}</p>}

          <input
            // disabled={isDirty && !isValid}
            type="submit"
            className={classes.submitBtn}
          />
          {/* <Button
            disabled={isDirty && !isValid}
            className={classes.submitBtn}
            onClick={enviar}
          >
            Enviar
          </Button> */}
        </form>
      </div>
    </div>
  );
}

export default Register;
