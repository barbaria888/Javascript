const buttStat= document.getElementById("press");
const out=document.getElementById("out");

buttStat.onclick=function () {
    out.textContent="Button Clicked";
    buttStat.innerHTML="Clicked";
}
const hov =document.getElementById("hoverme");
hov.onmouseover= function (){
    document.getElementById("hoverme").style.color="#ffff";
     document.getElementById("hoverme").style.color="#0000";
}
  
function validate(){
const  sub=document.getElementById("submitbtn");
event.preventDefault();

const name= document.getElementById("name").value;

const email=document.getElementById("email").value;
alert("Name is ->"+name);
alert("Email is ->"+email);
}

