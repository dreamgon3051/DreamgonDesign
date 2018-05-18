$(document).ready(function(){
    $(document).scroll(function (e) {
        if ($(document).scrollTop() > (window.innerHeight - 50)) {
            $(".navbar_top").css("background", "rgba(255,255,255,0.85)");
            $(".navbar_top").css("padding", "10px");
            $("#navBar .navBrand_logo").css("display","block");
            $("#navBar .navBrand_logoType").css("display", "none");
        }
        else {
            $(".navbar_top").css("background", "rgba(255,255,255,0)");
            $(".navbar_top").css("padding", "30px 20px 30px 30px");
            $("#navBar .navBrand_logo").css("display", "none");
            $("#navBar .navBrand_logoType").css("display", "block");
        }
    });
    $(document).scroll(function (evt) {
        if ($(document).scrollTop() > 150) {
            $(".bg_color").css("opacity", "0");
        }
        else {
            $(".bg_color").css("opacity", "1");
        }
    });
    $("#svgNavButton").hover(function(){
        $(".svgNavButton_bar_2").addClass("svgNavButton_hover");
    },function () {
        $(".svgNavButton_bar_2").removeClass("svgNavButton_hover");
    });
    setTimeout(function () {
        $("#svgHeroLogo").hover(function () {
            $(".svgHeroLogo_path").css("transform", "scale(1.1)");
        }, function () {
            $(".svgHeroLogo_path").css("transform", "scale(1)");
        });
    }, 5000);

        // $(".svgNavButton_bar_2").css("transform","translateY(10%)");
});


// var myPath = document.getElementById("svgHeroLogo_p1");
// var length = myPath.getTotalLength();
// console.log(length);


// Slide Show -----------------------------
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var q = slideIndex - 1;
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot_active", "");
    }
    console.log(slides);
    console.log(slideIndex);
    console.log(slideIndex - 1);
    console.log(slides[slideIndex - 1]);
    console.log(slides.constructor.name, slides);    
    slides[slideIndex - 1].style.display = "block";
    console.log(slides.constructor.name, slides);
    dots[slideIndex - 1].className += " dot_active";
}
