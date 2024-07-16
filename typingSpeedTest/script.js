let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;
function startTest(){
    let count=0;
    document.getElementById('inputText').value=testText;    
    document.getElementById('output').innerHTML= '';
    var button = document.getElementById('btn');
    document.getElementById('inputText').onkeydown()
    {
        count++;
    }
    button.innerHTML='End Test';
button.onclick=endTest;
    
}

function endTest()
{alert(count);
    endTime= new Date().getTime();
    document.getElementById('userInput').readOnly=true;

    var timetaken= (endTime-startTime) /1000;
    var usertyped= document.getElementById('userInput').value;
    //variable storing the words_no (integer) by excluding two or more whitespaces '/\s+/' and empty strings  by regexx and filter() re
    var words_no= usertyped.split('/\s+/').filter(function(word){
        return word !=='';}).length;
        
        
        
    var wpm= 0;
    if(timetaken!=0 && !isNaN(words_no))
    {
        wpm=Math.round((words_no / timetaken))*60;
        console.log(wpm);
    }
    var out= document.getElementById('output');
    out.innerHTML= "<h2>Typing Test Results:</h2>" +
    "<p>Words Typed: " +  + "</p>" +
    "<p>Words Typed: " + usertyped + "</p>" +
    "<p>Time Elapsed: " + timetaken.toFixed(2) + " seconds</p>" +
    "<p>Words Per Minute (WPM): " + wpm + "</p>";

    var bt = document.getElementById('btn');
    bt.innerHTML= 'Start Test';
    bt.onclick= startTest;
}