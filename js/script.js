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
    /*
    // Bullets
    // type: 'bullets',
    // clickable: true,
    // Dynamic bullets
    dynamicBullets: true,
    // Custom bullets
    renderBullet: function (index, className) {
       return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
    */
    // Fraction
    type: 'fraction',
    // Custom fraction
    renderFraction: function (currentClass, totalClass) {
      return 'Photo <span class="' + currentClass + '"></span>' + ' from ' + '<span class="' + totalClass + '"></span>';
    },
    /*
    // Progressbar
    type: 'progressbar'
    */
  },
  // Scroll
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },

  // On/Off
  // drag and drop on PC
  simulateTouch: true,
  // Swipe sensitivity
  touchRatio: 1,
  // Swipe/drag reset angle
  touchAngle: 45,
  // Drug cursor
  grabCursor: true,

  // Switching when clicking on a slide
  slideToClickedSlide: true,

  // Hash navigation
  hashNavigation: {
    watchState: true,
  },

  // Keyboard control
  keyboard: {
    // On/Off
    enabled: true,
    // On/Off
    // only when the slider
    // is within the viewport
    onlyInViewport: true,
    // On/Off
    // сontrol key
    // pageUp, pageDown
    pageUpDown: true,
  },
});