class Account{
acc_Id;
acc_Name;
acc_Bal;
constructor(id,name,bal){
// console.log("special method")
this.acc_Id=id;
this.acc_Name=name;
this.acc_Bal=bal;

}
}
let a1=new Account(1,"pm",50000);
console.log(a1)
let a2=new Account(2,"nm",45000);
console.log(a2)
let a3=new Account(3,"pr",40000);
console.log(a3)