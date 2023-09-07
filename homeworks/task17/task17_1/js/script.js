AOS.init();

$('#header_carousel').owlCarousel({
    loop: true,
    center: true,
    items: 5,
    nav: true,
    navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
    dots: false,
    responsiveClass: true,
    responsive: {
        1000: {
            items: 1
        }
    }
});

$('#project__slide').owlCarousel({
    loop: true,
    center: true,
    items: 4,
    nav: true,
    responsiveClass: true,
    responsive: {
        1000: {
            items: 3
        }
    }
});