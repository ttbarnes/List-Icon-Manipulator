;(function($){

	var methods = {
		init : function(options) {
		
			var config = $.extend({ //default settings
			
				content: {
					iconContent: '>>',
					tooltip:true,
					tooltipContent:'tiptool test!'
				}
			
			}, options);
			
			
			
			
			return this.each(function(){
			
			//if (config.content.tooltip == true && /\S/.test(config.content.tooltipContent)) { //popup (test if true and if the string is not empty and not just whitespace)
			/*if (config.content.tooltip == true) {	
				initTooltip = true;
			}
			//else if (config.toolTip == false) {}
			if (config.content.tooltip == false) {
			//  initTooltip = false;	
			}
			*/
				
			init1 = false;
			if (/\S/.test(config.content.iconContent)){ //make sure iconContent is not empty
				init1 = true;
			}
				
			if(init1 == true){
					elmIcon = '<span class="icon">' + config.content.iconContent + '</span>';
					jQuery(this).addClass('listIconManipulator').children('li').wrapInner('<span class="content"></span>').prepend(elmIcon);
				}
				else {
					console.log('listIconManipulator error! string is empty or contains purely whitespace. See config.content.iconContent')
				}
				
				/*
				if (config.content.parentSelectors == 'all' && /\S/.test(config.content.parentSelectors) ){ //parent list selectors
					var elmParent = 'ul, ol';
					init1 = true;
				} 
				else {
					var elmParent = config.content.parentSelectors;
					init2 = true;
				}
				*/
				
		
		
				if(config.content.tooltip == true) { //toolTip		
					jQuery(this).children('li').bind({
						mouseenter: function (e) {
							var iHover = jQuery(this);
							iHover.addClass('active');
		
							var toolTip = jQuery('<div class="toolTip"></div>').hide().appendTo((jQuery(this).children('span.icon'))).html(config.content.tooltipContent).text();
							jQuery('div.toolTip').fadeIn(300).css({
								'z-index':'9'
							});
						},
						mouseleave: function(e) {
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