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



$(function(){$(".nav_toggle").click(function(a){$("header.global").toggleClass("nav--on"),a.preventDefault()}),$(".nav_close").click(function(a){$("header.global").removeClass("nav--on"),a.preventDefault()}),$(".text_view_trigger").click(function(a){$(".portfolio_body").addClass("text_view--on"),a.preventDefault()}),$(".image_view_trigger").click(function(a){$(".portfolio_body").removeClass("text_view--on"),a.preventDefault()}),$(".social_modals a").on("click",function(a){a.preventDefault(),popup=window.open($(this).attr("href"),"social","height=400,width=650"),window.focus&&popup.focus()}),$(".portfolio_dribbble").length>0&&$(".portfolio_dribbble").load("/our-work/dribbble_ajax")});