let openForm = document.querySelector(".header-button");
let form = document.querySelector(".form__container");
let closeForm = document.querySelector(".form__container-close");

openForm.onclick = function() {
  form.classList.add("show");
}

closeForm.onclick = function() {
  form.classList.remove("show");
}
