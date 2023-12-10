const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const routes = require("./router");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({ optionsSuccessStatus: 200 }));
app.use("/public", express.static(__dirname + "/public"));
app.use("/", routes);
const port = process.env.PORT || 3000;
var listenr = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
