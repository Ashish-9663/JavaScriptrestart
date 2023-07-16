
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
            h5Ref.style.marginBottom="10px";
            h5Ref.classList.add("card-title");

            const link = document.createElement("a");
            link.href = `details.html?id=${v_id}`;
            link.style.textDecoration="none";
            link.style.color="#000000";
            link.appendChild( h5Ref);

            const pRef = document.createElement("p");
            // pRef.innerHTML = `${channel_logo} ${channel_name}`;
            pRef.innerText=(channel_name);
            pRef.classList.add("card-text");
            pRef.style.fontWeight="450";
            pRef.style.color="grey";

            const p2Ref = document.createElement("p");
            p2Ref.innerText = `${views_count} views`; 
            p2Ref.classList.add("card-text");
            p2Ref.style.fontWeight="450";
            p2Ref.style.color="grey";

            const textDiv = document.createElement("div");
            textDiv.classList.add("name");
            textDiv.append(link, pRef,p2Ref);


            const channel_logo = document.createElement("img");
            channel_logo.src="./images/play.png";
            channel_logo.style.width="35px";
            channel_logo.style.marginRight="10px"
            
            const divRef = document.createElement("div");
            divRef.classList.add("card-body");
            divRef.classList.add("flexItem");
            divRef.append(channel_logo,textDiv);

            const imgRef = document.createElement("img");
            imgRef.classList.add("card-img-top","card2");
            // imgRef.style.borderRadius="15px";
            imgRef.src = thumbnails;

            const iframe_ele =document.createElement("iframe");
            iframe_ele.setAttribute('frameborder','0');
            iframe_ele.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe_ele.allowFullscreen=true;
            iframe_ele.classList.add("mini_player");
            iframe_ele.src="http://www.youtube.com/embed/"+v_id;

            const link2 = document.createElement("a");
            link2.href = `details.html?id=${v_id}`;
            link2.style.textDecoration="none";
            link2.append(imgRef,iframe_ele);

            
            const divOuter = document.createElement("div");
            divOuter.classList.add("card");
            divOuter.classList.add("my-2");
            divOuter.style.border="none";
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