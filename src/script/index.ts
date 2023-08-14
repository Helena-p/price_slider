type SliderColors = {
	fill: string;
	background: string;
};

type Option = {
	low: number;
	high: number;
	price: number;
};

const options: Option[] = [
	{
		low: 0,
		high: 50,
		price: 8,
	},
	{
		low: 50,
		high: 100,
		price: 12,
	},
	{
		low: 100,
		high: 500,
		price: 16,
	},
	{
		low: 500,
		high: 1000,
		price: 24,
	},
];

// set the color of slider
const sliderTrack: SliderColors = {
	fill: '#a4f3eb',
	background: '#ecf0fb',
};

const slider = <HTMLInputElement>document.querySelector('.js_slider');

/* Credit - Stack Overflow thread on how to fill
	background color dynamically */
function applyFill(slider: HTMLInputElement) {
	// Turn value into percentage to figure out how far
	// it is in between the min and max of input
	const percentage =
		(100 * (+slider.value - +slider.min)) / (+slider.max - +slider.min);
	// Linear gradient separator at the above point
	// where background color change
	const bg = `linear-gradient(90deg, ${sliderTrack.fill} ${percentage}%, ${
		sliderTrack.background
	} ${percentage + 0.1}%)`;
	slider.style.background = bg;
}

// If event is slider display lower track fill
function displayFill(event: Event) {
	const target = event.target as HTMLInputElement;
	slider.innerHTML = target.value;
	applyFill(target);
}

// Display range of pageviews in 100s K or 1M as max value
slider.oninput = () => {
	const numberOfViews = <HTMLHeadingElement>(
		document.querySelector('.js_views')
	);

	numberOfViews.textContent =
		slider.value === slider.max
			? '1M Pageviews'
			: `${slider.value}K Pageviews`;
};

// Apply discount if checkbox is checked
// Not checked - display regular price
function calculateDiscount(price: number) {
	const priceEl = <HTMLSpanElement>document.querySelector('.js_price');
	const checkbox = <HTMLInputElement>document.querySelector('.js_checkbox');

	priceEl.textContent = checkbox.checked
		? `$${price - price * (25 / 100)}.00`
		: `$${price}.00`;
}

function getPrice(event: Event) {
	const views = (event.target as HTMLInputElement).value;
	let viewNumber = +views;

	options.map((option) => {
		if (viewNumber == 1000) {
			return calculateDiscount(36);
		} else if (viewNumber >= option.low && viewNumber < option.high) {
			return calculateDiscount(option.price);
		}
	});
}

// When user toggles slider - calculate fill to lower track
// Use value to calculate price interval
applyFill(slider);
document.addEventListener('input', (event) => {
	displayFill(event);
	getPrice(event);
});
