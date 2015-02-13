describe('triType', function() {

  it("checks for a valid triangle", function() {
    expect(triType(2,4,7)).to.equal("not a valid triangle");
  });

  it("checks for an equilateral triangle", function() {
    expect(triType(2,2,2)).to.equal("equilateral");
  });

  it("checks for an isosceles triangle", function() {
    expect(triType(2,2,4)).to.equal("isosceles");
  });

  it("checks for a scalene triangle", function() {
    expect(triType(3,4,7)).to.equal("scalene");
  });
  
});
