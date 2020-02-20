'use strict';

var link = document.querySelector('.contacts__button');
var closeButton = document.querySelector('.popup__button');
var popup = document.querySelector('.popup');
var sendButton = document.querySelector('.popup-form');
var popupMistake = document.querySelector('.popup-mistake');
var popupSuccess = document.querySelector('.popup-success');
var userName = popup.querySelector('[name=user-name]');
var phone = popup.querySelector("[name=number]");
var question = popup.querySelector("[name=question]");
var closeMistakeButton = document.querySelector('.popup-mistake__close-button');
var popupSuccess = document.querySelector('.popup-success');
var closeSuccessButton = popupSuccess.querySelector('.popup-success__close-button');
var successButton = popupSuccess.querySelector('.popup-success__button');
var mistakeButton = popupMistake.querySelector('.popup-mistake__button');
var isStorageSupport = true;
var storage = "";
  
try {
   storage = localStorage.getItem("user-name");    
} catch (err) {
   isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();	 
  popup.classList.add("popup-show");
    
  if (storage) {
    userName.value = localStorage.getItem("userName");
	  phone.value = localStorage.getItem("phone");
    if (userName.value) {
	    phone.focus();
  	} else {
	    question.focus();
	  }
  } else {
    userName.focus();
  }    
});

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

var showMistakeMessage = function() {
  popupMistake.classList.add("popup-mistake--show");
  closeMistakeButton.addEventListener('click', function () {
    popupMistake.classList.remove('popup-mistake--show');
  });
  
  mistakeButton.addEventListener('click', function () {
    popupMistake.classList.remove('popup-mistake--show');
    popup.classList.add("popup--show");
  });
}

sendButton.addEventListener('submit', function (evt) {
  evt.preventDefault();
  var phone = validPhone();
  if (!userName.value || !phone.value) {
    closePopup();
	  showMistakeMessage();
  }
  else if (userName.value || phone.value) {
   /* if (!phone) {
      showMistakeMessage();
    }
    /*else if (isStorageSupport) { 
      localStorage.setItem("user-name", userName.value);
      localStorage.setItem("phone", phone.value);
      localStorage.setItem("question", question.value);*/
      closePopup();
      popupSuccess.classList.add("popup-success--show");
      closeSuccessButton.addEventListener('click', function () {
        popupSuccess.classList.remove('popup-success--show');
      })
      successButton.addEventListener('click', function () {
        popupSuccess.classList.remove('popup-success--show');
      })
  //  }
  }
})

function validPhone() {
    var re = /^\d[\d\(\)\ -]{4,14}\d$/;
    var myPhone = phone.value;
    var valid = re.test(myPhone);
    if (valid) {
      return true
    };
    return false;
}  

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('popup--show')) {
      closePopup();
    }
  }
});
