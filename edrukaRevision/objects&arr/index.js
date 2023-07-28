
const display =(data)=>{
        console.log(data);
    }
    
const arr = [1,"ashu",true,false,3,"rajput"];
// display(arr[0]);
// display(arr.at(4));

const arr1 = [1,2,3,4,5,6];
const arr2 = [0,9,8,7];

const multiArr = [1,[2,3,4],5,6,7,[8,[9]],0];

display(arr1.concat(arr2.reverse(),arr));

// const  p = document.getElementById("h1");
// p.innerHTML = arr.entries();

// display(arr1.copyWithin(2,0,2));
// display(arr1.entries());

display(arr1.every(even));
display(arr2.every(even));

function even(num){
   return num%2==0;
//   return num>0;
}

// display(arr.fill("ashu"));
// display(arr)

display(">>"+arr1.filter(even));
display(">>"+arr1.find(even));
display(">>"+arr1.findIndex(even));
display(multiArr.flat(2));//length to collapse all multilevel

const obj = {
    fname : "ashu",
    lname : "singh",
    age : 23,
    height : 5.5
};

// display(arr2.includes(4));
// display(arr2.indexOf(0));
// display(arr2.join("|"));
// display(arr1.keys());
// display(">>>"+arr1.shift());
// display(">>>"+arr1.unshift(1));
// display(arr1.slice(0,3));
// display(arr1.splice(0,2));//to remove
// display(arr1.splice(0,0,1,2,));//to add

display(arr1.valueOf());

display(arr1);


