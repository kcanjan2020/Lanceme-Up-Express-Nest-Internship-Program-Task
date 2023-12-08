import fs, { link } from "fs";
import pdf from "html-pdf";
export let uploadMultipleFile = async (req, res) => {
  // console.log(req.files);
  try {
    let links = req.files.map((value, i) => {
      return `http://localhost:8000/${value.filename}`;
    });
    //convert uploaded html file to pdf
    let output = Date.now() + "output.pdf";
    let filepath = req.files.map((value, i) => {
      return value.path;
    });
    //console.log(...filepath);
    let html = fs.readFileSync(...filepath, "utf8");
    let options = { format: "Letter" };

    pdf.create(html, options).toFile(`./public/${output}`, function (err, res) {
      if (err) return console.log(err);
      console.log(res);
    });

    res.json({
      success: true,
      originalHtmlFileUrl: links,
      message: "File uploaded Successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "File upload failed",
    });
  }
};
