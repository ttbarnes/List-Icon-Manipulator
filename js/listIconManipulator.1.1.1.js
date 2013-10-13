/*
	* List Icon Manipulator 1.1.1
	* Custom bullet points and list icon
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
					iconColor: false,
					tooltip:true,
					tooltipContent:'Default tooltip content <a href="#">More info</a>'
				}
			}, options);
			
			return this.each(function(){
			
				///////////////////
				//options/config
				///////////////////
				limTTipContent = false; //tooltip
				
				if(/\S/.test(config.content.iconContent)){ //icon content
					limIContent = true;
				} else {
					limIContent = false;
				}
				
				if(/\S/.test(config.content.iconColor)){ //icon color
					limIconClr = true;
					var iClr = config.content.iconColor;
				} else {
					limIconClr = false;
				}
				
				
				if(config.content.tooltip === true && /\S/.test(config.content.tooltipContent)){ //tooltip rules
					limTTipContent = true;							
				} else {
					limTTipContent = false;
				}
				
				///////////////////
				//methods
				///////////////////
				if(limIContent === true){ //icon content, colour
					var iCont = config.content.iconContent;
					
					if (limIconClr === true){
						var elmIcon = jQuery('<span class="icon">'+iCont+'</span>').css('color',iClr);
					}
					else {
						var elmIcon = '<span class="icon">'+iCont+'</span>';
				  }
					jQuery(this).addClass('listIconManipulator').children('li').wrapInner('<span class="content" />').prepend(elmIcon);
				}
				
				if(limTTipContent === true) { //tooltip		
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