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

//mobile slider
const sliderMediafunction = (sliderClass) => {
  $(`${sliderClass}`).slick({
    slidesToShow: 1.2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $(function(){
    resizeSliderContent = false;
    function resize_slider_content(){
      if ($(window).width() <= 644 && resizeSliderContent == true) { 
        $(`${sliderClass}`).slick({
            arrows: false
        });
        resizeSliderContent = false;
      } 
      else if ($(window).width() > 644 && resizeSliderContent == false){
        $(`${sliderClass}`).slick('unslick');
        resizeSliderContent = true;
      }
    }
    resize_slider_content();
    $(window).on('resize', function(){
        resize_slider_content();
    });
  });
};

sliderMediafunction('.competitions__wrapper');
sliderMediafunction('.latest__wrapper');

// hamburger menu
window.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.header__wrapper_mobile');
    const hamburger = document.querySelector('.hamburger_menu');
    const logo = document.querySelector('.header');
    const scroll = document.querySelector('.body');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('hamburger_menu_active');
        menu.classList.toggle('header__wrapper_mobile_active');
        logo.classList.toggle('header_active');
        scroll.classList.toggle('body_active');
    });
}); 
  

  