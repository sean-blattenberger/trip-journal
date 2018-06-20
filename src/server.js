const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = parseInt(process.env.PORT || 3000);
const router = module.exports = require('express').Router();
const path = require('path')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan(process.env.NODE_ENV !== "production" ? "dev" : "combined"));
app.use(cors());

app.use("/", express.static("./build"));


app.use('/api/trips', require('./routes/trips'))
app.use('/api/notes', require('./routes/notes'))
app.get('*', function (request, response, next) {
  response.sendfile(path.resolve('./build/index.html'));
});


function notFound(req, res, next) {
  const url = req.originalUrl;
  if (!/favicon\.ico$/.test(url) && !/robots\.txt$/.test(url)) {
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
