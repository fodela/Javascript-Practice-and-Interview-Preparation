const express = require("express");
const router = express.Router();
const path = require("path");
// Routes
router.get("^/$|/index(.html)?", (req, res) => {
  //   res.sendFile("./views/index.html", { root: __dirname });

  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});
router.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "new-page.html"));
});

router.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page.html");
});

// Route handlers
router.get(
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
router.get("/chain(.html)?", [one, two, three]);

// Default route -> 404
router.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "..", "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json("404 Not Found");
  } else {
    res.type("txt").send("404 Not Found");
  }
});

module.exports = router;
