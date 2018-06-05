window.onload = function () {
    var tasks = [];
    var elements = document.getElementsByTagName('*'),
        i;
    for (i in elements) {
        if (elements[i].hasAttribute && elements[i].hasAttribute('data-include')) {
            var p = new Promise(function(resolve, reject) {
                fragment(elements[i], elements[i].getAttribute('data-include'), resolve, reject);
            })
            tasks.push(p)
        }
    }
    
    // Jim added to handle task done 2018/05/29
    Promise.all(tasks).then(function () {
        // console.log('hahahahah');
        setTimeout(() => {
            document.getElementById('loadingAnimation').style.display = 'none';
            document.getElementById('heroLogo').style.display = 'block';
        }, 1000);
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        console.log(isMobile);
        if (!isMobile) {
            var s = skrollr.init();
        }
    })

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
}