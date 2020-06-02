// In JavaScript, objects can be created without classes.

let obj = {
    a:10,
    b:'hello',
    c:3.1416,
    d:{
        e:198.66,
        f:189.65
    }
}
console.log(obj.a)
console.log(obj.b)
console.log(obj.c)
console.log(obj.d.e)
console.log(obj.d.f)

obj.l = 1111

console.log(obj)

delete obj.c

console.log(obj)