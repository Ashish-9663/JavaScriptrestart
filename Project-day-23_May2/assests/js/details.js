const url = window.location.href;
const url_obj = new URL(url);
const params = new URLSearchParams(url_obj.search);
if(!params.has('id')){
    window.location.href="index.html";
}
const vid_id = params.get("id");
fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&id="+vid_id+"&key=AIzaSyBxs1jbcHTaKiOYZNjRVf754Ye7FjUh94Y")
.then(res =>{
    return res.json()
})
.then(data => {
    const videoArr = data.items[0];
        console.log(videoArr);
             const iframeHtml = videoArr.player.embedHtml;
            const title = videoArr.snippet.title;
            const channel_name = videoArr.snippet.channelTitle;
             const views_count = videoArr.statistics.viewCount;
             const like_count = videoArr.statistics.likeCount;
            const description = videoArr.snippet.description;

            document.getElementById("title").innerText= title;
            document.getElementById("chanelName").innerText= channel_name;
            document.getElementById("description").innerText= description;
            document.getElementById("views").innerText= views_count;
            document.getElementById("likes").innerText= like_count;
            document.getElementById("player_iframe").src= src="https://www.youtube.com/embed/"+iframeHtml;

             getSuggestions(videoArr.id);

})

function getSuggestions(v_Id){
    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&relatedToVideoId="+v_Id+"&type=video&key=AIzaSyBxs1jbcHTaKiOYZNjRVf754Ye7FjUh94Y")
 .then(res => res.json())
    .then(datas =>{
        console.log(datas.items);
        const suggestion_videos = datas.items;

        suggestion_videos.map(e =>{
            const video_frame = e.id.videoId;

            // if(e.snippet == undefined) {
            //     continue;
            // }

            const vide_title = e.snippet.title;
            const video_thumbinals = e.snippet.thumbnails.high.url;
            // console.log(">>>>>"+vide_title);

            const h5ref = document.createElement("h5");
            h5ref.classList.add("card-title");
            h5ref.innerText =vide_title;

            const link = document.createElement("a");
            link.href = `details.html?id=${video_frame}`;
            link.style.textDecoration="none";
            link.appendChild(h5ref); 

            const innerdiv = document.createElement("div");
            innerdiv.classList.add("card-body");
            innerdiv.appendChild(link);

            const imgRef = document.createElement("img");
            imgRef.src = video_thumbinals;
            imgRef.classList.add("card-img-top");

            const outerdiv = document.createElement("div");
            outerdiv.classList.add("card");
            outerdiv.style.minWidth="18rem";
            outerdiv.append(imgRef,innerdiv);

                const suggestionsList_videos = document.getElementById("suggestionsList_videos");
                suggestionsList_videos.appendChild(outerdiv);
        })

    })}   
    
