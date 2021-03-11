const express = require("express");
const colors = require("colors");
const logger = require("./middleware/logger");
const bodyParser = require("body-parser");
const port = 3000;
const Info = console.info;

const app = express();

app.use(bodyParser.json());

// Init middleware
app.use(logger);

let name = "Birol";

// Get /
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

// Get /name
app.get("/name", (req, res) => {
  res.json(name);
});

app.post("/name/:id", (req, res) => {
  //console.info('id:'+req.params.id);
  res.json(req.params.id);
});

app.put("/name/:id", (req, res) => {
  //console.info(req.body);
  //console.info('id:'+req.params.id);
  res.json(req.params.id);
});

app.listen(port, () => {
  Info(`App listening at http://localhost:${port}`.bold.green);
});
