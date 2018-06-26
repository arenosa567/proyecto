function main() {

(function () {
   'use strict';

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    $(window).bind('scroll', function() {
		var navHeight = $(window).height() - 300;
        if ($(window).scrollTop() > navHeight) {
           /* $('.navbar-default').addClass('on');*/
            $('.navbar-inverse').addClass('on');
        } else {
           /* $('.navbar-default').removeClass('on');*/
            $('.navbar-inverse').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        /*target: '.navbar-default',*/
        target: '.navbar-inverse',
        offset: 80
    })

}());


}
main();