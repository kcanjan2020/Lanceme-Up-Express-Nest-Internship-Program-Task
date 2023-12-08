import { Router } from "express";
import upload from "../middleware/uploadFile.js";
import uploadMultipleFile from "../controller/htmlToPdfController.js";
let htmlToPdfRouter = Router();

htmlToPdfRouter
  .route("/")
  .post(upload.array("document", 5), uploadMultipleFile);

export default htmlToPdfRouter;
