var number = 0;

$(document).ready(function () {
   $("#num").click(function(){
  var number = parseInt($('#display').text(), 10) || 0;
  var interval = setInterval(function () {
      number++;

      var max = $('#int').val() || number;
      $('.box1').css('background-color', number % 3 === 0 ? 'red' : '');
      $('.box2').css('background-color', number % 5 === 0 ? 'red' : '');
      $('#display').text(number);

      if (number >= max) {
          clearInterval(interval);
      }
  }, 1000);

  $('#display').text(number);
});

});
var MAX = 'number';
