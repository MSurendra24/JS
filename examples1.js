// Object add, delete, length methods
let data={
    name:"sure",
    num:79,
    sal:45000,
    id:1
}
console.log(data)
console.log(Object.keys(data))
console.log(Object.values(data))
console.log(Object.data)
delete data.num
data.id=2;
console.log(Object(data))
console.log(Object.keys(data).length)
console.log(Object(data).length>0)
for(let ar in data){
console.log(Object(ar))
console.log(Object.keys(ar).length)
console.log(Object(ar).length>0)
}


console.log("***************************************")

//array add, delete, length methods
let arr=[12,34,56,78,90]
console.log(arr)
console.log(arr.length)
console.log(arr[2])
console.log(arr.length>0)
for(let ar of arr){
    console.log(ar)
    console.log(ar.length)

}
delete arr[1];
console.log(arr)
arr[7]=99;
console.log(arr)