describe('cryptosquare', function() {
  it("is true when the function calculates the length correctly of the inputted string", function() {
    expect(cryptosquare("helloyou").length).to.equal(3);
  });

});
