function smoothScroll(){$("a").click(function(a){var b=$(this).data("sec"),c=1==b?-80:-50;b=".sec"+b;var d=$(b).offset().top+c;$("body").animate({scrollTop:d},1e3),a.preventDefault()})}function resizeNavbar(){$(document).scrollTop()>200?$(".navbar").removeClass("large").addClass("small"):$(".navbar").removeClass("small").addClass("large")}function positionIndicator(){var a=$(".navbar-link"),b=($(".sec1").offset().top,$(".sec2").offset().top),c=$(".sec3").offset().top,d=$(".sec4").offset().top;$(window).scrollTop()<b-50?($(a).removeClass("active"),$(".link1").addClass("active")):$(window).scrollTop()<c-50?($(a).removeClass("active"),$(".link2").addClass("active")):$(window).scrollTop()<d-50?($(a).removeClass("active"),$(".link3").addClass("active")):($(a).removeClass("active"),$(".link4").addClass("active"))}function carousel(){$(".carousel-change").click(function(){var a=$(this).attr("id");if($("#img1").is(":visible")){$("#img1").fadeOut(1e3).animate({queue:!1});var b="prev"==a?"#img3":"#img2";$(b).fadeIn(1e3).animate({queue:!1})}else if($("#img2").is(":visible")){$("#img2").fadeOut(1e3).animate({queue:!1});var b="prev"==a?"#img1":"#img3";$(b).fadeIn(1e3).animate({queue:!1})}else{$("#img3").fadeOut(1e3).animate({queue:!1});var b="prev"==a?"#img2":"#img1";$(b).fadeIn(1e3).animate({queue:!1})}})}function modal(){$("button").click(function(){$(".modal").show()}),$("i").click(function(){$(".modal").hide()})}$(document).ready(function(){smoothScroll(),carousel(),modal()}),$(function(){$(window).scroll(function(){resizeNavbar(),positionIndicator()})});