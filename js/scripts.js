var Pizza = {
  cost: 12,

  topping: function(toppings) {
    if (toppings == "cheese") {
      this.cost += 0;
    } else if (toppings == "sausage") {
      this.cost += 1.50;
    } else if (toppings == "pepperoni") {
      this.cost += 1.50;
    }
  },

  pizzaSize: function(size) {
    if (size == "large") {
      this.cost += 3;
    } else if (size == "medium") {
      this.cost += 2;
    }
  },

  quantity: function(amount) {
    this.cost *= amount;
  }
};

$(document).ready(function() {
  var newPizza = Object.create(Pizza);

  $("form#Pizza").submit(function(event) {
    var inputtedQuantity = parseInt($("input#quantity").val());
    var inputtedTopping = $("select#topping").val();
    var inputtedSize = $("select#size").val();

    newPizza.topping(inputtedTopping)
    newPizza.pizzaSize(inputtedSize)
    newPizza.quantity(inputtedQuantity)

    $(".pizzacost").text(newPizza.cost);
    event.preventDefault();
  });
});
