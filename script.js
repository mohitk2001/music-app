const musicPlayer=[
    {
        artist_name:"Prophec",
        track_name:"Kinna Chir",
        image:"Kinna_Chir",
        song:"Kinna_Chir"
    },
    {
        artist_name:"Jasleen and B Praak",
        track_name:"Ranjha",
        image:"Ranjha",
        song:"Ranjha"
    },
    {
        artist_name:"Prophec",
        track_name:"Where You Been",
        image:"Where_You_Been",
        song:"Where_You_Been"
    }
]

const play=document.getElementById("play");
let isPlaying=false

const musicPlay=()=>{
    play.classList.replace("fa-play","fa-pause");
    document.getElementById("music_access").play();
}
const musicPause=()=>{
    play.classList.replace("fa-pause","fa-play")
    document.getElementById("music_access").pause();
}
play.addEventListener("click",()=>{
    
    isPlaying=!isPlaying
    console.log(isPlaying)
    isPlaying?musicPlay():musicPause();
    
})