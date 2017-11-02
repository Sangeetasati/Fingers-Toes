$(document).ready(function(){
	var interval;
  var $max = $('#int');
  var $currentValue = $('#display');
  var finished = false;

  function mytimer () {
  	//parse a string "0" if the current value is blank
  	var currentValue = parseInt($currentValue.text().trim() || "0", 10);
    var max = parseInt($max.val(), 10);

    //perform the logic if the maximum hasn't been reached
    if (currentValue < max) {
    	currentValue++;

      $('.box1').css('background-color', currentValue % 3 === 0 ? 'red' : '');
      $('.box2').css('background-color', currentValue % 5 === 0 ? 'red' : '');
      $currentValue.text(currentValue);
    } else {
        //stop the timer, marking it as having reached the maximum
        stoptimer(true);
    }
  }

  function starttimer () {
  	//don't start another interval if one already is started, or if the maximum is not given
  	if (!interval && $max.val().trim().length) {
    	//clear previous fields
    	$currentValue.text('');
    	$('.box1, .box2').css('background-color', '');
      //start the new timer
      interval = setInterval(mytimer, 1000);
    }
  }

  function stoptimer (timerFinished) {
  	//set if the timer stopped because it reached the end
    finished = (timerFinished === true);
		if (interval) clearInterval(interval);
    //remove the interval so we can start a new one later
    interval = null;

    //clear previous fields if terminated prematurely
    if (!finished) {
    	$currentValue.text('');
    	$('.box1, .box2').css('background-color', '');
    }
  }

	$('#num').on('click', function(){
  	//only start the timer if the last timer didn't finish
  	if (!finished) starttimer();
  });
  
  // Functionality in Both button
  $('#reset').on('click', function(){
  	//stop any on going timer
  	stoptimer();
    //clear the maximum value for new value
    $max.val('');
  });

  $('#restart').on('click', function(){
  	//stop any on going timer
  	stoptimer();
    //start the timer again
    starttimer();
  });
});
