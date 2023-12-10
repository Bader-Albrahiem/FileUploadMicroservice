let express = require("express");
let router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
        "." +
        file.mimetype.substring(file.mimetype.indexOf("/") + 1)
    );
  },
});
const upload = multer({ storage: storage });
router.get("/", (req, res) => {
  res.sendFile(__dirname + "/View/index.html");
});

router.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size,
  });
});
module.exports = router;
