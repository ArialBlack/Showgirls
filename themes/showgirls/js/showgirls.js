(function ($) {
    $(function() {



        var resizeTimer;


        
        function setCover (ismodal) {
            var wHeight = $(window).height(),
                navbarHeight = $('#navbar').outerHeight(true);
                
                if (ismodal == true) {
                    navbarHeight = 0;
                    
                   // $('#jquery_ajax_load .fullscreen-cover').css('height', wHeight - navbarHeight  + 'px');
                  //  $('#jquery_ajax_load .fh').css('height', wHeight - 40  + 'px');
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
