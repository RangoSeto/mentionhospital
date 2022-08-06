$(document).ready(function(){
	// console.log("i am working");

	// Start Header Section

	// Start banner Section
	// $(".carousel").carousel({
	// 	interval: 1000
	// })
	// End banner Section

	// End Header Section

	// Start Info Section
	$(window).scroll(function(){
		let getscrollpoint = $(this).scrollTop();
		// console.log(getscrollpoint);

		if(getscrollpoint >= 300){
			$(".infotexts").addClass("fromlefts");
			$(".infopics").addClass("fromrights");
		}else{
			$(".infotexts").removeClass("fromlefts");
			$(".infopics").removeClass("fromrights");
		}
	})
	// End Info Section

	// Start Adv Section
	$("#videos").click(function(){
		var getmodal = $(this).data("bs-target");
		var getvideosrc = $(this).data("video");
		var videourlwidthauto = getvideosrc+"?autoplay=1";

		$(getmodal + " iframe").attr("src",videourlwidthauto);

		$(getmodal + " button.btn-close").click(function(){
			$(getmodal + " iframe").attr("src",getvideosrc);
		});

		$(getmodal).click('hidden.bs.modal',function(){
			$(getmodal + " iframe").attr("src",getvideosrc);
		});


	})
	// End Adv Section

	// Start Premises Section

	$("#lightslider").lightSlider({
		// auto:true,
		item:4,
        loop:true,
        slideMove:1,
        speed:600
	}).play();

	// End Premises Section

	// Start Pricing Section
	$(window).scroll(function(){
		let getscroll = $(this).scrollTop();
		// console.log(getscroll);

		if(getscroll >= 2450){
			$(".cardone").addClass("movelefts");
			$(".cardtwo").addClass("movebottoms");
			$(".cardthree").addClass("moverights");
		}else{
			$(".cardone").removeClass("movelefts");
			$(".cardtwo").removeClass("movebottoms");
			$(".cardthree").removeClass("moverights");
		}
	});
	// End Pricing Section

	// Start Join Us Section
	$("#accordion").accordion();
	// End Join Us Section

	// Start Footer Section
	$("#getyear").text(new Date().getUTCFullYear());
	// End Footer Section

	// Start Progress
	$(window).scroll(function(){
		var getprogress = $("#progresses");
		var getprogressval = $("#progressvalues");
		var getscrollTop = $(this).scrollTop();
		// console.log(getscrollTop);



		// scrolltop * 100 / (pjheight - currentvheight)

// By jQuery

		// var getscrollheight = $(document).height();
		// console.log(getscrollheight);
		// var getclientheight = $(window).height();
		// console.log(getclientheight);
		// var calcheight = getscrollheight - getclientheight;
		// var getfinalheight = Math.round(getscrollTop * 100 / calcheight);
		// console.log(getfinalheight);


// By JavaScript

		var getscrollheight = document.documentElement.scrollHeight;
		// console.log(getscrollheight);
		var getclientheight = document.documentElement.clientHeight;
		// console.log(getclientheight);
		var calcheight = getscrollheight - getclientheight;
		var getfinalheight = Math.round(getscrollTop * 100 / calcheight);
		// console.log(getfinalheight);



		getprogressval.text(`${getfinalheight}%`);
		getprogress.css({
			"background":`conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
		});
		

	});
	// End Progress
})