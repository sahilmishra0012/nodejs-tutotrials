// let has block scope
let x =10
console.log(x)
function increase()
{
    let x = 20
    console.log(x)
    if(true)
    {
        let x = 30
        console.log(x)
    }
    console.log(x)
}

increase()

console.log(x)