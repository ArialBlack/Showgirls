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

jQuery.expr.filters.offscreen = function(el) {
  return (
              (el.offsetLeft + el.offsetWidth) < 0 
              || (el.offsetTop + el.offsetHeight) < 0
              || (el.offsetLeft > window.innerWidth || el.offsetTop > window.innerHeight)
         );
};

function touchCarousel() {
        var swipeTreshold = 75,
            $carousel = jQuery('.carousel');

        $carousel.swipe( {
            swipeLeft: function(event, direction, distance, duration, fingerCount) {

                $carousel.carousel('next'); 
            },
            swipeRight: function() {
                $carousel.carousel('prev'); 
            },
            threshold: swipeTreshold
        });
}

function changeSomePath() {
    
    $link = jQuery('.what-we-do .view-we-have a[href$="coworking"]');
    if ($link.length > 0 ) {
        $link.attr("href", "http://coworkingplatforma.com/").attr('target','_blank');
    }
    
    jQuery('.tabs--primary.nav.nav-tabs li a[href$="ulogin"]').parents("li").addClass("ulogin-item-menu");
    
    
    imgsrc2 = jQuery("#block-views-news-block-2 .views-row-2 img").attr("src");

    imgsrc3 = jQuery("#block-views-news-block-2 .views-row-3 img").attr("src");
    
    jQuery("#block-views-news-block-2 .views-row-2 .views-field-img").css({'background-image': 'url(' + imgsrc2 + ')',
}); 
    jQuery("#block-views-news-block-2 .views-row-3 .views-field-img").css({'background-image': 'url(' + imgsrc3 + ')',
});  


}

 

function wrapTablesResponsive() {
    jQuery('table').each(function() {
        $this = jQuery(this);
        if( $this.parent("div").not(".table-responsive")) {
            $this.addClass("table").wrap( "<div class='table-responsive'></div>" ); 
        }
    });
}
    

function newsHideImgIfYoutube() {
    jQuery(".views-field-nothing a").each(function (index) {
        $this = jQuery(this);
        $y = $this.find(".views-field-field-youtube img").length;
        $v = $this.find(".views-field-field-vimeo img").length;
        // console.log($y, $v);  
        
        if($y !=0 || $v !=0) {
         //   $this.find(".views-field-field-image").css("display", "none");
        }
    });
}


function showWebformComponents() {
    jQuery(".node-type-webform.join .webform-client-form a.btn").on('click', function(e) {
        jQuery(this).parents(".webform-client-form").addClass("showall");   
        jQuery(this).addClass("hide");
    });
    
    jQuery(".node-type-webform .webform-client-form .webform-submit").wrap( "<div class='webform-submit-container'></div>" );
    
    btn = jQuery(".node-type-webform.join .webform-client-form a.btn.showform").length;
    if (btn < 1) {
        jQuery(".node-type-webform.join .webform-client-form .webform-submit").addClass("show");
    }
}

function calendarCategoriesDots() {
    jQuery("#block-views-calendar-block-3 .views-field-field-event-term a").each(function (index) {
        var $this = jQuery(this),
            str = $this.attr('href'),
            last = str.substring(str.lastIndexOf("/") + 1, str.length);  
            $new_html = '<span class="event-dot ' + last + '"></span>';  
            $this.replaceWith($new_html);       
    });
    
      jQuery("#block-views-calendar-block-4 .item-list h3 a").each(function (index) {
        var $this = jQuery(this),
            str = $this.attr('href'),
            last = str.substring(str.lastIndexOf("/") + 1, str.length); 
            $this.parents("h3").addClass(last).addClass("our-event");                
    });
    
}

function imageDots() {
            
            jQuery('.mapDot').each(function() {
                
                var oiw=1920;
                var oih=960;
                
                ich= jQuery("#azpLocation .imgContainer").height();
                icw= jQuery("#azpLocation .imgContainer").width();
                
                _x= (jQuery(this).data('x'))*100/oiw;
                _y= (jQuery(this).data('y'))*100/oih;
                
                jQuery(this).css({
                    'left': _x + "%",
                    'top': _y + "%",
                });
            });
}

 
function sizeMeUp() {  
    jQuery(".navbar-collapse").css("height", getWindowHeight());
    
    bigNewsHeight = jQuery("#block-views-news-block-2 .views-row-1 .views-field-nothing").height();

    newHeight = (bigNewsHeight / 2 ) - 20; 
    jQuery("#block-views-news-block-2 .views-row-2 .views-field-img, #block-views-news-block-2 .views-row-3 .views-field-img").css("height", newHeight+"px");
}

   var min_w = 300; // minimum video width allowed
    var vid_w_orig;  // original video dimensions
    var vid_h_orig;
    
function bg() { 
     //jQuery(".no-touch body.front ").tubular({videoId: 'C8hyDLjTGy8'});
    
    jQuery(".no-touch body.front #video-background" ).append('<video autoplay preload loop width="1920" height="1080" poster="/sites/all/themes/azp/images/front.jpg"><source src="/sites/all/themes/azp/video/video.mp4"type="video/mp4" /><source src="/sites/all/themes/azp/video/video.webm"type="video/webm" /><source src="/sites/all/themes/azp/video/video.ogv"type="video/webm" /></video>');
    
 
    
    vid_w_orig = parseInt(jQuery('video').attr('width'));
    vid_h_orig = parseInt(jQuery(' video').attr('height'));
      
        
    jQuery(window).resize(function () { resizeToCover(); });
    jQuery(window).trigger('resize');

}

function resizeToCover() {
    
    // set the video viewport to the window size
    jQuery('#video-background').width(jQuery(window).width());
    jQuery('#video-background').height(jQuery(window).height());

    // use largest scale factor of horizontal/vertical
    var scale_h = jQuery(window).width() / vid_w_orig;
    var scale_v = jQuery(window).height() / vid_h_orig;
    var scale = scale_h > scale_v ? scale_h : scale_v;

    // don't allow scaled width < minimum video width
    if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;};

    // now scale the video
    jQuery('video').width(scale * vid_w_orig);
    jQuery('video').height(scale * vid_h_orig);
    // and center it by scrolling the video viewport
    jQuery('#video-background').scrollLeft((jQuery('video').width() - jQuery(window).width()) / 2);
  //  jQuery('#video-viewport').scrollTop((jQuery('video').height() - jQuery(window).height()) / 2);
    
};

/*function partners_colors () {
    var h3_counter=0;
    jQuery( ".view-partners .view-content > *" ).each(function( index ) {
        if (jQuery( this ).is("h3")) {h3_counter++;}
        jQuery( this ).addClass("rowNum-"+h3_counter);
    });
}*/

function eqBlockHeight (container, block_el, mode) {
            var $list = jQuery(container);
            var $items = jQuery(block_el);
            
            if (mode == 0) {
                $items.css( 'height', 'auto' );
            } else {
                $items.css( 'height', 'auto' );
                var perRow = Math.floor( $list.width() / $items.width() );
                if( perRow == null || perRow < 2 ) return true;
     
                for( var i = 0, j = $items.length; i < j; i += perRow )
                {
                    var maxHeight = 0,
                        $row = $items.slice( i, i + perRow );
     
                    $row.each( function()
                    {
                        var itemHeight = parseInt( jQuery( this ).outerHeight() );  
                        if ( itemHeight > maxHeight ) maxHeight = itemHeight;
                    });
                    $row.css( 'height', maxHeight );
                }
            }
}

function get_pagePosition($element) {
    var $page = jQuery($element);
    var window_offset = $page.offset().top - jQuery(window).scrollTop();    
    return window_offset;
}

function detectOnWhite() {
  if (get_pagePosition(".region.region-content") < 60) {  
      jQuery("body").addClass("on-white");
  }
  else jQuery("body").removeClass("on-white");
}

function hover_join_init() {
        jQuery(".page-join .node").each(function (index) {                           
            jQuery( "<div class='overlay_g'></div>" ).insertAfter(jQuery( this ).children(".content"));
            jQuery( this ).addClass("node_"+index);
        });
}
function hover_join() {
    jQuery(".page-join .node").each(function (index) {                           
        var tmp_w=jQuery( this ).parent(".col").width() + "px";       
        var tmp_h=jQuery( this ).children(".content").height();
        jQuery( this ).css("width",tmp_w);
        jQuery( this ).children(".overlay_g").css({
            "width": tmp_w,
            "height": tmp_h
        });     
    });
}

jQuery(document).ready(function($) {

    changeSomePath();  
    detectOnWhite();
    showWebformComponents();
    calendarCategoriesDots();
    //newsHideImgIfYoutube();
    touchCarousel();
    
    
    
    
    var onMapMouseleaveHandler = function (event) {
    var that = jQuery(this);

    that.on('click', onMapClickHandler);
    that.off('mouseleave', onMapMouseleaveHandler);
    that.find('iframe').css("pointer-events", "none");
  }

  var onMapClickHandler = function (event) {
    var that = jQuery(this);

    // Disable the click handler until the user leaves the map area
    that.off('click', onMapClickHandler);

    // Enable scrolling zoom
    that.find('iframe').css("pointer-events", "auto");

    // Handle the mouse leave event
    that.on('mouseleave', onMapMouseleaveHandler);
  }

  // Enable map zooming with mouse scroll when the user clicks the map
  jQuery('.maps.embed-container').on('click', onMapClickHandler);
  
     
  
  
    
    $('body').on('click', function (e) {
        $this = jQuery(".navbar-toggle");
        if (jQuery("body").hasClass("menu-opened")) {
            if (!$this.is(e.target) && $this.has(e.target).length === 0 && $('.navbar-nav').has(e.target).length === 0) {
                jQuery(".navbar-toggle").click();   
            }
        }
    });
    
       
    jQuery('.navbar-toggle').on('click', function(e) {
        jQuery('body').toggleClass("menu-opened"); //you can list several class names  
        e.preventDefault();
        
        $menu = jQuery("ul.navbar-nav");
        $headerH=jQuery(".navbar-header").height();
        if ($menu.height() > getWindowHeight() - $headerH) {  
            $menu.toggleClass("overflow");  
        }  
    });  
    
    jQuery(".view-events").on('views_load_more.new_content', function(event, content) {
        console.log("e");
        //hover_cards();  
        jQuery(".view .col:even").addClass("even");
        jQuery(".view .col:odd").addClass("odd");
    });
    
    jQuery(".view-news").on('views_load_more.new_content', function(event, content) {
        console.log("n"); 
       // hover_text();
        newsHideImgIfYoutube(); 
        jQuery(".view .col:even").addClass("even"); 
        jQuery(".view .col:odd").addClass("odd"); 
    }); 
    
  
   
   jQuery(".join.rent .webform-client-form").appendTo(".join.rent .side-blocks .sblock-2 div");
   
   jQuery(".front .region-content").addClass("animated");
   var hoverTimeout;
   jQuery(".front .logo").hover(
        function() {
            clearTimeout(hoverTimeout);
            jQuery(".front .region-content").removeClass("zoomOut").addClass("zoomIn").css("opacity",1);   
        }, function() {
            hoverTimeout = setTimeout(function() {
                jQuery(".front .region-content").removeClass("zoomIn").addClass("zoomOut").css("opacity",0);
            }, 3000);
        }
    );
    
    
    
     
    
    
    sizeMeUp();
    bg();
    //partners_colors();  
    wrapTablesResponsive();   
    //eqBlockHeight(".view-partners .view-content", ".views-row", 1); 
    jQuery(".view .col:even").addClass("even");
    jQuery(".view .col:odd").addClass("odd");
    //hover_cards();
    //hover_text();
    hover_join_init(); 
    hover_join();
    imageDots();
    
    //delay_hover();
    //resizemapImage();
    //mypopovers();  
           
    //jQuery(".view-team .views-row .wtitle").fitText(1, { minFontSize: '10px', maxFontSize: '32px' });
    

}); /*---------doc ready */


jQuery(window).resize(function () {
    detectOnWhite();
    
    
    
    sizeMeUp(); 
    //hover_cards(); 
   // hover_text();
    hover_join();
    imageDots(); 
   // resizemapImage();  
});  

jQuery(window).scroll(function() { 
    detectOnWhite();
});

jQuery(window).load(function() {
     sizeMeUp();
});






 