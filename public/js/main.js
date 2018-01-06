'use strict';

var topNavigation = document.getElementById('topNavigation');

console.log();

window.addEventListener('scroll', function(event) {
  if(event.pageY > 0) {
    topNavigation.classList.replace('top-nav--unscrolled', 'top-nav--scrolled');
  } else {
    topNavigation.classList.replace('top-nav--scrolled', 'top-nav--unscrolled');
  }
});
