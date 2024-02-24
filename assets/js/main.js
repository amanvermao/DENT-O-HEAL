jQuery(function ($) {
    'use strict';
    $(window).on('scroll', function () {
       if ($(this).scrollTop() > 120) {
          $('.navbar-area').addClass("is-sticky");
       } else {
          $('.navbar-area').removeClass("is-sticky");
       }
    });
    jQuery('.mean-menu').meanmenu({
       meanScreenWidth: "991"
    });
    $(".others-option-for-responsive .dot-menu").on("click", function () {
       $(".others-option-for-responsive .container .container").toggleClass("active");
    });
    $('.home-slides').owlCarousel({
       loop: true,
       nav: true,
       dots: false,
       autoplayHoverPause: false,
       autoplay: false,
       items: 1,
       navText: ["<i class='flaticon-left-arrow-1'></i>", "<i class='flaticon-next'></i>"]
    });
   
    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
    $('.tab ul.tabs li a').on('click', function (g) {
       var tab = $(this).closest('.tab'),
          index = $(this).closest('li').index();
       tab.find('ul.tabs > li').removeClass('current');
       $(this).closest('li').addClass('current');
       tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
       tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
       g.preventDefault();
    });
    $('.accordion').find('.accordion-title').on('click', function () {
       $(this).toggleClass('active');
       $(this).next().slideToggle('fast');
       $('.accordion-content').not($(this).next()).slideUp('fast');
       $('.accordion-title').not($(this)).removeClass('active');
    });


    $('select').niceSelect();
    $('.popup-youtube').magnificPopup({
       disableOn: 320,
       type: 'iframe',
       mainClass: 'mfp-fade',
       removalDelay: 160,
       preloader: false,
       fixedContentPos: false
    });
    $('.odometer').appear(function (e) {
       var odo = $(".odometer");
       odo.each(function () {
          var countNumber = $(this).attr("data-count");
          $(this).html(countNumber);
       });
    });
    $(window).on('scroll', function () {
       var scrolled = $(window).scrollTop();
       if (scrolled > 600) $('.go-top').addClass('active');
       if (scrolled < 600) $('.go-top').removeClass('active');
    });
    $(window).on('load', function () {
       if ($(".wow").length) {
          var wow = new WOW({
             boxClass: 'wow',
             animateClass: 'animated',
             offset: 20,
             mobile: true,
             live: true,
          });
          wow.init();
       }
    });
    $(window).on('load', function () {
       $('.preloader').fadeOut();
    });
    $('.dental-tourism-services-slides').owlCarousel({
       loop: true,
       nav: false,
       dots: false,
       autoplayHoverPause: true,
       autoplay: false,
       margin: 30,
       responsive: {
          0: {
             items: 1,
          },
          768: {
             items: 2,
          },
          1200: {
             items: 4,
          }
       }
    });
    $('.dental-tourism-dentist-slides').owlCarousel({
       loop: true,
       nav: false,
       dots: true,
       autoplayHoverPause: true,
       autoplay: false,
       margin: 30,
       responsive: {
          0: {
             items: 1,
          },
          768: {
             items: 2,
          },
          1200: {
             items: 3,
          }
       }
    });
    $('.dental-tourism-review-slides').owlCarousel({
       loop: true,
       nav: false,
       dots: true,
       autoplayHoverPause: true,
       autoplay: false,
       margin: 30,
       responsive: {
          0: {
             items: 1,
          },
          768: {
             items: 2,
          },
          1200: {
             items: 2,
          }
       }
    });
  
  

    if ($('.progress-line').length) {
       $('.progress-line').appear(function () {
          var el = $(this);
          var percent = el.data('width');
          $(el).css('width', percent + '%');
       }, {
          accY: 0
       });
    }
    if ($('.count-box').length) {
       $('.count-box').appear(function () {
          var $t = $(this),
             n = $t.find(".count-text").attr("data-stop"),
             r = parseInt($t.find(".count-text").attr("data-speed"), 10);
          if (!$t.hasClass("counted")) {
             $t.addClass("counted");
             $({
                countNum: $t.find(".count-text").text()
             }).animate({
                countNum: n
             }, {
                duration: r,
                easing: "linear",
                step: function () {
                   $t.find(".count-text").text(Math.floor(this.countNum));
                },
                complete: function () {
                   $t.find(".count-text").text(this.countNum);
                }
             });
          }
       }, {
          accY: 0
       });
    }
   
   
 }(jQuery));
 