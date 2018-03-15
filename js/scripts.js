function Stopwatch() {
    var time = 0;
    var interval;
    var offset;

    // runs every 10 miliseconds
    function update() {
    	time += delta();
    	var formattedTime = timeFormatter(time);
    	console.log(formattedTime);
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
        	interval = setInterval(update, 10);
        	offset = Date.now();
        	this.isOn = true;
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


