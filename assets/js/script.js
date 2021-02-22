$(document).ready(function(){    
    'use strict';
    function init() {
    var vidDefer = document.getElementsByTagName('iframe');
    for (var i=0; i<vidDefer.length; i++) {
    if(vidDefer[i].getAttribute('data-src')) {
    vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
    } } }
    window.onload = init;
    
    // Resize Video Iframe
    let resizeVideo = {
        height: $('.landing-section .landing__images > img').outerHeight(),
        resizeVid: function(sectionHeight){
            $('.landing-section').css({'min-height': sectionHeight});
        }
    };
    let sectionHeight = $('.landing-section .landing__images > img').outerHeight();
    resizeVideo.resizeVid(sectionHeight);
    
    $(window).resize(function(){
        let sectionHeight = $('.landing-section .landing__images > img').outerHeight();
        resizeVideo.resizeVid(sectionHeight);
    });
    
    $('.site-toggler').on('click', function(){
        $('body').toggleClass('nav-open');
        $('.sitenavbar-container').toggleClass('open');
    });
    
    $('.landing-section .landing-content a').on('click', function(e){
        e.preventDefault();
        $('.landing-section .landing-content span').toggleClass('show');
        $('.landing__images').toggleClass('text__shown');
        
        if($(this).text() == 'More'){
            $(this).text('Less');
        }
        else{
            $(this).text('More');
        }
    })
    
    var slideCount = 0;
    
    
    var power_categories = ['Emails', 'Website', 'SEO', 'Social Media', 'Videos', 'App', 'Analytics', 'Content', 'CRM', 'Digital Strategy', 'Marketplace', 'PPC'];
    
    setInterval(function(){
        /*if($('.power_category > span.active').index() == slideCount-1){
            $('.power_category > span').removeClass('active');
            $('.power_category > span:first-child').addClass('active');
        }
        var slide = $('.power_category > span.active').next('span');
        $(slide).addClass('active');
        $(slide).prev('span').removeClass('active');        */
        var counter = power_categories.length;
        
        $('.power_category > span').html(power_categories[slideCount]);
        
        if(slideCount == counter){
            slideCount = 0;
        }
        
        slideCount++;        
    }, 5000);       
    
    let counter = 0.1;
    $('.logo__main .st0:not(.logo__fig)').each(function(index){
        let counter_new = (counter * $(this).index()) /10;
        $(this).css({'animation-delay': counter_new+'s'});
    });   
});
$(window).on('load', function(){
    $('body').addClass('site-loaded');
    // Resize Video Iframe
    let resizeVideo = {
        height: $('.landing-section .landing__images > img').outerHeight(),
        resizeVid: function(sectionHeight){
            $('.landing-section').css({'min-height': sectionHeight});
        }
    };
    let sectionHeight = $('.landing-section .landing__images > img').outerHeight();
    resizeVideo.resizeVid(sectionHeight);
})