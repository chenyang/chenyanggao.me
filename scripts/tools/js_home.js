// JavaScript Document
// JavaScript Document

jQuery.noConflict();
jQuery(document).ready(function(){
										
		jQuery(".keywords_block").each(function(){
												
			jQuery(".keywords_block").fadeTo(300, 0.15);
			
			jQuery(this).hover(
				function(){
					jQuery(this).fadeTo(300, 1.0);
				}, 
		
				function(){
					jQuery(this).fadeTo(300, 0.15);
				});		
			
		});
});
      							