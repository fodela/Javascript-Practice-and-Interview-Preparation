const PORT = process.env.PORT || 3500;
const express = require("express");
const path = require("path");

const app = express();

app.get("^/$|/index(.html)?", (req, res) => {
  //   res.sendFile("./views/index.html", { root: __dirname });

  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page.html");
});

// Route handlers
app.get(
  "/hello(.html)?",
  (req, res, next) => {
    console.log("Loading hello.html");
    next();
  },
  (req, res) => {
    res.send("Hello Fodela!!!");
  }
);

const one = (req, res, next) => {
  console.log("FuncOne");
  next();
};
const two = (req, res, next) => {
  console.log("FuncTwo");
  next();
};
const three = (req, res) => {
  console.log("FuncThree");
  res.send("Finished!");
};
// Function chaining
app.get("/chain(.html)?", [one, two, three]);

// Default route -> 404
app.get("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
