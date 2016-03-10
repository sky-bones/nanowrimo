/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {

    "use strict";
    $('.carousel').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
       
        ]
        
    });
        
    $('.faq-slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true

          


    
    });
});