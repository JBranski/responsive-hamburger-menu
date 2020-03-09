let lastScrollpos = window.pageYOffset;
window.onscroll = function() {
	let currentScrollPos = window.pageYOffset;
	if (lastScrollpos > currentScrollPos) {
		document.getElementById("top-nav").style.top = "0";
	} else {
		document.getElementById("top-nav").style.top = "-75px";
	}
	lastScrollpos = currentScrollPos;
}