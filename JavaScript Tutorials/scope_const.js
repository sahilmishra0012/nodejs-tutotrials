// Const has block scope same as let
const x =10
console.log(x)
function increase()
{
    const x = 20
    console.log(x)
    if(true)
    {
        const x = 30
        console.log(x)
    }
    console.log(x)
}

increase()

console.log(x)