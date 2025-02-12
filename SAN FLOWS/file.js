function openPDF() {
    window.open('carta.pdf', '_blank');
}

function openVideo() {
    const videoContainer = document.getElementById('video-container');
    if (videoContainer.style.display === 'none' || videoContainer.style.display === '') {
        videoContainer.style.display = 'block';
    } else {
        videoContainer.style.display = 'none';
    }
}

function openHeart() {
    alert('Abrir corazón');
}
