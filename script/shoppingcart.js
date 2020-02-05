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
    document
      .getElementById("TeslaModel3Image")
      .setAttribute("src", "img/model3.jpg");
    document.getElementById("model3Title").innerHTML = "Tesla Model 3";
    document.getElementById("model3Price").innerHTML = "Price: 200 000 kr";
    document.querySelector(".teslaModel3").innerHTML +=
      "<button id=removeModel3>Remove</button>";

    document.getElementById("removeModel3").onclick = function deleteModel3() {
      fetch("http://localhost:8000/Shoppingcart?id=1", {
        method: "Delete"
      });
      alert("Removed Tesla Model 3 from ShoppingCart");
    };
  }

  if (resultsId2 === true) {
    document
      .getElementById("TeslaModelSImage")
      .setAttribute("src", "/img/models.jpg");
    document.getElementById("modelSTitle").innerHTML = "Tesla Model S";
    document.getElementById("modelSPrice").innerHTML = "Price: 700 000 kr";
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
    document
      .getElementById("TeslaCyberImage")
      .setAttribute("src", "/img/cyber.jpg");
    document.getElementById("cyberTitle").innerHTML = "Tesla Cybertruck";
    document.getElementById("cyberPrice").innerHTML = "Price: 400 000 kr";
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
