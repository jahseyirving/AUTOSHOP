$(document).ready(function(){
    $('#carouselExampleIndicators').carousel();
  });
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Buttons
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Counter
let counter = 0;
const size = carouselImages[0].clientWidth;

// Event listeners
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    counter--;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});


// Optional: Auto play carousel
// setInterval(() => {
//     if (counter >= carouselImages.length - 1) return;
//     carouselSlide.style.transition = 'transform 0.5s ease-in-out';
//     counter++;
//     carouselSlide.style.transform = `translateX(${-size * counter}px)`;
// }, 3000);    
$(document).ready(function() {
    // Gestion des clics sur les boutons "Acheter"
    $('.btn-acheter-btn').click(function() {
        // Récupération du nom de la voiture et de la marque à partir des attributs data
        var voitureNom = $(this).data('nom-voiture');


        // Construction de l'URL avec les paramètres
        var url = 'formulaire.html?voitureNom=' + encodeURIComponent(voitureNom) + '&marque=' + encodeURIComponent(marque);

        // Redirection vers la nouvelle page de formulaire
        window.location.href = url;
    });
});


