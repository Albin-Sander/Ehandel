document.getElementById("btn1").onclick = function fetchModel3() {
  fetch("http://localhost:8000/1", { mode: "no-cors" });
  alert("Lade till Tesla Model 3 i varukorgen");
};

document.getElementById("btn2").onclick = function fetchModelS() {
  fetch("http://localhost:8000/2", { mode: "no-cors" });
  alert("Lade till Tesla Model S i varukorgen");
};

document.getElementById("btn3").onclick = function fetchCyberTruck() {
  fetch("http://localhost:8000/3", { mode: "no-cors" });
  alert("Lade till Tesla Cybertruck i varukorgen");
};