var tasks = [];
document.addEventListener('DOMContentLoaded', function (event) {
    var elements = document.getElementsByTagName('*');
    var i;

    for (i in elements) {
        if (elements[i].hasAttribute && elements[i].hasAttribute('data-include')) {
            var p = new Promise(function (resolve, reject) {
                fragment(elements[i], elements[i].getAttribute('data-include'), resolve, reject);
            })
            tasks.push(p);
        }
    }
    document.getElementById('wholePage').style.overflow = 'hidden';
    document.getElementById('wholePage').style.height = '100vh';   

    function fragment(el, url, resolve, reject) {
        var localTest = /^(?:file):/,
            xmlhttp = new XMLHttpRequest(),
            status = 0;

        xmlhttp.onreadystatechange = function () {
			/* if we are on a local protocol, and we have response text, we'll assume
 *  				things were sucessful */
            if (xmlhttp.readyState == 4) {
                status = xmlhttp.status;
            }
            if (localTest.test(location.href) && xmlhttp.responseText) {
                status = 200;
            }
            if (xmlhttp.readyState == 4 && status == 200) {
                el.outerHTML = xmlhttp.responseText;
            }
        }

        try {
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
            resolve();
        } catch (err) {
            /* todo catch error */
            reject(err);
        }
    }
});

window.onload = function () {
    // Jim added to handle task done 2018/05/29
    Promise.all(tasks).then(function () {
        gtag('event', 'load_complete');
        $('#loadingAnimation').addClass('loading_fade_out');
        document.getElementById('wholePage').style.overflow = '';
        document.getElementById('wholePage').style.height = '';
        setTimeout(() => {
            document.getElementById('video').src = './video/adplay_mandora_cut.mp4';
            document.getElementById('loadingAnimation').style.display = 'none';
            document.getElementById('heroLogo').style.display = 'block';
            var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            if (!isMobile) {
                var s = skrollr.init();
            }
        }, 800);
    });
}
