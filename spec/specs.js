describe('triType', function() {
  it("checks for an equilateral triangle", function() {
    expect(triType(2,2,2)).to.equal("equilateral");
  });

  it("checks for an isosceles triangle", function() {
    expect(triType(2,2,4)).to.equal("isosceles");
  });
});
