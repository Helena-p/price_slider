'use strict';

const slider = document.querySelector('.js_slider');
const numberOfViews = document.querySelector('.js_views');

// set the color of slider
const settings = {
	fill: '#a4f3eb',
	background: '#ecf0fb',
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

// If event is slider display lower track fill
function displayFill(e) {
	if (e.target !== slider) return;
	slider.innerHTML = e.target.value;
	applyFill(e.target);
}

// Helper function to round input value in 100k
function roundingValues(val) {
	let roundedValue = Math.floor(Math.round(val / 100) / 10);
	return roundedValue;
}

// Display range of pageviews in 100s K or if max value as 1M
slider.oninput = function () {
	if (this.value === slider.max) {
		return (numberOfViews.innerText = '1M Pageviews');
	} else {
		return (numberOfViews.innerText = `${roundingValues(
			this.value
		)}K Pageviews`);
	}
};

function calculatePrice(e) {
	const priceEl = document.querySelector('.js_price');
	let views = roundingValues(e.target.value);

	if (views >= 10 && views < 50) return (priceEl.innerText = '$08.00');
	if (views >= 50 && views < 100) return (priceEl.innerText = '$12.00');
	if (views >= 100 && views < 500) return (priceEl.innerText = '$16.00');
	if (views >= 500 && views < 1000) return (priceEl.innerText = '$24.00');
	if ((views = 1000)) return (priceEl.innerText = '$36.00');
}

applyFill(slider);
document.addEventListener('input', (e) => {
	displayFill(e);
	calculatePrice(e);
});
