/* 
    Immediately Invoked Function Expression
*/

(function (l,p,r){
    l(p(3,4));
    l(r(4));
})(console.log,Math.pow,Math.sqrt);
