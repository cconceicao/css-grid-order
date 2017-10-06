window.onload =	 function () {
	var filters = document.querySelectorAll('.filters div');
	var fruits = document.getElementsByClassName('fruits');
	var fruitsGallery = document.getElementById('fruits-gallery');

	for (var i = 0; i < filters.length; i++) {
		filters[i].addEventListener('click', filterFood(i));
	};

	function filterFood (i) {
		return function () {
			activateFilter(i);
			resetFilters();
			applyFilter(i);
		};
	};

	function activateFilter (i) {
		for (var c = 0; c < filters.length; c++) {
			filters[c].classList.remove('is-active');
		};
		
		filters[i].classList.add('is-active');
	};

	function resetFilters () {
		var activeItems = fruitsGallery.querySelectorAll('.is-active');
		
		if (activeItems.length > 0) {
			for (var a = 0; a < activeItems.length; a++) {
				activeItems[a].classList.remove('is-active');
				activeItems[a].style.order = '';
			};
		};
	};

	function applyFilter (i) {
		var food = filters[i].getAttribute('data-food');
		var foodItems = document.getElementsByClassName(food);
		var notFruit = document.querySelectorAll('.card:not(.' + food + ')');

		for (var f = 0; f < foodItems.length; f++) {
			foodItems[f].classList.add('is-active');
			foodItems[f].style.order = f + 1;
		};

		for (var f = 0; f < notFruit.length; f++ ) {
			notFruit[f].style.order = foodItems.length + f + 1;
		};
	};
};