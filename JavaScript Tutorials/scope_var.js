// var has function scope
var x =10
console.log(x)
function increase()
{
    var x = 20
    console.log(x)
    if(true)
    {
        var x = 30
        console.log(x)
    }
    console.log(x)
}

increase()

console.log(x)