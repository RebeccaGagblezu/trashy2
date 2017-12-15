// jQuery(document).ready(function( $ ) {
//     // need section script
//     $("#needed-filters li").click ( function() {
//     $("#needed-filters li").removeClass('filter-active');
//     $(this).addClass('filter-active');

//     var selectedFilter = $(this).data("filter");
//     $("#wrapper").fadeTo(100, 0);

//     $(".neededThins-item").fadeOut().css('transform', 'scale(0)');

//     setTimeout(function() {
//       $(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
//       $("#wrapper").fadeTo(300, 1);
//     }, 300);
//   });
// })


//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready( function() {
    $('.subMenu').smint({
    	'scrollSpeed' : 1000
    });
});

$(document).ready( function() {
    $('.subMenu').smint({
    	'scrollSpeed' : 1000
    });
});