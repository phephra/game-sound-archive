$(document).ready(function () {
    // Fade-in al caricamento
    $(function () {
        $('body').removeClass('fade-out');
    });
});

// Accordion toggle
function toggleAccordion() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    }

};
/* PLAYER */

var audio;
play = false;

function playSound(){
    const marioSound = document.getElementById("mario-sound"); 
    const animal1Sound = document.getElementById("animal-1-sound");
    const animal2Sound = document.getElementById("animal-2-sound");
    const marioButton = document.getElementById("mario");
    const animal1Button = document.getElementById("animal-crossing-1");
    const animal2Button = document.getElementById("animal-crossing-2");
    marioButton.addEventListener("click", function(){
        if (play == false) {
            audio = marioSound;
            audio.play();
            play = true;
        }
        else {
            audio.pause();
            audio.currentTime = 0;
            play = false;
        } 
    });
    animal1Button.addEventListener("click", function(){
        if (play == false) {
            audio = animal1Sound;
            audio.play();
            play = true;
        }
        else {
            audio.pause();
            audio.currentTime = 0;
            play = false;
        } 
    });
    animal2Button.addEventListener("click", function(){
        if (play == false) {
            audio = animal2Sound;
            audio.play();
            play = true;
        }
        else {
            audio.pause();
            audio.currentTime = 0;
            play = false;
        } 
    });
}; 


window.document.onkeydown = function(e) {
    if (!e) {
      e = event;
    }
    if (e.keyCode == 27) {
      lightbox_close();
      audio.pause();
      audio.currentTime = 0;
    }
  }
  
  function lightbox_open() {
    var lightBoxVideo = document.getElementById("goose");
    window.scrollTo(0, 0);
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();
  }
  
  function lightbox_close() {
    var lightBoxVideo = document.getElementById("goose");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
    lightBoxVideo.currentTime = 0;
  }

  /*

// Create a new instance of an audio object and adjust some of its properties
var audio = new Audio();
audio.src = 'assets/audio/goose.mp3';
audio.controls = true;
audio.loop = false;
audio.autoplay = false;
// Establish all variables that your Analyser will use
var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height;
// Initialize the MP3 player after the page loads all of its HTML into the window
window.addEventListener("load", initMp3Player, false);
function initMp3Player(){
	document.getElementById('audio_box').appendChild(audio);
	context = new webkitAudioContext(); // AudioContext object instance
	analyser = context.createAnalyser(); // AnalyserNode method
	canvas = document.getElementById('analyser_render');
	ctx = canvas.getContext('2d');
	// Re-route audio playback into the processing graph of the AudioContext
	source = context.createMediaElementSource(audio); 
	source.connect(analyser);
	analyser.connect(context.destination);
	frameLooper();
}
// frameLooper() animates any style of graphics you wish to the audio frequency
// Looping at the default frame rate that the browser provides(approx. 60 FPS)
function frameLooper(){
	window.webkitRequestAnimationFrame(frameLooper);
	fbc_array = new Uint8Array(analyser.frequencyBinCount);
	analyser.getByteFrequencyData(fbc_array);
	ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
	ctx.fillStyle = '#00CCFF'; // Color of the bars
	bars = 100;
	for (var i = 0; i < bars; i++) {
		bar_x = i * 3;
		bar_width = 2;
		bar_height = -(fbc_array[i] / 2);
		//  fillRect( x, y, width, height ) // Explanation of the parameters below
		ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
	}
} */