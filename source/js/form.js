'use strict';

var formInFooter = document.querySelector('.form');
var userName = formInFooter.querySelector('[name=user-name]');
var phone = formInFooter.querySelector('[name=phone]');
var question = formInFooter.querySelector('[name=question]');
var agree = formInFooter.querySelector('[name=agree]');

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('userName');
} catch (err) {
  isStorageSupport = false;
}

window.addEventListener('DOMContentLoaded', function () {
  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }

  function mask(event) {
    var matrix = '+7 (___) ___ ____';
    var i = 0;
    var def = matrix.replace(/\D/g, '');
    var val = phone.value.replace(/\D/g, '');
    if (def.length >= val.length) {
      val = def;
    }
    phone.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });
    if (event.type === 'blur') {
      if (phone.value.length === 2) {
        phone.value = '';
      }
    } else {
      setCursorPosition(phone.value.length, phone);
    }
  }
  phone.addEventListener('input', mask, false);
  phone.addEventListener('focus', mask, false);
  phone.addEventListener('blur', mask, false);
});

var onSubmit = function (evt) {
  evt.preventDefault();
  if (!userName.value || phone.value.length !== 17 || !question.value || !agree.checked) {
    formInFooter.classList.remove('form--error');
    formInFooter.offsetWidth;
    formInFooter.classList.add('form--error');
  } else {
    if (isStorageSupport) {
      if (formInFooter.classList.contains('form--error')) {
        formInFooter.classList.remove('form--error');
      }
      localStorage.setItem('user-name', userName.value);
      localStorage.setItem('phone', phone.value);
      localStorage.setItem('question', question.value);
    }
    formInFooter.reset();
  }
};

formInFooter.addEventListener('submit', onSubmit);
