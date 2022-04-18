const express = require("express");
var path = require("path");
var categoriesRouter = require("./category");

const app = express();
const port = 3000;

app.use("/", categoriesRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
