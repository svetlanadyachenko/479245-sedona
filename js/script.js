var link = document.querySelector(".search-in-sedona");
var popup = document.querySelector(".search-form");
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("search-form-show");
});
