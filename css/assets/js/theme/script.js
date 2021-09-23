
(function($) {

    'use strict';

    // SECTIONS BAR
    $('#scrollspy_bar a').on('click', function() {
        $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    });

    // SCROLL SPY
    // vars
    $('body').scrollspy({
        target: '#scrollspy_bar',
        offset: 0
    });
    $('[data-spy="scroll"]').each(function() {
        var $spy = $(this).scrollspy('refresh');
    })


    // Add class (navbar_open) to (<body></body>)
    $('#humburger').click(function() {
        // vars
        var nav_layer = $('.nav_layer'),
            item_1 = $('#item_1'),
            item_2 = $('#item_2'),
            item_3 = $('#item_3'),
            item_4 = $('#item_4'),
            item_5 = $('#item_5'),
            bar_1 = $('#bar_1'),
            bar_2 = $('#bar_2'),
            bar_3 = $('#bar_3');
        nav_layer.toggleClass('layer_act');

        // if condition
        if (nav_layer.hasClass('layer_act')) {
            nav_layer.removeClass('layer_up').addClass('layer_down');
            bar_1.removeClass('anim_out_bar_1').addClass('anim_bar_1');
            bar_2.removeClass('anim_out_bar_2').addClass('anim_bar_2');
            bar_3.removeClass('anim_out_bar_3').addClass('anim_bar_3');
            item_1.removeClass('anim_item_1').addClass('anim_out_item_1');
            item_2.removeClass('anim_item_2').addClass('anim_out_item_2');
            item_3.removeClass('anim_item_3').addClass('anim_out_item_3');
            item_4.removeClass('anim_item_4').addClass('anim_out_item_4');
            item_5.removeClass('anim_item_5').addClass('anim_out_item_5');
        } else {
            bar_1.removeClass('anim_bar_1').addClass('anim_out_bar_1');
            bar_2.removeClass('anim_bar_2').addClass('anim_out_bar_2');
            bar_3.removeClass('anim_bar_3').addClass('anim_out_bar_3');
            nav_layer.removeClass('layer_down').addClass('layer_up');
            item_1.removeClass('anim_out_item_1').addClass('anim_item_1');
            item_2.removeClass('anim_out_item_2').addClass('anim_item_2');
            item_3.removeClass('anim_out_item_3').addClass('anim_item_3');
            item_4.removeClass('anim_out_item_4').addClass('anim_item_4');
            item_5.removeClass('anim_out_item_5').addClass('anim_item_5');
        }
    });


    $(window).scroll(function() {

    $('.animation-test').each(function(){

        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow+400) {
            $(this).addClass("slideRight");
        }

    });

});

$('.element-to-hide').css('visibility', 'hidden');

 

    // Navigation Links
    $('#navigation a').on('click', function() {
        // vars
        var nav_layer = $('.nav_layer'),
            item_1 = $('#item_1'),
            item_2 = $('#item_2'),
            item_3 = $('#item_3'),
            item_4 = $('#item_4'),
            item_5 = $('#item_5'),
            bar_1 = $('#bar_1'),
            bar_2 = $('#bar_2'),
            bar_3 = $('#bar_3');
        nav_layer.toggleClass('layer_act');

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);

        if (nav_layer.hasClass('layer_act') == false) {
            bar_1.removeClass('anim_bar_1').addClass('anim_out_bar_1');
            bar_2.removeClass('anim_bar_2').addClass('anim_out_bar_2');
            bar_3.removeClass('anim_bar_3').addClass('anim_out_bar_3');
            nav_layer.removeClass('layer_down').addClass('layer_up');
            item_1.removeClass('anim_out_item_1').addClass('anim_item_1');
            item_2.removeClass('anim_out_item_2').addClass('anim_item_2');
            item_3.removeClass('anim_out_item_3').addClass('anim_item_3');
            item_4.removeClass('anim_out_item_4').addClass('anim_item_4');
            item_5.removeClass('anim_out_item_5').addClass('anim_item_5');
        } else {
            return false;
        }
    });

    const text = baffle('.baffle');
    text.set({
        characters: '!/|~#.^+*$#%nwf',
        speed: 100
    });
    text.start();
    text.reveal(2000);


    // SE IV SLIDER (#se_iv_slider)
    $('#se_iv_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
        appendDots: $('#se_vi_slider_dots'),
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });

    // Create a custom attribute for gallery images
    $('.gallery_box').each(function() {
        // vars
        var bg_src = $(this).data('img-url');

        $(this).css('background', 'url(' + bg_src + ') center no-repeat');
    });

    // Change modal info
    $('.gallery_box .scale_btn').on('click', function() {
        // vars
        var bg_src = $(this).parent().data('img-url'),
            gallery_image = $('#gallery_modal').find('img'),
            box_title = $(this).parent().find('.info .title').text(),
            gallery_title = $('#gallery_modal').find('.title');
        gallery_image.attr('src', bg_src);
        gallery_title.text(box_title);

        $('#gallery_modal').fadeIn()
    });

    // dismiss (.gallery_modal)
    $('#dismiss_btn').on('click', function() {
        $(this).parents('#gallery_modal').fadeOut();
    });

}(jQuery));