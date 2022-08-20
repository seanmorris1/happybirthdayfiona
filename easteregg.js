import flickity from "https://cdn.skypack.dev/flickity@2.2.2";


const slider = document.querySelector('.slider')

new flickity(slider, {
	cellAlign: 'left',
	wrapAround: true,
	freeScroll: true,
	prevNextButtons: false
})