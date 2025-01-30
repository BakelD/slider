const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1, // Show 1 slide at a time
  spaceBetween: 10, // Space between slides
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2, // Show 2 slides on tablet
    },
    1024: {
      slidesPerView: 3, // Show 3 slides on desktop
    },
  },
});
