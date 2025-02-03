// Smooth Scroll
const lenis = new Lenis();
lenis.on('scroll', (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Scroll Down - Button
document.addEventListener('DOMContentLoaded', function () {
  const scrollBtn = document.getElementById('scrollBtn');
  window.addEventListener('scroll', function () {
    const box = document.querySelector('.scrollBtn');
    if (window.scrollY > 0) {
      box.classList.add('move');
    } else {
      box.classList.remove('move');
    }
  });
});

// Preloader Text & Video Transition
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    const firstText = document.getElementById('first-text');
    const secondText = document.getElementById('second-text');
    const mainVideoContainer = document.getElementById('main-video-container');

    // Show the first text
    firstText.style.opacity = '1';

    // Loading animation
    setTimeout(function () {
        firstText.style.opacity = '0';
        secondText.style.opacity = '1';
    }, 1000);

    setTimeout(function () {
        // Fade out preloader, show video, and make the background transparent
        mainVideoContainer.style.opacity = 1; // show video
         document.body.style.backgroundColor = 'transparent';
        preloader.style.display = 'none';
    }, 3000);
});

// Loader Video
window.addEventListener('load', function () {
  document.body.classList.add('overflow-hidden'); // body - overflow hidden
  document.documentElement.classList.add('overflow-hidden'); // html - overflow hidden
  setTimeout(function () {
    const loaderVideo = document.getElementById('loaderVideo');
    loaderVideo.style.width = '90%';
    loaderVideo.style.height = '90%';
    loaderVideo.style.transform = 'translate(-50%, -50%)';
    loaderVideo.style.top = '50%';
    loaderVideo.style.left = '50%';
    loaderVideo.style.position = 'fixed';
    loaderVideo.style.borderRadius = '12px';
  }, 2000);
  setTimeout(() => {
    const loaderVideo = document.getElementById('loaderVideo');
    if (window.matchMedia('(max-width: 576px)').matches) {
      loaderVideo.style.width = '220px';
      loaderVideo.style.height = '220px';
      loaderVideo.style.top = '25%';
      loaderVideo.style.left = '24px';
      loaderVideo.style.right = 'auto';
      loaderVideo.style.transform = 'translate(0%, -25%)';
    } else if (window.matchMedia('(max-width: 767px)').matches) {
      loaderVideo.style.width = '220px';
      loaderVideo.style.height = '220px';
      loaderVideo.style.left = 'auto';
      loaderVideo.style.right = '40px';
      loaderVideo.style.transform = 'translate(0%, -50%)';
    } else if (window.matchMedia('(max-width: 991px)').matches) {
      loaderVideo.style.width = '310px';
      loaderVideo.style.height = '310px';
      loaderVideo.style.left = 'auto';
      loaderVideo.style.right = '40px';
      loaderVideo.style.transform = 'translate(0%, -50%)';
    } else if (window.matchMedia('(max-width: 1199px)').matches) {
      loaderVideo.style.width = '400px';
      loaderVideo.style.height = '400px';
      loaderVideo.style.left = 'auto';
      loaderVideo.style.right = '60px';
      loaderVideo.style.transform = 'translate(0%, -50%)';
    } else if (window.matchMedia('(max-width: 1399px)').matches) {
      loaderVideo.style.width = '450px';
      loaderVideo.style.height = '450px';
      loaderVideo.style.left = 'auto';
      loaderVideo.style.right = '80px';
      loaderVideo.style.transform = 'translate(0%, -50%)';
    } else {
      loaderVideo.style.width = '500px';
      loaderVideo.style.height = '500px';
      loaderVideo.style.top = '50%';
      loaderVideo.style.left = 'auto';
      loaderVideo.style.right = '100px';
      loaderVideo.style.transform = 'translate(0%, -50%)';
      loaderVideo.style.position = 'absolute';
    }
    document.body.classList.remove('overflow-hidden'); // body - overflow visible
    document.documentElement.classList.remove('overflow-hidden'); // html - overflow visible
  }, 3000); // Adjust the time as needed
});

// ScrollMagic
var controller = new ScrollMagic.Controller({ loglevel: 3 });

new ScrollMagic.Scene({
    triggerElement: "#section2",
    triggerHook: "onEnter",
    duration: "100%"
  }).setPin("#section1 .pinWrapper", {
    pushFollowers: false
  }).addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#section2",
    triggerHook: "onEnter",
    duration: "200%"
  }).setPin("#section2 .pinWrapper", {
    pushFollowers: false
  }).addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#section3",
    triggerHook: "onEnter",
    duration: "200%"
  }).setPin("#section3 .pinWrapper", {
    pushFollowers: false
  }).addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#section4",
    triggerHook: "onEnter",
    duration: "100%"
  }).setPin("#section4 .pinWrapper", {
    pushFollowers: false
  }).addTo(controller);


// Spacer Text Animation
const spacer = document.querySelector('.spacer');
const slideText = document.querySelector('.spacer .slide-text');

new ScrollMagic.Scene({
    triggerElement: '.spacer',
    triggerHook: 'onEnter',
    reverse: true,
  })
  .setClassToggle(spacer, 'active')
  .addTo(controller);


// End Spacer Text Animation
const endSpacer = document.querySelector('.end-spacer');
const endSlideText = document.querySelector('.end-spacer .end-slide-text');

new ScrollMagic.Scene({
    triggerElement: '.end-spacer',
    triggerHook: 'onEnter',
    reverse: true,
  })
  .setClassToggle(endSpacer, 'active')
  .addTo(controller);


// Toggle function
document.getElementById('toggle').addEventListener('click', function() {
  this.classList.toggle('active');
  document.getElementById('overlay').classList.toggle('open');
});