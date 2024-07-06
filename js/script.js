const carousel = document.querySelector('.carousel');

// Dupliquer les images pour le défilement en boucle
const images = carousel.querySelectorAll('img');
images.forEach((img) => {
    const clone = img.cloneNode(true);
    carousel.appendChild(clone);
});

// Lancer le défilement en boucle
carousel.style.animationDuration = (images.length * 5) + 's'; // 5s par image

