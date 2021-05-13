const express = require("express");

const app = express();

app.get("/", function (request, response) {
  response.send("<h1>Hola Mundo desde express</h1>");
});

app.listen(3000);
