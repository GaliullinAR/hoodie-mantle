document.addEventListener('DOMContentLoaded', function () {
  

  const swiper = new Swiper('.showcase-carousel', {
    loop: true,
    slidesPerView: 3,
    speed: 1800,
    centeredSlides: true
  })


  document.querySelector('.showcase__video').playbackRate = 2;
})