import './index.html';
import './index.scss';
import './js/header';
import './js/form';
import {quality} from "./js/const";
import qualityCard from './js/quality';
import personCard from './js/person';
import {person} from "./js/const";
import slider from './js/slider';
// import Form from './js/form';
import { validateForm } from './js/form';


quality.forEach((quality) => {
  new qualityCard(quality, '.quality').render();
})

person.forEach((person) => {
  new personCard(person, '.person').render();
  slider({
    slide: '.person__item',
    next: '.person-next',
    prew: '.person-prew'
  });
})

const items = document.querySelectorAll('.quality-item');
let offset = 0;
let radio1 = document.getElementById('radio-1');
let radio2 = document.getElementById('radio-2');
let radio3 = document.getElementById('radio-3');
const qualityBox = document.querySelector('.quality');

radio1.addEventListener('click', function() {
  qualityBox.style.left = offset + "px";
});

radio2.addEventListener('click', function() {
  qualityBox.style.left = (-698 + offset) + "px";
});

radio3.addEventListener('click', function() {
  qualityBox.style.left = (-698*2 + offset) + "px";
});


for (let i = 0; i < items.length; i++) {
	const item = items[i];
	item.addEventListener("click", addActiveClass);
}
function addActiveClass(e) {
	e.target.classList.toggle("quality-activ");
}

// export function validateForm() {
// 	var form = document.getElementById('registrationForm');
// 	var username = document.getElementById('username');
// 	var usernameError = document.getElementById('usernameError');
// 	// Проверка наличия имени пользователя
// 	if (username.value === '') {
// 		usernameError.textContent = 'Введите фамилию, имя и отчество через пробел (Например: Иванов Петр Алексеевич)';
// 		username.setAttribute('style', 'border: 1px solid red;');
// 		return false;
// 	} else {
// 		usernameError.textContent = '';
// 	}
// 	// Повторите эти шаги для остальных полей формы
// 	// Добавьте проверки для каждого поля и установите соответствующее сообщение об ошибке (если требуется)
// 	return true; // Форма будет отправлена только если все проверки пройдены
// }

