const url = window.location.href;
const url_obj = new URL(url);
const params = new URLSearchParams(url_obj.search);
if(!params.has('id')){
    window.location.href="index.html";
}
const vid_id = params.get("id");
fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&id="+vid_id+"&key=AIzaSyBH-VwBnuuLCVmTHC8mEZGjD5eu9wgJMqQ")
.then(res =>{
    return res.json()
})
.then(data =>{
    console.log(data);
})