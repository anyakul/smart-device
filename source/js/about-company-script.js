'use strict';

var openButton = document.querySelector('.about-company__button');
var text = document.querySelector('.about-company__text');
var hiddenText = text.querySelector('.about-company__hidden-text');

openButton.addEventListener('click', function () {
  hiddenText.classList.remove('visually-hidden');
});
console.log(hiddenText);