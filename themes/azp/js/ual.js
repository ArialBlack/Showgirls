/* ==============================================
Bootstrap fix for WinPhone 8 and IE10 
=============================================== */

if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  	var msViewportStyle = document.createElement("style")
  	msViewportStyle.appendChild(
    	document.createTextNode(
      		"@-ms-viewport{width:auto!important}"
    	)
  	)
  	document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
}

function detectIE() {
	if (jQuery.browser.msie && $.browser.version == 9) {
		return true;
	}
	if (jQuery.browser.msie && $.browser.version == 8) {
		return true;
	}
	return false;
}

function getWindowWidth() {
    return Math.max( jQuery(window).width(), window.innerWidth);
}

function getWindowHeight() {
    return Math.max( jQuery(window).height(), window.innerHeight);
}

 
function sizeMeUp() {
     var cw = jQuery('.view-team .views-row').width();

    jQuery('.view-team .views-row .wshad').css({
	    'height':cw+'px', 
	    'margin-top':cw*(-1)+'px' 
	});
           
    jQuery('.view-team .views-row .title_container').css({
		'margin-top':cw*(-1)+'px' ,
	    'width':cw-20
	});
}

function steps() {
    var i = 1;
    jQuery('.ual-progress .circle').removeClass().addClass('circle');
    jQuery('.ual-progress .bar').removeClass().addClass('bar');
    
    setInterval(function() {
        jQuery('.ual-progress .circle:nth-of-type(' + i + ')').addClass('active');
        
        jQuery('.ual-progress .circle:nth-of-type(' + (i - 1) + ')').removeClass('active').addClass('done');
        
        jQuery('.ual-progress .circle:nth-of-type(' + (i - 1) + ') .label').html("<span class='digit'>&#10003;</span>");
        
        jQuery('.ual-progress .bar:nth-of-type(' + (i - 1) + ')').addClass('active');
        
        jQuery('.ual-progress .bar:nth-of-type(' + (i - 2) + ')').removeClass('active').addClass('done');
        
        i++;
    
        if (i == 0) {
            jQuery('.ual-progress .bar').removeClass().addClass('bar');
            jQuery('.ual-progress div.circle').removeClass().addClass('circle');
            i = 1;
        }
    }, 1000);
}


jQuery(document).ready(function($) {
    
    var executedWaypoints = false;
    jQuery('#waypoint').waypoint(function() { 
       if (!executedWaypoints) {
           steps();
           executedWaypoints = true;
       }
    }, { offset: 'bottom-in-view' });
    

    var $container = jQuery('.view-photos');
    $container.packery({
      itemSelector: '.views-row',
      gutter: 0,
    }); 
    
    sizeMeUp();
           
    jQuery(".view-team .views-row .wtitle").fitText(1, { minFontSize: '10px', maxFontSize: '32px' });

}); /*---------doc ready */


jQuery(window).resize(function () {
    sizeMeUp()
});

/*jQuery(window).load(function() {
     var desc_h = Math.max.apply(null, jQuery("#block-views-works-block-1 .views-field-nothing").map(function ()
		{
   			 return jQuery(this).height();
		}).get());
	alert(desc_h);
});
*/

 