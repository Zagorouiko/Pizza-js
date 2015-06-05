var Pizza = {
  cost: 12,
  quantity: function(amount) {
    this.cost = this.cost * amount;
  },

  topping: function(toppings) {
    if (toppings == "cheese") {
      this.cost = this.cost + 0;
    } else if (toppings == "sausage") {
      this.cost = this.cost + 1.50;
    } else if (toppings == "pepperoni") {
      this.cost = this.cost + 1.50;
    }
  },

  pizzaSize: function(size) {
    if (size == "large") {
      this.cost = this.cost + 3;
    } else if (size == "medium") {
      this.cost = this.cost + 2;
    }
  }
};

$(document).ready(function() {
  var newPizza = Object.create(Pizza);

  $("form#Pizza").submit(function(event) {
    var inputtedQuantity = parseInt($("input#quantity").val());
    var inputtedTopping = $("select#topping").val();
    var inputtedSize = $("select#size").val();

    newPizza.quantity(inputtedQuantity)
    newPizza.topping(inputtedTopping)
    newPizza.pizzaSize(inputtedSize)

    $(".pizzacost").text(newPizza.cost);
    event.preventDefault();
  });
});
