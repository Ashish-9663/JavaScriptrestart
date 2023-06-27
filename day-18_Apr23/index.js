

const eleRef = document.querySelector("#eleItm");
console.log(eleRef);

// const btn = `
// <button style="all:unset; cursor: pointer;" onclick="dropDown">Electronics</button>`;

// eleRef.innerHTML=btn;

const btn = document.createElement("button");
btn.innerText = "Electronic";
btn.style.all = "unset";
btn.style.cursor = "pointer";
btn.classList.add("dropdown")
btn.addEventListener("click", dropDown);
btn.addEventListener("click",myFunction);
eleRef.innerText = "";
eleRef.appendChild(btn);

const divRef = document.createElement("div");
divRef.classList.add("dropdown-content");

function dropDown() {
    divRef.innerText="";
    const arr = ["mobile", "Fridge", "oven", "cooler", "AC", "washing machine", "mixer"];
    for (const idx of arr) {
        const listEle = document.createElement("a");
        listEle.href = "##";
        listEle.classList.add();
        listEle.innerText = idx;
        divRef.appendChild(listEle);
    }
    eleRef.appendChild(divRef);
}

function myFunction() {
    divRef.classList.toggle("show");
  }
