const express = require("express");

const app = express();

let operacion = require("./function");
let array = require("./array");
const { response } = require("express");

app.get("/numero", function (request, response) {
  array[operacion] += 1;
  response.send(array);
});

app.get("/borrar/:numero", function (request, response) {
  let numero = require.params.numero;
  numero < array.length && numero >= 0
    ? (array[numero] = 0)
    : response.send("Error");
  response.send(array);
});

app.listen(3000);
