
const arr = [];

const divRef = document.querySelector("div");

const inputRef = document.querySelector("input");

const formRef = document.querySelector("form");

formRef.addEventListener("submit", addItems);

const newDiv = document.querySelector(".todoItems");

function addItems(event) {
    event.preventDefault();
    const obj = {
        id: arr.length,
        todo: inputRef.value
    };

    // const delBtn = document.createElement("button");
    // delBtn.addEventListener("click", deleteItems.bind(null, obj.id), false);
    // delBtn.innerText = "Delete Item";
    // delBtn.id = obj.id;
    arr.push(obj);


    // newDiv.appendChild(delBtn);
    // divRef.appendChild(newDiv);
    console.log(arr)
    displayArr();
    inputRef.value = "";
}

function displayArr() {
    newDiv.innerHTML = "";

    arr.map(function (ele) {
        const htmlContaint = `
       <h3>${ele.todo}</h3>
       <button id = ${ele.id} onClick = "deleteItems(${ele.id})">Delete Item${ele.id}</button>`
        newDiv.innerHTML = newDiv.innerHTML + htmlContaint;
    })

    // for(let i=0;i<arr.length;i++)
    // {
    //     const htmlContaint = `
    //    <h3>${arr[i].todo}</h3>
    //     <button id = ${arr[i].id} onClick = "deleteItems(${arr[i].id})">Delete Item</button>`
    //     newDiv.innerHTML = newDiv.innerHTML + htmlContaint;
    // }

}


deleteItems = function (Id) {
    // arr.map(function (ele) {
    //     if (ele.id === Id) {
    //         arr.splice(ele.id, 1);
    //     }
    //     // arr.splice(Id, 1);
    //     console.log("running");
    // })

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].id === Id) {
            console.log(arr[i].id , Id, i)
            arr.splice(i, 1);
            //  console.log(arr[i].id + "===index===" + i + "<<<<<ïd--" + Id);
        }
    }
    console.log(arr);
    displayArr();
}
