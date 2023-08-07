
class Car{
     
    constructor(name, color, year, brand){
        this.name = name;
        this.color = color;
        this.year = year;
        this.brand = brand;
    }
    details(){
        return this.name+" "+this.color;
    }
    printAll(){
        document.querySelector("h1").innerText=this.name+" "+this.color+" "+this.year+" "+this.brand;
        const text =this.name+" "+this.color+" "+this.year+" "+this.brand;
        return text;
        
    }
}

const bmw = new Car("name","gray",2023,"BMW");
const audi = new Car("Q7","White",2021,"AUDI");
console.log(bmw);
console.log(typeof Car);
console.log(typeof bmw.name);
console.log(bmw.details());
bmw.printAll();
// audi.printAll();
document.querySelector("h2").innerText = audi.printAll();

const std = class{
    constructor(id, name, year){
        this.std_id = id;
        this.std_name = name;
        this.add_year = year;
    }
    display(){
        return this.std_id+" "+this.std_name+" "+this.add_year;
    }
}
const ashu = new std(1,"ashish",2017); 
console.log(ashu.display());
console.log(ashu);


const emp = class Employee{
    constructor(id,name,sex){
        this.Employee_id=id;
        this.Employee_name=name;
        this.Employee_sex=sex;
    }
    details(){
        console.log(this.Employee_name);
    }
}
 const empDetails = new emp(1,"ruchi","F");
// const empDetails = new Employee(1,"ruchi","F");
empDetails.details();