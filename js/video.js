// var video;

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

let video = document.getElementById("player1");
let volume = document.getElementById("volume");
//page load
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	document.querySelector("video").autoplay = false;
	document.querySelector("video").loop = false;
});

//play button
let play = document.getElementById("play");
let slider = document.getElementById("slider");
play.addEventListener("click", function() {
	console.log("clicked on play button");
	video.play();
	video.volume = (slider.value / 100);
	document.getElementById("volume").textContent = video.volume*100 + "%";
	
});

//pause button
let pause = document.getElementById("pause");
pause.addEventListener("click", function() {
	console.log("clicked on pause button");
	video.pause();
});
//slow down
let slower = document.getElementById("slower");
slower.addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
});
//speed up
let faster = document.getElementById("faster");
faster.addEventListener("click", function() {
	video.playbackRate *= (1/0.9);
	console.log(video.playbackRate);
});
//skip ahead
let skip = document.getElementById("skip");
skip.addEventListener("click", function() {
	console.log(video.currentTime);
	video.currentTime += 10;
	if (video.ended) {
		video.currentTime = 0;
	}
});
//mute 
let mute = document.getElementById("mute");
mute.addEventListener("click", function() {
	console.log("clicked on mute");
	if (video.muted) {
		video.muted = false;
	}
	else {
		video.muted = true;
	}
});
//volume slider
slider.addEventListener("click", function() {
	console.log("clicked on volume slider");
	video.volume = (slider.value / 100);
	document.getElementById("volume").textContent = video.volume*100 + "%";
});
//styled
let styled = document.getElementById("vintage");
styled.addEventListener("click", function() {
	console.log("clicked on styled");
	video.style = video.classList.add("oldSchool");
});
//original
let original = document.getElementById("orig");
original.addEventListener("click", function() {
	console.log("clicked on original");
	video.style = video.classList.remove("oldSchool");
});

