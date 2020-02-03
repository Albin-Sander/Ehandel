window.onload = function getShoppingCart() {
  fetch("http://localhost:8000/Shoppingcart", {
    mode: "no-cors",
    method: "get"
  });
};
