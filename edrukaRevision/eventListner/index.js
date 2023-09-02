
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

const vidBtn = document.querySelector("button");
const divref = document.querySelector("div");
const vidref = document.querySelector("video");
vidBtn.textContent = "display video";

vidBtn.addEventListener("click",() =>{
    divref.classList.remove("hidden");
})

// vidref.addEventListener("click",() =>{
//     Video.play();
// })

vidref.addEventListener("click",(e) =>{
    e.stopPropagation();
    Video.play();
})

divref.addEventListener("click",() =>{
    divref.classList.add("hidden");
})


const buttonBar = document.querySelector('.button-bar');
buttonBar.addEventListener("click",function(e){
   e.currentTarget.style.backgroundColor = e.currentTarget.textContent;
})


