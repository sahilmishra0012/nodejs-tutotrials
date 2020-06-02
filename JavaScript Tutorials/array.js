let arr = [1,2,3,4]

console.log(arr)
console.log(arr.length)
console.log(arr[2])
console.log("=============================================")
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i])
}
console.log("=============================================")
for(let i of arr){
    console.log(i)
}
console.log("=============================================")
for(let index in arr){
    console.log(index)
}
console.log("=============================================")
console.log("=============================================")
let fruits = ["Apple", "Mango", "Banana"]
console.log(fruits)
fruits.push("Cherry","Lemon")// Insert at end
console.log(fruits)
fruits.pop()// Delete from end
fruits.pop()
console.log(fruits)
fruits.unshift("Cherry","Lemon")// Insert at beginning
console.log(fruits)
fruits.shift()// Delete from beginning
console.log(fruits)