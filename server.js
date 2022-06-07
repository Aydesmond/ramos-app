const express = require("express");
const path = require("path");

const app = express();

/*** Server static assets in production ***/
if (process.env.NODE_ENV === "production") {
  // Set static folder
  //   app.use(express.static("./index.html"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./", "index.html"));
  });
}

app.listen(9090, () => {
  console.log("server running on port 9090....");
});
