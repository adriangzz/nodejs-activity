const express = require("express");
var categoriesRouter = require("./category");
const app = express();
const port = 3000;

app.use("/", categoriesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
