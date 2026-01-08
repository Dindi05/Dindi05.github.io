const slideshows = document.querySelectorAll('.project-slideshow');

slideshows.forEach((slideshow) => {
  let slides = Array.from(slideshow.querySelectorAll('.slideshow-image'));
  if (slides.length === 0) {
    slides = Array.from(slideshow.querySelectorAll('img'));
    slides.forEach((slide) => slide.classList.add('slideshow-image'));
  }
  if (slides.length <= 1) {
    return;
  }

  let index = slides.findIndex((slide) => slide.classList.contains('is-active'));
  if (index < 0) {
    index = 0;
    slides[0].classList.add('is-active');
  }

  setInterval(() => {
    slides[index].classList.remove('is-active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('is-active');
  }, 3000);
});
