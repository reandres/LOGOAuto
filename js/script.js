$(document).ready(function(){
    $('.reviews__inner').slick({
        infinite: true,
        speed: 1000,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });
});

// mobile slider competitions
$('.competitions__wrapper').slick({
    slidesToShow: 1.1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $(function(){
    resizeSliderContent = false;
    function resize_slider_content(){
      if ($(window).width() <= 644 && resizeSliderContent == true) { 
        $('.competitions__wrapper',).slick({
            arrows: false
        });
        resizeSliderContent = false;
      } 
      else if ($(window).width() > 644 && resizeSliderContent == false){
        $('.competitions__wrapper').slick('unslick');
        resizeSliderContent = true;
      };
    }
    resize_slider_content();
    $(window).on('resize', function(){
        resize_slider_content();
    });
});

// mobile slider latest
$('.latest__wrapper').slick({
    slidesToShow: 1.1,
    arrows: false
  });

  $(function(){
    resizeSliderContent = false;
    function resize_slider_content(){
      if ($(window).width() <= 644 && resizeSliderContent == true) { 
        $('.latest__wrapper',).slick({
            arrows: false
        });
        resizeSliderContent = false;
      } 
      else if ($(window).width() > 644 && resizeSliderContent == false){
        $('.latest__wrapper').slick('unslick');
        resizeSliderContent = true;
      };
    }
    resize_slider_content();
    $(window).on('resize', function(){
        resize_slider_content();
    });
});

// hamburger menu
window.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.header__wrapper_mobile');
    const hamburger = document.querySelector('.hamburger_menu');
    const logo = document.querySelector('.header');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('hamburger_menu_active');
        menu.classList.toggle('header__wrapper_mobile_active');
        logo.classList.toggle('header_active');
    });
}); 
  

  