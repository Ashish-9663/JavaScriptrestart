
const apiCall = fetch(
    "https://fakestoreapi.com/products/1"
);

// console.log(apiCall);

// apiCall.then(data => {
//                return data.json()}) // const inside = (data) =>{data.json()};
apiCall.then(data => data.json())
        .then(res => console.log(res))
        .catch(error => error);

//<<<<<<<<<<<<<<<<<<OR>>>>>>>>>>>>>>
// apiCall.then(function(data){return data.json()})//function inside(data){return console.log(data.json())}
// .then(function(res){console.log(res)})
// .catch((error) => {error,"comes"});

// const myPromise = new Promise((res, rej) =>{res(2)});

// myPromise.then((x)=>{
//     console.log(x);
//     return x*2;
// })
// .then((x)=>{
//     console.log(x);
//     return x*2;
// })
// .then(x =>{
//     console.log(x);
// });