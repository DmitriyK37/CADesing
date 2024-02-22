document.querySelector('.social-networking').addEventListener('click', function() {
  document.querySelector('.social').classList.toggle('show');
})

document.querySelector('.header__menu-open').addEventListener('click', function() {
  document.querySelector('.header__menu').classList.remove('hidden');
  document.querySelector('.header__menu').classList.add('show');
})

document.querySelector('.header__menu-close').addEventListener('click', function() {
  document.querySelector('.header__menu').classList.remove('show');
  document.querySelector('.header__menu').classList.add('hidden');
})

