function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.pizzaCost = function () {
  let pizzaBaseCost = 10;
  //let toppingsArray = this.toppings;
  let toppingsArray = []
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
  console.log("Document is ready")
  let myPizza = new Pizza()
  let toppingsArray = [];
  console.log(toppingsArray);
  if ($("#cheese").is(":checked")) {
  toppingsArray.push("#cheese");
  console.log(toppingsArray);
}
  this.size = $("input:radio[name=size]:checked").val();
  $("button#cost").click (function() {
    myPizza.pizzaCost();
    console.log(myPizza);
  })
})