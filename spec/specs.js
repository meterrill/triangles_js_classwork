describe('triType', function() {

  it("checks for a valid triangle", function() {
    expect(triType(2,4,7)).to.equal("Not a Valid Triangle!");
  });

  it("checks for an equilateral triangle", function() {
    expect(triType(2,2,2)).to.equal("Equilateral");
  });

  it("checks for an isosceles triangle", function() {
    expect(triType(2,2,4)).to.equal("Isosceles");
  });

  it("checks for a scalene triangle", function() {
    expect(triType(3,4,7)).to.equal("Scalene");
  });

});
