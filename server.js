const express = require("express");
const lowdb = require("lowdb");
const app = express();
const Filesync = require("lowdb/adapters/Filesync");
const adapter = new Filesync("db.json");
const db = lowdb(adapter);
const port = process.env.PORT || 8000;
var cors = require("cors");
app.use(cors());

const initiateDatabase = () => {
  const product = db.has("Product").value();
  const shoppingCart = db.has("Shoppingcart").value();

  if (!product) {
    db.defaults({ Product: [], Shoppingcart: [] }).write();
  }

  if (!shoppingCart) {
    db.defaults({ Product: [], Shoppingcart: [] }).write();
  }
};

//Add new Products
const addProduct = async (id, name, price, img) => {
  const data = await db
    .get("Product")
    .push({ id, name, price, img })
    .write();
  return data;
};

app.post("/product", async (req, res) => {
  const { id, name, price, img } = req.query;
  const data = await addProduct(id, name, price, img);
});

app.get("/product", (req, res) => {
  res.json(db.get("Product").value());
  return res;
});

//Add new items to shoppingcart

const addToShoppingCart = async id => {
  const lookInCart = await db
    .get("Shoppingcart")
    .find({ id })
    .value();

  if (lookInCart) {
    let message = "";
    return message;
  } else {
    let data = await db
      .get("Product")
      .find({ id })
      .value();

    if (data) {
      data = await db
        .get("Shoppingcart")
        .push(data)
        .write();
      return data;
    } else {
      message = false;
      return message;
    }
  }
};

app.post("/shoppingcart", async (req, res) => {
  const { id } = req.query;
  const data = await addToShoppingCart(id);
  let message = {
    success: true,
    message: "Product added to your cart"
  };

  if (typeof data == "string" || data instanceof String) {
    message = {
      success: false,
      message: "You already have this in your shoppingcart"
    };
  } else if (data === false) {
    message = {
      success: false,
      message: "That product does not exist"
    };
  }

  message.data = data[data.length - 1];
  return res.send(message);
});

app.get("/shoppingcart", (req, res) => {
  res.json(db.get("Shoppingcart").value());
  return res;
});

//Delete Products from Shoopingcart

const deleteProduct = async id => {
  const lookInCart = await db
    .get("Shoppingcart")
    .find({ id })
    .value();

  if (lookInCart) {
    let res = await db
      .get("Shoppingcart")
      .remove({ id })
      .write();
    return res;
  } else {
    res = "";
    return res;
  }
};

app.delete("/shoppingcart", async (req, res) => {
  const { id } = req.query;
  const data = await deleteProduct(id);

  if (typeof data === "string" || data instanceof String) {
    message = {
      success: false,
      message: "That product does not exist"
    };
  } else {
    message = {
      success: true,
      message: "Product deleted from shoppingcart"
    };
  }
  message.data = data[res.length - 1];
  return res.send(message);
});

app.listen(port, () => {
  console.log("Server started");
  initiateDatabase();
});
