function add(a,b){
    console.log(a+b)
}
add(10,20)


function greet(){
    console.log("hi")
}
greet();


function greet1(ename){
    console.log("hello"+ename)
}
let ad=greet1("good")


function promise(a,b,c){
    console.log("multiply",a*b*c)
}
promise(1,2,3)

function showargs(){
    console.log(arguments[0],arguments[1])

}
showargs("one","two")

function multiply(a,b){
    return a*b;
}
let s=multiply(5,10)
console.log(s)

function double(x){
    return x*4;
}
console.log(double(5))

function greet(){
    console.log("hi",this.name)
}
greet.call({name:"sure"})


function hello(){}
console.log(hello.name);
console.log(hello.length);


function textscope(){
    let a=1000;
    console.log(a);
}
textscope();

function globalscope(a){
    console.log("hi",a)
}
globalscope(10)
