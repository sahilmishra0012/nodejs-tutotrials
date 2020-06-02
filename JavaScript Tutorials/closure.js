function count(){
    var i =1;
    function plus(){
        console.log(++i);
    }
    return plus
}

var f = count() //variable f contains plus() function
f() //2
f() //3
f() //4

/*
The value changes everytime we call f() as f() lies in local scope of function count() where
var i also lies. So, i is available for plus() function.

When a function gets the scope of its outer function, it is called the closure scope.
*/