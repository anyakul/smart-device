'use strict';

var link = document.querySelector(".contacts__button");
var formInFooter = document.querySelector(".form");
var userName = formInFooter.querySelector("[name=user-name]");
var phone = formInFooter.querySelector("[name=phone]");
var question = formInFooter.querySelector("[name=question]");
var agree = formInFooter.querySelector("[name=agree]");
  
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
  phone.addEventListener('click', function (evt) {
    phone.value = `+7 (`
  });


var onSubmit = function (evt) {
  evt.preventDefault();
  if (!userName.value || !phone.value.langth !== 13 || !question.value || !agree.checked) {
    formInFooter.classList.remove("form--error");
    formInFooter.classList.add("form--error");
  } else {
    if (isStorageSupport) { 
      localStorage.setItem("user-name", userName.value);
		  localStorage.setItem("phone", phone.value);
	  	localStorage.setItem("question", question.value);
    }
    document.querySelector(".form").reset();
  }
}

console.log(formInFooter);
console.log(localStorage);

formInFooter.addEventListener("submit", onSubmit);
