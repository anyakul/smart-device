var link = document.querySelector(".contacts__button");
var closeButton = document.querySelector(".popup__button");
var popup = document.querySelector(".popup");
var sendButton = document.querySelector(".popup-form");

var closePopup = function() {
  popup.classList.remove("popup--show");
}

link.addEventListener("click", function() {
  popup.classList.add("popup--show");
})

closeButton.addEventListener("click", function() {
  closePopup();
})

var isNotTextBlock = function (evt) {
  return popup.indexOf(evt.target.className) === -1;
};

document.addEventListener("click", function(evt) {
  if (evt.target !== popup) {
      closePopup();
    }
})

sendButton.addEventListener("submit", function(evt) {
  evt.preventDefault();
  closePopup();
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("popup--show")) {
      closePopup();
    }
  }
});
