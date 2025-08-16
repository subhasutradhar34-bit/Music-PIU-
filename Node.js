alert("Hellow")
const song1 = new Audio("music1.mp3")
const song2 = new Audio("music2.mp3")
const song3= new Audio("music3.mp3")
const song4=new Audio("music4.mp3")
const song5=new Audio("music5.mp3")
function playsong1(){
    song1.play();
}
function playsong2(){
    song2.play();

}
function playsong3(){
    song3.play();

}
function playsong4(){
    song4.play();

}
function playsong5(){
    song4.play();

}
// Keep track of play state
let isPlaying1 = false;
let isPlaying2 = false;
let isPlaying3 = false;
let isPlaying4 = false;
let isPlaying5 = false;

// Toggle functions
function toggleSong1() {
  if (!isPlaying1) {
    song1.currentTime = 0;
    song1.play();
    isPlaying1 = true;
  } else {
    song1.pause();
    song1.currentTime = 0;
    isPlaying1 = false;
  }
}

function toggleSong2() {
  if (!isPlaying2) {
    song2.currentTime = 0;
    song2.play();
    isPlaying2 = true;
  } else {
    song2.pause();
    song2.currentTime = 0;
    isPlaying2 = false;
  }
}

function toggleSong3() {
  if (!isPlaying3) {
    song3.currentTime = 0;
    song3.play();
    isPlaying3 = true;
  } else {
    song3.pause();
    song3.currentTime = 0;
    isPlaying3 = false;
  }
}

function toggleSong4() {
  if (!isPlaying4) {
    song4.currentTime = 0;
    song4.play();
    isPlaying4 = true;
  } else {
    song4.pause();
    song4.currentTime = 0;
    isPlaying4 = false;
  }
}
function toggleSong5() {
  if (!isPlaying5) {
    song5.currentTime = 0;
    song5.play();
    isPlaying5 = true;
  } else {
    song5.pause();
    song5.currentTime = 0;
    isPlaying5 = false;
  }
}

// Button click events
document.querySelector(".one").addEventListener("click", toggleSong1);
document.querySelector(".Two").addEventListener("click", toggleSong2);
document.querySelector(".Three").addEventListener("click", toggleSong3);
document.querySelector(".Four").addEventListener("click", toggleSong4);
document.querySelector(".Five").addEventListener("click", toggleSong5);