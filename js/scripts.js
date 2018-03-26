function Stopwatch(timerText) {
    var time = 0;
    var interval;
    var offset;

    // runs every 10 miliseconds
    function update() {
    	if (this.isOn) {
    		time += delta();
    	}

    	// time += delta();

    	

    	var formattedTime = timeFormatter(time);
    	//console.log(formattedTime);
    	//console.log(formattedTime);
    	timerText.text(formattedTime);

    	//console.log(timerText);

    };

    function delta() {
    	var now = Date.now();
    	var timePassed = now - offset;

    	// next time update is run, it'll used previous offset
    	offset = now;

    	return timePassed;
    };
    
    function timeFormatter(timeInMilliseconds) {
    	//Date is easier to convert
    	var time = new Date(timeInMilliseconds);
    	var minutes = time.getMinutes().toString();
    	var seconds = time.getSeconds().toString();
    	var milliseconds = time.getMilliseconds().toString();

    	if (minutes.length < 2) {
    		minutes = '0' + minutes;
    	}

    	if (seconds.length < 2){
    		seconds = '0' + seconds;
    	}

    	while (milliseconds.length < 3) {
    		milliseconds = '0' + milliseconds;
    	}

    	return minutes + ':' + seconds + '.' + milliseconds;
    };


    //closures
    this.isOn = false; //always on off
    this.start = function() {
        if (!this.isOn) {


        	//bind so that this is not referred to "window"
        	interval = setInterval(update.bind(this), 10);
        	offset = Date.now();
        	this.isOn = true;
        	

        	console.log("start function test")
        }
    };

    this.stop = function() {
    	if (this.isOn) {
    		clearInterval(interval);
    		interval = null;
    		this.isOn = false;
    	}
    };

    this.reset = function() {
    	time = 0;
    	update();
    };
    

};



$(document).ready(function(){

   // jQuery methods go here...

 	$("#test").click(function() {
 		$("#dialog").hide();
 	});

 	$("#start").click(function() {
 		start();
 	})


});


