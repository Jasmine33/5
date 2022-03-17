/*
Template Name: Wavefire
Author: <a href="https://www.os-templates.com/">OS Templates</a>
Author URI: https://www.os-templates.com/
Copyright: OS-Templates.com
Licence: Free to use under our free template licence terms
Licence URI: https://www.os-templates.com/template-terms
File: Back to Top JS
*/

jQuery("#backtotop").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }
});


jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#menu").addClass("visible");
    } else {
        jQuery("#menu").removeClass("visible");
    }
});

jQuery("#talk1-click").click(function () {
    jQuery("body,html").animate({
        scrollTop:$('#talk1').offset().top
    }, 600);        
});


