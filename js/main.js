jQuery(document).ready(function( $ ) {
    // need section script
    $("#needed-filters li").click ( function() {
    $("#needed-filters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    var selectedFilter = $(this).data("filter");
    $("#wrapper").fadeTo(100, 0);

    $(".neededThins-item").fadeOut().css('transform', 'scale(0)');

    setTimeout(function() {
      $(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
      $("#wrapper").fadeTo(300, 1);
    }, 300);
  });
})