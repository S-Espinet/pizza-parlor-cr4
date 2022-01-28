function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.pizzaCost = function () {
  let pizzaBaseCost = 10;
  let toppingsArray = this.toppings;
  let toppingsCost = toppingsArray.length * 1;
  pizzaCost = toppingsCost + pizzaBaseCost;
  return pizzaCost;
};