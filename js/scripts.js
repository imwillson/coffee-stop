function Stopwatch() {
    this.start = function() {
        console.log("watch is starting!");
    };
}

var watch = new Stopwatch();
watch.start();

$(document).ready(function(){

   // jQuery methods go here...

 	$("#test").click(function() {
 		$("#dialog").hide();
 	});

 	$("#start").click(function() {
 		start();
 	})


});


