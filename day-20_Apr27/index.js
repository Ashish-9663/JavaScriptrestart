const searchBoxDivRef = document.querySelector(".searchBoxcontainer");
console.log(searchBoxDivRef);
const bodyRef = document.querySelector("main");


function searchBoxcontainerFun() {
    searchBoxDivRef.classList.add("searchBoxcontainerOnClick");
}

function searchBoxcontainerRem() {
    searchBoxDivRef.classList.remove("searchBoxcontainerOnClick");
}
searchBoxDivRef.addEventListener("click", searchBoxcontainerFun);
bodyRef.addEventListener("click", searchBoxcontainerRem);

const inputdataRef = document.querySelector(".inputBox");
const searchBtnRef = document.querySelector(".searchBtn");
searchBtnRef.addEventListener("click", fetchdata);


function fetchdata() {

const apidata =`https://api.edamam.com/api/recipes/v2?type=public&app_id=320bdb72&app_key=005ae30b2eac1f930fede61e5a13be7e&dishType=${inputdataRef.value}`;
    
    fetch(apidata).then(data => data.json())
        .then(result => {
            console.log(result.hits);
            displayData(result.hits);
        })
        .catch(error => {
            console.log("somthing went wrong",error);
        })
}


const displayData = (dataArr) => {
    console.log(dataArr);
    const mainCard = document.querySelector(".mainsection")
    mainCard.innerHTML="";
    if(dataArr.length === 0){
        const noDataDiv = document.createElement("div");
        noDataDiv.innerText="No Record found !!"
        noDataDiv.classList.add("noDataClass");
        mainCard.appendChild(noDataDiv);
        
    }
    else{

        
        dataArr.map(e =>{
            const newDiv = document.createElement("div");
            newDiv.classList.add("newDiv")
            const cardHtml = `
            <div class="cardImage">
            <img class="cardDishImage" src="${e.recipe.images.SMALL.url}" alt="dishImage">
            </div>
            <div class="cadrDetails">
            <div class="nameDish">${e.recipe.label}</div>
            </hr>
            <div class="info">${e.recipe.source}</div>
            </div>`;
        newDiv.innerHTML = cardHtml;
        mainCard.appendChild(newDiv);
    })
}
     
}