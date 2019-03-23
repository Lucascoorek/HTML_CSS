/*eslint-env jquery*/

$(".js--section-features").waypoint(function(direction){
    if(direction == "down"){
        $("nav").addClass("sticky");
    }else{
        $("nav").removeClass("sticky");
    }
},{offset: "60px;"})


$(".js--scroll-to-plans , [href|='#section-plans']").click(function(){
    $("html, body").animate({scrollTop:$(".js--section-plans").offset().top},1000);
})
$(".js--scroll-to-start, [href|='#features']").click(function(){
    $("html, body").animate({scrollTop:$(".js--section-features").offset().top},1000);
})

$("[href|='#section-steps']").click(function(){
    $("html, body").animate({scrollTop:$(".js--section-steps").offset().top},1000);
})

$("[href|='#section-cities']").click(function(){
    $("html, body").animate({scrollTop:$(".js--section-cities").offset().top},1000);
})

$(".js--wp-1").waypoint(function(direction){
    $(".js--wp-1").addClass("animated fadeIn");
    },{
    offset: "50%"
})

$(".js--wp-2").waypoint(function(direction){
    $(".js--wp-2").addClass("animated fadeInUp");
    },{
    offset: "50%"
})

$(".js--wp-3").waypoint(function(direction){
    $(".js--wp-3").addClass("animated fadeIn");
    },{
    offset: "50%"
})

$(".js--wp-4").waypoint(function(direction){
    $(".js--wp-4").addClass("animated pulse");
    },{
    offset: "50%"
})


$(".js--nav-icon").click(function(){
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");

    nav.slideToggle(200);

    if(icon.hasClass("ion-md-menu")){
        icon.addClass("ion-md-close");
        icon.removeClass("ion-md-menu");
       }else{
        icon.addClass("ion-md-menu");
        icon.removeClass("ion-md-close");
       }
})

//new GMaps({
//  div: '.map',
//  lat: -12.043333,
//  lng: -77.028333
//});