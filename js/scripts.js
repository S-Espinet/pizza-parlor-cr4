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
    return toppingsArray.length * 1 + pizzaBaseCost
  }
  else if (toppingsArray.length !== 0 && this.size === "medium") {
    return toppingsArray.length * 2 + pizzaBaseCost + 2;
  }
  else {
    return toppingsArray.length * 3 + pizzaBaseCost + 3;
}
};


$(document).ready (function() {
  let size = $("input:radio[name=size]:checked").val();
  let toppingsArray = [];
     if ($("#cheese").is(":checked")) {
      toppingsArray.push("#cheese")
    };
   if ($("#onions").is(":checked")) {
      toppingsArray.push("#onions")
    };
    let myPizza = new Pizza(toppingsArray, size);
    $("button#cost").click (function() {
     myPizza.pizzaCost(myPizza);
    })
});