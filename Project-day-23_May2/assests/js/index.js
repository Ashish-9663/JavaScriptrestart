
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
            const views_count = e.statistics.viewCount;
            

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

            const link2 = document.createElement("a");
            link2.href = `details.html?id=${v_id}`;
            link2.style.textDecoration="none";
            link2.appendChild(imgRef);

            
            const divOuter = document.createElement("div");
            divOuter.classList.add("card");
            divOuter.classList.add("my-2");
            divOuter.append(link2, divRef);
            divOuter.style.width = "100%"; 

            const divContainer = document.createElement("div");
            divContainer.classList.add("col");
            divContainer.appendChild(divOuter);

            const card_container = document.getElementById("card-container");
        card_container.appendChild(divContainer);
        })
        
    });


    // AIzaSyDAPaNMjPcUVe1LUvkvFP-q3YBgB0C6QrQ