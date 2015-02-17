$(document).ready(function() {
  $("form#tri_input").submit(function(event) {
    event.preventDefault();

    var inputtedSide1 = parseFloat($("input#side_1").val());
    var inputtedSide2 = parseFloat($("input#side_2").val());
    var inputtedSide3 = parseFloat($("input#side_3").val());

    var newTriangle = { side1: inputtedSide1,
                        side2: inputtedSide2,
                        side3: inputtedSide3,
                        typeOfTriangle: function() {
                         if ((isNaN(this.side1) || isNaN(this.side2) || isNaN(this.side3)) ||
                           (this.side1 + this.side2 <= this.side3 ||
                           this.side2 + this.side3 <= this.side1 ||
                           this.side1 + this.side3 <= this.side2)) {
                           return "Not A Valid Triangle!";
                         } else {
                           return (this.side1 === this.side2 && this.side2 === this.side3) && 'equilateral' ||
                           (this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3) && 'isosceles' ||
                           'scalene';
                         }
                       }
                      };

    var newTriangleType = { type: newTriangle.typeOfTriangle()
                          };
    if (newTriangleType.type === "Not A Valid Triangle!") {
      alert (newTriangleType.type);
    } else {
      $("ul#" + newTriangleType.type).append("<li><span class='type'>" + newTriangle.side1 + ", " + newTriangle.side2 + ", " + newTriangle.side3 + "</span></li>");
    }
  });
});
