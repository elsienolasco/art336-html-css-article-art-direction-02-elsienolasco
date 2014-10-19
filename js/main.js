// initialize animated anchor scroll
// Remove /* and */ to initiate the plugin
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
}); 


// initialize fitvids.js
// Remove /* and */ to initiate the plugin
$(document).ready(function(){
    $(".videowrapper").fitVids(); // target your .container, .wrapper, .post, etc.
}); 


// initialize bigtext.js
// Remove /* and */ to initiate the plugin
$(function() {
    WebFont.load({
        custom: {
            families: ['cubano'], // font-family name
            urls : ['css/main.css'] // url to css
        },
        active: function() {
            $('#banner-headline').bigtext();
            $('#identity-headline').bigtext();
            $('#typography-headline').bigtext();
            $('#webapps-headline').bigtext();
        }
    });
}); 


// initialize Menu Button Expand/Collapse
// Remove /* and */ to initiate the plugin
$(document).ready(function(){
    $(".toggle-button").next("ul").hide();
    $(".toggle-button").click(function(){
        $(".toggle-button").next("ul").slideToggle();
    });
});


// initialize responsiveslides.js
// Remove /* and */ to initiate the plugin
$(function () {
    $(".slider").responsiveSlides({
        auto: false,
        pager: false,
        nav: true,
        speed: 500,
        namespace: "callbacks"
    });
}); 