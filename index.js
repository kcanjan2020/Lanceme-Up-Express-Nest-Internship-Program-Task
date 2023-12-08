import express, { json } from "express";
import cors from "cors";
import { port } from "./config.js";
import connectToMongoDb from "./src/databaseConnection/mongoDbConnection.js";
let expressApp = express();
expressApp.use(json());
expressApp.use(cors());
expressApp.use(express.static("./public"));
expressApp.listen(port, () => {
  console.log(`Express app is listening at port ${port}`);
});
connectToMongoDb();
