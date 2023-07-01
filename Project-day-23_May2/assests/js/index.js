
//   /**
//    * Sample JavaScript code for youtube.videos.list
//    * See instructions for running APIs Explorer code samples locally:
//    * https://developers.google.com/explorer-help/code-samples#javascript
//    */

//   function authenticate() {
//     return gapi.auth2.getAuthInstance()
//         .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
//         .then(function() { console.log("Sign-in successful"); },
//               function(err) { console.error("Error signing in", err); });
//   }
//   function loadClient() {
//     gapi.client.setApiKey("YOUR_API_KEY");
//     return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//         .then(function() { console.log("GAPI client loaded for API"); },
//               function(err) { console.error("Error loading GAPI client for API", err); });
//   }
//   // Make sure the client is loaded and sign-in is complete before calling this method.
//   function execute() {
//     return gapi.client.youtube.videos.list({
//       "chart": "mostPopular",
//       "maxResults": 24
//     })
//         .then(function(response) {
//                 // Handle the results here (response.result has the parsed body).
//                 console.log("Response", response);
//               },
//               function(err) { console.error("Execute error", err); });
//   }
//   gapi.load("client:auth2", function() {
//     gapi.auth2.init({client_id: "VwBnuuLCVmTHC8mEZGjD5eu9wgJMqQ"});
//   });

// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&key=[YOUR_API_KEY] 
fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&key=AIzaSyBxs1jbcHTaKiOYZNjRVf754Ye7FjUh94Y")
    .then(res => { return res.json() })
    .then(data => {
        const videoArr = data.items;
        console.log(videoArr);
        videoArr.map(e => {
            const v_id = e.id;
            const thumbnails = e.snippet.thumbnails.high.url;
            const title = e.snippet.title;
            const channel_name = e.snippet.channelTitle;
            const views_count = e.statistics.viewcount;
            

            const h5Ref = document.createElement("h5");
            h5Ref.innerText = title;
            h5Ref.classList.add("card-title");

            const link = document.createElement("a");
            link.href = `details.html?id=${v_id}`;
            link.style.textDecoration="none";
            link.appendChild(h5Ref);

            const pRef = document.createElement("p");
            pRef.innerText = `${channel_name} || ${views_count} views`;
            pRef.classList.add("card-text");
            
            const divRef = document.createElement("div");
            divRef.classList.add("card-body");
            divRef.append(link, pRef);

            const imgRef = document.createElement("img");
            imgRef.classList.add("card-img-top");
            imgRef.src = thumbnails;

            
            const divOuter = document.createElement("div");
            divOuter.classList.add("card");
            divOuter.classList.add("my-2");
            divOuter.append(imgRef, divRef);
            divOuter.style.width = "18rem";

            const divContainer = document.createElement("div");
            divContainer.classList.add("col");
            divContainer.appendChild(divOuter);

            const card_container = document.getElementById("card-container");
        card_container.appendChild(divContainer);
        })
        
    });


/* <div class="col">
    <div class="card" style="width: 18rem;">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
            <svg class="bd-placeholder-img card-img-top" width="100%" height="180"
                 xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap"
                 preserveAspectRatio="xMidYMid slice" focusable="false">
                 <title>Placeholder</title>
                 <rect width="100%" height="100%" fill="#868e96"></rect> <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
            </svg>
                        
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
            </div>
    </div>
</div> */