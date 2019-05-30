$(document).ready(function() {
  $(".image").on("click", function() {
    var id = $(this).attr("colid");


    window.location.replace("/api/product/user/" + id);

  });
});
