$(document).ready(function () {
	// hamburger
	$(".hamurger_menu").on("click", function (e) {
		e.preventDefault();
		$(".header_menus").addClass("active");
	});

	$(".close").on("click", function (e) {
		e.preventDefault();
		$(".header_menus").removeClass("active");
	});

	// header menus top
	function moveLine() {
		const line = document.querySelector(".line"); // Line elementini tanlash
		const links = document.querySelectorAll(".header_menus li"); // Barcha linklarni tanlash
		links.forEach((link, index) => {
			link.addEventListener("click", function () {
				console.log(index + 1);
				switch (index + 1) {
					case 1:
						line.style.width = "94%";
						break;
					case 2:
						line.style.width = "77%";
						break;
					case 3:
						line.style.width = "53%";
						break;
					case 4:
						line.style.width = "37%";
						break;
					case 5:
						line.style.width = "18%";
						break;
					case 6:
						line.style.width = "0%";
						break;
					default:
						line.style.width = "94%";
						break;
				}
			});
		});
	}
	moveLine();

	// proektor swiper
	const proektor_swiper = new Swiper(".proektor_swiper", {
		// Default parameters
		loop: true,
		// direction: "horizontal",
		direction: "vertical",
		grabCursor: true,
		// autoplay: {
		// 	delay: 500,
		// },
		// allowTouchMove: false,
		// Default parameters
		pagination: {
			el: ".pagination",
			clickable: true,
		},
	});

	// description tab
	$(".tab_content:first").show();
	$(".tab_desc_item:first").show();
	$(".tab_navigation li").click(function (event) {
		event.preventDefault();
		index = $(this).index();
		$(".tab_navigation li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide();
		$(".tab_desc_item").hide();
		$(".tab_content").eq(index).show();
		$(".tab_desc_item").eq(index).show();
	});

	// faq
	$(".faq_body").slideUp();
	$(".faq_top").on("click", function (e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).find(".faq_arrow").toggleClass("active");
		$(this).parent().find(".faq_body").slideToggle(400);
		$(this)
			.parent(".faq_item")
			.prevAll(".faq_item")
			.find(".faq_body")
			.slideUp();
		$(this)
			.parent(".faq_item")
			.prevAll(".faq_item")
			.find(".faq_arrow")
			.removeClass("active");
		$(this)
			.parent(".faq_item")
			.nextAll(".faq_item")
			.find(".faq_body")
			.slideUp();
		$(this)
			.parent(".faq_item")
			.nextAll(".faq_item")
			.find(".faq_arrow")
			.removeClass("active");

		$(this)
			.parent(".faq_item")
			.prevAll(".faq_item")
			.find(".faq_head")
			.removeClass("active");
		$(this)
			.parent(".faq_item")
			.nextAll(".faq_item")
			.find(".faq_top")
			.removeClass("active");
	});
});
