var dataset;
window.onload = async function getShoppingCart() {
  fetch("http://localhost:8000/Shoppingcart", {
    method: "get"
  })
    .then(response => response.json())
    .then(data => (dataset = data))
    .then(function() {
      logData();
    })
    .catch(error => error);
};

function logData() {
  console.log(dataset);
  for (var i = 0; i < 1; i++) {
    var model3Sum = dataset[i];
  }

  for (var i = 0; i < 1; i++) {
    var modelSSum = dataset[i];
  }

  let myJson = JSON.stringify(dataset);
  console.log(myJson);
  let resultsId1 = myJson.includes("Tesla Model 3");
  let resultsId2 = myJson.includes("Tesla Model S");
  let resultsId3 = myJson.includes("Tesla Cybertruck");

  if (resultsId1 === true) {
    document.querySelector(".teslaModel3").innerHTML +=
      "<p id=model3Title>Tesla Model 3</p>";

    document.querySelector(".teslaModel3").innerHTML +=
      "<img id=TeslaModel3Image src=img/model3.jpg>";

    if (model3Sum.Price == "200 000 kr") {
      var para = document.createElement("p");
      para.innerHTML = model3Sum.Price;

      document.querySelector(".teslaModel3").appendChild(para);
    } else {
      var para2 = document.createElement("p");
      para2.innerHTML = "200 000 kr";
      document.querySelector(".teslaModel3").appendChild(para2);
    }

    document.querySelector(".teslaModel3").innerHTML +=
      "<button id=removeModel3>Remove</button>";

    document.getElementById("removeModel3").onclick = function deleteModel3() {
      fetch("http://localhost:8000/Shoppingcart?id=1", {
        method: "Delete"
      });

      if (confirm("Removed Tesla Model 3 from ShoppingCart") == true) {
        window.location.reload(true);
      }
    };
  }

  if (resultsId2 === true) {
    document.querySelector(".teslaModelS").innerHTML +=
      "<p id=modelSTitle>Tesla Model S</p>";

    document.querySelector(".teslaModelS").innerHTML +=
      "<img id=TeslaModelSImage src=/img/models.jpg>";

    if (modelSSum.Price == "700 000 kr") {
      var x = document.createElement("p");
      x.innerHTML = modelSSum.Price;

      document.querySelector(".teslaModelS").appendChild(x);
    } else {
      var y = document.createElement("p");
      y.innerHTML = "200 000 kr";
      document.querySelector(".teslaModelS").appendChild(y);
    }

    document.querySelector(".teslaModelS").innerHTML +=
      "<button id=removeModelS>Remove</button>";

    document.getElementById("removeModelS").onclick = function DeleteModelS() {
      fetch("http://localhost:8000/Shoppingcart?id=2", {
        method: "Delete"
      });
      alert("Removed Tesla Model S from Shoppingcart");
    };
  }

  if (resultsId3 === true) {
    document.querySelector(".teslaCyberTruck").innerHTML +=
      "<p id=cyberTitle>Tesla Cybertruck</p>";

    document.querySelector(".teslaCyberTruck").innerHTML +=
      "<img id=TeslaCyberImage src=/img/cyber.jpg />";

    document.querySelector(".teslaCyberTruck").innerHTML +=
      "<p id=cyberPrice>Price: 400 000 kr</p>";

    document.querySelector(".teslaCyberTruck").innerHTML +=
      "<button id=removeCyber>Remove</button>";

    document.getElementById("removeCyber").onclick = function deleteCyber() {
      fetch("http://localhost:8000/Shoppingcart?id=3", {
        method: "Delete"
      });
      alert("Removed Tesla Cybertruck from Shoppingcart");
    };
  }
}

/*async function loadProducts() {
  let data = await getShoppingCart();
  console.log(data);
}*/
