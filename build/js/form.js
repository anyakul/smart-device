var link = document.querySelector(".contacts__button");
var formInFooter = document.querySelector(".form");
var userName = formInFooter.querySelector("[name=user-name]");
var phone = formInFooter.querySelector("[name=phone]");
var question = formInFooter.querySelector("[name=question]");
  
var isStorageSupport = true;
var storage = "";
  
try {
   storage = localStorage.getItem("userName");    
} catch (err) {
   isStorageSupport = false;
}  

phone.addEventListener('keypress', function (evt) {
  if(!/\d/.test(evt.key)) {
    evt.preventDefault();
  }
});

var onSubmit = function (evt) {
  evt.preventDefault();
  if (!userName.value || !phone.value || !question.value) {
    formInFooter.classList.remove("form--error");
    formInFooter.offsetWidth = formInFooter.offsetWidth; 
    formInFooter.classList.add("form--error");
  } else {
    if (isStorageSupport) { 
      localStorage.setItem("user-name", userName.value);
		  localStorage.setItem("phone", phone.value);
	  	localStorage.setItem("question", question.value);
      formInFooter.reset();
    }
  }
}

formInFooter.addEventListener("submit", onSubmit);
