// document.write("<h1 id='h1tag'></h1>");
// const t = document.getElementById("h1tag");
// t.innerText="injected by javascript";

// document.write("<br/>");

// t.innerHTML="<p id='ptag'></p>";

// const g = document.getElementById("ptag");
// g.innerText="p tag text injected"

const person = {
    name:"Ashish",
    age:23,
    nameall:"ashu"
};

console.log(person.age );
person.name = "Ashu";
person.age = 10;

console.log(person );
document.write(person.age,"<br/>",person.name);
console.log(typeof person,"<br/>",typeof person.name,"<br/>",typeof person.age);
document.write("<br/>");
document.write(typeof person,"<br/>",typeof person.name,"<br/>",typeof person.age)
person.name = person.nameall;//assignment by another variable
person['changevar'] = person['name'];
delete person.name;//delete the key from object
person.newvar=90;
console.log(person);
console.log(person['nameall']);

// function iinside the object
const std ={
     name:"Ashish",
     age:"23",
     showIntrest: function(){
            console.log(this.age,std.age);
     }
};

std.showIntrest();

//assign the previous object values to new one
// const stdCpy = new std();
// console.log(stdCpy);


//nested objects
const nst  = {
    f_name:"ram",
    l_name:"singh",
    son : {
        s_name:"Ashu",
        age:30
    },
    show:function(){
            console.log("show-fun-->>>",this.f_name,this.son.age);
    }
};

console.log(nst.f_name);
console.log(nst.son);
console.log(nst.son.age);
nst.show();