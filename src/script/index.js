import { options } from './priceOptions.js';

const slider = document.querySelector('.js_slider');
const checkbox = document.querySelector('.js_checkbox');
const numberOfViews = document.querySelector('.js_views');

// set the color of slider
const sliderTrack = {
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
	const bg = `linear-gradient(90deg, ${sliderTrack.fill} ${percentage}%, ${
		sliderTrack.background
	} ${percentage + 0.1}%)`;
	slider.style.background = bg;
}

// If event is slider display lower track fill
function displayFill(e) {
	slider.innerHTML = e.target.value;
	applyFill(e.target);
}

// Display range of pageviews in 100s K or 1M as max value
slider.oninput = function () {
	if (this.value === slider.max) {
		return (numberOfViews.textContent = '1M Pageviews');
	} else {
		return (numberOfViews.textContent = `${this.value}K Pageviews`);
	}
};

// Apply discount if checkbox is checked
// Not checked - display regular price
function calculateDiscount(price) {
	const priceEl = document.querySelector('.js_price');

	priceEl.textContent = checkbox.checked
		? `$${price - price * (25 / 100)}.00`
		: `$${price}.00`;
}

function getPrice(e) {
	let views = e.target.value;

	options.map((option) => {
		if (views == 1000) {
			return calculateDiscount(36);
		} else if (views >= option.low && views < option.high) {
			return calculateDiscount(option.price);
		}
	});
}

// When user toggles slider - calculate fill to lower track
// Use value to calculate price interval
applyFill(slider);
document.addEventListener('input', (e) => {
	displayFill(e);
	getPrice(e);
});
