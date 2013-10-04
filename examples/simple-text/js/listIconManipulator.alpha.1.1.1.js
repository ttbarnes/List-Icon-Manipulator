var config = {
	parentSelectors:'all', //choose 'all' for all UL/OL instances, or select specific parent UL/OL/DIV elements
	iconContent:'>>', //the icon content. for anything other than text/symbols, see other plugin versions
}

var listIconManipulator = {
	init: function(){	
		
		elmIcon = '<span class="icon">' + config.iconContent + '</span>';
		
		if (config.parentSelectors == 'all' && /\S/.test(config.parentSelectors) ){ //parent list selectors
			var elmParent = 'ul, ol';
			init1 = true;
		} 
		else {
			var elmParent = config.parentSelectors;
			init2 = true;
		}
		
		jQuery.each($(elmParent), function() {
			jQuery(this).addClass('listIconManipulator').children('li').wrapInner('<span class="content"></span>').prepend(elmIcon);
		});
	}
}
listIconManipulator.init();