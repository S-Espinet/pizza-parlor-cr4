Describe: Pizza()

Test1: "It should return a Pizza object with toppings and size properties."
Code: const myPizza = new Pizza(["pepperoni", "olives"], "small")
Expected Output: Pizza { toppings: ["pepperoni", "olives"], size: "small" }

Test2: "It should return the cost of a small pizza."
Code: const myPizza = new Pizza(["pepperoni", "olives"], "small")
      Pizza.prototype.pizzaCost = function() {
      let pizzaBaseCost = 10;
      let toppingsArray = this.toppings;
      let toppingsCost = toppingsArray.length x 1;
      pizzaCost = toppingsCost + pizzaBaseCost;
      return pizzaCost;
      };
Expected Output: 12
