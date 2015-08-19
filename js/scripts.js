$(document).ready(function() {
  var interval = setInterval(function() {
    if ($("#orangeMeter .bar").width() < 400 && $("#blueMeter .bar").width() < 400) {
      $("#orangeMeter .bar").width($("#orangeMeter .bar").width()+$("#orange img").length);
      $("#blueMeter .bar").width($("#blueMeter .bar").width()+$("#blue img").length);
    }
  }, 100); 
  $("button#reset").click(function() {
    $(".bar").width(0);
  });
  $("button#combat").click(function() {
    if ($("#orange img").length == 4) {
      $("#orange img").slice(0,1).remove();
      var count = Math.floor(Math.random()*4);
      $("#blue img").slice(0,count).remove();
      setTimeout(function() {
        for (var i = 0; i < count; i++) {
          $("#blue").append("<img src='bluesquid.png'/>");
        }
        $("#orange").append("<img src='orangesquid.png'/>");
      },1000);
    }
  });
});