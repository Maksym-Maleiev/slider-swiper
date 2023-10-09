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
    // denamic bullets
    dynamicBullets: true,
    // custom bullets
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
  },
});