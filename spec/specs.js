describe("Pizza", function() {
  describe("quantity", function() {
    it("gives a cost based on the quantity ordered", function() {
      var testPizza = new Pizza()
      testPizza.quantity(1)
      expect(testPizza.cost).to.equal(12)
    });
  });
  describe("topping", function() {
    it("gives a cost based on the toppings selected", function() {
      var testPizza = new Pizza()
      testPizza.topping("cheese")
      expect(testPizza.cost).to.equal(12)
    });
    it("gives a cost based on the toppings selected", function() {
      var testPizza = new Pizza()
      testPizza.topping("sausage")
      expect(testPizza.cost).to.equal(13.5)
  });
});
 describe("size", function() {
   it("gives a cost based on the size selected", function() {
     var testPizza = new Pizza()
     testPizza.pizzaSize("extra large")
     expect(testPizza.cost).to.equal(15)
   });
   it("gives a cost based on the size selected", function() {
     var testPizza = new Pizza()
     testPizza.pizzaSize("large")
     expect(testPizza.cost).to.equal(14)
  });
 });
});
