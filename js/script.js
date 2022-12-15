$(document).ready(function(){
    $('.reviews__inner').slick({
        infinite: true,
        speed: 1200,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000
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
  

  