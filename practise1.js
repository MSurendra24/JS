const people = [
{ name: "su", gender: "male" },
 { name: "lice", gender: "female" },
{ name: "ob", gender: "male" },
{ name: "ra", gender: "female" }
];

const malePeople = people.filter(person => person.gender === "male");
malePeople.forEach(person => {
console.log(person);
});



var enames = ["s","u","r","e"];
for (var i=0;i<enames.length;i++){
    console.log(enames[i]);
}
var enames = [
    {eid:1, ename: "ce", salary: 50000},
{eid:2,ename:"ob",salary:60000},
{eid:3,ename:"ie",salary:70000}
];
for (emp of enames){
    console.log(emp.ename);
    console.log(emp.eid);
}



