/*
	* List Icon Manipulator 1.1.1
	* Custom bullet points and list icon
	* http://github.com/ttbarnes/List-Icon-Manipulator
	*
	* Author: Tony Barnes
	* http://tonybarnes.me
	* No license or copyright - do what you like
	*
	* Last updated: 15/10/2013
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
					iconHoverOnly: false, //show icon content on hover only (will break with tooltip)
					tooltip:true, //tooltip and iconHoverOnly not possible (it will look silly)
					tooltipContent:'Default tooltip content <a href="#">More info</a>' 
				}
			}, options);
			
			return this.each(function(){
			
				limTTipContent = false; //tooltip content
				
				if(/\S/.test(config.content.iconColor)){ //icon color
					limIconClr = true;
					var iClr = config.content.iconColor;
				} else {
					limIconClr = false;
				}
				
				if(config.content.iconHoverOnly === true){ //hover only
					iHoverOnly = true;
				} else {
					iHoverOnly = false;			
				}
				
				if(/\S/.test(config.content.iconContent)){
			    limIContent = true;
					var iCont = config.content.iconContent;
						
					jQuery(this).addClass('listIconManipulator');
					
					if(iHoverOnly != true){
						iElm = jQuery(this).children('li'); //li children (presuming LI for now)
						var elmIcon = '<span class="icon">'+iCont+'</span>';
						
						jQuery(this).addClass('listIconManipulator').children('li').wrapInner('<span class="content" />').prepend(elmIcon);
					
						if(config.content.tooltip === true){
							limTTipContent = true;
							
							jQuery(this).children('li').bind({
								mouseenter: function(){
									limTTipActiveCont = config.content.tooltipContent;
									var iHover = jQuery(this);
									iHover.addClass('active');					
									iHover.children('span.icon').append('<div class="toolTip">'+limTTipActiveCont+'</div>');
									
									iHover.children('div.toolTip').fadeIn(300).css({
										'z-index':'9'
									});
									
								},
								mouseleave: function(){
									jQuery(this).removeClass('active').children;
									jQuery('div.toolTip').fadeOut(200).remove();
								},
							});
						}
					}
					else if(iHoverOnly === true){
						var iElm = jQuery(this).children('li');
						iElm.wrapInner('<span class="content" />');
						
						var iconTest1 = '<span class="icon" style="visibility:hidden;opacity:0;">'+iCont+'</span>';
						iElm.prepend(iconTest1);
						iElm.bind({
							mouseenter: function(){
								var iHover = jQuery(this);
								iHover.children('span.icon').css({'visibility':'visible','opacity':'100'});
							},
							mouseleave: function(){
								var iHover = jQuery(this);
								iHover.children('span.icon').css({'visibility':'hidden'});
							}
						});
					}
				
				} else {
					limIContent = false;
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