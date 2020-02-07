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
    var model3Fetch = dataset[0];
    var modelSFetch = dataset[1];
    var cyberTruckFetch = dataset[2];
  }
  console.log(model3Fetch.Name);
  console.log(modelSFetch.Name);
  console.log(cyberTruckFetch.Name);

  //Model 3
  var createModel3Text = document.createElement("p");
  createModel3Text.setAttribute("id", "model3Text");
  createModel3Text.innerHTML = dataset[0].Name;
  document.querySelector(".grid-container").appendChild(createModel3Text);

  var createModel3Img = document.createElement("img");
  createModel3Img.src = model3Fetch.img;
  createModel3Img.setAttribute("id", "model3image");
  console.log(model3Fetch.img);
  document.querySelector(".grid-container").appendChild(createModel3Img);

  var createModel3Price = document.createElement("p");
  createModel3Price.setAttribute("id", "model3price");
  createModel3Price.innerHTML = model3Fetch.Price;
  document.querySelector(".grid-container").appendChild(createModel3Price);

  var createModel3Btn = document.createElement("button");
  createModel3Btn.setAttribute("id", "btn1");
  createModel3Btn.innerHTML = "Add to cart";
  document.querySelector(".grid-container").appendChild(createModel3Btn);

  //ModelS

  var createModelSText = document.createElement("p");
  createModelSText.setAttribute("id", "modelsText");
  createModelSText.innerHTML = modelSFetch.Name;
  document.querySelector(".grid-container").appendChild(createModelSText);

  var createModelSImg = document.createElement("img");
  createModelSImg.src = modelSFetch.img;
  createModelSImg.setAttribute("id", "modelsimage");
  document.querySelector(".grid-container").appendChild(createModelSImg);

  var createModelSPrice = document.createElement("p");
  createModelSPrice.setAttribute("id", "modelsprice");
  createModelSPrice.innerHTML = modelSFetch.Price;
  document.querySelector(".grid-container").appendChild(createModelSPrice);

  var createModelSBtn = document.createElement("button");
  createModelSBtn.setAttribute("id", "btn2");
  createModelSBtn.innerHTML = "Add to cart";
  document.querySelector(".grid-container").appendChild(createModelSBtn);

  //Cybertruck

  var createCyberText = document.createElement("p");
  createCyberText.setAttribute("id", "cybertruckText");
  createCyberText.innerHTML = cyberTruckFetch.Name;
  document.querySelector(".grid-container").appendChild(createCyberText);

  var createCyberImg = document.createElement("img");
  createCyberImg.src = cyberTruckFetch.img;
  createCyberImg.setAttribute("id", "cybertruckimage");
  document.querySelector(".grid-container").appendChild(createCyberImg);

  console.log(cyberTruckFetch.Price);

  var createCyberPrice = document.createElement("p");
  createCyberPrice.setAttribute("id", "cybertruckprice");
  createCyberPrice.innerHTML = cyberTruckFetch.Price;
  document.querySelector(".grid-container").appendChild(createCyberPrice);

  var createCyberBtn = document.createElement("button");
  createCyberBtn.setAttribute("id", "btn3");
  createCyberBtn.innerHTML = "Add to cart";
  document.querySelector(".grid-container").appendChild(createCyberBtn);

  document.getElementById("btn1").onclick = function fetchModel3() {
    fetch("http://localhost:8000/Shoppingcart?id=1", {
      mode: "no-cors",
      method: "post"
    });
    alert("Lade till Tesla Model 3 i varukorgen");
  };

  document.getElementById("btn2").onclick = function fetchModelS() {
    fetch("http://localhost:8000/Shoppingcart?id=2", {
      mode: "no-cors",
      method: "post"
    });
    alert("Lade till Tesla Model S i varukorgen");
  };

  document.getElementById("btn3").onclick = function fetchCyberTruck() {
    fetch("http://localhost:8000/Shoppingcart?id=3", {
      mode: "no-cors",
      method: "post"
    });
    alert("Lade till Tesla Cybertruck i varukorgen");
  };
}
