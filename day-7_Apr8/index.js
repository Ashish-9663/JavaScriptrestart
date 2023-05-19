
// const arr = ['ashish','ashu','gulshan','kumar','rajput'];

// const classList = ['one','two','three','four','five'];
 
// for(let i=0;i<arr.length;i++){
//     const cld = document.createElement('p');
//     cld.innerText=arr[i];
//     cld.classList.add(classList[i]);
//     const g = document.getElementById('h1tag');
//     console.log(cld,g)
//     g.appendChild(cld);
// }

const g = document.getElementById('h1tag');
// g.innerHTML="<h2 id='h2tag' class= 'two'> hiii</h2>";
 g.innerHTML=`<h2 id='h2tag' class=three> hiii</h2>`;

const arr = ['ashish','ashu','gulshan','kumar','rajput'];

for(let i=0;i<arr.length;i++){
    console.log("hello1",arr[i]);
    console.log("hello2"+arr[i]);
    console.log(`hello3${arr[i]}`);
}