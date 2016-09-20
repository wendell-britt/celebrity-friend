
function conditionalHelp(gender, favoriteMovie, age) {

    if (((age < 40 && age >12) && (gender === "male")) || (favoriteMovie === "Empire Records")){
      return "#kanye";
    } else if (age >40 || favoriteMovie === "Pirates of Silicon Valley") {
      return "#billgates";
    } else if (age <12 && gender === "male") {
      return "#bob";
    } else if (age <12 && gender === "female") {
      return "#dora";
    } else {
      return "#johnboyega";
    }
  }

$(function() {
  $("form#celebrityform").submit(function(event) {
    var name = $("input#name1").val();
    var gender = $("#gender").val();
    var favoriteMovie= $("#movie").val();
    var age = $("input#age1").val();

    var output= conditionalHelp(gender, favoriteMovie, age);
    console.log(output);

    $(output).show();
    $()
    event.preventDefault();
  });



});
