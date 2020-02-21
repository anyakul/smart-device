var link = document.querySelector(".contacts__button");
  
var popup = document.querySelector(".popup");
var popupActive = document.querySelector(".popup--show");
var close = popup.querySelector(".popup__close"); 
var form = popup.querySelector("form");
var namem = popup.querySelector("[name=namem]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");
  
var isStorageSupport = true;
var storage = "";
  
try {
   storage = localStorage.getItem("namem");    
} catch (err) {
   isStorageSupport = false;
}  

link.addEventListener("click", function (evt) {
  evt.preventDefault();	 
  popup.classList.add("popup--show");
  addEventListeners();
});
     /*
    if (storage) {
          namem.value = localStorage.getItem("namem");
	      email.value = localStorage.getItem("email");
          if (email.value) {
			  message.focus();
			  
		  } else {
			  email.focus();
		  }
    } else {
      namem.focus();
    }    
 });
  */
close.addEventListener("click", function (evt) {
    evt.preventDefault();	
    popup.classList.remove("popup--show");
});

var addEventListeners = function() {
  document.addEventListener("mouseup", function (evt) {
    evt.preventDefault();
  //  if (evt.target === popup) {                    
          popup.classList.remove("popup--show");
  //  }
  });
}


/*
form.addEventListener("submit", function (evt) {
  if (!namem.value  || !email.value || !message.value) {
      evt.preventDefault();
	  popup.classList.remove("modal-error");
	  popup.offsetWidth = popup.offsetWidth; 
      popup.classList.add("modal-error");
  } else {
      if (isStorageSupport) { 
        localStorage.setItem("namem", namem.value);
		localStorage.setItem("email", email.value);
	//	localStorage.setItem("message", message.value);
      }
    }
}); 
 */
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("popup--show")) {
        popup.classList.remove("popup--show");
      }
    }
}); 

