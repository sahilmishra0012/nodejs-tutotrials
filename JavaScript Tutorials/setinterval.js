// Just using setInterval will make it run infinitely. So, we set a counter.

var intervalId;
var runcount = 0;
function check(){
    runcount++;
    if(runcount>=5)
    {
        clearInterval(intervalId);
    }
    console.log("Hello World");
}
console.log("setInterval set for 1 second.")

intervalId = setInterval(check,1000);
