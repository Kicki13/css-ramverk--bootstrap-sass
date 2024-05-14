// Mina gjorda arbeten
// init Isotope
var $lista = $(".lista").isotope({
	itemSelector: ".element-item",
	layoutMode: "fitRows",
});

// bind filter on select change
$(".filter-button-group").on("click", "button", function () {
	// get filter value from option value
	var filterValue = $(this).attr("data-filter");
	// use filterFn if matches value
	// filterValue = filterFns[filterValue] || filterValue;
	$lista.isotope({ filter: filterValue });
});

// $(document).ready(function () {

// $(".navbar-toggler").click(function () {
// 	$(".navbar-toggler").toggleClass("change");
// });

// $(window).on("load", function () {
//Gör att webbplatsen är inladdad

/* Lägg till och ta bort isotope-hidden class till work-bilderna, innan initiering av Isotope:  */

// Ta bort isotope-hidden class om work-elementet inte är dolt
// var itemReveal = Isotope.Item.prototype.reveal;

// Isotope.Item.prototype.reveal = function () {
// 	itemReveal.apply(this, arguments);
// 	$(this.element).find(".work-item").removeClass("isotope-hidden");
// };

// Lägg till isotope-hidden class om work-elementet inte är dolt
// var itemHide = Isotope.Item.prototype.hide;

// Isotope.Item.prototype.hide = function () {
// 	itemHide.apply(this, arguments);
// 	$(this.element).find(".work-item").addClass("isotope-hidden");
// };

// external js: isotope.pkgd.js

// init Isotope
// var iso = new Isotope(".album", {
// 	itemSelector: ".element-item",
// 	layoutMode: "fitRows",
// });

// bind filter button click
// var filtersElem = document.querySelector(".filters-button-group");
// filtersElem.addEventListener("click", function (event) {
// 	// only work with buttons
// 	if (!matchesSelector(event.target, "button")) {
// 		return;
// 	}
// 	var filterValue = event.target.getAttribute("data-filter");
// 	// use matching filter function
// 	filterValue = filterFns[filterValue] || filterValue;
// 	iso.arrange({ filter: filterValue });
// });

// change is-checked class on buttons
// var buttonGroups = document.querySelectorAll(".button-group");
// for (var i = 0, len = buttonGroups.length; i < len; i++) {
// 	var buttonGroup = buttonGroups[i];
// 	radioButtonGroup(buttonGroup);
// }

// function radioButtonGroup(buttonGroup) {
// 	buttonGroup.addEventListener("click", function (event) {
// 		// only work with buttons
// 		if (!matchesSelector(event.target, "button")) {
// 			return;
// 		}
// 		buttonGroup.querySelector(".is-checked").classList.remove("is-checked");
// 		event.target.classList.add("is-checked");
// 	});
// }

// Iitialize Isotope
// $("#isotope-container").isotope({});

// filtrera objekt när man klickar på knappen
// $("#isotope-filters").on("click", "button", function () {
// få filtervärde
// var filterValue = $(this).attr("data-filter");

// filter
// $("#isotope-container").isotope({
// 	filter: filterValue,
// });

// aktiv knapp
// 		$("#isotope-filters").find(".active").removeClass("active");
// 		$(this).addClass("active");
// 	});
// });

// function myFunction() {
// 	var element = document.body;
// 	element.dataset.bsTheme = element.dataset.bsTheme == "light" ? "dark" : "light";
// }
// function stepFunction(event) {
// 	debugger;
// 	var element = document.getElementsByClassName("collapse");
// 	for (var i = 0; i < element.length; i++) {
// 		if (element[i] !== event.target.ariaControls) {
// 			element[i].classList.remove("show");
// 		}
// 	}
// }
// });
