let employee=[
    {
    eid:'1',
    ename:"ss",
    gender:"male"},
    {
    eid:'124',
    ename:"sur",
    gender:"female"
},
    {
    eid:'12345',
    ename:"sure",
    gender:"male"
}
];
let display=()=>{
    rows='';
    for(let emp of employee){
        rows=rows+`<tr>
        <td>${emp.eid}</td>
        <td>${emp.ename}</td>
        <td>${emp.gender}</td>
        </tr>`;
    }
    document.getElementsByTagName('tbody')[0].innerHTML=rows;
};
