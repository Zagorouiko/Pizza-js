var Pizza = {
  cost: 12,

  topping: function(toppings) {
    if (toppings == "cheese") {
      this.cost += 0;
    } else if (toppings == "sausage") {
      this.cost += 1.50;
    } else if (toppings == "pepperoni") {
      this.cost += 1.50;
    } else if (toppings == "pineapple") {
      this.cost += .5;
    } else if (toppings == "olives") {
      this.cost += .5;
    }
  },

  extraTopping: function(toppings) {
    if (toppings == "cheese") {
      this.cost += 0;
    } else if (toppings == "sausage") {
      this.cost += 1.50;
    } else if (toppings == "pepperoni") {
      this.cost += 1.50;
    } else if (toppings == "pineapple") {
      this.cost += .5;
    } else if (toppings == "olives") {
      this.cost += .5;
    }
  },

  pizzaSize: function(size) {
    if (size == "extra large") {
      this.cost += 3;
    } else if (size == "large") {
      this.cost += 2;
    } else if (size == "medium") {
      this.cost;
    }
  },

  quantity: function(amount) {
    this.cost *= amount;
  }
};

$(document).ready(function() {
  var newPizza = Object.create(Pizza);
  newPizza.cost = 0;

  $("form#Pizza").submit(function(event) {

    newPizza.cost = 12;
    var inputtedQuantity = parseInt($("input#quantity").val());
    var inputtedTopping = $("select#topping").val();
    var inputtedSize = $("select#size").val();
    var inputtedExtraToppings = $("select#topping2").val();

    newPizza.topping(inputtedTopping)
    newPizza.extraTopping(inputtedExtraToppings)
    newPizza.pizzaSize(inputtedSize)
    newPizza.quantity(inputtedQuantity)

    $(".pizzacost").text(newPizza.cost);
    event.preventDefault();

    $("input#quantity").val("");
  });
});
