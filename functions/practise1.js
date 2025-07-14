let add=(a,b)=>a+b;
console.log(add(5,10));

var greet=(a)=>{
    console.log("hii",a)
}
greet(100)

let multiply=(a,b)=>{
    return a*b;
}
let b=multiply(5,5);
console.log(b)

let greet1=(name)=>{
return "hello"+name;
}
let c=greet1("hii")
console.log(c);

const show=()=>{
    console.log("good"+this.name)
}
show.call({name:"morning"});

function display(){
    console.log("good"+this.name)
}
display.call({name:"morning"})

let s=(d,e)=>{
return d*e;
}
let p=s(5,5)
console.log(p)
