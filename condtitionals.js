const time=new Date().getHours();
console.log(time);
if(time>=4&&time<=11)
    {
        console.log("good morning");
    }
else if(time>=12&&time<=16)
    {
        console.log("good afternoon");
    }
    else if(time>=17&&time<=19)
    {console.log("good evening");
        
    }
    else{
        console.log("good night");
        
    
    }
    var d=new Date().getDate();
    var t =new Date().getHours();
    console.log(d);
    console.log(t);
    if(d<12)
        {
            if(t<17)
                {
                    console.log("submitted");
                }
            else{
                console.log("should've done earlier");
            }

        }
if(d>12)
{
    if(t>0)
        console.log("due date limit exceeded");
}
let day ="tuesday";
switch(day){
case "monday":
{console.log("mon");   
}
case "tuesday":
    {
        console.log("tue");
    }
}
let can = t<5 ? "12":"24";
console.log(can);