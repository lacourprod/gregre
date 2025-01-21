// Sélection des éléments du DOM
const gameContainer = document.getElementById('game-container');
const actionButton = document.getElementById('action-button');
const gameImage = document.getElementById('game-image');

// Fonction pour activer le mode plein écran
function activateFullscreen() {
    if (gameContainer.requestFullscreen) {
        gameContainer.requestFullscreen(); // Standard
    } else if (gameContainer.mozRequestFullScreen) { // Firefox
        gameContainer.mozRequestFullScreen();
    } else if (gameContainer.webkitRequestFullscreen) { // Chrome, Safari, Opera
        gameContainer.webkitRequestFullscreen();
    } else if (gameContainer.msRequestFullscreen) { // IE/Edge
        gameContainer.msRequestFullscreen();
    }
}

// Activer le mode plein écran au clic sur le bouton
actionButton.addEventListener('click', () => {
    activateFullscreen();
    alert("Le jeu commence en plein écran !");
});

// Fonction pour ajuster la taille de l'image en fonction de la largeur de l'écran
function adjustImageSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 600) {
        gameImage.style.width = '80%';
    } else {
        gameImage.style.width = '50%';
    }
}

// Masquer la barre d'adresse sur mobile
window.addEventListener('load', () => {
    setTimeout(() => {
        window.scrollTo(0, 1);
    }, 0);
});

// Appel de la fonction au chargement de la page et lors du redimensionnement de la fenêtre
window.onload = adjustImageSize;
window.onresize = adjustImageSize;
