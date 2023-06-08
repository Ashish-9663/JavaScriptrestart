
const inputFeild = document.createElement("input");
inputFeild.type = "text";

const btn = document.createElement("button");
btn.innerText ="Click Me";

const btnclear = document.createElement("button");
btnclear.innerText ="Clear";

const getref = document.querySelector("div");
getref.append(inputFeild, btn, btnclear);

btn.addEventListener("click",textfun);

function textfun(){
   const newEle = document.createElement("h3")
   newEle.innerText=inputFeild.value;
   const div2 = document.querySelectorAll("div");
   div2[1].appendChild(newEle);
   inputFeild.value="";
}

btnclear.addEventListener("click",clearText);

function clearText(){
   const div2 = document.querySelectorAll("div")
    div2[1].innerText="";
}