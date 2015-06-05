var Pizza = {
  cost: 12,
  quantity: function(amount) {
    this.cost = this.cost * amount;
    return this.cost;
  }
}
