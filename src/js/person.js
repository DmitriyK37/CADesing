export default class personCard {
  constructor(person, parentSelector) {
		this.person = person;
		this.parent = document.querySelector(parentSelector);
  }

	render() {
		const {img, name, post, description } = this.person
		const element = document.createElement('div');
		element.classList.add('person__item');

		element.innerHTML = `
          <img class="person__item-img" src=${img} alt=${name}>
					<div class="person__item-box">
          <h2>${name}</h2>
          <p>${post}</p>
					<div class="person__item-description">${description}</div>
					</div>
				`;

		this.parent.appendChild(element);
	}
	
}