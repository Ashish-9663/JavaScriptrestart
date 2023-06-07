
const data = fetch('https://reqres.in/api/users');
data
.then(res => res.json())
 .then(result => consle.log(result.res))
 .catch(error =>error);

 
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