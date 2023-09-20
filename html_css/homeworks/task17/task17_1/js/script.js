AOS.init();

$('#header_carousel').owlCarousel({
    loop: true,
    center: true,
    items: 1,
    nav: true,
    navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
    dots: false,
    responsiveClass: false,
});

$('#project__slide').owlCarousel({
    loop: true,
    center: true,
    items: 4,
    nav: true,
    responsiveClass: true,
    responsive: {
        320: {
            items: 1
        },
        577: {
            items: 1
        },
        768: {
            items: 1.5
        },
        992: {
            items: 2
        },
        1200: {
          items: 2.5
        },
        1440: {
            items: 3
        }
    }
});

$(document).ready(function() {
    $(document).on('click', '.menu-icon', () => {
        $('.nav').toggle();
    });
});