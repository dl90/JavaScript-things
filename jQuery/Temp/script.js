var $cels = $("#cels");
var $fahr = $("#fahr");

$("#convertBtn").click(function () {
  // Determine which field has a number and convert the number
  if ($.isNumeric($cels.val())) {
    var fahr = $cels.val() * 9 / 5 + 32;
    $fahr.val(fahr);
  }
  else if ($.isNumeric($fahr.val())) {
    var cels = ($fahr.val() - 32) * 5 / 9;
    $cels.val(cels);
  }
});


$cels.keyup(function () {
  $fahr.val("");
  if ($.isNumeric($cels.val())) {
    $cels.removeClass("error");
  } else {
    $cels.addClass("error");
  }
});

$fahr.keyup(function () {
  $cels.val("");
  if ($.isNumeric($fahr.val())) {
    $fahr.removeClass("error");
  } else {
    $fahr.addClass("error");
  }
});


$cels.focus(function () {
  $("#celsLabel").css({ "color": "red" });
});
$cels.blur(function () {
  $("#celsLabel").css({ "color": "white" });
  $cels.removeClass("error");
});

$fahr.focus(function () {
  $("#fahrLabel").css({ "color": "red" });
});
$fahr.blur(function () {
  $("#fahrLabel").css({ "color": "white" });
  $fahr.removeClass("error");
});
