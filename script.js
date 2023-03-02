//Initiallize the variables

let songIndex = 0;
let audioElement = new Audio("songs/0.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgessbar = document.getElementById("myProgressBar");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem")); // Array.from used for cover image
let coverImage = document.getElementById("picture");
let glow = document.getElementById("color");

let songs = [
  {
    songName: "Get Out Here (Ft. MaryQueen)",
    filePath: "songs/0.mp3",
    coverPath: "cover/artwork1.jpg",
  },
  {
    songName: "Light (ft. Dualistic)",
    filePath: "songs/1.mp3",
    coverPath: "cover/artwork2.jpg",
  },
  {
    songName: "Ego (Syntact)",
    filePath: "songs/2.mp3",
    coverPath: "cover/artwork3.jpg",
  },
  {
    songName: "Kadak (Zack Merci)",
    filePath: "songs/3.mp3",
    coverPath: "cover/artwork4.jpg",
  },
  {
    songName: "War Machine (Dryskill & Max Brhon)",
    filePath: "songs/4.mp3",
    coverPath: "cover/artwork5.jpg",
  },
  {
    songName: "Adventure (JJD)",
    filePath: "songs/5.mp3",
    coverPath: "cover/artwork6.jpg",
  },
  {
    songName: "Invincible (DEAF KEV)",
    filePath: "songs/6.mp3",
    coverPath: "cover/artwork7.jpg",
  },
  {
    songName: "On & On (Cartoon)",
    filePath: "songs/7.mp3",
    coverPath: "cover/artwork8.jpg",
  },
  {
    songName: "Blank (Disfigure)",
    filePath: "songs/8.mp3",
    coverPath: "cover/artwork9.jpg",
  },
  {
    songName: "Fearless Pt.II (TULE)",
    filePath: "songs/9.mp3",
    coverPath: "cover/artwork10.jpg",
  },
];

//to add cover images using code & change its name
songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// 👆 Handle Master play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    glow.classList.add("glow");
  } else {
    audioElement.pause();
    // makeAllPlays();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    glow.classList.remove("glow");
  }
});

//👂Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // ✨update seekbar
  progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 10000
  );
  myProgessbar.value = progress;
});

//🔍seekbar load
myProgessbar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgessbar.value * audioElement.duration) / 10000;
});

//▶️play selected song
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `songs/${songIndex}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      coverImage.src = songs[songIndex].coverPath;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
      glow.classList.add("glow");
    });
  }
);

///⏩forwad ⏪backward
document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }

  audioElement.src = `songs/${songIndex}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  coverImage.src = songs[songIndex].coverPath;
  console.log(coverImage);
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 9;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex}.mp3`;
  masterSongName.innerText = songs[songIndex].songName; // 🎧 Rename playing song name
  coverImage.src = songs[songIndex].coverPath;
  console.log(coverImage);
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

// Array.from(document.getElementsByClassName("songItemPlay")).forEach(
//   (element) => {
//     element.addEventListener("click", (e) => {
//       if (audioElement.paused || audioElement.currentTime <= 0) {
//         makeAllPlays();
//         songIndex = parseInt(e.target.id);
//         e.target.classList.remove("fa-circle-play");
//         e.target.classList.add("fa-circle-pause");
//         audioElement.src = `songs/${songIndex}.mp3`;
//         masterSongName.innerText = songs[songIndex].songName;
//         coverImage.src = songs[songIndex].coverPath;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         glow.classList.add("glow");
//       } else {
//         audioElement.pause();
//         e.target.classList.remove("fa-circle-pause");
//         e.target.classList.add("fa-circle-play");
//         glow.classList.remove("glow");
//       }

//       // makeAllPlays();
//       // songIndex = parseInt(e.target.id);
//       // e.target.classList.remove("fa-circle-play");
//       // e.target.classList.add("fa-circle-pause");
//       // audioElement.src = `songs/${songIndex}.mp3`;
//       // masterSongName.innerText = songs[songIndex].songName;
//       // coverImage.src = songs[songIndex].coverPath;
//       // audioElement.currentTime = 0;
//       // audioElement.play();
//       // masterPlay.classList.remove("fa-circle-play");
//       // masterPlay.classList.add("fa-circle-pause");
//       // glow.classList.add("glow");
//     });
//   }
// );
