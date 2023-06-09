
const apidata = fetch("https://randomuser.me/api/?results=10");
console.log(apidata);



apidata.then(data => {
    // console.log(data.json());
    return data.json()
})
    .then(result => {
        console.log(result.results);
         const userDetails =result.results;
        const tableref = document.createElement("table");
        const trref = document.createElement("tr");

        const thref0 = document.createElement("th");
        thref0.innerText = "Image";
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

        trref.append(thref0,thref1, thref2, thref3, thref4, thref5);
        tableref.appendChild(trref);

        result.results.map(function (ele) {

            const trref2 = document.createElement("tr")

            const tdref0 = document.createElement("td")
            tdref0.innerHTML = `<img src=${ele.picture.medium}>`;
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

            trref2.append(tdref0, tdref1, tdref2, tdref3, tdref4, tdref5);
            tableref.appendChild(trref2);
        });


            //  for(let i=0;i<userDetails.length;i++)
            //  {
            //         const trRef2 = document.createElement("tr");

            //         const tdRef1 = document.createElement("td");
            //         tdRef1.innerText=userDetails[i].name.first;
            //         const tdRef2 = document.createElement("td");
            //         tdRef2.innerText=userDetails[i].name.last;
            //         const tdRef3 = document.createElement("td");
            //         tdRef3.innerText=userDetails[i].email;
            //         const tdRef4 = document.createElement("td");
            //         tdRef4.innerText=userDetails[i].gender;
            //         const tdRef5 = document.createElement("td");
            //         tdRef5.innerText=userDetails[i].dob.age;

            //         trRef2.append(tdRef1, tdRef2, tdRef3, tdRef4,tdRef5);
            //         tableref.appendChild(trRef2);
            //  }





        tableref.style.border=2;
        tableref.style.borderStyle="solid";
        // tableref.style.margin="20px";
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
