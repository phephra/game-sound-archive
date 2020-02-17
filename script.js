$(document).ready(function () {
    $(function () {
        $('body').removeClass('fade-out');
    });

    function removeit() {
        if ($(window).width() < 600) {
            $('.thumb-img-hover').remove();
        }
        if ($(window).width() < 600) {
            $('#myTopnav').remove();
        }
        if ($(window).width() > 600) {
            $('.mobile-nav').remove();
        }
    }
    $(function () {
        removeit();
    });
});

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

function playSound(){
    const marioSound = document.getElementById("mario-sound"); 
    const gooseSound = document.getElementById("goose-sound");
    const marioButton = document.getElementById("mario");
    const gooseButton = document.getElementById("goose");
    marioButton.addEventListener("click", function(){ marioSound.play()});
    gooseButton.addEventListener("click", function(){ gooseSound.play()}); 
};