







/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/


(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

















$(document).ready(function(){
    $(".slideshow").slick({
        arrows: false,
          infinite: true,
  speed: 500,
  fade: true,
  dots:false

    });

    // Put the balanceText utility into "polyfill" mode
    // This was the default mode of the 2.0.0 jQuery plugin when it loaded
    $.ready(function() {
        // balanceText('p'); 
    });

    // manually trigger on a list of elements
    // balanceText($('p')); // equivalent to $('.my-class').balanceText();

    // manually trigger on a list of elements and update on browser resize
    // balanceText($('p')); // equivalent to $.balanceText('.my-class');

    // manually re-balance all triggered elements
    // balanceText.updateWatched(); // equivalent to $.fn.balanceTextUpdate();





// Used on mobile for fixed header area but is buggy and sometimes breaks desktop
//
// Possibly fixed with adding min-height as style attribute rather than height, ALSO changing from outerHeight to height.
//

jQuery(".header").wrap('<div class="header-wrapper"></div>');

$(".header-wrapper").css("min-height", function(){ 
    return jQuery(".header").height();
});


$(window).resize(function(){
  $(".header-wrapper").css("min-height", function(){ 
      return jQuery(".header").height();
  });

});



var $navBar = $('.primary-navigation');

// find original navigation bar position
var navPos = $navBar.offset().top;

// on scroll
$(window).scroll(function() {



    // get scroll position from top of the page
    var scrollPos = $(this).scrollTop();

    // check if scroll position is >= the nav position
    if (scrollPos >= navPos) {
        $navBar.addClass('fixed-scroll');
    } else {
        $navBar.removeClass('fixed-scroll');
    }

});


$('p a').each(function(){
    // var string = $(this).html();
    // string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
        // string = string.replace(/\s([^\s]+)\s*$/,'&nbsp;$1');


    // $(this).html(string);
});
// $('p').widont();

        // balanceText('p'); 



// Removes widows/orphans
$('blockquote p, p').each(function(){
    // var string = $(this).html();
    // string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
      // string  = $(this).html().replace(/ (\w+)$/,' $1');




    // $(this).html(string);
});





$('.menu  a').on( 'click', function(e){
$(".slideshow").not('.slick-initialized').slick();

        e.preventDefault();
        slideIndex = $(this).index();
        // $( '.slideshow' ).slickGoTo( parseInt(slideIndex) );

    $(this).closest('.menu').find('a').removeClass('active');

      $(this).addClass('active');

$(".slideshow").slick('slickGoTo',slideIndex,false);
console.log($(".slideshow").slick('slickGoTo','1',true));


    });

    $(".menu a").on('keydown.slick',function(e){
        e.preventDefault();
      // $(this).toggleClass('active');
    $(this).closest('.menu').find('a').removeClass('active');
      $(this).addClass('active');

$('.slideshow').on('afterChange', function(event, slick, currentSlide){   
  // $('.content').hide();
  // $('.content[data-id=' + (currentSlide + 1) + ']').show();

  $('.menu a').removeClass('active');

  $('.menu a[data-id=' + (currentSlide + 1) + ']').addClass('active');

  // $(".slideshow").slick('slickGoTo', parseInt(currentSlide));

});
  


        slideIndex = $(this).index();

 if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {

            if (event.keyCode === 37 ) {
// console.log('changed');

$(".slideshow").slick('slickPrev', parseInt(slideIndex));


            } else if (event.keyCode === 39 ) {
$(".slideshow").slick('slickNext', parseInt(slideIndex));
            } else if (event.keyCode === 38 ) {


$(".slideshow").slick('slickPrev', parseInt(slideIndex));

            } else if (event.keyCode === 40 ) {

$(".slideshow").slick('slickNext', parseInt(slideIndex));

            }
        }

// $(".slideshow").slick('slickGoTo', parseInt(slideIndex))


    });













    $(".slick-slide").on('keydown.slick',function(e){
        e.preventDefault();
        slideIndex = $(this).index();




 if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {

            if (event.keyCode === 37 ) {

              event.prevent(preventDefault);
            } else if (event.keyCode === 39 ) {
              event.prevent(preventDefault);
            } else if (event.keyCode === 38 ) {
              event.prevent(preventDefault);

            } else if (event.keyCode === 40 ) {

              event.prevent(preventDefault);

            }
        }

    });








});



$(function(){$(".nav_toggle").click(function(a){$(".header").toggleClass("nav--on"),a.preventDefault()}),$(".nav_close").click(function(a){$(".header").removeClass("nav--on"),a.preventDefault()}),$(".text_view_trigger").click(function(a){$(".portfolio_body").addClass("text_view--on"),a.preventDefault()}),$(".image_view_trigger").click(function(a){$(".portfolio_body").removeClass("text_view--on"),a.preventDefault()}),$(".social_modals a").on("click",function(a){a.preventDefault(),popup=window.open($(this).attr("href"),"social","height=400,width=650"),window.focus&&popup.focus()}),$(".portfolio_dribbble").length>0&&$(".portfolio_dribbble").load("/our-work/dribbble_ajax")});