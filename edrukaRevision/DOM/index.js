
const tags = document.getElementsByClassName("textTags");
console.log(tags);

const tag2 = document.getElementsByTagName("h1");
console.log(tag2);

const tag3 = document.getElementsByName("okk");
console.log(tag3);

const tag4  = document.querySelectorAll(".textTags")
console.log(tag4);

console.log(document.getElementById("over").tagName);

console.log(document.querySelector("h1[id='time']"));

const arr = document.querySelectorAll("h1[id='time']");
console.log(arr);
const newArr = Array.from(arr);
console.log(newArr);


