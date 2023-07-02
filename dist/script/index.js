"use strict";
const options = [
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
const sliderTrack = {
    fill: '#a4f3eb',
    background: '#ecf0fb',
};
const slider = document.querySelector('.js_slider');
/* Credit - Stack Overflow thread on how to fill
    background color dynamically */
function applyFill(slider) {
    // Turn value into percentage to figure out how far
    // it is in between the min and max of input
    const percentage = (100 * (+slider.value - +slider.min)) / (+slider.max - +slider.min);
    // Linear gradient separator at the above point
    // where background color change
    const bg = `linear-gradient(90deg, ${sliderTrack.fill} ${percentage}%, ${sliderTrack.background} ${percentage + 0.1}%)`;
    slider.style.background = bg;
}
// If event is slider display lower track fill
function displayFill(event) {
    const target = event.target;
    slider.innerHTML = target.value;
    applyFill(target);
}
// Display range of pageviews in 100s K or 1M as max value
slider.oninput = () => {
    const numberOfViews = (document.querySelector('.js_views'));
    if (slider.value === slider.max) {
        return (numberOfViews.textContent = '1M Pageviews');
    }
    else {
        return (numberOfViews.textContent = `${slider.value}K Pageviews`);
    }
};
// Apply discount if checkbox is checked
// Not checked - display regular price
function calculateDiscount(price) {
    const priceEl = document.querySelector('.js_price');
    const checkbox = document.querySelector('.js_checkbox');
    priceEl.textContent = checkbox.checked
        ? `$${price - price * (25 / 100)}.00`
        : `$${price}.00`;
}
function getPrice(event) {
    const target = event.target;
    let views = target.value;
    console.log(typeof views);
    options.map((option) => {
        if (+views == 1000) {
            return calculateDiscount(36);
        }
        else if (+views >= option.low && +views < option.high) {
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
