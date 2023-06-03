// console.log("hii ruchika");

// setTimeout(someFunction,5000);

// function someFunction(){
//     console.log("time out function")
// }

// console.log("bye");

// setTimeout(someFunction2,5000);

// function someFunction2(){
//     console.log("time out function2")
// }

// console.log("bye2");

// const alpha = ['a', 'b', 'c', 'd', 'e'];

// let i = 0;
// setTimeout(alphaPrint, 5000);
// function alphaPrint() {
//     console.log(alpha[i++]);
//     setTimeout(alphaPrint, 5000)
// }

// const mypromise = new Promise((resolve, reject) => {
//     resolve('Hi ashish');
//     // reject('no answerr');
    
// })

// mypromise
// .then(reso => console.log('okk',reso))
// .catch(err => console.log('opps',err));


const num = prompt('enter a number');

const typ = new Promise((resolve,reject) =>{
    // if(num%2==0)resolve('even number');
    // else reject('odd numer');
    setTimeout(() => resolve("timeout"),5000);
})

typ.then(x => console.log('fulfill',x))
.catch(y => console.log('rejected',y));