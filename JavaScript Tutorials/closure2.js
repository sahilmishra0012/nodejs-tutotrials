// Method 2
function count(value){
    function plus(){
        console.log(++value);
    }
    return plus
}

var f = count(10) //variable f contains plus() function
f() //11
f() //12
f() //13