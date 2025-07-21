class Account{
    acc_Id;
    acc_Name;
    acc_minBal;
    constructor(id,name,minbal){
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_minBal=500;
    }
    open_Acc(){
        console.log("Acc opened")
    }
    deposit_Amount(){

    }
    get_bal(){}
    withdrawl_amount(){}
}
let a=new Account()
console.log(a)