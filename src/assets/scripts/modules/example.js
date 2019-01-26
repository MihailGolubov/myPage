var btn = document.getElementById('ClosedMenu');

 btn.addEventListener('click', function() {

	var menu = document.getElementById('OpenMenu');

	menu.classList.add('navigation-open--opened');

});



 btn.addEventListener('click', function() {

	let menu = document.getElementById('OpenMenu');

	menu.classList.remove('navigation-open--opened');

});