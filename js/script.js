// Install Swiper
new Swiper('.image-slider', {
  // arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // navigation
  pagination: {
    el: '.swiper-pagination',
    // bullets
    clickable: true,
  },
});