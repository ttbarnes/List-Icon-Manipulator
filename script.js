var config = {
	
	listIconType:"text", //simple text, or HTML selector (eg #myElement)
	listIconSelector:"all",
	listElmentIconText:"!*" //the icon text (can leave empty); this should always be a CSS background image, so no HTML tag rendering required here
}


var listIconManipulator = {
	init: function(){	
		
		//private config
		iElmIcon = '<span class="icon">' + config.listElmentIconText + '</span>';
		
		//config/options
		if (config.listIconSelector == 'all'){
			var listElm = 'ul';
			
			init1 = true;
		} 
		else {
			var listElm = config.listIconSelector;
		}
		
		if (config.listIconSelector == 'all'){
			var listElm = 'ul';
			
			init1 = true;
		} 
		else {
			var listElm = config.listIconSelector;
		}
		
		
		
		//run it
		if (init1 == true) {
			var iElm = listElm;
			var iElmIconText = config.listElmentIconText;
				
				jQuery.each($(iElm), function() { 
					//console.log($(this).html());
					jQuery(iElm).addClass('listIconManipulator');
					jQuery('li').prepend(iElmIcon);
				});
		}

		
	}

}


$(document).ready(function(e) {
  listIconManipulator.init();  
});