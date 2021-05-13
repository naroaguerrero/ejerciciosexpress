const express = require("express");

const app = express();

let saludo = require("./funcion");

app.get("/string", function (request, response) {
  response.send(saludo('Hola'));
});

app.listen(3000);
