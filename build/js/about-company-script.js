'use strict';

var openButton = document.querySelector('.about-company__button');
var text = document.querySelector('.about-company__text');
var hiddenText = document.querySelector('.about-company__hidden-text');
var dots = document.querySelector('.about-company__dots');

openButton.addEventListener('click', function () {
  hiddenText.classList.remove('visually-hidden');
  dots.classList.add('visually-hidden');
});
console.log(hiddenText);