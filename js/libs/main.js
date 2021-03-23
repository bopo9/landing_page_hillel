$(document).ready(function(){
    $(".header__slider").slick({
        // autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    arrows: false
                }
            }
        ]
});
});