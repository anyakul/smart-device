'use strict';

var aboutSite = document.querySelector('.about-site');
var aboutSiteToggle = document.querySelector('.about-site__toggle');

aboutSiteToggle.addEventListener('click', function () {
  if (aboutSite.classList.contains('about-site--closed')) {
    aboutSite.classList.remove('about-site--closed');
    aboutSite.classList.add('about-site--opened');
  } else {
    aboutSite.classList.add('about-site--closed');
    aboutSite.classList.remove('about-site--opened');
  }
});
