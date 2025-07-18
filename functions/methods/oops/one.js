class Account{
    account_id=101;
    open_Account(){
        console.log("account open successfully")
    }
    check_balance(){
        console.log("balance checked")
    }
    withdraw(){
        console.log("withdraw successfully")
    }

}
var a=new Account();
var b=new Account();
console.log(a)
console.log(b)
console.log(typeof(a))
console.log(a.account_id)
a.open_Account();
b.check_balance();
a.withdraw();