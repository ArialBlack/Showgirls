(function ($) {

/**
* @file
* Javascript support files.
*
*/

Drupal.behaviors.twitter_bootstrap_modal = {
  attach: function (context, settings) {
    // Actions to make link Twitter Bootstrap Modal
    var TBtrigger = Drupal.settings.jquery_ajax_load.TBtrigger;
    // Puede ser más de un valor, hay que usar foreach()
    $(TBtrigger).once(function() {
      var html_string = $(this).attr( 'href' );
      // Hay que validar si la ruta trae la URL del sitio
      $(this).attr( 'href' , '/jquery_ajax_load/get' + html_string );
      $(this).attr( 'data-target' , '#jquery_ajax_load');
      $(this).attr( 'data-toggle' , 'modal' );
    });
    var TBmodaltrigger = Drupal.settings.jquery_ajax_load.TBmodaltrigger;
    $(TBmodaltrigger).once(function() {
      $(this).click(openDialog);
    });
  }
}

var openDialog = function() {
  var TBpath = Drupal.settings.jquery_ajax_load.TBpath;
  var html_string = TBpath + 'bs_modal' + $(this).attr( 'href' );
  $('#jquery_ajax_load').remove();
  twitter_bootstrap_modal_create_modal();
  $('#jquery_ajax_load').modal({
    remote: html_string
  });
  
  return false;
}

function twitter_bootstrap_modal_create_modal() {
  var modal_name = Drupal.settings.jquery_ajax_load.TBname;
  var modal_module = Drupal.settings.jquery_ajax_load.TBmodule;
  $('body').append('<div id="jquery_ajax_load" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mymodallabel" aria-hidden="true" />');
  //$('#jquery_ajax_load').append('<div class="modal-dialog container" />');  
  //$('#jquery_ajax_load .modal-dialog').append('<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i></button><h4 class="modal_title">' + modal_name + '</h4></div>');
  //$('#jquery_ajax_load .modal-dialog').append('<div class="modal-content" />');

 $('#jquery_ajax_load .modal-content').append('<center><div class="text-center loading-div"><span class="text-warning">' + Drupal.t('Loading') + '... </span><img src="/sites/all/themes/showgirls/images/loading.gif"></div></center>');   
  //$('#jquery_ajax_load .modal-content').append('<div class="modal-footer"><button class="btn" data-dismiss="modal" aria-hidden="true">' + Drupal.t('Close') + '</button></div>');
  
}

}(jQuery));

