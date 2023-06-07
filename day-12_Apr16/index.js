
// let students = {
//     name :"äshish",//properties =>> format = key:value ---pairs
//     email : "ashishrajput9663@gamil.com",
//     Address : {
//         city :"palwal",
//         state :"haryana"
//     },
// };

// console.log(students.Address.state);

// let arr = ["ashish", "ruchi", "kajal"];

// console.log(arr[2]);


// const users = [
//     {id:1,
//     name:"ashish",
//     email:"ruchi@",
//     address:{
//         vill:"agwanpur",
//         city:"palwal",
//         state:"haryana",
//         geo:{
//             lat:2627.92882,
//             lang:627,
//         },
//     }
//     },
//     {id:2,
//     name:"ashish",
//     email:"ruchi@",
//     address:{
//         vill:"agwanpur",
//         city:"palwal",
//         state:"haryana",
//         geo:{
//             lat:2627.92882,
//             lang:627,
//         },
//     }},
//     {id:3,
//     name:"ashish",
//     email:"ruchi@",
//     address:{
//         vill:"agwanpur",
//         city:"palwal",
//         state:"haryana",
//         geo:{
//             lat:2627.92882,
//             lang:627,
//         },
//     }},
//     {id:4,
//     name:"ashish",
//     email:"ruchi@",
//     address:{
//         vill:"agwanpur",
//         city:"palwal",
//         state:"haryana",
//         geo:{
//             lat:2627.92882,
//             lang:627,
//         },
//     }},
//     {id:5,
//     name:"ashish",
//     email:"ruchi@",
//     address:{
//         vill:"agwanpur",
//         city:"palwal",
//         state:"haryana",
//         geo:{
//             lat:2627.92882,
//             lang:627,
//         },
//     }},
//     {id:6,
//     name:"ashish",
//     email:"ruchi@",
//     address:{
//         vill:"agwanpur",
//         city:"palwal",
//         state:"haryana",
//         geo:{
//             lat:2627.92882,
//             lang:627,
//         },
//     }}
// ]

// console.log(users[2].address.geo.lat);

// const obj ={
//     address: function(){
//         console.log("object function");
//     },
//     name:{
//         firstname:"ashish",
//         lastname:"rajput"
//     },
//     marks:[100, 98, 67, 56]
// };

// obj.address();

// console.log(obj.marks[3]);

// const getTag = document.querySelector("h1");
// console.log(getTag);
// getTag.innerText = "Welcome to Geekster";
// getTag.style.backgroundColor="blue";

// const btn = document.querySelector("button");

// function alterText(){
//     // const newTag = document.createElement("p");
//     // newTag.innerText ="Hello, javascrpt";

//     // getTag.appendChild(newTag);

//     getTag.innerText ="Hello, javascrpt";
// }

// // btn.addEventListener("click",alterText);

// const getPassword = document.getElementById("inputfeild");

// const getShow = document.getElementById("btnShow");
// const getHide = document.getElementById("btnHide");

// getShow.addEventListener("click",show);
// getHide.addEventListener("click",hide);

// function hide(){
//     getPassword
// }

// function show(){
//     getPassword
// }

// console.log(getPassword.value);


const imgtag = document.getElementById("imageTag");

const image = document.createElement("img");
image.src="https://www.shutterstock.com/image-photo/portrait-family-friends-on-hiking-260nw-1102115744.jpg";
// image.style.width="200px";

const btns1 = document.createElement("button");
btns1.id="btnFamily";
btns1.innerText="Family";

const btns2 = document.createElement("button");
btns2.id="btnFriends";
btns2.innerText="Friends";


imgtag.append(image, btns1,btns2);

btns1.addEventListener("click",family);
btns2.addEventListener("click",friends);

function friends()
{
    image.src="https://media.istockphoto.com/id/1321196688/photo/group-multiracial-friends-taking-selfie-with-mobile-smartphone-outdoor-happy-mixed-race.webp?b=1&s=170667a&w=0&k=20&c=J5lmp_enLFZfG8pt736JQVsoKKd-uLb430rd1OFC1So=";

}
function family()
{
    image.src="https://www.shutterstock.com/image-photo/portrait-family-friends-on-hiking-260nw-1102115744.jpg";

}