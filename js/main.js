var timerHTMLtext = $("#timer");
var toggleButton = $("#toggle");
var resetButton = $("#reset");


//creates a new stop watch without doing in console
var watch = new Stopwatch(timerHTMLtext);

// console.log(timer);


toggleButton.bind("click", function(){
	console.log("toggle button test")

	if (watch.isOn){
		watch.stop();
	}

	else {
		watch.start();
	}
});

resetButton.bind("click", function() {
	console.log("reset button working");
	watch.reset();

});

console.log("is my file connceted");

