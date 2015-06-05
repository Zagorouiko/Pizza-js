var Pizza = {
  cost: 12,
  quantity: function(amount) {
    this.cost = this.cost * amount;
    return this.cost;
  },

  topping: function(toppings) {
    if (toppings == "cheese") {
      this.cost = this.cost + 0;
      return this.cost
    } else if (toppings == "sausage") {
      this.cost = this.cost + 1.50;
      return this.cost;
    } else if (toppings == "pepperoni") {
      this.cost = this.cost + 1.50;
      return this.cost;
    }
  }
}
