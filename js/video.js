// var video;

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

const video = document.getElementById("player1");
//page load
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	document.querySelector("video").autoplay = false;
	document.querySelector("video").loop = false;
});

//play button
const play = document.getElementById("play");
const slider = document.getElementById("slider");
play.addEventListener("click", function() {
	console.log('play button clicked on');
	video.play();
	video.volume = (slider.value / 100);
	document.getElementById("volume").textContent = video.volume*100 + "%";
	
});

//pause button
const pause = document.getElementById("pause");
pause.addEventListener("click", function() {
	console.log('pause button clicked on');
	video.pause();
});
//slow down
const slower = document.getElementById("slower");
slower.addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
});
//speed up
const faster = document.getElementById("faster");
faster.addEventListener("click", function() {
	video.playbackRate *= (1/0.9);
	console.log(video.playbackRate);
});
//skip ahead
const skip = document.getElementById("skip");
skip.addEventListener("click", function() {
	console.log(video.currentTime);
	video.currentTime += 10;
	if (video.ended) {
		video.currentTime = 0;
	}
});
//mute 
const mute = document.getElementById("mute");
mute.addEventListener("click", function() {
	console.log("mute clicked on");
	if (video.muted) {
		video.muted = false;
	}
	else {
		video.muted = true;
	}
});
//volume slider
slider.addEventListener("click", function() {
	console.log("volume slider clicked on");
	video.volume = (slider.value / 100);
	document.getElementById("volume").textContent = video.volume*100 + "%";
});
//styled
const styled = document.getElementById("vintage");
styled.addEventListener("click", function() {
	console.log("styled clicked");
	video.style = video.classList.add("oldSchool");
});
//original
const original = document.getElementById("orig");
original.addEventListener("click", function() {
	console.log("original clicked");
	video.style = video.classList.remove("oldSchool");
});

