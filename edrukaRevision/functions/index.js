// // console.log("all connected");

// // function triyal(a, b){
// //     // console.log(a + b);
// //     return a + b;
// // }
// // console.log(triyal(2,3));


// // const add = function(a, b){
// //     // console.log(a + b);
// //     return a + b;
// // }
// // console.log(add(3, 5));


// // function swap(a,b){
// //   a=(a+b)-(b=a);
// //   console.log(a,b);  
// // }
// // swap(1,2);

// // function noPar(){
// //     console.log(arguments);
// // }
// // noPar(12,2,3,4,5,6);

// //>>>>>>>>>>>>>>>>>>>>function call()<<<<<<<<
// //====================also called the function  borrowing+++

// const name1 = {
//     fname:"ashihs",
//     lname:"rahput",
//     printName:function(){
//         console.log(this.fname+" "+this.lname);
//     }
// };

// const name2 = {
//     fname:"ruchika",
//     lname:"dhiaman"
// };

// name1.printName.call(name2);//function borrowed by name2 obj from name obj

// //<<<<<<< more better way to do that >>>>>>>

// const name11 = {
//     fname:"ashihs",
//     lname:"rajput",
    
// };

// function printName(town, state){
//     console.log(this.fname+" "+this.lname+" from "+town+" "+state);
// }

// const name22 = {
//     fname:"ruchika",
//     lname:"dhiaman"

// };
// printName.call(name11,"palwal","Haryana");
// printName.call(name22,"fbd","Haryana");

// printName.apply(name11,["palwal","Haryana","helloArrList"]);
// printName.apply(name22,["fbd","Haryana","helloArrList"]);

// const newBind = printName.bind(name11,"palwal","Haryana");
// console.log(newBind);
// newBind();

// a=6;

// console.log(typeof (a));

// //<<<>>>>>><<<<>>>><<<>>>Closure===+++++++

// function x(){
//     let a = 7;
//     function y(){
//         console.log(a);
//     }
//     a = 100;
//     return y;
//     // return function y(){
//     //     console.log(a);
//     // }   
//    // a = 100;// not running because of return 
// }

// const z = x();
// console.log(z);
// //....calling y by using z
// z();
// const a = 10;
// let b = 20;
// console.log(a); 
// console.log(b); 

// function a(){
//     var x=10;
//     function b(){
//         console.log(x);
//     }
//     b();
// }
// a();


// console.log(m);
// greet();
// function greet(){
//     console.log("hello hoistig");
// }

// var m=9;
// console.log(m);

// ///it is same like
// var m2;
// console.log(m2);
// greet2();
// function greet2(){
//     console.log("hello hoistig2");
// }

// m2=9;
// console.log(m2);


const arr = [2,3,4,5];

const area = function(radius){
    return Math.PI*radius*radius;
}
const circumfrence = function(radius){
    return 2*Math.PI*radius;
}
const diameter = function(radius){
    return 2*radius;
    
}

// const calci = function(arr, logic){
//   const output=[];
//   for(let i=0;i<arr.length;i++){
//     output.push(logic(arr[i]));
//   }
//   return(output);
// }

// console.log(calci(arr, area));
// console.log(calci(arr, circumfrence));
// console.log(calci(arr, diameter));

////<<<<<<<<<<<<///use map inplace of above function calci>>>>>.
// console.log(arr.map(area));
// console.log(arr.map(circumfrence));
// console.log(arr.map(diameter));

//>>>>we can add method to arrays
//>>>>we con customize any func same 
  Array.prototype.calci = function(logic){
      const output=[];
      for(let i=0;i<this.length;i++){
        output.push(logic(this[i]));
      }
      return(output);
    }
    
    console.log(arr.calci(area));
    console.log(arr.calci(circumfrence));
    console.log(arr.calci(diameter));
