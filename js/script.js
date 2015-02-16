$(document).ready(function(){
	smoothScroll();
	carousel();
	modal();
});

function smoothScroll() {
	$('a').click(function(event){
		var sec = $(this).data('sec');
		var navOffset = sec == 1 ? -80 : -50
		sec = '.sec' + sec
		var target = $(sec).offset().top + navOffset;
		$('body').animate({
			scrollTop: target
			},
			1000
		);
		event.preventDefault();
	});
}

$(function(){
	$(window).scroll(function(){
		resizeNavbar();
		positionIndicator();
	});
});

function resizeNavbar () {
	if($(document).scrollTop()>200)
		$('.navbar').removeClass('large').addClass('small');
	else
		$('.navbar').removeClass('small').addClass('large');
}

function positionIndicator (argument) {
	var navbarLinks = $('.navbar-link');
	var sec1 = $('.sec1').offset().top;
	var sec2 = $('.sec2').offset().top;
	var sec3 = $('.sec3').offset().top;
	var sec4 = $('.sec4').offset().top;
	if ($(window).scrollTop() < sec2-50) {
		$(navbarLinks).removeClass('active');
		$('.link1').addClass('active');
	}
	else if ($(window).scrollTop() < sec3-50) {
		$(navbarLinks).removeClass('active');
		$('.link2').addClass('active');
	}
	else if ($(window).scrollTop() < sec4-50) {
		$(navbarLinks).removeClass('active');
		$('.link3').addClass('active');
	}
	else {
		$(navbarLinks).removeClass('active');
		$('.link4').addClass('active');
	}
}

function carousel() {
	$('.carousel-change').click(function(){
		var prevOrNext = $(this).attr('id');
		if ($('#img1').is(':visible')) {
			$('#img1').fadeOut(1000).animate({queue: false});
			var nextImg = prevOrNext == 'prev' ? '#img3' : '#img2';
			$(nextImg).fadeIn(1000).animate({queue: false});
		}
		else if ($('#img2').is(':visible')) {
			$('#img2').fadeOut(1000).animate({queue: false});
			var nextImg = prevOrNext == 'prev' ? '#img1' : '#img3';
			$(nextImg).fadeIn(1000).animate({queue: false});
		}
		else {
			$('#img3').fadeOut(1000).animate({queue: false});
			var nextImg = prevOrNext == 'prev' ? '#img2' : '#img1';
			$(nextImg).fadeIn(1000).animate({queue: false});
		}
	});
}

function modal () {
	$('button').click(function(){
		$('.modal').show();
	});
	$('i').click(function(){
		$('.modal').hide();
	});
}







