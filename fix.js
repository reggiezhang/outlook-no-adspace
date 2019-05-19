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

var deleted = false;

function check() {
	// var adspace = document.getElementsByClassName("_2qPmszDwBfYpF7PO9Mn3KN")[0];
	// if (adspace) {
	// 	adspace.parentNode.removeChild(adspace);
	// }
	try {
		var app = document.getElementById('app');
		var adbarParent = app.children[0].children[2].children[0].children[0];
		var adbar = adbarParent.children[adbarParent.children.length - 1];
		if (adbar && !deleted) {
			adbar.remove();
			deleted = true;
		}
	} catch (err) {
		// console.log(err);
	}
}
