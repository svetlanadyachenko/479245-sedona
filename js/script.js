var link=document.querySelector(".search-in-sedona"),popup=document.querySelector(".search-form"),datein=popup.querySelector("[name=datein]"),form=popup.querySelector("form"),dateout=popup.querySelector("[name=dateout]"),adults=popup.querySelector("[name=adults]"),kids=popup.querySelector("[name=kids]");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.toggle("search-form-show"),datein.focus()}),link.addEventListener("click",function(e){e.preventDefault(),popup.classList.contains("search-form-show")&&popup.classList.remove("search-error")}),form.addEventListener("submit",function(e){datein.value&&dateout.value&&adults.value&&kids.value||(e.preventDefault(),popup.classList.remove("search-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("search-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("search-form-show")&&(popup.classList.remove("search-form-show"),popup.classList.remove("search-error")))});
