
const apidata = fetch("https://randomuser.me/api/?results=100");
console.log(apidata);

apidata.then(data => {
    // console.log(data.json());
    return data.json()
})
    .then(result => {
        console.log(result.results);
        const tableref = document.createElement("table");
        const trref = document.createElement("tr");

        const thref1 = document.createElement("th");
        thref1.innerText = "FirstName";
        const thref2 = document.createElement("th");
        thref2.innerText = "LastName";
        const thref3 = document.createElement("th");
        thref3.innerText = "Email";
        const thref4 = document.createElement("th");
        thref4.innerText = "Gender";
        const thref5 = document.createElement("th");
        thref5.innerText = "Age";

        trref.append(thref1, thref2, thref3, thref4, thref5);
        tableref.appendChild(trref);

        result.results.map(function (ele) {

            const trref2 = document.createElement("tr")

            const tdref1 = document.createElement("td")
            tdref1.innerText = ele.name.first;
            const tdref2 = document.createElement("td")
            tdref2.innerText = ele.name.last;
            const tdref3 = document.createElement("td")
            tdref3.innerText = ele.email;
            const tdref4 = document.createElement("td")
            tdref4.innerText = ele.gender;
            const tdref5 = document.createElement("td")
            tdref5.innerText = ele.dob.age;

            trref2.append(tdref1, tdref2, tdref3, tdref4, tdref5);
            tableref.appendChild(trref2);
        });
        tableref.style.border=2;
        tableref.style.borderStyle="solid";
        tableref.style.margin="20px";
        tableref.style.width="90%";
        trref.style.textAlign="left";
        const cpt = document.createElement("caption");
        cpt.innerText="User Details";
        cpt.style.fontSize="20px"
        tableref.appendChild(cpt);
        

        
        const divref = document.querySelector("div");
        divref.appendChild(tableref);
        console.log(divref);
        return;
    })
    .catch(error => console.log("error", error));
