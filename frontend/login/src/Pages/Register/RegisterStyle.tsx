// Third party libs
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  titleText: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(2, 0),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1),
    "& p": {
      color: "red !important",
      margin: `${theme.spacing(0, 0, 1, 0)} !important`,
    },
  },
  textField: {
    margin: theme.spacing(0, 0, 2, 0),
  },
  submitBtn: {
    backgroundColor: "purple",
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
  head: {
    display: "flex",
  },
}));
