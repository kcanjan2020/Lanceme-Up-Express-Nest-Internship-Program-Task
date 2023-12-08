import express, { json } from "express";
import cors from "cors";
import { port } from "./config.js";
let expressApp = express();
expressApp.use(json());
expressApp.use(cors());
expressApp.use(express.static("./public"));
expressApp.listen(port, () => {
  console.log(`Express app is listening at port ${port}`);
});
