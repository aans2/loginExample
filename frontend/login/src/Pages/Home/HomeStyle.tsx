// Third party libs
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    flexDirection: "column",
  },
  logoutBtn: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#000000",
    backgroundColor: "#6163CF",
  },
}));
