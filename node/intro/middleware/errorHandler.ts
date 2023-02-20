const { logEvents } = require("./logEvents.ts");

const errorHandler = (err, req, res, next) => {
  logEvents(`${req.method} ${req.path}`, "errLog.txt");
  console.error(err.stack);
  res.status(500).send(err.message);
};

module.exports = errorHandler;
