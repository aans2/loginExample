import "reflect-metadata";

import express from "express";
import cors from "cors";

import "./database/connect";
import routes from "./routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(8080, () => console.log("Server Start"));
