$(document).ready(function(){
    $(".story").fadeOut()
    $("#studio").fadeOut()

    $(".banner").addClass("fade-in") 

    $(window).scroll(function(){
        console.log($(document).scrollTop());
            if ($(document).scrollTop() > 115) {
             $(".story").fadeIn(3000)    
        } 
    } )

    $(window).scroll(function(){
        console.log($(document).scrollTop());
            if ($(document).scrollTop() > 1600) {
             $(".story #place .big_cloud").animate({right:'150px'},4000)
        } 
    } )

    $(window).scroll(function(){
        console.log($(document).scrollTop());
            if ($(document).scrollTop() > 1600) {
             $(".story #place .little_cloud").animate({right:'500px'},4000)
        } 
    } )

    $(window).scroll(function(){
        console.log($(document).scrollTop());
            if ($(document).scrollTop() > 2050) {
                $("#studio").fadeIn(3000)   
        } 
    });

    /*$(window).scroll(function(){
        console.log($(document).scrollTop());
            if ($(document).scrollTop() > 700) {
             $(".story h2").animate({bottom:'150px'},2000)
        } 
    });*/
      
});

const oscar = $("article .oscar");
    const footerSpace = $(".site-footer ul");

    if (oscar.css("display") === "flex") {
    footerSpace.css("padding-top", "24em");
}

/*const oscar = document.getElementById(".oscar");
const footerSpace = document.getElementById(".site-footer ul");

if (window.getComputedStyle(oscar).display === "flex") {
footerSpace.style.paddingTop = "24em";
}*/


