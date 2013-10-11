/*
	* List Icon Manipulator 1.1.1
	* Easily add custom bullet points, list icons and tooltips
	* http://github.com/ttbarnes/List-Icon-Manipulator
	*
	* Author: Tony Barnes
	* http://tonybarnes.me
	* No license or copyright - do what you like
	*
	* Last updated: 11/10/2013
	* Requirments:
	* 1: jQuery
	*
*/

;(function($){

	var methods = {
		init : function(options) {
			var config = $.extend({ //default settings
				content: {
					iconContent: '>>',
					tooltip:true,
					tooltipContent:'Default tooltip content <a href="#">More info</a>'
				}
			}, options);
			
			return this.each(function(){
			
				///////////////////
				//options/config
				///////////////////
				init2 = false; //tooltip
				
				if(/\S/.test(config.content.iconContent)){ //icon content
					init1 = true;
				} else {
					init1 = false;
				}
				
				if(config.content.tooltip === true && /\S/.test(config.content.tooltipContent)){ //tooltip rules
					init2 = true;							
				} else {
					init2 = false;
				}
				
				///////////////////
				//methods
				///////////////////
				if(init1 === true){ //icon content
					elmIcon = '<span class="icon">' + config.content.iconContent + '</span>';
					jQuery(this).addClass('listIconManipulator').children('li').wrapInner('<span class="content" />').prepend(elmIcon);
				}
				
				if(init2 === true) { //tooltip		
					jQuery(this).children('li').bind({
						mouseenter: function(){
							var iHover = jQuery(this);
							iHover.addClass('active');
		
							jQuery('<div class="toolTip"></div>').hide().appendTo((jQuery(this).children('span.icon'))).html(config.content.tooltipContent).text();
							jQuery('div.toolTip').fadeIn(300).css({
								'z-index':'9'
							});
						},
						mouseleave: function(){
							jQuery(this).removeClass('active');
							jQuery(this).children('span.icon').children('div.toolTip').fadeOut(200).remove();
						},
					});
				}
		  });
		}
	};
  $.fn.listIconManipulator = function(method) {
    if (methods[method]) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } 
		else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } 
		else {
      $.error('listIconManipulator error! Something has gone wrong. Please see the original codebase, or contact the author');
    } 
  };
	return this;
})(jQuery);