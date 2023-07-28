
// // let str = "89897";
// // console.log(Number(str));
// // console.log(Number("3.14"));
// // console.log(Number(" "));

// let x = 5;
// let y = 1;
// console.log(x | y);
// console.log(x & y);
// console.log(x ^ y);
// console.log( ~ x);
// console.log(x << y);
// console.log(x >> y);
// console.log(x >>> y);

// console.log(x++ );
// console.log(x);

// console.log(Math.PI);//gives the value of pi==3.14;


// const arr = [1,2,3,4,5,6,7,8,9];
// // for (const iterator of arr.reverse()) {
// //     console.log(iterator);
// // }

// // for(const key in obj){};

// // for (const iterator in arr) {
// //     // console.log(arr[iterator]);
// //     console.log(iterator);
// // }
// // const keyinput = prompt("");
// // const valueinput = prompt("");
// const obj ={
//     name:"ashish",
//     class:"5th",
//     rollno:12,
//     "sub":"maths",
//     sub:"science",//overdide due to duplecate key
//     // [keyinput]:valueinput,
// };

// for (let iterator in obj) {
//      console.log(obj[iterator]); 
//     // console.log(obj.iterator);
    
// }
// console.log(obj);
// obj.school="srd";//new enty
// obj.name="ashu"//change value
// delete obj.class;
// console.log(obj.keys); 

// //accesing objects
// console.log(obj.name)
// console.log(obj["name"])
// // console.log(obj[x=age,obj[x]])

// console.log(Object.values(obj));

// // document.querySelector("h1").innerText=obj.name;

// // document.querySelector("h1").innerText= Object.values(obj);



// console.log(JSON.stringify(obj));
// document.querySelector("h1").innerText= JSON.stringify(obj);



// const std = {
//     name:"ruchika",
//     age: 23,
//     language:"hindi",
//     city:"fbd",
//     get lang(){
//        return this.language;
//     },
//     city:function(){
//         // return std.city;
//         return ("hii i am ashish");
//     }
// }
// console.log(std);
// console.log(std.lang);
// console.log(std.city());


// const obj2 = {counter : 0};

// // Define Setters and Getters
// Object.defineProperty(obj2, "reset", {
//   get : function () {this.counter = 0;}
// });
// Object.defineProperty(obj2, "increment", {
//   get : function () {this.counter++;}
// });
// Object.defineProperty(obj2, "decrement", {
//   get : function () {this.counter--;}
// });
// Object.defineProperty(obj2, "add", {
//   set : function (value) {this.counter += value;}
// });
// Object.defineProperty(obj2, "subtract", {
//   set : function (value) {this.counter -= value;}
// });

// // Play with counter:
// obj2.reset;
// obj2.add = 5;
// obj.subtract = 1;
// obj2.increment;
// obj2.decrement;
// document.getElementById("f1").innerHTML = obj2.counter;
// console.log(obj2)

const newObj = new Car("fortuner", "2019", "red", "40Lakh");

function Car(carName, year, color, price){
    this.carName0 = carName;
    this.year1 = year;
    this.color2 = color;
    this.price3 = price;
    this.type = function(){
        return this.year1+" "+this.color2;  
    }
}
console.log(newObj);

Car.type = function(){
    return this.year1+" "+this.color2;
}
//Car.okk = "none not allowed";//not allowes directly
console.log(Car);
console.log(newObj.type);

//using prototype key word

 Car.prototype.okk="new property added";
 Car.prototype.newFun = function(){console.log("new method added")};
console.log(Car);
console.log(newObj.okk);
console.log(newObj.newFun());


const newSet = new Set([1,2,3,4,5,6]);

newSet.add(7);
newSet.delete(5);
console.log(newSet.has(3));
// console.log(newSet.clear());
console.log(newSet.values());
console.log(newSet.entries(3));
console.log(newSet.size);
console.log(newSet);
