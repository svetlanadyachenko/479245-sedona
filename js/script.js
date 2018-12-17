var link = document.querySelector(".search-in-sedona");
var popup = document.querySelector(".search-form");
var datein = popup.querySelector("[name=datein]");
var form = popup.querySelector("form");
var dateout = popup.querySelector("[name=dateout]");
var adults = popup.querySelector("[name=adults]");
var kids = popup.querySelector("[name=kids]");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("datein");
} catch (err) {
  isStorageSupport = false;
}

try {
  storage = localStorage.getItem("dateout");
} catch (err) {
  isStorageSupport = false;
}

try {
  storage = localStorage.getItem("adults");
} catch (err) {
  isStorageSupport = false;
}

try {
  storage = localStorage.getItem("kids");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("search-form-show");
  if (storage) {
    datein.value = storage;
    dateout.focus();
  } else {
    datein.focus();
    }
  if (storage) {
    dateout.value = storage;
    adults.focus();
  } else {
    datout.focus();
    }
  if (storage) {
    adults.value = storage;
    kids.focus();
    } else {
    adults.focus();
    }
});

form.addEventListener("submit", function (evt) {
  if (!datein.value || !dateout.value || !adults.value || !kids.value) {
    evt.preventDefault();
    popup.classList.remove("search-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("search-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("datein", datein.value);
      localStorage.setItem("dateout", dateout.value);
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("kids", kids.value);
      }
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
