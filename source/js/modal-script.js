'use strict';

var link = document.querySelector('.contacts__button');
var closeButton = document.querySelector('.popup__button');
var popup = document.querySelector('.popup');
var sendButton = document.querySelector('.popup-form');
var userName = popup.querySelector('[name=user-name]');
var phone = popup.querySelector("[name=number]");
var question = popup.querySelector("[name=question]");

var isStorageSupport = true;
var storage = "";
  
try {
   storage = localStorage.getItem("user-name");    
} catch (err) {
   isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();	 
  popup.classList.add("modal-show");
    
  if (storage) {
    userName.value = localStorage.getItem("userName");
	  phone.value = localStorage.getItem("phone");
    if (userName.value) {
	    phone.focus();
  	} else {
	    question.focus();
	  }
  } else {
    namem.focus();
  }    
);

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
 /* if (!userName.value  || !phone.value || !question.value) {
	  popup.classList.remove("modal-error");
	  popup.offsetWidth = popup.offsetWidth; 
    popup.classList.add("modal-error");
  } else {*/
      if (isStorageSupport) { 
        localStorage.setItem("user-name", userName.value);
		    localStorage.setItem("phone", phone.value);
	    	localStorage.setItem("question", question.value);
      }
   // }
  
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
