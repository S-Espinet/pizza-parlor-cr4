function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.pizzaCost = function () {
  let pizzaBaseCost = 10;
  let toppingsArray = this.toppings;
  if (toppingsArray.length === 0) {
    return "Please select at least one option."
  }
  else if (toppingsArray.length !== 0 && this.size === "small") {
    return toppingsArray.length * 1 + pizzaBaseCost
  }
  else if (toppingsArray.length !== 0 && this.size === "medium") {
    return toppingsArray.length * 2 + pizzaBaseCost + 2;
  }
  else {
    return toppingsArray.length * 3 + pizzaBaseCost + 3;
}
};