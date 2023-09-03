$(document).ready(function () {
    AOS.init();
    $('.form__group input').blur(function () {
        $(this).parents('.form__group').addClass('focused');
        $(this).val() ? "" : $(this).parents('.form__group').removeClass('focused');
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        center: true,
        items: 5,
        nav: false,
        dots: true,
        responsiveClass: true,
        responsive: {
            1000: {
                items: 1
            }
        }
    });
});