
const apiCall = fetch("https://randomuser.me/api/?results=10");

console.log(apiCall);
apiCall.then(data => data.json())
    .then(results => {
        const arr = results.results;
        

        const imageRef = document.querySelector("img");
        const nameRef = document.querySelector(".name");
        const jobRef = document.querySelector(".job");
        const aboutRef = document.querySelector(".about");
       
        function userDetails(idx) {
            
            imageRef.src = arr[idx].picture.medium;
            nameRef.innerText = `${arr[idx].name.first} ${arr[idx].name.last}`
            jobRef.innerText = arr[idx].location.country;
            // aboutRef.innerText = arr[idx].email;
        }

        const preBtn = document.querySelector("#previousBtn");
        const nextBtn = document.querySelector("#nextBtn");
        const randomBtn = document.querySelector("#showrandom");
        
        let count = 0;
        function inc() {
            if(count === arr.length-1 )
            {
                count = 0;
                
            }
            else{

                count += 1;console.log(count);
            }
            userDetails(count);
        }

        function dec() {
            if(count === 0)
            {
                count = arr.length-1;
                
            }else{
                
                count -= 1;console.log(count);
            }
            userDetails(count);
        }

        function randomNum(){
                 const num = Math.floor(Math.random()*10);
                 console.log(num);
                 userDetails(num)
        }

        preBtn.addEventListener("click", dec);
        nextBtn.addEventListener("click", inc);
        randomBtn.addEventListener("click",randomNum);
        userDetails(0);
    })
    .catch(error => error, "Opps");

