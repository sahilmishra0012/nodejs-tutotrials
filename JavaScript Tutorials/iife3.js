function count(){
    var i =1;
    (function (){
        console.log(++i);
    })();
}

count()