var elements = document.querySelectorAll('.filter_name');

    function toggleActiveClass() {
        this.classList.toggle('active');
    }

    elements.forEach(function(element) {
        element.addEventListener('click', toggleActiveClass);
    });




// "use strict";


// /* ======= Isotope plugin ======= */
// /* Ref: http://isotope.metafizzy.co/ */
// // init Isotope

// const isotopeContainer = document.querySelector('.project');
// const filterItems = document.querySelectorAll('#filters .filter_name');

// imagesLoaded(isotopeContainer, function () {

// 	var iso = new Isotope( isotopeContainer, {
// 	  // options
// 	  itemSelector: '.card_body',
// 	  layoutMode: 'fitRows'

// 	});

// 	// filter items on click
// 	filterItems.forEach((filterItem) => {

// 		filterItem.addEventListener('click', (e) => {

// 			let filterValue = filterItem.getAttribute('data-filter');

// 			// arrange - https://isotope.metafizzy.co/methods.html
// 			iso.arrange({ filter: filterValue });


// 			//toggle active class
// 			for (let siblingFilterItem of filterItem.parentNode.children) {
// 		        siblingFilterItem.classList.remove('active');
// 		    }
// 			filterItem.classList.add('active');

// 		});

// 	});
// })
