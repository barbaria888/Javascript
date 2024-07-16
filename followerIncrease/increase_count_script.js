let count =0;
function increaseCount()
{
count++;
displayCount();
checkCount();   
}

function displayCount()
{
    document.getElementById("countDisplay").innerHTML=count;
}

function checkCount()
{
    if(count==5)
        {
            alert("Congratulations, you have got 5 followers");
        }
    else if(count==10)
        {
            alert("Congratulations, you have got 10 followers");
        }
}

function reset()
{
    var b=confirm("This will reset your followers to 0");
    if(b)
        {
            count=0;
            alert("Success!");
        }
        displayCount();
        
}