/* 
    Immediately Invoked Function Expression
*/
// Called Automatically at declaration.

(function (l,p,r){
    l(p(3,4));
    l(r(4));
})(console.log,Math.pow,Math.sqrt);
