var link = document.querySelector(".contacts__button");
  
var popup = document.querySelector(".popup");
var popupActive = document.querySelector(".popup--show");
var close = popup.querySelector(".popup__close"); 
var popupForm = popup.querySelector(".popup-form");
var userName = popup.querySelector("[name=user-name]");
var phone = popup.querySelector("[name=phone]");
var question = popup.querySelector("[name=question]");
var header = document.querySelector(".header");
var main = document.querySelector(".main");
var footer = document.querySelector(".footer");
  
var isStorageSupport = true;
var storage = "";
  
try {
   storage = localStorage.getItem("userName");    
} catch (err) {
   isStorageSupport = false;
}  

link.addEventListener("click", function (evt) {
  evt.preventDefault();	 
  popup.classList.add("popup--show");
  addEventListeners();
  header.classList.add("header__under-popup");
  main.classList.add("main__under-popup");
  footer.classList.add("footer__under-popup");
  validatePhone();

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

close.addEventListener("click", function (evt) {
    evt.preventDefault();	
    popup.classList.remove("popup--show");
    removeEventListeners();
    header.classList.remove("header__under-popup");
    main.classList.remove("main__under-popup");
    footer.classList.remove("footer__under-popup");
});

var onMouseUp = function (evt) {
  if (evt.target !== popup && !popup.contains(evt.target)) {                    
    popup.classList.remove("popup--show");
    header.classList.remove("header__under-popup");
    main.classList.remove("main__under-popup");
    footer.classList.remove("footer__under-popup");
  }
}

var validatePhone = function() {
  phone.addEventListener('keypress', function (evt) {
    if(!/\d/.test(evt.key)) {
      evt.preventDefault();
    }
  });
}

var onSubmit = function (evt) {
  evt.preventDefault();
  if (!userName.value || !phone.value || !question.value) {
    popup.classList.remove("popup--error");
    popup.offsetWidth = popup.offsetWidth; 
    popup.classList.add("popup--error");
  } else {
    if (isStorageSupport) { 
      localStorage.setItem("user-name", userName.value);
		  localStorage.setItem("phone", phone.value);
	  	localStorage.setItem("question", question.value);
      popup.classList.remove("popup--show");
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

document.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("popup--show")) {
        popup.classList.remove("popup--show");
        removeEventListeners();
        header.classList.remove("header__under-popup");
        main.classList.remove("main__under-popup");
        footer.classList.remove("footer__under-popup");
      }
    }
});
