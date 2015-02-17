var triType = function(side1, side2, side3) {
  if ((isNaN(side1) || isNaN(side2) || isNaN(side3)) || 
    (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2)) {
    return "Not A Valid Triangle!";
  } else {
    return (side1 === side2 && side2 === side3) && 'Equilateral' ||
    (side1 === side2 || side1 === side3 || side2 === side3) && 'Isosceles' ||
    'Scalene';
  }
};

$(document).ready(function() {
  $("form#tri_input").submit(function(event) {
    event.preventDefault();

    var side1 = parseFloat($('input#side_1').val());
    var side2 = parseFloat($('input#side_2').val());
    var side3 = parseFloat($('input#side_3').val());

    var result = triType(side1, side2, side3);

    if (result === "Not A Valid Triangle!") {
      $(".error").append('<strong> Warning! </strong>' + result);
      $(".error").show();
      $(".result").hide();
    } else {
      $(".result").append('<strong> Success! </strong>' + 'Your triangle type is:' + result);
      $(".result").show();
      $(".error").hide();
    }
    $("#results").show();
  });
});
