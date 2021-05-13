const express = require("express");

const app = express();

let objeto = {
  nombre: "juan",
  apellidos: "pedro pedro",
  edad: 50,
};

app.get("/nombre/:name", function (request, response) {
  objeto.nombre = request.params.name;
  response.send(objeto.nombre);
});
app.get("/apellidos/:surname", function (request, response) {
  objeto.apellidos = request.params.surname;
  response.send(objeto.apellidos);
});
app.get("/edad/:age", function (request, response) {
  objeto.edad = request.params.age;
  response.send(objeto.edad);
});
app.get("/persona", function (request, response) {
  response.send(objeto);
});

app.listen(3000);
