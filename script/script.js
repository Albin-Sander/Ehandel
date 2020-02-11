//GET Products
window.onload = async function getProducts() {
  fetch("http://localhost:8000/product", {
    method: "get"
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
    //Model 3
    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", i);
    document.querySelector(".grid-container").appendChild(createDiv);

    var createModel3Text = document.createElement("p");
    createModel3Text.innerHTML =
      dataset[i].Name + "," + " Price: " + dataset[i].Price;
    document.querySelector(".grid-container").appendChild(createModel3Text);

    var createModel3Img = document.createElement("img");
    createModel3Img.src = dataset[i].img;

    console.log(dataset[i].img);
    document.querySelector(".grid-container").appendChild(createModel3Img);

    var createModel3Btn = document.createElement("button");
    createModel3Btn.setAttribute("id", "button" + i);

    createModel3Btn.innerHTML = "Add to cart";
    document.querySelector(".grid-container").appendChild(createModel3Btn);

    console.log(dataset[i].id);

    document.getElementById("button" + i).onclick = function fetchModel3() {
      fetch("http://localhost:8000/Shoppingcart?id=" + dataset[i].id, {
        mode: "no-cors",
        method: "post"
      });

      alert("Lade till" + dataset[i].Name + " i varukorgen");
    };
  }
}
//Get Shoppingcart
var setdata;
document.getElementById(
  "showshopping"
).onclick = async function fetchShopping() {
  fetch("http://localhost:8000/Shoppingcart", {
    method: "get",
    mode: "cors"
  })
    .then(response => response.json())
    .then(data => (setdata = data))
    .then(function() {
      createShoppingList();
    })
    .catch(error => error);
};

function createShoppingList() {
  for (let i = 0; i < setdata.length; i++) {
    console.log(setdata[i].Name);
    let seeShoppingCart = document.createElement("li");
    seeShoppingCart.innerHTML = setdata[i].Name;
    document.querySelector(".shoppingcartlist").appendChild(seeShoppingCart);
  }
}
