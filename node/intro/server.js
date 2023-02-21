const PORT = process.env.PORT || 3500;
const express = require("express");
const path = require("path");
const { logger } = require("./middleware/logEvents.ts");
const errorHandler = require("./middleware/errorHandler.ts");
const cors = require("cors");
const app = express();

/*middleware */

// custom middleware logger
app.use(logger);
// Built-in

// handle form data
app.use(express.urlencoded({ extended: false }));
// handle json data
app.use(express.json());
// handle static files
app.use(express.static(path.join(__dirname, "public")));
app.use("/subdir", express.static(path.join(__dirname, "public")));

// Provide routes
app.use("/subdir", require("./routes/subdir"));

app.use("/", require("./routes/root"));

app.use("/employees", require("./routes/api/employees"));

// Third party
// Cross Origin Resource Sharing
const whiteList = [
  "https://www.mysite.com",
  "http://localhost:3500",
  "http://localhost:3000",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
