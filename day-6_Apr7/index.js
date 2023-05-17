
// const c = prompt('enter a character');

// if(c==='a'||c==='e'||c==='i'||c==='o'||c==='u'||
// c==='A'||c==='E'||c==='I'||c==='O'||c==='U'){
//     console.log('character is a vowel');
// }
// else{
//     console.log("not a vowel");
// }

let b = document.getElementById('h1');//HTML ELEMENT
console.log(b);
const bs = b.style.color="yellow";
const bs1=b.style.backgroundColor="blue";
console.log(bs,bs1)

let c = document.getElementsByClassName('h1-class');//htmlCollection
console.log(c);
const cs=c[1].style.color="red";
const cs1=c[0].style.backgroundColor="red";
console.log(cs,cs1)

let qsA = document.querySelectorAll("#same-id");//nodeList
console.log(qsA);
const qsa=qsA[0].style.color="pink";
console.log(qsa)

let qs = document.querySelector("#same-id");//html elements with id
console.log(qs);
const qs1=qs.style.backgroundColor="orange";
console.log(qs1);

let cls = document.querySelector(".h4-tag");
console.log(cls);

let t = document.getElementsByTagName("h4");//HTML Collection
console.log(t);

const ap = document.getElementById('h2Tag');

//TO CREATE A HTML ELEMENT

const newp = document.createElement('p')
newp.innerText='new wala p tag';

// to append child in a html elements

ap.appendChild(newp);
console.log(newp)

const newp2 = document.createElement('p')
newp2.innerText='new wala p2 tag';
newp.appendChild(newp2);

    // const j = document.createElement('h1');
    // j.innerText="hii";
    // const k = document.createElement('p');
    // k.innerText="guyes";

for(let i=0;i<qsA.length;i++){
    const j = document.createElement('h1');
    j.innerText="hii";
    const k = document.createElement('p');
    k.innerText="guyes";
    // qsA[i].appendChild(j);
    // qsA[i].appendChild(k);
    qsA[i].append(k,j);
}

// to add an class in html ele
const addClass11122 = document.getElementById('h1');
addClass11122.classList.add("myName","mySec");

const getAllClass = document.querySelectorAll(".h1kptags");
console.log(getAllClass);

const colorArr = ['red','green','blue','grey'];

for(let i=0;i<getAllClass.length;i++)
{
    getAllClass[i].style.backgroundColor=colorArr[i];
}

const names = ['Ashish','Ruchika','Priya','Riya'];
const clor = ['orange','pink','yellow','red'];

for(let i=0;i<names.length;i++)
{
    const elecreate = document.createElement('p');
    elecreate.innerText=names[i];
    elecreate.style.color=clor[i];
    elecreate.style.backgroundColor=clor[names.length-i-1];
    const b = document.querySelector('h1');
    b.appendChild(elecreate);
}