const PORT = process.env.PORT || 3500;
const express = require("express");
const path = require("path");
const { logger } = require("./middleware/logEvents.ts");
const errorHandler = require("./middleware/errorHandler.ts");
const cors = require("cors");
const corsOptions = require("./config/coresOptions");
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

app.use("/", require("./routes/root"));

app.use("/employees", require("./routes/api/employees"));

// Third party
// Cross Origin Resource Sharing

app.use(cors(corsOptions));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
