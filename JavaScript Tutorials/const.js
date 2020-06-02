
//This block gives error as a const variable cannot be reinitialized.
/*
const a=1
a=3
console.log(a)
*/

const arr=[1,2,3,4]
// arr=[3,4,5,6] // Whole array cannot be reinitialized.
arr[0] = 3
console.log(arr)

// Same goes with objects. New fields can be added and fields can be updated 
// and removed from const objects.

const obj = {
    a:10,
    b:"Hi"
}

obj.a = 100
console.log(obj)
delete obj.b
console.log(obj)
