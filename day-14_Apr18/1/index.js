
// const h1Ref = document.querySelector("h1");
// console.log(h1Ref);
// const valu = 12;
// const newTag = document.createElement("p");
// newTag.innerText="hello "+valu+" hii";
// // newTag.innerText=`hello ${valu} hi`

// h1Ref.appendChild(newTag);

const api = fetch("https://reqres.in/api/users");
api.then(data => data.json())
.then(result => {
    console.log(result.data);

    const divRef = document.querySelector("div");
    const tableRef = document.createElement("table");
    const trRef1 = document.createElement("tr");
    const thRef = `
    <th >Image</th>
    <th>ID</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>`
    trRef1.innerHTML=thRef;
    tableRef.appendChild(trRef1);

    result.data.map(function(ele) {
    //const htmlContant =`
        // <h3>Id : ${ele.id}</h3> 
        // <h3>First First Name : ${ele.first_name}</h3> 
        // <h3>Last Name : ${ele.last_name}</h3> 
        // <h3>Email : ${ele.email}</h3> 
        // <img src=${ele.avatar}>
        // `
        // const div2 = document.createElement("div");
        // div2.innerHTML=htmlContant;
        //     console.log(div2)
        // const divRef = document.querySelector("div");
        // divRef.appendChild(div2);

        const trRef2 = document.createElement("tr");
        const tdRef = `
        <td><img src=${ele.avatar}></td>
        <td>${ele.id}</td>
        <td>${ele.first_name}</td>
        <td>${ele.last_name}</td>
        <td>${ele.email}</td>`

        trRef2.innerHTML=tdRef;
        tableRef.appendChild(trRef2); 
    })
       divRef.appendChild(tableRef);
       tableRef.style.border=1;
       tableRef.style.border="solid";
       tableRef.style.padding="20px";
       tableRef.style.borderCollapse="collapse";
       const thRefClass = document.getElementsByTagName("th");
    //    console.log(thRefClass);
    //    thRefClass.map(function(ele){
    //      ele[idx].style.background="red"
    //     // console.log(ele);
    //    })
    for(let i=0;i<thRefClass.length;i++){
        thRefClass[i].style.background="red";
        thRefClass[i].style.padding="10px";
    }
    const tdSTYLE = document.querySelectorAll("td");
    for(let i=0;i<tdSTYLE.length;i++){

        tdSTYLE[i].style.padding="10px";
    }

    })
.catch(error => error)
