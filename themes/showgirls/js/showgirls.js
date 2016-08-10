(function ($) {
    $(function() {
        
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
            $('.fh').css('height', wHeight - 40  + 'px');  
        }
        
        $( document ).ready(function() {
            setCover ();
        });
        
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