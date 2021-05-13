const express = require("express");

const app = express();

app.get("/:numero", function (request, response) {
  let numero = request.params.numero;
  let numAleatorio = Math.floor(Math.random() * (numero - 1) + 1);
  response.send(numAleatorio);
});

app.listen(3000);
