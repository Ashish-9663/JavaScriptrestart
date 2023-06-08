
const api = fetch('https://fakestoreapi.com/products/1');
console.log(api);
api
.then(data => data.json())
.then(res => {
     console.log(res)
    const apiData = res

const divRef = document.querySelector('h1');
const newtag = document.createElement("p");
newtag.classList.add("details")
newtag.innerText = `
Id : ${apiData.id}
Title : ${apiData.title}
Price : ${apiData.price} 
Description : ${apiData.description} 
Category : ${apiData.category} 
Rating : ${apiData.rating.rate} 
Stock : ${apiData.rating.count}`;
const picturetag = document.createElement("img")
picturetag.classList.add("image")
picturetag.src=`${apiData.image}`;
picturetag.style.width ="300px";
picturetag.style.height ="300px";
divRef.append(newtag,picturetag);
divRef.classList.add("card");
    
})
.catch(error => console.log("error",error));





 
//  const dat = fetch('https://reqres.in/api/users');

//  dat
//  .then(data => data.json())
//  .then(result => {
//      const userArr = result.data
 
//      for(let i=0;i<userArr.length;i++)
//      {
//          // console.log(userArr[i]);
//          // const ptag = document.createElement('p');
//          // ptag.innerText=userArr[i].email;
 
//          const spantag = document.createElement('span');
//          spantag.innerText=`
//          ${userArr[i].id}, ${userArr[i].first_name}, ${userArr[i].last_name}, ${userArr[i].email}`;
 
//          const h1tag = document.querySelector('h1');
//          h1tag.append(spantag);
//      }
//  })
 
//  .catch(error => console.log("failed",error));