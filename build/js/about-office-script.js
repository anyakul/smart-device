'use strict';

var aboutOffice = document.querySelector('.about-office');
var aboutOfficeToggle = document.querySelector('.about-office__toggle');

aboutOfficeToggle.addEventListener('click', function () {
  if (aboutOffice.classList.contains('about-office--closed')) {
    aboutOffice.classList.remove('about-office--closed');
    aboutOffice.classList.add('about-office--opened');
  } else {
    aboutOffice.classList.add('about-office--closed');
    aboutOffice.classList.remove('about-office--opened');
  }
});
