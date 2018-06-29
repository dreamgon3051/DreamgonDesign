$(document).ready(function () {
    $(document).scroll(function (e) {
        if ($(document).scrollTop() > 250) {
            $(".bg_color").addClass("bg_color_scroll");
            document.getElementById('scrollHexagon').style.display = 'none';
        } else {
            $(".bg_color").removeClass("bg_color_scroll");
            document.getElementById('scrollHexagon').style.display = 'flex';
        }
    });
    $(document).scroll(function (e) {
        if ($(document).scrollTop() > (window.innerHeight - 50)) {
            $(".navbar_top").addClass("navbar_scroll");
            $(".navBrand_logo").css("display", "block");
            $(".navBrand_logoType").css("display", "none");
        } else {
            $(".navbar_top").removeClass("navbar_scroll");
            $(".navBrand_logo").css("display", "none");
            $(".navBrand_logoType").css("display", "block");
        }
    });
    var navButtonCount = false;
    $("#svgNavButton").on("click", function () {
        if (!navButtonCount) {
            $(".svgNavButton_bar_1").attr({ width: "650", x: "250" });
            $(".svgNavButton_bar_2").attr({ width: "650", x: "250" });
            $(".svgNavButton_bar_3").attr({ width: "650", x: "250" });
            navButtonCount = true;
        }
        else {
            $(".svgNavButton_bar_1").attr({ width: "550", x: "350" });
            $(".svgNavButton_bar_2").attr({ width: "350", x: "550" });
            $(".svgNavButton_bar_3").attr({ width: "150", x: "750" });
            navButtonCount = false;
        }
    });
    $("#scrollHexagon").on('click',function () {
        $('html, body').animate({
            scrollTop: $("#aboutSection").offset().top
        }, 1000);
    });
    setTimeout(function () {
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        var heroLogoCount = false;
        if (!isMobile) {
            $("#svgHeroLogo").hover(function () {
                $(".svgHeroLogo_path").css("transform", "scale(1.2)");
                $(".svgHeroLogo_path_L").css("transform", "scale(1.2)");
                $(".svgHeroLogo_outline_c").css("transform", "scale(1.1)");
                $(".svgHeroLogo_outline_h").css("transform", "scale(0.95)");
            }, function () {
                $(".svgHeroLogo_path").css("transform", "scale(1)");
                $(".svgHeroLogo_path_L").css("transform", "scale(1)");
                $(".svgHeroLogo_outline_c").css("transform", "scale(1)");
                $(".svgHeroLogo_outline_h").css("transform", "scale(1)");
            });
        }
        else {
            $("#svgHeroLogo").on("click", function () {
                if (!heroLogoCount) {
                    $(".svgHeroLogo_path").css("transform", "scale(1.2)");
                    $(".svgHeroLogo_path_L").css("transform", "scale(1.2)");
                    $(".svgHeroLogo_outline_c").css("transform", "scale(1.1)");
                    $(".svgHeroLogo_outline_h").css("transform", "scale(0.95)");
                    heroLogoCount = true;
                }
                else {
                    $(".svgHeroLogo_path").css("transform", "scale(1)");
                    $(".svgHeroLogo_path_L").css("transform", "scale(1)");
                    $(".svgHeroLogo_outline_c").css("transform", "scale(1)");
                    $(".svgHeroLogo_outline_h").css("transform", "scale(1)");
                    heroLogoCount = false;
                }
            });
        }
    }, 4000);
    $('#adplay').on('shown.bs.modal', function (e) {
        gtag('event', 'show_adPlay', {
            'event_category': 'show_project'
        });
    });
    $('#qrCool').on('shown.bs.modal', function (e) {
        gtag('event', 'show_qrCool', {
            'event_category': 'show_project'
        });
    });
    $('#applause').on('shown.bs.modal', function (e) {
        gtag('event', 'show_applause', {
            'event_category': 'show_project'
        });
    });
    $('#instagram').on('click', function (e) {
        gtag('event', 'click_instagram', {
            'event_category': 'referral_link'
        });
    });
    $("#linkedin").on("click", function () {
        gtag('event', 'click_linkedin', {
            'event_category': 'referral_link'
        });
    });
    $("#mail").on("click", function () {
        gtag('event', 'click_mail', {
            'event_category': 'referral_link'
        });
    });
    $("#navBarBrand").on("click", function () {
        gtag('event', 'click_navBarBrand', {
            'event_category': 'interaction'
        });
    });
    $("#navBarMenu").on("click", function () {
        gtag('event', 'click_navBarMenu', {
            'event_category': 'interaction'
        });
    });
    $("#about").on("click", function () {
        gtag('event', 'click_about', {
            'event_category': 'interaction'
        });
    });
    $("#project").on("click", function () {
        gtag('event', 'click_project', {
            'event_category': 'interaction'
        });
    });
    $("#contact").on("click", function () {
        gtag('event', 'click_contact', {
            'event_category': 'interaction'
        });
    });
    $("#scrollHexagon").on("click", function () {
        gtag('event', 'click_scrollHexagon', {
            'event_category': 'interaction'
        });
    });
});


// var myPath = document.getElementById("svgHeroLogo_p1");
// var length = myPath.getTotalLength();
// console.log(length);


// // Slide Show -----------------------------
// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function moveSlides(n) {
//     showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var q = slideIndex - 1;
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" dot_active", "");
//     }
//     // console.log(slides);
//     // console.log(slideIndex);
//     // console.log(slideIndex - 1);
//     // console.log(slides[slideIndex - 1]);
//     // console.log(slides.constructor.name, slides);    
//     slides[slideIndex - 1].style.display = "block";
//     // console.log(slides.constructor.name, slides);
//     dots[slideIndex - 1].className += " dot_active";
// }



// Multiple Slide Show -----------------------------
var slideNumbers = 2;
// the amount of slides
var slideStartIndex = 1;
// start iw slides
var slideArray = [1, 1];
// var k;
// for (let k = 0 ; k < slideNumbers ; k++){
//     console.log(k)
//     slideArray[k] = slideStartIndex;
//     showSlides(slideStartIndex, k);
//     console.log(k, slideNumbers)
// }
// **** 2018/05/29 for csi.js inject html issue, will cause the slideArray[] loading incorrectly,
// workaround with set slideArray directly to [1,1] ****

function moveSlides(n, slideId) {
    slideArray[slideId] = slideArray[slideId] + n;
    showSlides(slideArray[slideId], slideId);
}

function currentSlide(n, slideId) {
    slideArray[slideId] = n;
    showSlides(slideArray[slideId], slideId);
}

function showSlides(n, slideId) {
    var i;
    var j;
    var slideName = "slide" + slideId;
    var slides = document.getElementsByName(slideName);
    var dotName = "dot" + slideId;
    var dots = document.getElementsByName(dotName);

    if (n > slides.length) {
        slideArray[slideId] = 1;
    }

    if (n < 1) {
        slideArray[slideId] = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" dot_active", "");
    }

    // console.log("slideName = "+slideName);
    // console.log("slides = " +slides);
    // console.log("slides.length = " +slides.length);
    // let slide = slides.item(slideArray[slideId] - 1)
    // console.log("slide:", slide);  
    slides[slideArray[slideId] - 1].style.display = "block";
    dots[slideArray[slideId] - 1].className += " dot_active";
}


window.onload = function () {
    var t1 = performance.now();
    var loadingTime = parseInt(t1 - t0);
    console.log("loading took " + loadingTime + " milliseconds.");
    gtag('event', 'timing_complete', {
        'name': 'loading_time',
        'value': loadingTime,
        'event_category': 'JS Dependencies'
    });

    // Jim added to handle task done 2018/05/29
    gtag('event', 'load_complete',
        { 'event_category': 'loading' });
    $('#loadingAnimation').addClass('loading_fade_out');
    document.getElementById('wholePage').style.overflow = '';
    document.getElementById('wholePage').style.height = '';
    setTimeout(() => {
        document.getElementById('video').src = './video/adplay_mandora_cut.mp4';
        document.getElementById('loadingAnimation').style.display = 'none';
        document.getElementById('heroLogo').style.display = 'block';
        setTimeout(() => {
            document.getElementById('scrollHexagon').style.display = 'flex';
        }, 4500);
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (!isMobile) {
            var s = skrollr.init();
        }
    }, 800);
}