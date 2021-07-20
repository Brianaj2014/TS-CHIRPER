const express = require('express');
const app = express();
const apiRouter = require("./routes");

app.use(express.json());