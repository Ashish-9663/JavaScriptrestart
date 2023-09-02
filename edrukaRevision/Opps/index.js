
// class Car{
     
//     constructor(name, color, year, brand){
//         this.name = name;
//         this.color = color;
//         this.year = year;
//         this.brand = brand;
//     }
//     details(){
//         return this.name+" "+this.color;
//     }
//     printAll(){
//         document.querySelector("h1").innerText=this.name+" "+this.color+" "+this.year+" "+this.brand;
//         const text =this.name+" "+this.color+" "+this.year+" "+this.brand;
//         return text;
        
//     }
// }

// const bmw = new Car("name","gray",2023,"BMW");
// const audi = new Car("Q7","White",2021,"AUDI");
// console.log(bmw);
// console.log(typeof Car);
// console.log(typeof bmw.name);
// console.log(bmw.details());
// bmw.printAll();
// // audi.printAll();
// document.querySelector("h2").innerText = audi.printAll();

// const std = class{
//     constructor(id, name, year){
//         this.std_id = id;
//         this.std_name = name;
//         this.add_year = year;
//     }
//     display(){
//         return this.std_id+" "+this.std_name+" "+this.add_year;
//     }
// }
// const ashu = new std(1,"ashish",2017); 
// console.log(ashu.display());
// console.log(ashu);


// const emp = class Employee{
//     constructor(id,name,sex){
//         this.Employee_id=id;
//         this.Employee_name=name;
//         this.Employee_sex=sex;
//     }
//     details(){
//         console.log(this.Employee_name);
//     }
// }
//  const empDetails = new emp(1,"ruchi","F");
// // const empDetails = new Employee(1,"ruchi","F");
// empDetails.details();


// ///////>>>>>>>>>>>>     CONSTRUCTOR <<<<<<<<<<<<

// class compName{
//     constructor(company){
//         this.comp_name = company;
//     }
// }
// class emplo extends compName{
//     constructor(id,name){
//         super();
//         this.emp_id=id;
//         this.emp_name = name;
//     }
// }
// const cmpNAme = new compName("capegemini");
// console.log(cmpNAme);
// const empdetails = new emplo(1,"ashu");
// console.log(empdetails);

// class m1{
//     constructor(){
//     m1.money();
//     this.constructor.money();
//     }
//     static money(){
//         console.log("money u got ");
//         return 123
//     }
// }

// const h1 = new m1();
// console.log(m1.money());


////  CONSTRUCTOR without class

// function Person(name, age){
//     this.name =name
//     this.age = age

//     this.getName = function(){
//         return name;
//     }
// }

// const p1 = new Person("ashish",24)
// console.log(p1);

// a=1;
// var a = 4;
// a++;
// alert(a);
// console.log(a);

// >>>>>>>> Encapsulation <<<<<<<<<

// class std{
//      #Sname = "";
//     _sage = 0;
//     constructor(name,age){
//         this.#Sname = name;
//         this._sage = age;
//         var g = 0;
//     }
// }

// const newObj = new std("ashsu",23);
// // newObj.#Sname = 10; wrong
// console.log(newObj);

// class StdData{
//     name;
//     class;
//     setALL(name){
//         this.name = name;
//         this.class = 9 ;
//     }
//     getAll(){
//         return this.name+" "+this.class;
//     }

// }

// const stdDetais = new StdData();
// stdDetais.name = "allNew";
// console.log(stdDetais.getAll());

// class Student
//   {
//     #okkk;
//     constructor()
//     {
//        var name,lname;
//        var marks;
//     }
//         getName()
//         {
//           return this.name;
//         }
//       setName(name)
//       {
//         this.name=name;
//       }
      
//       getMarks()
//       {
//         return this.marks;
//       }
//     setMarks(marks)
//     {
//         if(marks<0||marks>100)
//         {
//           alert("Invalid Marks");
//         }
//       else
//         {
//           this.marks=marks;
//         }
//     }
//     }
//     var stud=new Student();
//      stud.setName("John");
//      stud.setMarks(110);//alert() invokes
//      console.log(stud.getName()+" "+stud.getMarks());


     //<<<<<<<<<< inhritance >>>>>>>>>>

//      class Moment extends Date {  
//         constructor(year) {  
//           super(year);  
//         }}  
//       var m=new Moment("August 15, 1947 20:22:10");  
//       console.log("Year value:")  
//       console.log(m.getFullYear()); 
      
//       //Constructor function  
// function Bike(company)  
// {  
//     this.company=company;   
// }  
  
// Bike.prototype.getCompany=function()  
// {  
//   return this.company;  
// }  
// //Another constructor function  
// function Vehicle(name,price) {  
//  this.name=name;  
//   this.price=price;  
//   }   
// var bike = new Bike("Honda");  
// Vehicle.prototype=bike; //Now Bike treats as a parent of Vehicle.  
// var vehicle=new Vehicle("Shine",70000);  
// console.log(vehicle.getCompany()+" "+vehicle.name+" "+vehicle.price);  

// class Bike  
// {  
//     //  company="Honda";
//   constructor(cmp)  
//   {  
//     // this.company=cmp;  
//     this.company = "Honda";
//   }  
// }  
// class Vehicle extends Bike {  
//   constructor(name,price) {  
//    super();  
//     this.name=name;  
//     this.price=price; 
    
//   }   
// }  
// var v = new Vehicle("Shine","70000");
// // var b = new Bike("Honda");  
// console.log(v.company+" "+v.name+" "+v.price);  

//>>>>>>> Ploymorphism >>>>>>>

class Animal{
  
  speak(a){
    console.log("Animals sounds are different as " + a);
  }
}
class Cat extends Animal{
  speak(b){
    console.log("Animals sounds are different for cat "+ b);
  }
}
class Dog extends Animal{
  speak(c){
    console.log("Animals sounds are different for dog "+ c);
  }
}
const dog = new Dog();
const cat = new Cat();
dog.speak(9);
cat.speak(8);
const animal = new Animal();
animal.speak(10);