// Mina gjorda arbeten
$(window).on("load", function () {
	//Gör att webbplatsen är inladdad

	/* Lägg till och ta bort isotope-hidden class till work-bilderna, innan initiering av Isotope:  */

	// Ta bort isotope-hidden class om work-elementet inte är dolt
	var itemReveal = Isotope.Item.prototype.reveal;

	Isotope.Item.prototype.reveal = function () {
		itemReveal.apply(this, arguments);
		$(this.element).find(".work-item").removeClass("isotope-hidden");
	};

	// Lägg till isotope-hidden class om work-elementet inte är dolt
	var itemHide = Isotope.Item.prototype.hide;

	Isotope.Item.prototype.hide = function () {
		itemHide.apply(this, arguments);
		$(this.element).find(".work-item").addClass("isotope-hidden");
	};

	// Iitialize Isotope
	$("#isotope-container").isotope({});

	// filtrera objekt när man klickar på knappen
	$("#isotope-filters").on("click", "button", function () {
		// få filtervärde
		var filterValue = $(this).attr("data-filter");

		// filter
		$("#isotope-container").isotope({
			filter: filterValue,
		});

		// aktiv knapp
		$("#isotope-filters").find(".active").removeClass("active");
		$(this).addClass("active");
	});
});

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
