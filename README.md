# Frontend Mentor - Interactive pricing component solution

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Acknowledgments](#acknowledgments)

## Overview

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge

Users should be able to:

-   View the optimal layout for the app depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Use the slider and toggle to see prices for different page view numbers

### Screenshot

![](./screenshot.jpg)

### Links

-   Solution URL: [Add solution URL here](https://your-solution-url.com)
-   Live Site URL: [helena-p.github.io/price_slider](https://helena-p.github.io/price_slider/)

## My process

I planned the general layout by viewing the provided Figma wireframe. It seemed straightforward with one layout shift in mobile view. The position of the price element shifted from above the range slider on desktop, to below on mobile. The card elements could otherwise be positioned with Flexbox.<br>
I had to read up on the styling input range and discovered it to be no easy task. I decided to customize the input range, to benefit from the default accessibility settings.<br>
I discovered that if you do not want the default styling of an input range then, there is no easy road to custom styling with cross-browser support. W3C had good documentation on this, except how to accomplish the slider's lower fill. I found a thread on Stack Overflow that solved this by using a 90-degree linear gradient based on the input value.<br>
The challenge is small in size, a landing page. I, therefore, decided to build the project with no build tools or framework, but instead use vanilla CSS and JavaScript.

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   CSS Grid
-   JavaScript

### What I learned

The biggest challenge was to fill the lower range track on a user event. I found a thread on Stack Overflow that solved the task by setting a linear gradient dynamically.

### Continued development

-   Internationalization<br>
    I took the opportunity to get familiar with CSS logical properties for this project. It would then be a natural continued development to internationalize the project to other languages and currencies.
-   Dark theme

### Useful resources

-   W3C
-   Stack Overflow

## Acknowledgments
