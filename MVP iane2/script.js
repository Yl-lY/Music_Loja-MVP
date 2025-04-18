let currentIndex = 0;
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
});

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
});

function updateSlide() {
  slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
}
