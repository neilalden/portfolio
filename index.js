const main_container = document.getElementById("fixedContainer");
const body = document.getElementById("body");
const sections = document.getElementsByTagName("section");
let height = 0;
for (let i = 0; i < sections.length; i++) {
	height += sections[i].offsetHeight;
}
body.style.height = height * 2 + "px";
var checkScrollSpeed = (function (settings) {
	settings = settings || {};

	var lastPos,
		newPos,
		timer,
		delta,
		delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

	function clear() {
		lastPos = null;
		delta = 0;
	}

	clear();

	return function () {
		newPos = window.scrollY;
		if (lastPos != null) {
			// && newPos < maxScroll
			delta = newPos - lastPos;
		}
		lastPos = newPos;
		clearTimeout(timer);
		timer = setTimeout(clear, delay);
		return delta;
	};
})();

window.onscroll = () => {
	let documentHeight = main_container.scrollHeight;
	if (window.scrollY < documentHeight) {
		main_container.scrollTo(0, window.scrollY);
	} else {
		window.scrollTo(0, main_container.scrollTop);
	}
};
main_container.addEventListener("mouseover", (el) => {
	window.scrollTo(0, main_container.scrollTop);
});

var slideIndex = 1;
var slideIndex1 = 1;

setInterval(function () {
	let i = 1;
	plusSlides(i, "lotusSlides");
	i++;
	if (i >= 7) i = 1;
}, 2000);
setInterval(function () {
	let i = 1;
	plusSlides1(i, "inventorySlides");
	i++;
	if (i >= 6) i = 1;
}, 2000);

showSlides(slideIndex, "lotusSlides");
showSlides(slideIndex1, "inventorySlides");

// Next/previous controls
function plusSlides(n, slideName) {
	if (slideIndex > 7) slideIndex = 1;
	showSlides((slideIndex += n), slideName);
}
function plusSlides1(n, slideName) {
	if (slideIndex1 > 6) slideIndex1 = 1;
	showSlides((slideIndex1 += n), slideName);
}

function showSlides(n, slideName) {
	var i;
	var slides = document.getElementsByClassName(slideName);
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}
