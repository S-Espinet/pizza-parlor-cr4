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
  if (toppingsArray.length !== 0 && this.size === "small") {
    return toppingsArray.length * 1 + pizzaBaseCost;
  }
  else if (toppingsArray.length !== 0 && this.size === "medium") {
    return toppingsArray.length * 2 + pizzaBaseCost + 2;
  }
  else {
    return toppingsArray.length * 3 + pizzaBaseCost + 3;
}
};


$(document).ready(function() {
  $("button#cost").click (function() {
    let size = $("input:radio[name=size]:checked").val();
    let inputtedToppingsArray = [];
    if ($("#cheese").is(":checked")) {
      inputtedToppingsArray.push("cheese");
    };
    if ($("#onions").is(":checked")) {
      inputtedToppingsArray.push("onions");
    };
    if ($("#olives").is(":checked")) {
      inputtedToppingsArray.push("olives");
    };
    if ($("#sausage").is(":checked")) {
      inputtedToppingsArray.push("sausage");
    };
    if ($("#bell-pepper").is(":checked")) {
      inputtedToppingsArray.push("bell-pepper");
    };
    if ($("#pineapple").is(":checked")) {
      inputtedToppingsArray.push("pineapple");
    };
    if ($("#pepperoni").is(":checked")) {
      inputtedToppingsArray.push("pepperoni");
    };
    if ($("#canadian-bacon").is(":checked")) {
      inputtedToppingsArray.push("canadian-bacon");
    };
    if ($("#tomato").is(":checked")) {
      inputtedToppingsArray.push("tomato");
    };
    if ($("#mushroom").is(":checked")) {
      inputtedToppingsArray.push("mushroom");
    };
    if ($("#spinach").is(":checked")) {
      inputtedToppingsArray.push("spinach");
    };
    let myPizza = new Pizza(inputtedToppingsArray, size);
    let pizzaCost = myPizza.pizzaCost();
    if (isNaN(parseInt(pizzaCost)) === true) {
      $("#pizzaCost").html(pizzaCost);
      $("#pizzaCost").show(pizzaCost);
    }
    else {
      $("#pizzaCost").html("$" + pizzaCost + ".00");
      $("#pizzaCost").show("$" + pizzaCost + ".00");
    };
  });
});