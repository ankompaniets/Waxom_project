$(document).ready(function() {
    window.onscroll = function() {
        scrollFunction();
    };

    $('.fa-bars').on('click', function() {
        toggleMobileMenu();
    });
});

function scrollFunction() {
  var scrollPosition = 10;
    if (document.body.scrollTop > scrollPosition || document.documentElement.scrollTop > scrollPosition) {
        $('.js-main-header-container').addClass("main-header_scrolled");
        $('.js-main-logo__img').addClass("main-logo__img_scrolled");
        $('.js-main-logo__link').addClass("main-logo__link_scrolled");
        $('.js-main-header-menu-item__link').addClass("main-header-menu-item__link_scrolled");
        $('.js-main-header-image-item__link').addClass("main-header-image-item__link_scrolled");

    } else {
        $('.js-main-header-container').removeClass("main-header_scrolled");
        $('.js-main-logo__img').removeClass("main-logo__img_scrolled");
        $('.js-main-logo__link').removeClass("main-logo__link_scrolled");
        $('.js-main-header-menu-item__link').removeClass("main-header-menu-item__link_scrolled");
        $('.js-main-header-image-item__link').removeClass("main-header-image-item__link_scrolled");
    }
}

function toggleMobileMenu () {
    $('.main-header-menu_mobile').toggleClass('main-header-menu_mobile__opened');
}

$('.posts-item-container_carousel').slick({
 	slidesToShow: 3,  
 	autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1        
      }
    }
   ]
});