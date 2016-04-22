$(document).ready(function(){

	var navPosition = $("#nav").offset().top;
	var t = "";

	$("#content").waypoint(function(direction) {
		if (direction == "down") {
			$("#nav").addClass("sticky-nav");
			$(".section-title").css("padding-top", "60px");
		} else {
			$("#nav").removeClass("sticky-nav");
			$(".section-title").css("padding-top", "0px");
		}
	});

	$(".img-overlay").hover(
		function () {
			$(".img-overlay").removeClass("img-overlay-active");
			$(this).addClass("img-overlay-active");
			$(this).children("div").removeClass("item-text");
			$(this).children("div").addClass("item-text-active");
			$(this).parent().children("img").addClass("blur");
		},
		function () {
			$(this).removeClass("img-overlay-active");
			$(".item-text-active").addClass("item-text");
			$(".item-text").removeClass("item-text-active");
			$(".img-circle").removeClass("blur");
		}
	);

	$(".nav-item").hover(
		function () {
			$(this).addClass("nav-item-active");
		},
		function () {
			$(this).removeClass("nav-item-active");
		}
	);

	$("#nav-title").hover(
		function () {
			$(this).addClass("nav-title-active");
		},
		function () {
			$(this).removeClass("nav-title-active");
		}
	);

	$("#homemade").click(function () {
		$('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 700);
	});

	$("#restaurants").click(function () {
		$('html, body').animate({
            scrollTop: $("#out").offset().top
        }, 700);
	});

	$("#about").click(function () {
		$('html, body').animate({
            scrollTop: $("#about-section").offset().top
        }, 700);
	});

	$("#nav-title").click(function () {
		$('html, body').animate({
            scrollTop: 0
        }, 700);
	});

	$(".img-overlay").click(function () {
		$("#modal-container").show();
		t = $(this).text();
		$("#modal-header").text(t);
		$("#modal-description").text(dict[t]);
		$("#modal-image-container").append(image[t]);
		if (size[t] == 1) {
			$(".arrow").hide();
		} else {
			$("#arrow-right").show();
			$("#arrow-left").hide();
			curr[t] = 1;
		}
	});

	$("#modal-overlay").click(function () {
		$("#modal-container").hide();
		$("#modal-image-container").children().remove();
	});

	$("#modal-box").click(function (event) {
 		event.stopPropagation();
	});

	$("#modal-box").hover(
		function () {
			$('body').addClass('no-scroll');
		},
		function () {
			$('body').removeClass('no-scroll');
		}
	)

	$("#arrow-left").click(function () {
		var num = size[t];
		var current = curr[t];
		$("#arrow-right").show();
		if (current != 1) {
			$("#arrow-left").show();
			var image = map[t][current - 1];
			$("#modal-image-container").children().remove();
			$("#modal-image-container").append(image);
			curr[t] -= 1;
			if (curr[t] == 1) {
				$("#arrow-left").hide();
			}
		}
	})

	$("#arrow-right").click(function () {
		var num = size[t];
		var current = curr[t];
		$("#arrow-left").show();
		if (current != num) {
			$("#arrow-right").show();
			var image = map[t][current + 1];
			$("#modal-image-container").children().remove();
			$("#modal-image-container").append(image);
			curr[t] += 1;
			if (curr[t] == num) {
				$("#arrow-right").hide();
			}
		}
	})


	/*-----------------------------------------------------------*/
	var dict = {
		"Milky Way Brownies": "Fudge brownies with Milky Way inside. Need I say more?",
		"Beef and Tofu Stew": "Made with stew beef, soft tofu, onions, and green onion. Seasoned lightly. A simple yet hearty and filling meal.",
		"Sweet Potato Rice & Vegetables": "A healthy lunch of grilled zucchini and bell peppers with sweet potato rice.",
		"Spare Ribs & Turnip Noodle Soup": "A Taiwanese-style noodle soup. Easy and tasty; no seasonings needed!",
		"Red Curry with Chicken": "Thai red curry with chicken and bell peppers, served over rice.",
		"Grilled Pork Ribs": "Grilled pork ribs, topped with grilled onions, with a side of mashed potatoes with bacon.",
		"Pork Stir Fry & Potatoes": "A simple pork and bell peppers stir fry, with a side of butter roasted potatoes.",
		"Zucchini Fried Rice": "Zucchini, onions, and an egg stir fried with leftover rice. Healthy and delicious way to finish leftovers.",
		"Braised Pork Belly": "Pork belly, onions, and tomatoes cookied in Chinese braising sauce. Rich and flavorful, goes perfectly with rice.",
		"Chengdu Style Restaurant": "Chinese New Year's Eve Dinner with friends. Good food and good company.",
		"Pieology": "You can't go wrong with make-your-own pizza.",
		"Cupcakin' Bake Shop": "Valentine's Day special 'Bae' box: 4 vanilla, 4 chococlate, 4 red velvet.",
		"Little Gem Belgian Waffles": "Belgian Waffle topped with cookie butter. Perfect for a mid-day snack.",
		"Joshu-Ya Brasserie": "A nice and classy Japanese restaurant. The fish was fresh and expertly done.",
		"Urbann Turbann": "A Chipotle-style Indian fast food place serving up generously sized rice bowls and naan wraps.",
		"Tasty Pot": "Taiwanese Hot Pot place in downtown Berkeley that just opened. The Stinky Tofu Hot Pot is really good!",
		"Nom Nom": "Korean Spicy Pork from Nom Nom, a service that delivers home-cooked meals to students for a reasonable price.",
		"Simply Bowl": "Japanese-style poke bowls. Pictured are the Mango Salmon Poke Bowl and the Seared Tuna Bowl."
	}

	var image = {
		"Milky Way Brownies": '<img id="modal-image" src="assets/img/home/brownie.jpg" />',
		"Beef and Tofu Stew": '<img id="modal-image" src="assets/img/home/beef-tofu.jpg" />',
		"Sweet Potato Rice & Vegetables": '<img id="modal-image" src="assets/img/home/veggies.jpg" />',
		"Spare Ribs & Turnip Noodle Soup": '<img id="modal-image" src="assets/img/home/noodle.jpg" />',
		"Red Curry with Chicken": '<img id="modal-image" src="assets/img/home/curry.jpg" />',
		"Grilled Pork Ribs": '<img id="modal-image" src="assets/img/home/pork-rib.jpg" />',
		"Pork Stir Fry & Potatoes": '<img id="modal-image" src="assets/img/home/pork-stir-fry.jpg" />',
		"Zucchini Fried Rice": '<img id="modal-image" src="assets/img/home/fried-rice.jpg" />',
		"Braised Pork Belly": '<img id="modal-image" src="assets/img/home/pork-belly.jpg" />',
		"Chengdu Style Restaurant": '<img id="modal-image" src="assets/img/out/chengdu/6.jpg" />',
		"Pieology": '<img id="modal-image" src="assets/img/out/pieology.jpg" />',
		"Cupcakin' Bake Shop": '<img id="modal-image" src="assets/img/out/cupcakes.jpg" />',
		"Little Gem Belgian Waffles": '<img id="modal-image" src="assets/img/out/waffle.jpg" />',
		"Joshu-Ya Brasserie": '<img id="modal-image" src="assets/img/out/joshu-ya/3.jpg" />',
		"Urbann Turbann": '<img id="modal-image" src="assets/img/out/urbann/2.jpg" />',
		"Tasty Pot": '<img id="modal-image" src="assets/img/out/tasty-pot/3.jpg" />',
		"Nom Nom": '<img id="modal-image" src="assets/img/out/nom-nom/2.jpg" />',
		"Simply Bowl": '<img id="modal-image" src="assets/img/out/simply-bowl/2.jpg" />'
	}

	var size = {
		"Milky Way Brownies": 1,
		"Beef and Tofu Stew": 1,
		"Sweet Potato Rice & Vegetables": 2,
		"Spare Ribs & Turnip Noodle Soup": 1,
		"Red Curry with Chicken": 1,
		"Grilled Pork Ribs": 1,
		"Pork Stir Fry & Potatoes": 1,
		"Zucchini Fried Rice": 1,
		"Braised Pork Belly": 1,
		"Chengdu Style Restaurant": 8,
		"Pieology": 1,
		"Cupcakin' Bake Shop": 1,
		"Little Gem Belgian Waffles": 1,
		"Joshu-Ya Brasserie": 4,
		"Urbann Turbann": 2,
		"Tasty Pot": 3,
		"Nom Nom": 2,
		"Simply Bowl": 2
	}

	var curr = {
		"Sweet Potato Rice & Vegetables": 1,
		"Chengdu Style Restaurant": 1,
		"Joshu-Ya Brasserie": 1,
		"Urbann Turbann": 1,
		"Tasty Pot": 1,
		"Nom Nom": 1,
		"Simply Bowl": 1
	}

	var veggies = {
		1: '<img id="modal-image" src="assets/img/home/veggies.jpg" />',
		2: '<img id="modal-image" src="assets/img/home/veggies2.jpg" />'
	}

	var chengdu = {
		1: '<img id="modal-image" src="assets/img/out/chengdu/6.jpg" />',
		2: '<img id="modal-image" src="assets/img/out/chengdu/1.jpg" />',
		3: '<img id="modal-image" src="assets/img/out/chengdu/2.jpg" />',
		4: '<img id="modal-image" src="assets/img/out/chengdu/3.jpg" />',
		5: '<img id="modal-image" src="assets/img/out/chengdu/5.jpg" />',
		6: '<img id="modal-image" src="assets/img/out/chengdu/4.jpg" />',
		7: '<img id="modal-image" src="assets/img/out/chengdu/7.jpg" />',
		8: '<img id="modal-image" src="assets/img/out/chengdu/8.jpg" />'
	}

	var joshuya = {
		1: '<img id="modal-image" src="assets/img/out/joshu-ya/3.jpg" />',
		2: '<img id="modal-image" src="assets/img/out/joshu-ya/4.jpg" />',
		3: '<img id="modal-image" src="assets/img/out/joshu-ya/1.jpg" />',
		4: '<img id="modal-image" src="assets/img/out/joshu-ya/2.jpg" />'
	}

	var urbann = {
		1: '<img id="modal-image" src="assets/img/out/urbann/2.jpg" />',
		2: '<img id="modal-image" src="assets/img/out/urbann/1.jpg" />',
	}

	var tastypot = {
		1: '<img id="modal-image" src="assets/img/out/tasty-pot/3.jpg" />',
		2: '<img id="modal-image" src="assets/img/out/tasty-pot/1.jpg" />',
		3: '<img id="modal-image" src="assets/img/out/tasty-pot/2.jpg" />'
	}

	var nomnom = {
		1: '<img id="modal-image" src="assets/img/out/nom-nom/2.jpg" />',
		2: '<img id="modal-image" src="assets/img/out/nom-nom/1.jpg" />',
	}

	var simplybowl = {
		1: '<img id="modal-image" src="assets/img/out/simply-bowl/2.jpg" />',
		2: '<img id="modal-image" src="assets/img/out/simply-bowl/1.jpg" />',
	}

	var map = {
		"Sweet Potato Rice & Vegetables": veggies,
		"Chengdu Style Restaurant": chengdu,
		"Joshu-Ya Brasserie": joshuya,
		"Urbann Turbann": urbann,
		"Tasty Pot": tastypot,
		"Nom Nom": nomnom,
		"Simply Bowl": simplybowl
	}
});