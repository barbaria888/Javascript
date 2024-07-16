const func= function (a,s)
{
    for(let i=0;i<s;i++)
        {
            a^=s
        }
        return a;

}
console.log(func(1,3));

//Immediately Invoked Function Experession
(function  x()
{
    console.log("hi");
}
)();


//Arrow Functions
const square= (x) => x*x;
console.log(square(12));

var doit =() =>console.log("hi");
doit();


//function closure 
function outer() {
    var str="huhu";
    function inner()
    {
        console.log(str);
    }
    return inner;
}
const newfunc=outer;
newfunc();

function greeting()
{
    function greet(n) 
    {
        console.log("hello "+n);
    }return greet; 
}

const hip=greeting();
const zip=greeting();
hip("ram");
zip("shyam");



//function hosting
look();
function look()
{
    console.log("looking");
}
 
count 
function increaseCount()
{
(
    function displayCount(count)
        {
            console.log(this.count);
        }
)
();
}
increaseCount();