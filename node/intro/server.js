// const PORT = process.env.PORT || 3500;
const PORT = 3500;
const express = require("express");
const path = require("path");

const app = express();

app.get("^/$|/index(.html)?", (req, res) => {
  //   res.sendFile("./views/index.html", { root: __dirname });

  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
