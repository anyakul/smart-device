'use strict';

var link = document.querySelector('.contacts__button');
var closeButton = document.querySelector('.popup__button');
var popup = document.querySelector('.popup');
var sendButton = document.querySelector('.popup-form');
var userName = popup.querySelector('[name=user-name]');

var closePopup = function () {
  popup.classList.remove('popup--show');
};

link.addEventListener('click', function () {
  popup.classList.add('popup--show');
  userName.focus();
});

closeButton.addEventListener('click', function () {
  closePopup();
});

sendButton.addEventListener('submit', function (evt) {
  evt.preventDefault();
  closePopup();
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('popup--show')) {
      closePopup();
    }
  }
});
