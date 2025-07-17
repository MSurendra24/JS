hello=()=>{
document.getElementById("h1").style.backgroundColor="rgba(116, 222, 93, 1)"
}
hi=()=>{
    document.getElementsByTagName('button')[1].style.backgroundColor="rgba(112, 78, 234, 1)"
}
hii=()=>{
    document.getElementById("h3").style.backgroundColor="rgba(216, 65, 174, 1)"
}
hii2=()=>{
    document.getElementsByTagName('button')[3].style.backgroundColor="rgba(233, 134, 34, 1)"
}
hi1=()=>{
    document.getElementById('h5').style.backgroundColor="rgba(30, 197, 197, 1)"
}
one=()=>{
    let name=document.getElementById("msg").value;
    document.getElementById("msg").value=name.toLowerCase();
}
two=()=>{
    let name=document.getElementsByTagName("input")[1].value;
    document.getElementsByTagName("input")[1].value=name.toUpperCase();
}
