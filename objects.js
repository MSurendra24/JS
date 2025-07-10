let emp={
    ename:"sure",
    eid:12,
    enum:79,
}
console.log(emp)

for(let em in emp){
    //console.log(em.ename)
    console.log(emp[em])
}
console.log(Object.keys(emp))
console.log(Object.keys(emp).length>0)
if(Object.keys(emp).length>0){
    console.log("not empty")
}
else{
    console.log("empty")
}
console.log(Object.keys(emp).length<0)
console.log(Object.keys(emp).length)