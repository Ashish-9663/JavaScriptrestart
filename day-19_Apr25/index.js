
const allBtnRef = document.querySelector(".category");
console.log(allBtnRef);

const arr = ["Mobile",'Tv','Clothes','footwears','googles','kids','books','grocery','Alexa Skills','Amazon Devices','Amazon Fashion','Amazon Pharmacy',
'Appliances','Apps & Games','Baby','Beauty','Books','Car & Motorbike','Clothing & Accessories','Collectibles','Computers & Accessories','Electronics',
'Furniture','Garden & Outdoors','Gift Cards'];
const divref = document.createElement("div");
divref.classList.add("content-dropDown")

function dropdown(){
    divref.innerText="";
    for (const idx of arr) {
        const aTag = document.createElement("a");
        aTag.innerText=idx;
        aTag.classList.add("aClass")
        aTag.href="###"
        divref.appendChild(aTag);
    }
    allBtnRef.appendChild(divref);
}

function myfunction(){
    divref.classList.toggle("show");
}
allBtnRef.addEventListener("click",dropdown);
allBtnRef.addEventListener("click",myfunction);

const bookRef = document.querySelector(".btn1");
bookRef.addEventListener("click",books);

function books(){
    const mainRef = document.querySelector(".main") ;
    bookRef.classList.toggle("activeNavbarBtns");
    ElectronicsRef.classList.remove("activeNavbarBtns");
    ClothesRef.classList.remove("activeNavbarBtns");
    GroceryRef.classList.remove("activeNavbarBtns");
    mainRef.innerText="The headphones were on. They had been utilized on purpose. She could hear her mom yelling in the background, but couldn't make out exactly what the yelling was about. That was exactly why she had put them on. She knew her mom would enter her room at any minute, and she could pretend that she hadn't heard any of the previous yelling."   
}

const ElectronicsRef = document.querySelector(".btn2");
ElectronicsRef.addEventListener("click",electronics);

function electronics(){
    const mainRef = document.querySelector(".main") ;
    ElectronicsRef.classList.toggle("activeNavbarBtns");
    bookRef.classList.remove("activeNavbarBtns");
    ClothesRef.classList.remove("activeNavbarBtns");
    GroceryRef.classList.remove("activeNavbarBtns");
    mainRef.innerText="Creative Writin Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.";
}

const ClothesRef = document.querySelector(".btn3");
ClothesRef.addEventListener("click",Clothes);

function Clothes(){
    const mainRef = document.querySelector(".main") ;
    ClothesRef.classList.toggle("activeNavbarBtns");
    ElectronicsRef.classList.remove("activeNavbarBtns");
    bookRef.classList.remove("activeNavbarBtns");
    GroceryRef.classList.remove("activeNavbarBtns");
    mainRef.innerText="Beginning Writing Routine Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.";
}

const GroceryRef = document.querySelector(".btn4");
GroceryRef.addEventListener("click",Grocery);

function Grocery(){
    const mainRef = document.querySelector(".main") ;
    GroceryRef.classList.toggle("activeNavbarBtns");
    ElectronicsRef.classList.remove("activeNavbarBtns");
    bookRef.classList.remove("activeNavbarBtns");
    ClothesRef.classList.remove("activeNavbarBtns");
    mainRef.innerText=`Programmers
    It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are needed, this tool can be a great way to get that. It's a good way to test your programming and that the tool being created is working well.
    Above are a few examples of how the random paragraph generator can be beneficial. The best way to see if this random paragraph picker will be useful for your intended purposes is to give it a try. Generate a number of paragraphs to see if they are beneficial to your current project.`
}

// const nextPage = document.querySelector(".btn5");
// const newPage = document.createElement("a");
// newPage.href="./index2.js";
// nextPage.appendChild(newPage);