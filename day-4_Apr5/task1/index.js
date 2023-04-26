
// let t = document.write("<h2 id = 'w'></h2>");
// let c = document.getElementById("h1tag").innerText="all good";

// console.log(c);

// let d = document.getElementById("w").innerText="hii";
// console.log(d);

// let b = document.getElementsByTagName("h1");
// console.log(b[1].innerHTML="injected by js");

let c = document.getElementsByClassName("ptags");
console.log(c[1].innerHTML="<h4 id='inner'>okk</h4>");
console.log(c[0].innerText="<h4 id='inner'>okk</h4>");
console.log(c[2].innerText=50);

const arr = ["red","green","blue","pink","orange"];

for(let i=0;i<5;i++)
{
   c[i].style.backgroundColor = arr[i];
   c[4-i].style.color = arr[i];
}

