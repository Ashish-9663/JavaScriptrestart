
const Api_Key = "AIzaSyBxs1jbcHTaKiOYZNjRVf754Ye7FjUh94Y";

const url = window.location.href;

const url_obj = new URL(url);
const params = new URLSearchParams(url_obj.search);

if (!params.has('q')) {
  window.location.href = "index.html";
}
const search_query = params.get('q');

fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + search_query + "&type=video&key=" + Api_Key + "")
  .then(res => res.json())
  .then(data => {
    const search_data = data.items;
    console.log(data);
    repData(search_data)
  })

function repData(search_data) {
  search_data.map(e => {
    const title = e.snippet.title;
    const channel_name = e.snippet.channelTitle;
    const description = e.snippet.description;
    const thumbnails = e.snippet.thumbnails.high.url;
    const upload_data = e.snippet.publishedAt;
    const video_id = e.id.videoId;

    const htmlContaint =`
    <div class="card " >
      <div class="row g-0">
        <div class="col-md-3">
          <img class ="img-fluid rounded-start" src= ${thumbnails} />
        </div>
        <div class="col-md-9">
          <div class="card-body">
          <a href="detail.html?id"${video_id}></a>
            <h5 class="card-title">${title}</h5>
            <h6 class="card-title">${channel_name}</h6>
            <p class="card-text">${description}</p>
            <p class="card-text"><small class="text-muted">${upload_data}</small></p>
          </div>
        </div>
      </div>
    </div>
  `;
 const outerDiv = document.createElement("div");
 outerDiv.classList.add("bg-light")
 outerDiv.classList.add("mb-3")
 outerDiv.classList.add("border")
 outerDiv.innerHTML =htmlContaint;

 const getcontainerDiv =document.getElementById("containerDiv");
 getcontainerDiv.appendChild(outerDiv);
  })
}