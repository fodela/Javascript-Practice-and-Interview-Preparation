// const PORT = process.env.PORT || 3500;
const PORT = 3500;
const express = require("express");
const path = require("path");

const app = express();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
