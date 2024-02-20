
export default class qualityCard {
  constructor(quality, parentSelector) {
		this.quality = quality;
		this.parent = document.querySelector(parentSelector);
  }

	render() {
		const {icon, heading, description } = this.quality
		const element = document.createElement('div');
		element.classList.add('quality-item');

		element.innerHTML = `<div class="quality-blog">
          <img class="quality-icon" src=${icon} alt=${heading}>
          <h3>${heading}</h3>
					<div class="quality-description">${description}</div>
				</div>`;

		this.parent.appendChild(element);
	}
}