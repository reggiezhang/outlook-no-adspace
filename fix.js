window.onload = load();
var start;
function load() {
	setTimeout(function () {
		check();
	}, 500);
	var running = setInterval(function () {
		check();
	}, 1000);
};

function check() {
	var adspace = document.getElementsByClassName("_2qPmszDwBfYpF7PO9Mn3KN")[0];
	if (adspace) {
		adspace.parentNode.removeChild(adspace);
	}
}
