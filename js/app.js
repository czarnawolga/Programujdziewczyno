'use strict';
document.addEventListener('DOMContentLoaded', function () {
	var forDropdown = document.querySelector('.for-dropdown');
	var menu = document.querySelector('.dropdown');
	forDropdown.addEventListener('mouseover', function () { menu.style.display = 'block'; });
	forDropdown.addEventListener('mouseout', function () {
	menu.style.display = 'none';
	});
	var buttons = document.querySelectorAll('.read-more');
	console.log(buttons[0].previousElementSibling);
	buttons[0].addEventListener('click', function () {
      var textArea = this.previousElementSibling;
      textArea.style.display = 'block'; });
	console.log(this.innerHTML); 
	buttons[0].addEventListener('click', function() {
      var textArea = this.previousElementSibling;
      textArea.style.display = 'block';
      this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
    });

});