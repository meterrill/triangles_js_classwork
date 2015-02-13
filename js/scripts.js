var triType = function(side1, side2, side3) {
  var type = null
  if (side1 === side2 && side2 === side3) {
    type = "equilateral"
  } else if ((side1 + side2 >= side3 && side2 + side3 >= side1 && side1 + side3 >= side2) && (side1 === side2 || side2 === side3 || side1 === side3)) {
    type = "isosceles"
  } else if (side1 + side2 >= side3 && side2 + side3 >= side1 && side1 + side3 >= side2) {
    type = "scalene"
  } else {
    type = "not a valid triangle"
  }
  return type;
};
