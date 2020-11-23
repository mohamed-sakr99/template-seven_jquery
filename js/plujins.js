$(document).ready(function () {
    //loading-page
    $(window).on('load', function () {
        $('.loading').fadeOut(2000)
    })

    //adjust header height
    $('.header').height($(window).height());

    $(window).resize(function () {
        $('.header').height($(window).height())
    });

    //change navbar color depend on scrolling
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 140) {
            $('nav').css({
                'backgroundColor': '#051024',
                'padding': '10px 0',
                'box-shadow': '8px 0 5px #000'
            })
        } else {
            $('nav').css({
                'backgroundColor': 'transparent',
                'padding': '25px 0',
                'box-shadow': 'none'
            })
        }
    });

    if ($(window).scrollTop() >= 140) {
        $('nav').css({
            'backgroundColor': '#051024',
            'padding': '10px 0',
            'box-shadow': '8px 0 5px #000'
        })
    } else {
        $('nav').css({
            'backgroundColor': 'transparent',
            'padding': '25px 0',
            'box-shadow': 'none'
        })
    }

    //smooth scroll 
    $('nav li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 80
        }, 1000)
    })

    // add class active to links and remove from siblings
    $('nav li a').click(function () {
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    });

    //coloring links depend on scrolling section
    $(window).scroll(function () {
        $('section').each(function () {

            if ($(window).scrollTop() >= $(this).offset().top - 80) {
                var secID = $(this).attr('id');
                $('nav li a').removeClass('active');
                $('nav li a[data-scroll = "' + secID + '"]').addClass('active')
            }
        })

        //button up 
        if ($(window).scrollTop() >= 1000) {
            $('.up').fadeIn(1000)
        } else {
            $('.up').fadeOut(1000)
        }
    });
    //button up 
    $('.up').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    })

    //nice scroll
    $(function () {
        $("body").niceScroll({
            cursorwidth: '8px',
            cursorcolor: '#ff275e',
            cursorborder: 'none',
            zindex: '99999'
        });
    });

    //swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 6,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});