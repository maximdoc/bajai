$(function () {

    $('.top_slider, .slider_items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        arrows: false
    });

    $('.menu_btn').on('click', function (){
        $('.menu_btn').toggleClass('menu_btn--active');
        $('.header_menu-item').toggleClass('header_menu-item--active');
    });

    $('.header_menu-link').on('click', function (){
        $('.menu_btn').removeClass('menu_btn--active');
        $('.header_menu-item').removeClass('menu_list--active');
    });

});