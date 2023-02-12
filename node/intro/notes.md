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

app.get("old-page(.html)?", (req, res) => {
  res.redirect(301, path.join(__dirname, "views", "/new-page.html"));
});

app.listen(PORT, () => {});
```
