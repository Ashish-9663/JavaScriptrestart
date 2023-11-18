
// const btnRef = document.querySelector("#btn");

// function random(num){
//     const n = (num+1);
//     // console.log(n);
//     const r = Math.random();
//     // console.log(">>>",r);
//     const cal = r*n;
//     // console.log("++++"+cal);
//     const ranNum =  Math.floor(cal);
//     console.log("===",ranNum);
//     return ranNum ;
// }

// btnRef.addEventListener("click",function(){
//     const randomColor = `rgb(${random(255)},${random(255)},${random(255)})`;
//     document.querySelector("body").style.backgroundColor = randomColor;
// })

// document.querySelector("#btn").addEventListener("focus",color)
// function color(event){
//     // document.querySelector("#btn").style.backgroundColor = "red";
//     event.target.style.backgroundColor = "red";
// };
// document.querySelector("#btn").addEventListener("click",function(){
//     document.querySelector("#btn").style.backgroundColor = "white";
// })  
// document.querySelector("#btn").addEventListener("blur",function(){
//     document.querySelector("#btn").style.backgroundColor = "green";
// })
// document.querySelector("#btn").addEventListener("mouseover",function(){
//     document.querySelector("#btn").style.backgroundColor = "black";
// })
// document.querySelector("#btn").addEventListener("mouseout",function(){
//     document.querySelector("#btn").style.backgroundColor = "gray";
// })
// // document.querySelector("#btn").removeEventListener("focus",color)    

// const char = document.querySelector("h1");
// const inpfeild = document.createElement("input");
// inpfeild.id = "userInput";
// inpfeild.type = "text";
// const doc = document.getElementById("div")
// doc.appendChild(inpfeild);
// inpfeild.addEventListener("keyup",(e) =>{
//     char.innerText = e.key;
// })

// const vidBtn = document.querySelector("button");
// const divref = document.querySelector("div");
// const vidref = document.querySelector("video");
// vidBtn.textContent = "display video";

// vidBtn.addEventListener("click",() =>{
//     divref.classList.remove("hidden");
// })

// // vidref.addEventListener("click",() =>{
// //     Video.play();
// // })

// vidref.addEventListener("click",(e) =>{
//     e.stopPropagation();
//     Video.play();
// })

// divref.addEventListener("click",() =>{
//     divref.classList.add("hidden");
// })


// const buttonBar = document.querySelector('.button-bar');
// buttonBar.addEventListener("click",function(e){
//    e.currentTarget.style.backgroundColor = e.currentTarget.textContent;
// })


// const bodyTag = document.querySelector("h1");
// const userInput = document.createElement("input");
// userInput.type = "text";
// userInput.id = "inputFild1"
// const userInput1 = document.createElement("input");
// userInput1.type = "text";
// userInput1.id = "inputFild2"
// const userInput2 = document.createElement("input");
// userInput2.type = "text";
// userInput2.id = "inputFild3"
// const userInput3 = document.createElement("input");
// userInput3.type = "text";
// userInput3.id = "inputFild4"
// const userInput4 = document.createElement("input");
// userInput4.type = "text";
// userInput4.id = "inputFild5"
// const userInput5 = document.createElement("input");
// userInput5.type = "text";
// userInput5.id = "inputFild6" 
// bodyTag.append(userInput, userInput1, userInput2, userInput3, userInput4, userInput5 );

// bodyTag.addEventListener("keydown",(e) => {
//     console.log(e.target);
//     console.log(e.type);
//     console.log(e.key);
//     console.log(e.ctrlKey);
//     console.log(e.timeStamp);
//     console.log(e.currentTarget);
// })

console.log(1);
console.log(2);
console.log(3);
console.log(4);
setTimeout(function(){console.log
("setTimeout1")},0)
console.log(5);
console.log(6);
(function(){console.log("fnction1")}());
console.log(7);
console.log(8);
console.log(9);
console.log(10);
setTimeout(function(){console.log
    ("setTimeout2")},6)
console.log(11);
console.log(12);
console.log(13);
console.log(14);
setTimeout(function(){console.log
    ("setTimeout3")},3)
console.log(15);
console.log(16);
console.log(17);
console.log(18);
console.log(19);
console.log(20);
Promise.resolve().then(() =>{console.log("promises1")})
for(let i=0;i<20;i++){
    console.log("loop"+i);
}
Promise.resolve().then(() =>{console.log("promises2")})



