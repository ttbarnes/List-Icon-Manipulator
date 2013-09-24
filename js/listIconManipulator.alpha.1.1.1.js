var config = {
	
	listParentSelectors:'#customList, div.listIconManipulatorExample ul:last', //selecting parent UL/OL/DIV elements (recommmended)
	listItemSelectors:'ul li.warning', //selecting LI elements only
	//listIconSelector:"#customList, ul", //'all' selects all UL and OL instances - this can be custom for example '#listWrapper ul, .header ul.iconMenu' (the selecter must be the UL/OL parent)
  listElmentIconContent:'<img src="http://www.openideas.info/wiki/images/d/d7/Template_warning.png" alt="Warning" />' //the icon content. can be simple text (eg '!*'), or HTML content
	
}


var listIconManipulator = {
	init: function(){	
		
		//private config
		iElmIcon = '<span class="icon">' + config.listElmentIconContent + '</span>';
		
		//config/options
		if (config.listParentSelectors == 'all'){
			var listItemParent = 'ul, ol';
			init1 = true;
		} 
		else {
			var listItemParent = config.listParentSelectors;
			init1 = true;
		}
		
		if (config.listItemSelectors.length){
			
			var listItem = config.listItemSelectors;
			init2 = true;
			console.log('init2 true!')
		}
		
		
		var iElmIconText = config.listElmentIconContent;
		
		//run it
		if (init1 == true) {
			var iElm = listItemParent;
			jQuery.each($(iElm), function() {
				jQuery(iElm).addClass('listIconManipulator');
				jQuery(this).children('li').prepend(iElmIcon);
			});
			
		}
		if (init2 == true) {
			var iElm = listItem;	
			jQuery.each($(iElm), function() {
				jQuery(this).parent().addClass('listIconManipulator');
				jQuery(this).prepend(iElmIcon);
			});
			
		}
		

		
	}

}


$(document).ready(function(e) {
  listIconManipulator.init();  
});