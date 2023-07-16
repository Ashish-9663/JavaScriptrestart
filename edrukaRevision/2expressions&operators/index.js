
// let str = "89897";
// console.log(Number(str));
// console.log(Number("3.14"));
// console.log(Number(" "));

let x = 5;
let y = 1;
console.log(x | y);
console.log(x & y);
console.log(x ^ y);
console.log( ~ x);
console.log(x << y);
console.log(x >> y);
console.log(x >>> y);

console.log(x++ );
console.log(x);

console.log(Math.PI);//gives the value of pi==3.14;


const arr = [1,2,3,4,5,6,7,8,9];
// for (const iterator of arr.reverse()) {
//     console.log(iterator);
// }

// for(const key in obj){};

// for (const iterator in arr) {
//     // console.log(arr[iterator]);
//     console.log(iterator);
// }
// const keyinput = prompt("");
// const valueinput = prompt("");
const obj ={
    name:"ashish",
    class:"5th",
    rollno:12,
    "sub":"maths",
    sub:"science",//overdide due to duplecate key
    // [keyinput]:valueinput,
};

for (let iterator in obj) {
     console.log(obj[iterator]); 
    // console.log(obj.iterator);
    
}
console.log(obj);
obj.school="srd";//new enty
obj.name="ashu"//change value
delete obj.class;
console.log(obj.key); 


