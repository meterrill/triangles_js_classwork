var triType = function(side1, side2, side3) {
  return (side1 === side2 && side2 === side3) && 'Equilateral' ||
    (side1 === side2 || side1 === side3 || side2 === side3) && 'Isosceles' ||
    'Scalene';
};

$(document).ready(function() {
  $("form#tri_input").submit(function(event) {

    var side1 = parseInt($('input#side_1').val());
    var side2 = parseInt($('input#side_2').val());
    var side3 = parseInt($('input#side_3').val());

    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
      $(".error").text("All 3 sides must be present and in numerical form!");
      $("#results").hide();
      $("#errors").show();
    } else if (side1 + side2 < side3 || side2 + side3 < side1 || side1 + side3 < side2) {
      $(".error").text("Those dimensions do not make a valid triangle! a + b >= c");
      $("#results").hide();
      $("#errors").show();
    } else {
      var result = triType(side1, side2, side3);
      $(".result").text(result);
      $("#errors").hide();
      $("#results").show();
    }
    event.preventDefault();
  });
});
