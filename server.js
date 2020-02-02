const express = require("express");
const lowdb = require("lowdb");
const app = express();
const Filesync = require("lowdb/adapters/Filesync");
const adapter = new Filesync("db.json");
const db = lowdb(adapter);
const port = process.env.PORT || 8000;

db.defaults({ Product: [], Varukorg: [] }).write();

const Model3 = {
  id: 1,
  Name: "Tesla Model 3",
  Price: "200 000 kr"
};

/*db.get('Product')
.push(Model3).write();*/

app.get("/", async (request, response) => {
  console.log(request.url);
  throw new Error("Opps!! Something went wrong");
});

const TeslaModel3 = db
  .get("Product")
  .find({ id: 1 })
  .value();

const TeslamodelS = db
  .get("Product")
  .find({ id: 2 })
  .value();

const TeslaCyberTruck = db
  .get("Product")
  .find({ id: 3 })
  .value();

app.get("/Products", function(request, response) {
  response.send("Välj bland dessa alternativ: (Se i Terminalen)");
  console.log("Välj bland dessa modeller");
  console.log(TeslaModel3);
  console.log(TeslamodelS);
  console.log(TeslaCyberTruck);
});

app.get("/ShoppingCart", function(request, response) {
  response.send("Detta är din kundvagn (Se i Terminalen)");
  console.log("Detta är din kundvagn");
  const cart = db.get("Varukorg").value();
  console.log(cart);

  const totalPrice = db
    .get("Varukorg")
    .map("Price")
    .value();
  console.log(totalPrice);
});

app.get("/1", async (request, response) => {
  const existModel3 = db
    .get("Varukorg")
    .find({ id: 1 })
    .value();

  if (typeof existModel3 === "undefined") {
    db.get("Varukorg")
      .push(TeslaModel3)
      .write();
    response.send("Lade till Tesla Model 3 i Varukorgen");
    console.log("Lade till Tesla Model 3 i varukorgen");
  } else {
    console.log("Tesla Model 3 finns redan i Varukorgen");
    response.send("Tesla Model 3 finns redan i Varukorgen");
  }
});

app.get("/2", async (request, response) => {
  const existModelS = db
    .get("Varukorg")
    .find({ id: 2 })
    .value();

  if (typeof existModelS === "undefined") {
    response.send("Lade till Tesla Model S i varukorgen");
    db.get("Varukorg")
      .push(TeslamodelS)
      .write();
    console.log("Lade till Tesla Model S i varukorgen");
  } else {
    console.log("Tesla Model S finns redan i Varukorgen");
    response.send("Tesla Model S finns redan i Varukorgen");
  }
});

app.get("/3", async (request, response) => {
  const existCyber = db
    .get("Varukorg")
    .find({ id: 3 })
    .value();

  if (typeof existCyber === "undefined") {
    db.get("Varukorg")
      .push(TeslaCyberTruck)
      .write();
    console.log("Lade till Tesla Cybertruck i varukorgen");
    response.send("Lade till Tesla CyberTruck i varukorgen");
  } else {
    console.log("Tesla Cybertruck finns redan i Varukorgen");
    response.send("Tesla Cybertruck finns redan i Varukorgen");
  }
});

app.get("/1del", async (request, response) => {
  const removeModel3 = db
    .get("Varukorg")
    .find({ id: 1 })
    .value();

  if (typeof removeModel3 === "undefined") {
    console.log("Du har inte Tesla Model 3 i Varukorgen");
    response.send("Du har inte Tesla Model 3 i Varukorgen");
  } else {
    db.get("Varukorg")
      .remove({ id: 1 })
      .write();
    console.log("Tog bort Tesla Model 3 från kundvagnen");
    response.send("Tog bort Tesla Model 3 från Varukorgen");
  }
});

app.get("/2del", async (request, response) => {
  const removeModelS = db
    .get("Varukorg")
    .find({ id: 2 })
    .value();

  if (typeof removeModelS === "undefined") {
    console.log("Du har inte Tesla Model S i Varukorgen");
    response.send("Du har inte Tesla Model S i Varukorgen");
  } else {
    response.send("Tog bort Tesla Model S från Varukorgen");
    db.get("Varukorg")
      .remove({ id: 2 })
      .write();
    console.log("Tog bort Tesla Model S från kundvagnen");
  }
});

app.get("/3del", async (request, response) => {
  const removeCyber = db
    .get("Varukorg")
    .find({ id: 3 })
    .value();

  if (typeof removeCyber === "undefined") {
    console.log("Du har inte Tesla Cybertruck i Varukorgen");
    response.send("Du har inte Tesla Cybertruck i Varukorgen");
  } else {
    response.send("Tog bort Tesla Cybertruck från varukorgen");
    db.get("Varukorg")
      .remove({ id: 3 })
      .write();
    console.log("Tog bort Tesla Cybertruck från kundvagnen");
  }
});

app.get("*", function(request, response) {
  response.send("200 error, that product does not exist");
  console.log("200 error, that product does not exist");
});

/*const youCant = db.get('Varukorg')
                .find({id: 1})*/

/*db.get('Product')
.remove({Name: 'Tesla Model 3'})
.write();*/

app.listen(port);
