var config = {
	
	listIconSelector:"#customList, ul", //'all' selects all UL and OL instances - this can be custom for example '#listWrapper ul, .header ul.iconMenu' (the selecter must be the UL/OL parent)
  listElmentIconContent:'<img src="http://www.openideas.info/wiki/images/d/d7/Template_warning.png" alt="Warning" />' //the icon content. can be simple text (eg '!*'), or HTML content
	
}


var listIconManipulator = {
	init: function(){	
		
		//private config
		iElmIcon = '<span class="icon">' + config.listElmentIconContent + '</span>';
		
		//config/options
		if (config.listIconSelector == 'all'){
			var listElm = 'ul, ol';
			//init1 = true;
		} 
		else {
			var listElm = config.listIconSelector;
		}
		
		
		
		//run it
		//if (init1 == true) {
			var iElm = listElm;
			var iElmIconText = config.listElmentIconContent;
				
				jQuery.each($(iElm), function() { 
					//console.log($(this).html());
					jQuery(iElm).addClass('listIconManipulator');
					  jQuery(this).children('li').prepend(iElmIcon);
				});
		//}

		
	}

}


$(document).ready(function(e) {
  listIconManipulator.init();  
});