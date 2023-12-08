export let uploadMultipleFile = async (req, res, next) => {
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
      message: "File upload failed",
    });
  }
};
