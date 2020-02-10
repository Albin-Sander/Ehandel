window.onload = async function getProducts() {
  fetch("http://localhost:8000/product", {
    method: "get",
    mode: "cors"
  })
    .then(response => response.json())
    .then(data => (setdata = data))
    .then(function() {
      logProducts();
    })
    .catch(error => error);
};

function logProducts() {
  console.log(setdata);
  for (let i = 0; i < setdata.length; i++) {
    console.log(setdata[i].Price);
  }
}

window.onload = async function getShoppingCart() {
  fetch("http://localhost:8000/ShoppingCart", {
    method: "get",
    mode: "cors"
  })
    .then(response => response.json())
    .then(data => (dataset = data))
    .then(function() {
      createHtml();
    })
    .catch(error => error);
};

function createHtml() {
  console.log(dataset);
  for (let i = 0; i < dataset.length; i++) {
    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", i);
    document.querySelector(".grid-container").appendChild(createDiv);

    var createModel3Text = document.createElement("p");
    createModel3Text.innerHTML = dataset[i].Name;
    document.querySelector(".grid-container").appendChild(createModel3Text);

    var createModel3Img = document.createElement("img");
    createModel3Img.src = dataset[i].img;

    console.log(dataset[i].img);
    document.querySelector(".grid-container").appendChild(createModel3Img);

    var createModel3Price = document.createElement("p");

    createModel3Price.innerHTML = dataset[i].Price;
    document.querySelector(".grid-container").appendChild(createModel3Price);

    var createModel3Btn = document.createElement("button");
    createModel3Btn.setAttribute("id", "button" + i);

    createModel3Btn.innerHTML = "Remove from cart";
    document.querySelector(".grid-container").appendChild(createModel3Btn);

    console.log(dataset[i].id);

    document.getElementById("button" + i).onclick = function removeProduct() {
      fetch("http://localhost:8000/Shoppingcart?id=" + dataset[i].id, {
        mode: "cors",
        method: "delete"
      });
      alert("Removed " + dataset[i].Name + " from shoppingcart");
    };
  }
}
