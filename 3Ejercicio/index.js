const express = require("express");

const app = express();

let nombre = ["papa", "pepe", "pipi", "popo", "pupu"];

app.get("/persona", function (request, response) {
  response.send(nombre);
});
app.get("/persona/:nombre", function (request, response) {
  let name = request.params.name.toLowerCase;
  for (let i = 0; i < nombre.lenght; i++) {
    if (name === nombre[i]) {
      response.send(`Has elegido ${nombre}`);
    }
  }
});

app.listen(process.env.PORT || 3000);
