const { EventEmitter } = require("events");
const logEvents = require("./logEvents.ts");

class Emitter extends EventEmitter {}

// initialize object
const myEmitter = new Emitter();

// add listener for the log event
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  // Emit event
  myEmitter.emit("log", "Log event emitted");
}, 2000);
//
