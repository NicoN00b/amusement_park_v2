$(document).ready(function() {
  var height = parseInt(prompt("How tall are you?"));

  if (height >= 60) {
    $('#ride1, #ride2, #ride4').show();
  } else {
    $('#ride3, #ride5').show();
  }
});
