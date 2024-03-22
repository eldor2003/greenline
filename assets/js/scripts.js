$(document).ready(function () {
	// hamburger
	$(".hamburger").on("click", function (e) {
		e.preventDefault();
		$(".header_menus").addClass("active");
	});

	$(".close").on("click", function (e) {
		e.preventDefault();
		$(".header_menus").removeClass("active");
	});
	$(".header_menus li a").on("click", function (e) {
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
	// mobile swiper
	const proektor_mobile_swiper = new Swiper(".proektor_mobile_swiper", {
		// Default parameters
		loop: true,
		// direction: "horizontal",
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

	// custom select
	var x, i, j, l, ll, selElmnt, a, b, c;
	/*look for any elements with the class "custom-select":*/
	x = document.getElementsByClassName("custom-select");
	l = x.length;
	for (i = 0; i < l; i++) {
		selElmnt = x[i].getElementsByTagName("select")[0];
		ll = selElmnt.length;
		/*for each element, create a new DIV that will act as the selected item:*/
		a = document.createElement("DIV");
		a.setAttribute("class", "select-selected");
		a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
		x[i].appendChild(a);
		/*for each element, create a new DIV that will contain the option list:*/
		b = document.createElement("DIV");
		b.setAttribute("class", "select-items select-hide");
		for (j = 1; j < ll; j++) {
			/*for each option in the original select element,
    create a new DIV that will act as an option item:*/
			c = document.createElement("DIV");
			c.innerHTML = selElmnt.options[j].innerHTML;
			c.addEventListener("click", function (e) {
				/*when an item is clicked, update the original select box,
        and the selected item:*/
				var y, i, k, s, h, sl, yl;
				s = this.parentNode.parentNode.getElementsByTagName("select")[0];
				sl = s.length;
				h = this.parentNode.previousSibling;
				for (i = 0; i < sl; i++) {
					if (s.options[i].innerHTML == this.innerHTML) {
						s.selectedIndex = i;
						h.innerHTML = this.innerHTML;
						y = this.parentNode.getElementsByClassName("same-as-selected");
						yl = y.length;
						for (k = 0; k < yl; k++) {
							y[k].removeAttribute("class");
						}
						this.setAttribute("class", "same-as-selected");
						break;
					}
				}
				h.click();
			});
			b.appendChild(c);
		}
		x[i].appendChild(b);
		a.addEventListener("click", function (e) {
			/*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
			e.stopPropagation();
			closeAllSelect(this);
			this.nextSibling.classList.toggle("select-hide");
			this.classList.toggle("select-arrow-active");
		});
	}
	function closeAllSelect(elmnt) {
		/*a function that will close all select boxes in the document,
  except the current select box:*/
		var x,
			y,
			i,
			xl,
			yl,
			arrNo = [];
		x = document.getElementsByClassName("select-items");
		y = document.getElementsByClassName("select-selected");
		xl = x.length;
		yl = y.length;
		for (i = 0; i < yl; i++) {
			if (elmnt == y[i]) {
				arrNo.push(i);
			} else {
				y[i].classList.remove("select-arrow-active");
			}
		}
		for (i = 0; i < xl; i++) {
			if (arrNo.indexOf(i)) {
				x[i].classList.add("select-hide");
			}
		}
	}
	/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
	document.addEventListener("click", closeAllSelect);

	//
	$(".select-items div").click(function (event) {
		event.preventDefault();
		index = $(this).index();
		console.log(index);
		$(".tab_navigation li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide();
		$(".tab_desc_item").hide();
		$(".tab_content").eq(index).show();
		$(".tab_desc_item").eq(index).show();
	});
});
