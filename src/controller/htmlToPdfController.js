import fs, { link } from "fs";
import pdf from "html-pdf";
import { sendMail } from "../utils/sendmail.js";
let uploadMultipleFile = async (req, res, next) => {
  try {
    let output = Date.now() + "output.pdf";
    let links = req.files.map((value, i) => {
      return `http://localhost:8000/${value.filename}`;
    });
    let filepath = req.files.map((value, i) => {
      return value.path;
    });
    // console.log(...filepath);

    let html = fs.readFileSync(...filepath, "utf8");
    let options = { format: "Letter" };

    pdf.create(html, options).toFile(`./public/${output}`, function (err, res) {
      if (err) return console.log(err);
      console.log(res);
    });
    await sendMail({
      from: '"Anjan KC" <kcanjan2020@gmail.com>',
      to: [req.body.email],
      cc: [req.body.email],
      bcc: [req.body.email],
      attachments: [
        {
          path: `./public/${output}`,
        },
      ],

      subject: "Document Conversion Confirmation",
      html: `<h1>Your document has been converted successfully.<h1>`,
    });
    res.json({
      success: true,
      message:
        " Your Html file is successfully converted to pdf. Please check your email for  Confirmation !",
      originalHtmlFileUrl: links,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Html to pdf conversion failed",
    });
  }
};

export default uploadMultipleFile;
