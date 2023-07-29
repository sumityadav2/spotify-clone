
//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('song1'));


let songs = [
    { songName: "Salam-e-ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Cielo songs", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Kya Loge Tum", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Tumhari kasam", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "kya aap bhii", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "RaataanLambiyan", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Bhootnath songs", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Yaariyan songs", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Bholnath ji ", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Hanuman Chalisa", filePath: "songs/2.mp3", coverPath: "covers/10.jpg" },
]

songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
})

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    //update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

//seekhbar clickable anywhere
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        //Try by itself
        // if (audioElement.paused || audioElement.currentTime <= 0) {
        //     audioElement.play();
        //     masterPlay.classList.remove("fa-play-circle");
        //     masterPlay.classList.add("fa-pause-circle");
        //     gif.style.opacity = 1;
        // }
        // else {
        //     audioElement.pause();
        //     masterPlay.classList.remove("fa-pause-circle");
        //     masterPlay.classList.add("fa-play-circle");
        //     gif.style.opacity = 0;
       
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex <=0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <=0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})