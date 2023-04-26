
// const arr = [1,2,3,4,5,6,7,8,9];

// const len = arr.length;

// console.log(len,arr);
// console.log("first and last element",arr[0],arr[len-1]);
// let sum=0 ;
// for(let i=0;i<len;i++)
// {
//   console.log(arr[i]);
//   sum=sum+arr[i];
// }
// console.log(sum);

// function now(para="jii"){
//     console.log(para)
// }

// now();

// function pi(a,b){
//     let c=a+b;
//     console.log(c);
//   return 'ashish';
// }
// const res = pi(45,60);
// console.log(res);

const r = [1,2,3,4,5,6,7,8,9];

for(let i=0;i<r.length;i++)
{
  console.log(r[i]);
}
let sum=0;
for(let i=1;i<r.length;i+=2)
{
  sum+=r[i];
}
document.write(sum);
document.write("<br/>")
let get = document.getElementById("hh1").innerHTML="ashu";

document.write("hii every one :- " , get);