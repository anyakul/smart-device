'use strict';

var aboutSite = document.querySelector('.about-site');
var aboutSiteToggle = document.querySelector('.about-site__toggle');
var aboutOffice = document.querySelector('.about-office');
var aboutOfficeToggle = document.querySelector('.about-office__toggle');

aboutSiteToggle.addEventListener('click', function () {
  
  if (aboutSite.classList.contains('about-site--closed')) {
    if (aboutOffice.classList.contains('about-office--opened')) {
      aboutOffice.classList.add('about-office--closed');
      aboutOffice.classList.remove('about-office--opened');
    }
    aboutSite.classList.remove('about-site--closed');
    aboutSite.classList.add('about-site--opened');
  } else {
    aboutSite.classList.add('about-site--closed');
    aboutSite.classList.remove('about-site--opened');
  }
});

aboutOfficeToggle.addEventListener('click', function () {
  if (aboutOffice.classList.contains('about-office--closed')) {
    if (aboutSite.classList.contains('about-site--opened')) {
      aboutSite.classList.add('about-site--closed');
      aboutSite.classList.remove('about-site--opened');
    }
    aboutOffice.classList.remove('about-office--closed');
    aboutOffice.classList.add('about-office--opened');
  } else {
    aboutOffice.classList.add('about-office--closed');
    aboutOffice.classList.remove('about-office--opened');
  }
});

