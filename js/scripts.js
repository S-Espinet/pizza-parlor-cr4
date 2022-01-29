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
    $("button#cost").click (function() {
      console.log("Document is ready");
      let size = $("input:radio[name=size]:checked").val();
      console.log(size);
      let inputtedToppingsArray = [];
         if ($("#cheese").is(":checked")) {
          inputtedToppingsArray.push("#cheese");
      console.log(inputtedToppingsArray);
        };
       if ($("#onions").is(":checked")) {
          inputtedToppingsArray.push("#onions");
        };
        let myPizza = new Pizza(inputtedToppingsArray, size);
      console.log(myPizza)
     myPizza.pizzaCost(myPizza);
  console.log(myPizza);
    })
});