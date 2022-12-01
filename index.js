$(document).ready(function () {
  $("#hamburger").click(function () {
    if ($(".ul-nav").css("display") == "none") {
      $(".ul-nav").attr("style", "display: block !important");
    } else {
      $(".ul-nav").attr("style", "display: none !important");
    }
    console.log("Hi there");
  });
});
