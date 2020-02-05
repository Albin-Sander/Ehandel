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

    document.querySelector(".teslaModel3").innerHTML +=
      "<p id=model3Price>Price:200 000 kr</p>";

    document.querySelector(".teslaModel3").innerHTML +=
      "<button id=removeModel3>Remove</button>";

    document.getElementById("removeModel3").onclick = function deleteModel3() {
      fetch("http://localhost:8000/Shoppingcart?id=1", {
        method: "Delete"
      });
      if (alert("Removed Tesla Model 3 from ShoppingCart")) {
      } else window.location.reload();
    };
  }

  if (resultsId2 === true) {
    document.querySelector(".teslaModelS").innerHTML +=
      "<p id=modelSTitle>Tesla Model S</p>";

    document.querySelector(".teslaModelS").innerHTML +=
      "<img id=TeslaModelSImage src=/img/models.jpg>";

    document.querySelector(".teslaModelS").innerHTML +=
      "<p id=modelSPrice>Price: 700 000 kr</p>";

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
