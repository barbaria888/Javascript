function calculateArea()
{
     var l=(document.getElementById("length").value);
    var w=(document.getElementById("width").value);
    var area=l*w;
    document.getElementById("result").innerHTML=area;
}