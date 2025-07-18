class test{
    name(){}
    id(){
        console.log(1)
    }
    data(){
        console.log("Data entered")
    }
    constructor(id,proof){
        console.log(id,proof)

    }
}
let a1=new test(1,'nm');
a1.name();
a1.data();
a1.name();
a1.id();
console.log(typeof(a1))