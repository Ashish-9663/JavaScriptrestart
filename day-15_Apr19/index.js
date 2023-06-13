const h1Ref = document.querySelector("h1");
h1Ref.innerText="Javascript injected";
h1Ref.classList.add("h1ref");

calculate = function(){
   const arr = [1,2,3,4,5,6,7,8,9];
   
   for(let i=0;i<arr.length;i++)
   {
    console.log(arr[i]);
   }
}

function print(fun){
    console.log(fun);
}

print(calculate);


//console.log("geek")