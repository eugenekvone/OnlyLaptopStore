function addDelClass(delClass, addClass, item) {
	delClass.removeClass(addClass);
	item.addClass(addClass);
};

function sameHeight(copy, insert) {
	insert.css("height", copy.height() + "px");
};

function fixOpen(btn, back, fixed, blockFixed_1, blockFixed_2) {
	btn.css("background-color", "#3853d8");
	back.css("opacity", "0.93");
	fixed.css("width", 100 + "%").removeClass("trans");
	blockFixed_1.css({"width": 60 + "%", "z-index": 4}).removeClass("blockFixed").find(".basketPosts").css("margin-right", 0 + "px");
	blockFixed_2.css("z-index", 3);
};

function fixDown(btn_1, btn_2, back, fixed, blockFixed_1, blockFixed_2) {
	$.merge(btn_1, btn_2).css("background-color", "#313443");
	back.css("opacity", "0");
	fixed.css("width", 0 + "%").addClass("trans");
	$.merge(blockFixed_1, blockFixed_2).css("width", 0 + "%").find(".basketPosts").css("margin-right", - ($(window).width()*0.6) + "px");
};

function navAlfaOmega(el1, el2, alfaClass, omegaClass) {

	if (el2.hasClass(omegaClass) || el1.hasClass(alfaClass)) {
		addedAlfaOmega(el1, alfaClass, alfaClass);
	} else {
		addedAlfaOmega(el1, omegaClass, alfaClass);
	}

	function addedAlfaOmega(elem, elemClass, alfaClass) {
		if(elem.hasClass(elemClass)) {
			elem.removeClass(elemClass);
		} else {
			elem.addClass(elemClass);
			(elemClass == alfaClass) ? elem.css("z-index", "5") : elem.css("z-index", "4");
		};	
	}
};

function addedClass(elem, elemClass) {
	if(elem.hasClass(elemClass)) {
		elem.removeClass(elemClass);
	} else {
		elem.addClass(elemClass);
	};	
};

function addedClassRelation() {
	if ($("#cityNav").hasClass("z-indexNavAlfa") || 
		$("#menuNav").hasClass("z-indexNavAlfa") || 
		$("#cityNav").hasClass("z-indexNavOmega") || 
		$("#menuNav").hasClass("z-indexNavOmega")) {
		$("#fixed").addClass("z-indexFixed");
	} else {
		$("#fixed").removeClass("z-indexFixed");
	}
};

function addedClassNav(elem, elem1, elem2, elemClass) {
	elem1.removeClass(elemClass);
	elem2.removeClass(elemClass);
	elem.addClass(elemClass);
};

function dropDown(item, itemDown, mTop, trans) {
	trans = trans || 0.5;
	mTop = mTop || 0;
	itemDown.css("transition", "margin-top " + trans + "s");

	if (itemDown.css("margin-top") < "0px") {
		itemDown.css("margin-top", mTop);
	} else {
		itemDown.css("margin-top", - itemDown.height()  + "px");
	};

	if ($(item).is("ion-icon")) {addedClass(item.find("ion-icon"), "ion-iconCheck")};
};

function dropDownClose(item, itemDown) {
	itemDown.css({"margin-top": - itemDown.height()  + "px", "transition": "margin-top 0s"});
	if($(item).is("ion-icon")) {
		item.find("ion-icon").addClass("ion-iconCheck")
	}
};

function switchBtn(item) {
	if (!$(".visibleRoll").find(item).hasClass("visibleList")) {
		$(".visibleRoll").find("li").removeClass("visibleList");
		$(".visibleRoll").find(item).addClass("visibleList");
	}
};

function carouselCenter() {
	var break_point;
	($("#catalog")) ? (break_point = 650) : (break_point = 1050);
	if (break_point > $(window).width()) {
		$(".carousel-inner").css("margin-left", (($(window).width() - $(".carousel-item").find("img").width()) / 2 ) + "px")
	} else {
		$(".carousel-inner").css("margin-left", 0 + "px")
	};
};

function btnProduct(btn, productClass, productId, list){
	productClass.css("display", "none");
	productId.css("display", "block");

	$('#itemListOffice').click();

	btn.parent().find("li").removeClass("productBtnCheck");
	btn.addClass("productBtnCheck");
};

function fixedBtnMotion() {
	scroll = scroll || 0;
	if ($(window).scrollTop() > $("#topNav").height()) {
        $(".bottomNav").addClass("fixedBottomNav");
    } else {
    	$(".bottomNav").removeClass("fixedBottomNav")
    };

    var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
	if (scrollBottom < 410) {
		$('#basketBtnFixed').css("top", scrollBottom + "px");
		$('#favoritesBtnFixed').css("top", 145 + scrollBottom + "px");
	};
};

function btnNav(i) {
	$.merge($('#personNav li'), $('.personInfo')).removeClass("active");
	$('#personNav li')[i].classList.add("active");
	$('.personInfo')[i].classList.add("active");
};

function imgRunner(stopTimer) {
	for (var i = 0; i < 4; i++) {
		var img = $("div.banner").eq(i).find("img");
		var widthDiff = img.width() - $("div.banner").eq(i).width();
		(stopTimer) ? (timer = "0") : (timer = widthDiff / 5);

		if (img.css("left") < "0px") {
			img.css({"left": 0 + "px", "transition": "left " + timer + "s linear"});
		} else {
			img.css({"left": - widthDiff + "px", "transition": "left " + timer + "s linear"});
		}

		timerInterval(img, widthDiff, timer, stopTimer);
	}

	function timerInterval(img, widthDiff, timer, stopTimer) {
		var timerImg = setInterval(function () {
			if (img.css("left") < "0px") {
				img.css({"left": 0 + "px", "transition": "left " + timer + "s linear"});
			} else {
				img.css({"left": - widthDiff + "px", "transition": "left " + timer + "s linear"});
			}
		}, timer*1000);

		if (stopTimer) {
			clearInterval(timerImg);
		};
	}
}

$(document).ready(function(){

	carouselCenter();

	fixedBtnMotion ();

	sameHeight($('#fastInfo'), $("#firstGlance"));

	$("#fixed").find(".basketPosts").css("margin-right", - ($(window).width()*0.6) + "px");

	dropDownClose( $("#menu"), $("#menuNav"));
	dropDownClose( $("#city"), $("#cityNav"));
	dropDownClose($('#itemListHome'), $('#itemListHome').find("ul"));
	dropDownClose($('#itemListGaming'), $('#itemListGaming').find("ul"));
	dropDownClose($('#itemListOffice'), $('#itemListOffice').find("ul"));
	dropDownClose($("#itemCheck"), $("#scrollbar"));

	if($("#filterBtnMobile").css("display") == "block") {
		$("#filterDropDown").css({"margin-top": - $("#filterDropDown").height() - 7 + "px", "transition": "margin-top 0s"});
		addedClass($("#filter"), "filterBord");
	};

	if ($("input").is("#range")) {
		$("#range").ionRangeSlider({
		    type: "double",
		    grid: true,
		    min: 0,
		    max: 100000,
		    from: 20000,
		    to: 60000,
		    postfix: "р"
		});
	};
});

$(window).resize(function() {

	carouselCenter();

	if ($(window).width() > 650) {
		imgRunner()
	};
});

$(window).scroll(function() { 
    fixedBtnMotion ();
});

setTimeout(function(){
	if ($(window).width() > 650) {
		imgRunner();
	};
}, 3000);

$('#basketBtnFixed').click(function() { 
	fixOpen($('#basketBtnFixed'), $('#backFixed'), $("#fixed"), $("#basketFixed"), $("#favoritesFixed"))
});

$('#favoritesBtnFixed').click(function() { 
	fixOpen($('#favoritesBtnFixed'), $('#backFixed'), $("#fixed"), $("#favoritesFixed"), $("#basketFixed"))
});

$('#backFixed').click(function() { 
	fixDown($('#basketBtnFixed'), $('#favoritesBtnFixed'), $('#backFixed'), $("#fixed"), $("#favoritesFixed"), $("#basketFixed"))
});

$('.contShopping').click(function() { 
	fixDown($('#basketBtnFixed'), $('#favoritesBtnFixed'), $('#backFixed'), $("#fixed"), $("#favoritesFixed"), $("#basketFixed"))
});

$.merge($('#itemListHome').find(".headline"), $('#itemListHome').find("ion-icon")).click(function() {
	dropDown($(this).parent(), $(this).parent().find("ul"), 25);
});

$.merge($('#itemListOffice').find(".headline"), $('#itemListOffice').find("ion-icon")).click(function() {
	dropDown($(this).parent(), $(this).parent().find("ul"), 25);
}); 

$.merge($('#itemListGaming').find(".headline"), $('#itemListGaming').find("ion-icon")).click(function() {
	dropDown($(this).parent(), $(this).parent().find("ul"), 25);
});

$("#itemCheck").click(function() {
	dropDown($(this).parent(), $("#scrollbar"));
});

$("#itemPrice").click(function() {
	dropDown($(this).parent(), $(this).parent().find("span.irs"), 0, 0.4);
});

$("#filterBtnMobile").click(function() {
	dropDown( 0, $("#filterDropDown"));
	addedClass($("#filter"), "filterBord");
});

$("#menu").click(function() {
	dropDown( $("#menu"), $("#menuNav"));
	addedClass($("#topNav"), "topNavShadow");
	navAlfaOmega($("#menuNav"), $("#cityNav"), "z-indexNavAlfa", "z-indexNavOmega");
	addedClassRelation();
});

$("#city").click(function() {
	dropDown( $("#city"), $("#cityNav"));
	addedClass($("#topNav"), "topNavShadow");
	navAlfaOmega($("#cityNav"), $("#menuNav"), "z-indexNavAlfa", "z-indexNavOmega");
	addedClassRelation();
});

$("select").click(function(){
	$(this).css("color", "black");
});

$('#lang').click(function () {
	if ($("body").hasClass("ru")) {
		$("body").addClass("en").removeClass("ru");
	} else {
		$("body").addClass("ru").removeClass("en");
	}
});

$("#imgMini").find("img").click(function(){
	var a = $(this).index();
	$("#imgMax").find("img").removeClass("active");
	$("#imgMax").find("img").eq(a).addClass("active");
});

$('.category').click(function () {
	if (!($(this).hasClass("active"))) {
		$('.category').removeClass("active");
		$(this).addClass("active");
	};

	var thisClass = this.className.split(" ")[0];
	if ($(".products").find("ul").hasClass(thisClass)) {
		$(".products").find("ul").removeClass("visibleRoll");
		$(".products").find("ul." + thisClass).addClass("visibleRoll");
	}
});

$('.switchLeft').click(function () {
	switchBtn("li:eq(0)");
});

$('.switchRight').click(function () {
	switchBtn("li:eq(1)");
});

$('#personNav li').click(function () {
	$('#personNav li').removeClass("active");
	this.classList.add("active");
	for (var i = 0; i < 4; i++) {
		if ($('#personNav li')[i].className == "active") {
			$('.personInfo').removeClass("active");
			$('.personInfo')[i].classList.add("active");
		}
	}
});

$("#purchHist .btn").click(function() {
	btnNav(2);
});

$("#selectedProd .btn").click(function() {
	btnNav(3);
});

$('#privatePerson').click(function () {
	addDelClass($('.reg'), "active", $('#privateReg'));
});

$('#legalEntity').click(function () {
	addDelClass($('.reg'), "active", $('#legalReg'));
});

$(".gaming").click(function() {
	btnProduct($(this), $(".productList"), $("#gamingProduct"), $('#itemListGaming'))
});

$(".home").click(function() {
	btnProduct($(this), $(".productList"), $("#homeProduct"), $('#itemListHome'))
});

$(".office").click(function() {
	btnProduct($(this), $(".productList"), $("#officeProduct"), $('#itemListOffice'))
});



