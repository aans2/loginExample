// Third party libs
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(25),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logoBtn: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(1, 5),
    display: "inline",
    backgroundColor: "#6163CF",
    color: "#000000",
    fontWeight: "bold",
    textTransform: "none",
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor: "#6163CF",
      border: "2px solid #000000",
    },
  },
  backBtn: {
    margin: 0,
    padding: "auto",
    display: "inline",
    backgroundColor: "#6163CF",
    color: "#000000",
    borderRadius: "6px",
    width: "56px",
    height: "56px",
    "&:hover": {
      backgroundColor: "#6163CF",
      border: `2px solid "#000000"`,
    },
  },
  logo: {
    display: "inline",
    margin: "auto",
    padding: "auto",
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
  loginBtn: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#000000",
  },
  forgetBtn: {
    display: "flex",
    alignItems: "center",
    color: "#000000",
    textTransform: "none",
    background: "none",
    border: "none",
    padding: "0",
    font: "inherit",
    cursor: "pointer",
    outline: "inherit",
  },
  accountIcon: {
    color: "#6163CF",
  },
  lockIcon: {
    color: "#6163CF",
  },
  gridItem: {
    display: "flex",
    alignItems: "center",
  },
  inputBox: {
    backgroundColor: "3F4048",
    borderRadius: "6px",
  },
  noBorder: {
    border: "none",
  },
}));
