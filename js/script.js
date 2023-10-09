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
    // Bullets
    // type: 'bullets',
    // clickable: true,
    // Dynamic bullets
    // dynamicBullets: true,
    // Custom bullets
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + '</span>';
    // },
    // Fraction
    type: 'fraction',
    // Custom fraction
    renderFraction: function (currentClass, totalClass) {
      return 'Photo <span class="' + currentClass + '"></span>' + ' from ' + '<span class"' + totalClass + '"></span>';
    },
  },
});