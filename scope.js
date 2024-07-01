let c=89+"global";
var  po= "global";
const pi =3.14;
function show()
{
    wr="functionscope";
    ne =45;
    mom=1;
    console.log(wr+" "+ne+" "+mom);
}
{
    arr=[1,2,3,4,5,"local"];
    console.log(arr);
    var person=
    {
        name:"jet",
        age:"45",
        city:"chicago",
        local:true
    };
    show();
    console.log(ne);
}
;
