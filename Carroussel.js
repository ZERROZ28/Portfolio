let currentSlide = 0;
const slides = document.querySelectorAll('.carroussel-img');
const totalSlides = slides.length;

document.getElementById('Btn-avant').addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

document.getElementById('Btn-arrière').addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

function showSlide(index) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (index + totalSlides) % totalSlides;
  slides[currentSlide].style.display = 'block';
}

// Afficher la première diapositive au chargement
showSlide(currentSlide);