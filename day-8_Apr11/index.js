
// const getTag = document.getElementById("firstTag");
// // const image = document.createElement("img");
// // image.classList.add("initial");
// // image.src="./Penguins.jpg";
// // console.log(image)
// // getTag.appendChild(image);
// //getTag.innerHTML=`<img src="./Penguins.jpg" class="initial"/>`

// const image = document.createElement("img");
// image.src="./Penguins.jpg";
// image.classList.add("increase");
// //if no initial class
// //image.classList.add="";
// getTag.appendChild(image);

// image.addEventListener("mouseover",small);
// image.addEventListener("mouseout",large);

// function small(){
//     //image.classList="decrease";
//     image.classList.add("decrease");
//     image.classList.remove("increase");
// }

// function large(){
//     //image.classList="increase";
//     image.classList.add("increase");
//     image.classList.remove("decrease");
// }

////============ form ==================//////

const nameElement = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-Password");
const buttonElement = document.getElementById("btn");
const smallEle1 = document.getElementById("small-tag1");
const smallEle2 = document.getElementById("small-tag2");
const smallEle3 = document.getElementById("small-tag3");
const smallEle4 = document.getElementById("small-tag4");

const formElements = document.querySelector("form");

formElements.addEventListener("submit", submitForm);
// buttonElement.addEventListener("click",buttunClick);
// function buttunClick(){

//     console.log("button is clicked");
// }
function submitForm(e) {
    e.preventDefault();
    // console.log("form is submitted");

    if (nameElement.value === "" || nameElement.value.includes("Ashish")) {
        console.warn("Name is empty");
        nameElement.classList = "error";
        smallEle1.classList = "display";
    }
    else {
        nameElement.classList = "sucess";
    }
    if (email.value === "") {
        console.warn("Email is empty");
        email.classList = "error";
        smallEle2.classList = "display";
    }
    else {
        email.classList = "sucess";
    }
    if (password.value === "") {
        console.warn("Password is empty");
        password.classList = "error";
        smallEle3.classList = "display";
    }
    else {
        password.classList = "sucess";
        // if(!password.value.includes("@")&&!password.value.includes("#")&&!password.value.includes("$")){
        //     password.classList="error";
        //     smallEle3.innerText="must includes atleast one # $ @";
        //     smallEle3.classList="display";
        // }


        const symbol = ['!', '@', '#', '$', '%', '&'];
        let count = 0;
        for (let i = 0; i < symbol.length; i++) {
            if (password.value.includes(symbol[i])) {
                count++;
            }

        }
        if (count <= 0) {
            password.classList = "error";
            smallEle3.innerText = "must includes atleast one # $ @";
            smallEle3.classList = "display";
        }
    }
    
    if (confirmPassword.value === "") {
        console.warn("Confirm password is empty");
        confirmPassword.classList = "error";
        smallEle4.classList = "display";
    }
    else {
        confirmPassword.classList = "sucess";
        if (confirmPassword.value != password.value) {
            confirmPassword.classList = "error";
            smallEle4.innerText = "password did not match";
            smallEle4.classList = "display";

        }
    }



}

