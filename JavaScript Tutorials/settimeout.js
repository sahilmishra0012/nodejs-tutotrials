function check(){
    console.log("Hello World");
}
console.log("setTimeout set for 1 second with two timouts.")
setTimeout(check,3000);
setTimeout(check,4000);