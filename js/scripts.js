var triType = function(side1, side2, side3) {
  var type = null
  if (side1 === side2 && side2 === side3) {
    type = "equilateral"
  } else if (([side1, side2, side3].indexOf(side1 || side2 || side3) > -1) && (side1 + side2 >= side3 && side2 + side3 >= side1 && + side3 >= side2)) {
    type = "isosceles"
  } else {
    type = "scalene"
  }
  return type;
};
