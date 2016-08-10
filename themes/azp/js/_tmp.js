function mypopovers() {
    
     jQuery('.slow-popover').popover({   
        html : true,
        placement: 'auto left',
        container: 'body',
        content: function() {
            return jQuery(this).siblings('.popover_content_wrapper').html(); 
        }
   
    }).on("mouseenter", function () {
        var _this = this;
        jQuery(_this).popover("show");
        
        //var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        //var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
        var d = jQuery(document).scrollTop();

        p = jQuery(".popover").position();
        p_h= jQuery(".popover").height();

        if (p_h > getWindowHeight() )
        {
            //jQuery(".popover").css("height", getWindowHeight() - 20 +"px");  
            console.log("wheight= ", getWindowHeight()); 
            console.log("pheight= ", p_h); 
             
            var p_fields = jQuery(".views-field-title").height() + 
            jQuery(".popover .views-field-field-date").height() +
            jQuery(".popover .views-field-field-body").height();  
            console.log("fields_H= ", p_fields);  
           
            
            old_img_w = jQuery(".popover .views-field-field-image").width();
            old_img_h = jQuery(".popover .views-field-field-image").height();
             
            
            img_h= getWindowHeight() -80 - p_fields;   
              
            img_w=(img_h*old_img_w/old_img_h);    
            console.log(img_h);   
            
            jQuery(".popover .views-field-field-image img").css("width", img_w+"px");
            jQuery(".popover .views-field-field-image img").css("height", img_h+"px");
            jQuery(".popover").css("width", img_w+20+"px");
           // p = jQuery(".popover").position(); 
            
        }
        
       // if(p.top < d) 
        // выше
        //{
            //p = jQuery(".popover").position();  
            console.log(_this); 
            jQuery(".popover").css("top",d+10+"px");
           
            event_width_delta = jQuery(_this).width();
            event_position = jQuery(_this).offset();
              console.log(event_position.left);  
            //jQuery(".popover.right").css("left",p.left-width_delta+10+"px");
            jQuery(".popover").css("left",event_position.left -10+"px");  
           // console.log("too hight"); 
           
            
       // }
        
        //if( d + getWindowHeight() < p.top + p_h)
       // {
         //  console.log("too low");  
        //    jQuery(".popover").css("top",d+getWindowHeight() - p_h -10 +"px");  
        //}
        
        
        jQuery(".popover").on("mouseleave", function () { 
           jQuery(_this).popover('hide');
            console.log("2"); 
       }); 
    }).on("mouseleave", function () {
        var _this = this;
       // console.log(_this);  
        setTimeout(function () {
           if (!jQuery(".popover:hover").length) {  
                jQuery(_this).popover("hide");
           }   
        }, 100);  
             
        
    });
      
      //jQuery(".popover-content").mouseenter(function() { 
     //     console.log("1");
    //  });
   
}