var triType = function(side1, side2, side3) {
  var type = null
  if (side1 + side2 < side3 || side2 + side3 < side1 || side1 + side3 < side2) {
    type = "Not a Valid Triangle!";
  } else {
  return (side1 === side2 && side2 === side3) && 'Equilateral' ||
    (side1 === side2 || side1 === side3 || side2 === side3) && 'Isosceles' ||
    'Scalene';
  }
  return type;
};
//   if (side1 === side2 && side2 === side3) {
//     type = "Equilateral"
//   } else if ((side1 + side2 >= side3 && side2 + side3 >= side1 && side1 + side3 >= side2) && (side1 === side2 || side2 === side3 || side1 === side3)) {
//     type = "Isosceles"
//   } else if (side1 + side2 >= side3 && side2 + side3 >= side1 && side1 + side3 >= side2) {
//     type = "Scalene"
//   } else {
//     type = "Not a Valid Triangle!"
//   }
//   return type;
// };


$(document).ready(function() {
  $("form#tri_input").submit(function(event) {
    var side1 = parseInt($('input#side_1').val());
    var side2 = parseInt($('input#side_2').val());
    var side3 = parseInt($('input#side_3').val());

    var result = triType(side1, side2, side3);

    alert("Your Triangle is:" + result);

    $(".result").text(result);

    $("#results").show();

    event.preventDefault();
  });
})
