var config = {
	listParentSelectors:'div.listIconManipulatorExample ul:first, #customList', //choose 'all' for all UL/OL instances, or select specific parent UL/OL/DIV elements
  listElmentIconContent:'<img src="http://www.openideas.info/wiki/images/d/d7/Template_warning.png" alt="Warning" />' //the icon content. can be simple text (eg '!*'), or HTML content
}

var listIconManipulator = {
	init: function(){	
		
		//private config
		iElmIcon = '<span class="icon">' + config.listElmentIconContent + '</span>';
		iElmIconText = config.listElmentIconContent;
	
		//rules
		if (config.listParentSelectors == 'all'){
			var iParentElm = 'ul, ol';
			init1 = true;
		} 
		else {
			var iParentElm = config.listParentSelectors;
			init2 = true;
			console.log('init2 true!')
		}
		
		//run it
		var ipElm = iParentElm;
		jQuery.each($(ipElm), function() {
			jQuery(this).addClass('listIconManipulator').children('li').wrapInner('<span class="content"></span>').prepend(iElmIcon);
		});
	}

}


$(document).ready(function(e) {
  listIconManipulator.init();  
});