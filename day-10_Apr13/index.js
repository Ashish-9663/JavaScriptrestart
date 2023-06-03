// console.log("Start")
// const apiCall = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("allgood"),1000)
// })

// apiCall.then(x => console.log("okk",x))
// .catch(y => console.log("opps",y));

// for(let i=0;i<100;i++)
// {
//     console.log("====",i);
// }
// console.log("line.....1 printed");
// console.log("line.....2 printed");
// console.log("line.....3 printed");
// console.log("line.....4 printed");
// console.log("line.....5 printed");
// console.log("line.....6 printed");
// console.log("line.....7 printed");
// console.log("line.....8 printed");
// console.log("line.....9 printed");
// console.log("line.....10 printed");
// console.log("line.....11 printed");
// console.log("line.....12 printed");
// console.log("line.....13 printed");
// console.log("line.....14 printed");

const dat = fetch('https://reqres.in/api/users');

dat
.then(data => data.json())
.then(result => {
    const userArr = result.data

    for(let i=0;i<userArr.length;i++)
    {
        // console.log(userArr[i]);
        // const ptag = document.createElement('p');
        // ptag.innerText=userArr[i].email;

        const spantag = document.createElement('span');
        spantag.innerText=`
        ${userArr[i].id}, ${userArr[i].first_name}, ${userArr[i].last_name}, ${userArr[i].email}`;

        const h1tag = document.querySelector('h1');
        h1tag.append(spantag);
    }
})

.catch(error => console.log("failed",error));
