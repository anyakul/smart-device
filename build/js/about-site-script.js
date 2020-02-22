'use strict';

var aboutSite = document.querySelector('.about-site');
var aboutSiteToggle = document.querySelector('.about-site__toggle');

aboutSiteToggle.addEventListener('click', function () {
  if {aboutSite.classList.contains('about-site--opened'){
    aboutSite.classList.add('about-office--closed');
    aboutSite.classList.remove('about-office--opened');
  }
  if (aboutSite.classList.contains('about-site--closed')) {
    aboutSite.classList.remove('about-site--closed');
    aboutSite.classList.add('about-site--opened');
  } else {
    aboutSite.classList.add('about-site--closed');
    aboutSite.classList.remove('about-site--opened');
  }
});

var aboutOffice = document.querySelector('.about-office');
var aboutOfficeToggle = document.querySelector('.about-office__toggle');

aboutOfficeToggle.addEventListener('click', function () {
  if {aboutSite.classList.contains('about-site--opened'){
    aboutSite.classList.add('about-site--closed');
    aboutSite.classList.remove('about-site--opened');
  }
  if (aboutOffice.classList.contains('about-office--closed')) {
    aboutOffice.classList.remove('about-office--closed');
    aboutOffice.classList.add('about-office--opened');
  } else {
    aboutOffice.classList.add('about-office--closed');
    aboutOffice.classList.remove('about-office--opened');
  }
});

