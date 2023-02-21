# Node, Express && Mongodb

## Node

### Imports /Require

```js
const packageName = require("package");
```

### Exports

```js
module.exports = moduleName;
```

### Servers

```js
// Create server
const myServer = http.createServer("PORT", (req, res) => {
  // Some logics
});

myServer.listen(PORT, () => {});
```

## Express

```js
const express = require("express");
const path = require("path");

const app = express();

// serve index page
app.get("^/&", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Redirect a page
app.get("old-page(.html)?", (req, res) => {
  res.redirect(301, path.join(__dirname, "views", "/new-page.html"));
});

// Route handlers
app.get(
  "/download(.html)?",
  (res, req, next) => {
    console.log("Navigating to the download page...");
    next();
  },
  app.get((req, res) => {
    res.send("Downloading!!!");
  })
);

// Function chaining
const funcOne = (req,res,next)={
    console.log("One")
    next()
};
const functwo = (req,res,next)={
    console.log("two")
    next()
};
const funcThree = (req,res)={
    console.log("Three")
    res.send("Finished!")
}

app.get("/chain(.html)?",[funcOne,funcTwo,funcThree])

// Add 404 page
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json("404 Not Found");
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.listen(PORT, () => {});
```

### Middlewares

Anything between the request and the response.

#### 3 types of middleware

1. Built in
2. Custom
3. Third party

##### Built in middleware

Use => used to apply middleware to all routes that are coming in.

```js
app.use(middleware_here);
```

1. urlencoded => used to deal with url / form data

```js
app.use(express.urlencoded({ extended: false }));
```

2. json => used to deal with json data

```js
app.use(express.json());
```

3. static => used to serve static files

```js
app.use(express.static(path.join(__dirname, "public")));
```

##### Custom middleware

```js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});
```

##### Third party

###### Cross Origin Resource Sharing

```js
const cors = require("cors");
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
```

### Routes

1. Define a router
2. Use router.get instead of app.get to get the needed files.
3. Use the defined route in your server.
4. Supply static file to the routes

```js
/* =======Define a router=========*/
// routes/subdir.js
const express = require("express");
const router = express.Router();
const path = require("path");

router.use("/endpoint", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "subdir", "endpoint.html"));
});

module.exports = router;
```

```js
/* =======Use the define routes in sever=========*/
// server.js
app.use("/subdir", require("./routes/subdir.js"));

/* ========Supply static file to the routes========*/
app.use("/subdir", express.static(path.join(__dirname, "public"))));
```
