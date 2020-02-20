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


// Funzione che aggiunge il tag source a un elemento del DOM

var source = document.createElement('source');

function addSource (element, src, type) {
    source.src = src;
    source.type = type;
    element.appendChild(source);
  }


var lightBoxVideo = document.getElementById("video-file");
var audioSound = document.getElementById("audio-file");

// Funzioni che aprono e chiudono la sovrimpressione audio/video

function lightbox_open(clicked_id) {
    console.log("L'ID di questo elemento è " + clicked_id);
    var video = "assets/video/" + clicked_id + ".mp4";
    window.scrollTo(0, 0);
    addSource(lightBoxVideo, video, 'video/mp4');
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();
  }
  
  function lightbox_close() {
    console.log("provo a interrompere il video");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
    lightBoxVideo.currentTime = 0;
    lightBoxVideo.innerHTML = " ";
    console.log("chiudo il video");
  }
 
function playSound(clicked_id) {
    console.log("L'ID di questo elemento è " + clicked_id);
    var audio = "assets/audio/" + clicked_id + ".mp3";
    window.scrollTo(0, 0);
    addSource(audioSound, audio, 'audio/mpeg');
    document.getElementById("light-2").style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    audioSound.play();
}

function stopSound() {
    console.log("provo a interrompere l'audio");
    document.getElementById('light-2').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    audioSound.pause();
    audioSound.currentTime = 0;
    audioSound.innerHTML = " ";
    console.log("interrompo l'audio");
}

//Funzione che stoppa l'audio e il video se si preme esc o si clicca fuori (non funziona con l'audio)

window.document.onkeydown = function(e) {
    if (!e) {
      e = event;
    }
    if (e.keyCode == 27) {
        stopSound();
      lightbox_close();
    }
  }
