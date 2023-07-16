
let h1ere=0;
console.log(h1ere);

let expoNum = 7.71234;

console.log(expoNum.toExponential());
console.log(typeof(parseInt(expoNum))); 
console.log(typeof(parseFloat(expoNum.toExponential())));

const a = "hello";
console.log(a[1]);//e
console.log(a.charAt(0))//h
console.log(a.charCodeAt(0))//ascii value

const str = 'ashish>>>'+'ashish'+'<<<rajput'+'>>>okk';
const str2 = 'this is may\\name over\the screen';
console.log(str+"<>??"+str2);

console.log(str2.length);

console.log(str.concat(" >>",str2));
// console.log(str.replace('ashish','ashu'))//it will replace first matching
// console.log(str.replace(/ASHISH/i,'ashu'))//remove text senstivity
// console.log(str.replace(/ashish/g,'ashu'))//it replace all matings
console.log(str.replaceAll("ashish",'ashu'));//it remove all 

const whitespace = " hello white space ";
// console.log(whitespace.trim());
// console.log(whitespace.trimStart());
// console.log(whitespace.trimEnd());
// console.log(whitespace.split(" "));
// console.log(whitespace.slice(1,6));
// console.log(whitespace.substring(6,12));
// console.log(whitespace.substr(3,5));
// console.log(whitespace.includes("white"));
// console.log(whitespace.search("white"));
console.log((whitespace))








