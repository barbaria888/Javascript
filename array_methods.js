/*function red(ele)
    {
         res=[];
        ele=ele/2;
        res.push(ele);
        return res;
    }
arr =[2,1,24,4];
var k=arr.forEach(red);
console.log(k);


function send(e_add)
{
console.log('email sent to ' +e_add );
}
const users=[
    {name:"u1",email:"xyz1@gmail.com"},
    {name:"u2",email:"xyz2@gmail.com"},
    {name:"u3",email:"xyz3@gmail.com"},
    {name:"u4",email:"xyz4@gmail.com"},
];
users.forEach((ele) =>{ 
send(ele.email);
});


const label=[
    {item:'brush',price:450},
    {item:'baiol',price:100},
    {item:'potme',price:390},
    {item:'rajal',price:90},
    {item:'sok',price:120},
    {item:'lok',price:590},

];
var p =label.map(function print(entry)
{
    console.log(`the price of ${entry.item} is ${entry.price} `);
})


function filterprod(entries,maxprice,minprice)
{
    return entries.filter((o) => o.price<maxprice&&o.price>minprice);
}
var ap=filterprod(label,500,100);



items=
[
    {name:"car",price:20},
    {name:"bus",price:11},
    {name:"truck",price:12},
    {name:"crane",price:15},
    {name:"motorcycle",price:.9},
    {name:"tractor",price:7},
];
var total=items.reduce((total,item)=>{
    console.log(`total: ${total} is ${item.price}`);
    return total+item.price;
},0);//value after comma is starting value for "total"
console.log(total);

const peop=[
    {name:'sahil',age:50},
    {name:'mando',age:40},
    {name:'gohil',age:30},
    {name:'machil',age:54},
    {name:'sallo',age:59},
];
var avg=peop.reduce((avg,p)=>
{
    return avg+p.age;
},0);

console.log(avg/peop.length);



*/

const peop=[
    {name:'sahil',age:50},
    {name:'mando',age:40},
    {name:'gohil',age:30},
    {name:'machil',age:54},
    {name:'sallo',age:59},
];/*
const man= peop.find((item)=>{
return item.name==='sahil'
}
)
console.log(man);
*/

var has=peop.some((item)=>{
    return  
});