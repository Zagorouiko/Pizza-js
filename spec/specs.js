describe("Pizza", function() {
  describe("quantity", function() {
    it("gives a cost based on the quantity ordered", function() {
      var testPizza = Object.create(Pizza)
      testPizza.quantity(1)
      expect(testPizza.cost).to.equal(12)
    });
  });
  describe("topping", function() {
    it("gives a cost based on the toppings selected", function() {
      var testPizza = Object.create(Pizza)
      testPizza.topping("cheese")
      expect(testPizza.cost).to.equal(12)
    });
  });
});
