(function($) {
    Drupal.behaviors.imagenodeactions = {
        attach: function (context, settings) {
            //alert(settings.imagenodeactions.testvar);
            $tags = settings.imagenodeactions.tags;
      
            $( document ).ready(function() {
                console.log($tags);
                
                $htmlButton = '<a href="#" class="btn btn-success copytags">Скопировать теги из фото</a>'
                $('.form-item-field-tags-und').append($htmlButton);
            });
            
            
            $( document ).on('click', '.copytags', function(e) {
                console.log( $( this ).text() );
            });
        }
    };
})(jQuery);