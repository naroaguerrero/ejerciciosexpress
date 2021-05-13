const express = require("express");

const app = express();

let operacion = require("./function");
let array = require("./array");

app.get("/numero", function (request, response) {
  array[operacion] += 1;
  response.send(array);
});

app.listen(3000);
