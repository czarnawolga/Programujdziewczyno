'use strict';
document.addEventListener('DOMContentLoaded', function () {
	var forDropdown = document.querySelector('.for-dropdown');
	var menu = document.querySelector('.dropdown');
	forDropdown.addEventListener('mouseover', function () { menu.style.display = 'block'; });
	forDropdown.addEventListener('mouseout', function () {
	menu.style.display = 'none';
	});
	
});