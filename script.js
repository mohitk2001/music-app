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
  },
];
let index = 0;
const play = document.getElementById("play");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const logo_Of_track = document.getElementById("logoof_track");
const music_access = document.getElementById("music_access");
const title_song = document.querySelector(".title");
const artist_song = document.querySelector(".artist");
let isPlaying = false;
title_song.textContent = musicPlayer[index].track_name;
logo_Of_track.src = `./images/${musicPlayer[index].image}.jpg`;
title_song.textContent = musicPlayer[index].track_name;
artist_song.textContent = musicPlayer[index].artist_name;
music_access.src=`./music/${musicPlayer[index].song}.mp3`;
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
next.addEventListener("click", () => {
  index++;
  if (musicPlayer.length > index) {
    logo_Of_track.src = `./images/${musicPlayer[index].image}.jpg`;
    title_song.textContent = musicPlayer[index].track_name;
    artist_song.textContent = musicPlayer[index].artist_name;
    music_access.src=`./music/${musicPlayer[index].song}.mp3`;
    musicPlay();
  } else if(musicPlayer.length<=index){
    index=0;
    logo_Of_track.src = `./images/${musicPlayer[index].image}.jpg`;
    title_song.textContent = musicPlayer[index].track_name;
    artist_song.textContent = musicPlayer[index].artist_name;
    music_access.src=`./music/${musicPlayer[index].song}.mp3`;
    musicPlay();
  }  
});
console.log(index)
prev.addEventListener("click", () => {
  --index;
  if(index<0){
    index=musicPlayer.length-1;
    logo_Of_track.src = `./images/${musicPlayer[index].image}.jpg`;
    title_song.textContent = musicPlayer[index].track_name;
    artist_song.textContent = musicPlayer[index].artist_name;
    music_access.src=`./music/${musicPlayer[index].song}.mp3`;
    musicPlay();
  }
  else if(index>=0){
    logo_Of_track.src = `./images/${musicPlayer[index].image}.jpg`;
    title_song.textContent = musicPlayer[index].track_name;
    artist_song.textContent = musicPlayer[index].artist_name;
    music_access.src=`./music/${musicPlayer[index].song}.mp3`;
    musicPlay();
  }
});
