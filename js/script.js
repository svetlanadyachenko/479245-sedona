var link = document.querySelector(".search-in-sedona");
var popup = document.querySelector(".search-form");
var datein = popup.querySelector("[name=datein]");
var form = popup.querySelector("form");
var dateout = popup.querySelector("[name=dateout]");
var adults = popup.querySelector("[name=adults]");
var kids = popup.querySelector("[name=kids]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("search-form-show");
  if (datein.value) {
    dateout.focus();
  } else {
    datein.focus();
    }
  if (dateout.value) {
    adults.focus();
  } else {
    datout.focus();
    }
  if (adults.value) {
    kids.focus();
    } else {
    adults.focus();
    }
});

link.addEventListener("click", function (evt) {
  evt.preventDefault();
if (popup.classList.contains("search-form-show")) {
  popup.classList.remove("search-error");
  }
});

form.addEventListener("submit", function (evt) {
  if (!datein.value || !dateout.value || !adults.value || !kids.value) {
    evt.preventDefault();
    popup.classList.remove("search-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("search-error");
  }
});

window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
     evt.preventDefault();
     if (popup.classList.contains("search-form-show")) {
       popup.classList.remove("search-form-show");
       popup.classList.remove("search-error");
     }
   }
 });
