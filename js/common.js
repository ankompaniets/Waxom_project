$ (function() {
     $('.fa-bars') .on('click', function() {

            $('.main-header-menu_mobile') .slideToggle(300, function() {               

            });
     });

 });

$(document).ready(function() {
  $(window).onscroll = function() {
    scrollFunction();
  };
});

function scrollFunction() {
  var scrollPosition = 20;
    if (document.body.scrollTop > scrollPosition || document.documentElement.scrollTop > scrollPosition) {
        $('.js-main-header-container').addClass("js-main-header_scrolled");
    } else {
        $('.js-main-header-container').removeClass("js-main-header_scrolled");
    }
}