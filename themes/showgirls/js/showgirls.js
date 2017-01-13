(function ($) {
    $(function() {

        // Create the XHR object.
        function createCORSRequest(method, url) {
            var xhr = new XMLHttpRequest();
            if ("withCredentials" in xhr) {
                // XHR for Chrome/Firefox/Opera/Safari.
                xhr.open(method, url, true);
            } else if (typeof XDomainRequest != "undefined") {
                // XDomainRequest for IE.
                xhr = new XDomainRequest();
                xhr.open(method, url);
            } else {
                // CORS not supported.
                xhr = null;
            }
            return xhr;
        }

// Helper method to parse the title tag from the response.
        function getTitle(text) {
            return text.match('<title>(.*)?</title>')[1];
        }

// Make the actual CORS request.
        function makeCorsRequest() {
            // This is a sample server that supports CORS.
            var url = 'https://vk.com/wall-35862441_548889';

            var xhr = createCORSRequest('GET', url);
            if (!xhr) {
                alert('CORS not supported');
                return;
            }

            // Response handlers.
            xhr.onload = function() {
                var text = xhr.responseText;
                var title = getTitle(text);


                console.log('Response from CORS request to ' + url + ': ' + title);
                console.log(text);
            };

            xhr.onerror = function() {
                alert('Woops, there was an error making the request.');
            };

            xhr.send();
        }



        var resizeTimer;
        
        function setCover (ismodal) {
            var wHeight = $(window).height(),
                navbarHeight = $('#navbar').outerHeight(true);
                
                if (ismodal == true) {
                    navbarHeight = 0;
                    
                    $('#jquery_ajax_load .fullscreen-cover').css('height', wHeight - navbarHeight  + 'px');
                    $('#jquery_ajax_load .fh').css('height', wHeight - 40  + 'px');  
                }
            
            $('.fullscreen-cover').css('height', wHeight - navbarHeight  + 'px');
            //$('.fh').css('height', wHeight - 40  + 'px');
            //$('.fh.square').css('height', ($('#block-system-main').width())/3  + 'px');
        }

        $('figure.static-gif').on('click', function() {
            $this = $(this),
                $img = $this.find('img'),
                $src = $img.attr('src'),
                $data = $img.data('alt');

            $img.attr('src', $data);
            $img.data('alt', $src);
            $this.toggleClass('play');
        });
        
        $( document ).ready(function() {
            setCover ();
            makeCorsRequest();

        /*    $('.field-name-field-media .field-items').masonry({
                itemSelector: '.field-item.static-image',
                columnWidth: '.field-item',
                percentPosition: true,
                gutter: 10
            });*/
        });

        /*$(window).load(function() {
            $('.field-name-field-media .field-items').BalancedGallery({
            });
        });*/

        $(window).on('resize', function(e) {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                setCover ();
            }, 250);
        });
        
        $(document).on('loadnode', function(evt) {
            setCover (true);
        });
        
        $( document).ajaxComplete(function(event, request, settings) {
        if (settings.url.indexOf('/bs_modal') >= 0){
             $(document).trigger('loadnode');
        }
    });

         
    });
}(jQuery));
