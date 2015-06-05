var Pizza = {
  cost: 12,
  quantity: function(amount) {
    this.cost = this.cost * amount;
    return this.cost;
  },

  topping: function(toppings) {
    if (toppings = "cheese") {
      this.cost = this.cost + 0;
      return this.cost
    }
  }
}
