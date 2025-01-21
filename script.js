// Sélection des éléments du DOM
const gameImage = document.getElementById('game-image');
const actionButton = document.getElementById('action-button');

// Fonction pour changer l'image au clic sur le bouton
actionButton.addEventListener('click', () => {
    gameImage.src = "https://via.placeholder.com/400/ff0000"; // Changer l'image
    alert("Vous avez cliqué sur le bouton!");
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

// Appel de la fonction au chargement de la page et lors du redimensionnement de la fenêtre
window.onload = adjustImageSize;
window.onresize = adjustImageSize;