const hobbyBox = document.getElementById('hobby_box');
const music = document.getElementById('music');

hobbyBox.addEventListener('click', function() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});