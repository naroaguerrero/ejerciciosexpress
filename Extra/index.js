let cesta = [];
let almacen = require("./almacen");

const express = require("express");
const app = express();

app.get("/seccion/:sec", function (req, res) {
  let found = false;
  let parrafo = "";
  for (let i = 0; i < almacen.length; i++) {
    if (almacen[i].seccion.toLowerCase() === req.params.sec) {
      found = true;
      for (let j = 0; j < almacen[i].productos.length; j++) {
        parrafo += `<tr><td>${almacen[i].productos[j].nombre}</td><td>${almacen[i].productos[j].precio}</td><td>${almacen[i].productos[j].stock}</td></tr>`;
      }
      break;
    }
  }
  found
    ? res.send(`<table>${parrafo}</table>`)
    : res.send("La seccion elegida no existe, inténtelo de nuevo por favor");
});

app.get("/seccion/:sec/comprar/:producto/:cantidad", function (req, res) {
  console.log(req.params.sec, req.params.producto, req.params.cantidad);
  let sec = false;
  let prod = false;
  for (let i = 0; i < almacen.length && !sec; i++) {
    if (almacen[i].seccion.toLowerCase() === req.params.dep) {
      sec = true;
      for (let j = 0; j < almacen[i].productos.length && !prod; j++) {
        if (almacen[i].productos[j].nombre === req.params.productos) {
          prod = true;
          if (almacen[i].productos[j].stock >= req.params.cantidad) {
            cesta.push({
              producto: almacen[i].productos[j].nombre,
              cantidad: req.params.cantidad,
              precio: almacen[i].productos[j].precio,
            });
            almacen[i].productos[j].stock -= req.params.cantidad;
            res.send(cesta);
            break;
          } else {
            res.send("No hay stock suficiente, lo sentimos");
            break;
          }
        }
      }
    }
  }
  if (!sec) {
    res.send("Seccion no encontrada, inténtelo de nuevo");
  }
  if (!prod) {
    res.send("Producto no encontrado, lo sentimos, estamos trabajando en ello");
  }
});

app.get("/cesta", function (req, res) {
  let parrafo = "";
  for (let i = 0; i < cesta.length; i++) {
    parrafo += `<tr><td>${cesta[i].producto}</td><td>${
      cesta[i].cantidad
    }</td><td>${cesta[i].cantidad * cesta[i].precio}€</td></tr>`;
  }
  res.send(`<table>${parrafo}</table>`);
});

app.get("/pagar", function (req, res) {
  cesta = [];
  res.send("La compra ha sido realizada con éxito. Muchas gracias por confiar en nosotros.");
});

app.listen(3000);