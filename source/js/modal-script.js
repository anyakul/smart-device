'use strict';

(function () {

  var link = document.querySelector(".contacts__button");
    
  var popup = document.querySelector(".popup");
  var link = document.querySelector(".contacts__button");
    
  var popup = document.querySelector(".popup");
  var popupActive = document.querySelector(".popup--show");
  var close = popup.querySelector(".popup__close"); 
  var popupForm = popup.querySelector(".popup-form");
  var userName = popup.querySelector("[name=popup-user-name]");
  var phone = popup.querySelector("[name=popup-phone]");
  var question = popup.querySelector("[name=popup-question]");
  var agree = popup.querySelector("[name=agree]");
  var header = document.querySelector(".header");
  var main = document.querySelector(".main");
  var footer = document.querySelector(".footer");
    
  var isStorageSupport = true;
  var storage = "";
  
  var activatePage = function() {
    header.classList.remove("header__under-popup");
    main.classList.remove("main__under-popup");
    footer.classList.remove("footer__under-popup");
  }
  
  var deactivatePage = function() {
    header.classList.add("header__under-popup");
    main.classList.add("main__under-popup");
    footer.classList.add("footer__under-popup");
  }
  
  var closePopup = function () {
    popup.classList.remove("popup--show");
    removeEventListeners();
    activatePage();
    popup.classList.remove('popup--error');
    popupForm.reset();
  }
  
  window.addEventListener("DOMContentLoaded", function() { 
function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}

function mask(event) {
    var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
    if (event.type == "blur") {
        if (this.value.length == 2) this.value = ""
    } else setCursorPosition(this.value.length, this)
};
    var phone = document.querySelector("#popup-phone");
    phone.addEventListener("input", mask, false);
   phone.addEventListener("focus", mask, false);
    phone.addEventListener("blur", mask, false);
 });
 

    
  try {
     storage = localStorage.getItem("userName");    
  } catch (err) {
     isStorageSupport = false;
  }  

  link.addEventListener("click", function (evt) {
    evt.preventDefault();	 
    popup.classList.add("popup--show");
    addEventListeners();
    deactivatePage();

    if (storage) {
      userName.value = localStorage.getItem("user-name");
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

  document.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("popup--show")) {
        closePopup();
      }
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    closePopup();
  });

  var onMouseUp = function (evt) {
    if (evt.target !== popup && !popup.contains(evt.target)) {                    
      popup.classList.remove("popup--show");
      activatePage();
    }
  }

  var onSubmit = function (evt) {
    evt.preventDefault();
    if (!userName.value || phone.value.length !== 17 ||  !question.value  || !agree.checked) {
        popup.classList.remove("popup--error");
        popup.offsetWidth;
        popup.classList.add("popup--error");
      
    } else {
        popup.classList.remove('popup--error');
        popup.classList.remove('popup--show');
      if (isStorageSupport) { 
        localStorage.setItem("user-name", userName.value);
        localStorage.setItem("phone", phone.value);
        localStorage.setItem("question", question.value);
        closePopup();
      }
      
    }
  }

  var addEventListeners = function() {
    document.addEventListener("mouseup", onMouseUp);
    popupForm.addEventListener("submit", onSubmit);
  };

  var removeEventListeners = function() {
    document.removeEventListener("mouseup", onMouseUp);
    popupForm.removeEventListener("submit", onSubmit);
  };
})();