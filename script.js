const musicPlayer = [
  {
    artist_name: "Prophec",
    track_name: "Kinna Chir",
    image: "Kinna_Chir",
    song: "Kinna_Chir",
  },
  {
    artist_name: "Jasleen and B Praak",
    track_name: "Ranjha",
    image: "Ranjha",
    song: "Ranjha",
  },
  {
    artist_name: "Prophec",
    track_name: "Where You Been",
    image: "Where_you_been",
    song: "Where_You_Been",
  }
];
let index=0;
const play = document.getElementById("play");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const logo_Of_track=document.getElementById("logoof_track")
const music_access=document.getElementById("music_access")
const title_song=document.querySelector(".title")
const artist_song=document.querySelector(".artist")
let isPlaying = false;
const musicPlay = () => {
  play.classList.replace("fa-play", "fa-pause");
  document.getElementById("music_access").play();
};
const musicPause = () => {
  play.classList.replace("fa-pause", "fa-play");
  document.getElementById("music_access").pause();
};
play.addEventListener("click", () => {
  isPlaying = !isPlaying;
  console.log(isPlaying);
  isPlaying ? musicPlay() : musicPause();
});
next.addEventListener("click",()=>{
    if(musicPlayer.length>index){
        index++;
        console.log(index)
        logo_Of_track.src=`./images/${musicPlayer[index].image}.jpg`;
        title_song.textContent=musicPlayer[index].track_name
        artist_song.textContent=musicPlayer[index].artist_name
        
    }
    else{
        console.log(index)
    }
    console.log(musicPlayer.length)
    // else if(index>musicPlayer.length){
    //     index=0
    //     console.log(index)
    //     logo_Of_track.src=`./images/${musicPlayer[index].image}.jpg`;
    //     title_song.textContent=musicPlayer[0].track_name
    //     artist_song.textContent=musicPlayer[0].artist_name
    // }
    
})
prev.addEventListener("click",()=>{
    if(index>0)
    console.log("prev",--index);
    else if(index<0){
        index=0;
        console.log(index)
    }
})

