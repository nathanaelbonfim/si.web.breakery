function documentReady(event) {
	navbar_toggler(
		document.getElementsByClassName("navbar-nav")[0]
	);
}

/**
* Add the active class to the selected element
* in navbar
*/
function navbar_toggler(navbar) {
	var previousElementID = 'home-link';
	navbar.addEventListener("click", function(event) {
		var targetElementID = event.toElement.parentElement.id;
		
		var previousActiveElement = document.getElementById(previousElementID);
		var targetActiveElement = document.getElementById(targetElementID);
		
		previousActiveElement.classList.remove('active');
		targetActiveElement.classList.add('active');
		
		previousElementID = targetElementID;
	})
}

document.addEventListener("DOMContentLoaded", documentReady(event));
