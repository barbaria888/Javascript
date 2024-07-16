const time=new Date().getHours();
console.log(time);
function mul(a,b)
{
    return a*b;
}
document.getElementById("assi").innerHTML=mul();
if(time>=4&&time<=11)
    {
        document.getElementById("msg").innerHTML="good morning"
    }
else if(time>=12&&time<=16)
    {
        console.log("good afternoon");
        document.getElementById("msg").innerHTML="good afternoon"
    }
    else if(time>=17&&time<=19)
    {console.log("good evening");
        document.getElementById("msg").innerHTML="good evening"
    }
    else{
        console.log("good night");
        document.getElementById("msg").innerHTML="good night"
    
    }

    