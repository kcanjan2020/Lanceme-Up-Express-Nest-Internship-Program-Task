import { Router } from "express";
import upload from "../middleware/uploadFile.js";
let htmlToPdfRouter = Router();
let uploadMultipleFile = async (req, res, next) => {
  // console.log(req.files);
  try {
    let links = req.files.map((value, i) => {
      return `http://localhost:8000/${value.filename}`;
    });

    res.json({
      success: true,
      message: "File uploaded Successfully",
      originalHtmlFileUrl: links,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Html to pdf conversion failed",
    });
  }
};

htmlToPdfRouter
  .route("/")
  .post(upload.array("document", 5), uploadMultipleFile);

export default htmlToPdfRouter;
