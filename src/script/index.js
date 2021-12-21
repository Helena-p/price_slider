'use strict';

const slider = document.querySelector('.js_slider');
const numberOfViews = document.querySelector('.js_views');

// set the color of slider
const settings = {
	fill: '#a4f3eb',
	background: '#ecf0fb',
};

slider.oninput = function () {
	if (this.value === slider.max) {
		return (numberOfViews.innerText = '1M');
	} else {
		return (numberOfViews.innerText = `${Math.floor(
			Math.round(this.value / 100) / 10
		)}K Pageviews`);
	}
};

function applyFill(slider) {
	// Turn value into percentage to figure out how far
	// it is in between the min and max of input
	const percentage =
		(100 * (slider.value - slider.min)) / (slider.max - slider.min);
	// Linear gradient separator at the above point
	// where background color change
	const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${
		settings.background
	} ${percentage + 0.1}%)`;
	slider.style.background = bg;
}

applyFill(slider);

// If event is slider display lower track fill
function displayFill(e) {
	if (e.target !== slider) return;
	slider.innerHTML = e.target.value;
	applyFill(e.target);
}

document.addEventListener('input', displayFill);
