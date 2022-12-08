$(document).ready(function(){
    $('.reviews__inner').slick({
        infinite: true,
        speed: 1200,
        arrows: false,
        dots: true,
        variableWidth: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
  