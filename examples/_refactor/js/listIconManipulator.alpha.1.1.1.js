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
				
				elmIcon = '<span class="icon">' + config.content.iconContent + '</span>';
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
				jQuery(this).addClass('listIconManipulator').children('li').wrapInner('<span class="content"></span>').prepend(elmIcon);
				
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
      $.error('listIconManipulator Error! Something has gone wrong. Please see the original codebase, or contact the author');
    } 
  };
	return this;
})(jQuery);