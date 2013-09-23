var config = {
	
	listIconType:"text", //simple text, or HTML selector (eg #myElement)
	listIconSelector:"all",
	listElmentIcon:"!* "
}


var listIconManipulator = {
	init: function(){	
		
		//config/options
		if (config.listIconSelector == 'all'){
			var listElm = 'ul';
			
			init1 = true;
		} 
		else {
			//var listElmsParent = config.listIconSelector.parent();
			var listElm = config.listIconSelector;
		}
		
		
		//run it
		if (init1 == true) {
			var iElm = listElm;
			var iElmIcon = config.listElmentIcon;
				
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