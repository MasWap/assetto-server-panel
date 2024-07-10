let currentVideo = 1;

document.getElementById('playButton').addEventListener('click', function() {
    const video1 = document.getElementById('bgVideo1');
    const video2 = document.getElementById('bgVideo2');
    const playButton = document.getElementById('playButton');

    playButton.disabled = true;

    if (currentVideo === 1) {
        video1.style.display = 'block';
        video2.style.display = 'none';
        video1.currentTime = 0;
        video1.play();
        video1.addEventListener('ended', function onVideo1End() {
            video1.removeEventListener('ended', onVideo1End);
            video1.currentTime = video1.duration;
            currentVideo = 2;
            playButton.disabled = false;
        });
    } else if (currentVideo === 2) {
        video2.style.display = 'block';
        video1.style.display = 'none';
        video2.currentTime = 0;
        video2.play();
        video2.addEventListener('ended', function onVideo2End() {
            video2.removeEventListener('ended', onVideo2End);
            video2.currentTime = video2.duration;
            currentVideo = 1;
            playButton.disabled = false;
        });
    }
});

window.addEventListener('load', function() {
    const video1 = document.getElementById('bgVideo1');
    video1.currentTime = 0;
});