const h1Ref = document.querySelector("h1");
h1Ref.innerText="Javascript injected";
h1Ref.classList.add("h1ref");

calculate = function(){
   const arr = [1,2,3,4,5,6,7,8,9];
   
   for(let i=0;i<arr.length;i++)
   {
    console.log(arr[i]);
   }
}

function print(fun){
    console.log(fun);
}

print(calculate);


//console.log("geek")

const x = [11,21,31,41,51];
const y = [];
for(let i=0; i<x.length; i++)
{
    const newArr = x[i]*3;
     y.push(newArr);
}

console.log(x,"<<<<>>>>",y)

// for(let j=y.length; j > 0 ; j--)
// {
//     console.log("hefheh",j);
//     y.pop();  
// }

// y.length = 0;//for array empty;
console.log(x,"<<<<>>>>",y)

const obj = {
    name:"ashish",
    age:23,
    class:12,
    address:"palwal"
}
// const nam ="name"
// console.log(obj.age)
// console.log(obj[nam])

for (let key in obj) {
    console.log(key,">>>>",obj[key]);  
}
 
for (const index of x) {
    console.log(index);
}
x.forEach(element => {
    console.log("jdjsdj",element);
});

const topr = (3>4)?console.log('true'):console.log("false")