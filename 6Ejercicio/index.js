const express = require("express");

const app = express();

let estudiantes = [
  "ander",
  "blas",
  "bryham",
  "jorge",
  "naroa",
  "pablo",
  "rocio",
  "rosa",
  "victor",
];

app.get("/:estudiantes", function (request, response) {
  let name = request.params.estudiantes;
  estudiantes.push(name);
  response.send(estudiantes);
});

app.listen(3000)