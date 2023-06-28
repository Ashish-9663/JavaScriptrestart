//  "use strict"
// var a = 20;
//  function priintA(){
//     var a = 10;
//     console.log(this.a);
//  }

//  priintA();

// // var x = 10;

// // function test1(a){
// //      function test3(){
// //         console.log("test3",a);  
// //       }
// //       test3();
// // }

// // function test2(){
// //       test1(x);
// // }

// // test2();

// 1==='1'?console.log("true"):console.log("false");

// const obj ={
//    a:"name",
//    b:"age"
// };

// var a = 12;

// const test = () => { 
//    var a = 20;
//    console.log(this.a);
// }

// test();
let num =0;
const inputRef = document.querySelector(".inputBox");
const searchBtnref = document.querySelector(".searchBtn");
const textareaRef = document.querySelector(".textarea");

function getdata(){
   const data = inputRef.value;
   inputRef.value="";
   console.log(data);
   return data;
}
function counter(){
  num+=1; 
  return num;
}
const replicate = () =>{
   const tasks = getdata();
   let count = counter();
   const htmlContaint =`<h3 class="tasks">${count}. ${tasks}</h3>`;
    textareaRef.innerHTML += htmlContaint;
}
searchBtnref.addEventListener("click",replicate);