// From Dan's Guides: https://github.com/justsml/guides/tree/master/express
// TODO: INSTALL PRE-REQS:
//  npm install express cors body-parser morgan nodemon
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = parseInt(process.env.PORT || 3000);
const router = module.exports = require('express').Router();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan(process.env.NODE_ENV !== "production" ? "dev" : "combined"));
app.use(cors({ origin: true, credentials: true }));
// Optional Static file handler:
app.use("/", express.static("./build"));

// TODO: ADD (MOUNT) YOUR MIDDLEWARE (ROUTES) HERE:
// Example:
app.use('/api/trips', require('./routes/trips'))

// These 2 `app.use` MUST be last `.use`'s
app.use(notFound);
app.use(errorHandler);

function notFound(req, res, next) {
  const url = req.originalUrl;
  if (!/favicon\.ico$/.test(url) && !/robots\.txt$/.test(url)) {
    // Don't log less important (automatic) browser requests
    console.error("[404: Requested file not found] ", url);
  }
  res.status(404).send({ error: "Url not found", status: 404, url });
}

function errorHandler(err, req, res, next) {
  console.error("ERROR", err);
  const stack = process.env.NODE_ENV !== "production" ? err.stack : undefined;
  res.status(500).send({ error: err.message, stack, url: req.originalUrl });
}

app
  .listen(port)
  .on("error", console.error.bind(console))
  .on("listening", console.log.bind(console, "Listening on " + port));
