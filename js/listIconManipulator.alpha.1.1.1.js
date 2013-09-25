var config = {
	listParentSelectors:'div.listIconManipulatorExample ul:first, #customList', //choose 'all' for all UL/OL instances, or select specific parent UL/OL/DIV elements
	listElmentIconContent:'<img src="http://www.openideas.info/wiki/images/d/d7/Template_warning.png" alt="Warning" />', //the icon content. can be simple text (eg '!*'), or HTML content
	listElementPopup:true, //popup
	listElementPopupText:'Only avaliable in the UK' //popup text
}

var listIconManipulator = {
	init: function(){	
		
		//private config
		iElmIcon = '<span class="icon">' + config.listElmentIconContent + '</span>';
		iElmIconText = config.listElmentIconContent;
		init1 = false;
		init2 = false;
		init3 = false;
	
		//rules
		if (config.listParentSelectors == 'all'){ //parent list selectors
			var iParentElm = 'ul, ol';
			init1 = true;
		} 
		else {
			var iParentElm = config.listParentSelectors;
			init2 = true;
			console.log('init2 true!')
		}
		
		if (config.listElementPopup == true && /\S/.test(config.listElementPopupText)) { //popup (test if true and if the string is not empty and not just whitespace)
			var iElmPopupText = config.listElementPopupText;
			init3 = true;
		}
		else if (config.listElementPopup == false) {
			
		}
		else {		
			console.log('error! string is empty or contains purely whitespace. See config.listElementPopupText')
		}
		
		//run it
		var ipElm = iParentElm;
		jQuery.each($(ipElm), function() {
			
			jQuery(this).addClass('listIconManipulator').children('li').wrapInner('<span class="content"></span>').prepend(iElmIcon);
			
			if(init3 == true) { //popup
				jQuery(this).children('li').bind({
					mouseenter: function testFunctionBinding (e) {
						var iHover = jQuery(this);
							var toolTip = jQuery('<div class="miniPopup500"></div>').appendTo(this).html(config.listElementPopupText).text();
							jQuery('div.miniPopup500').show();
							jQuery(iHover).children('span.title').appendTo('div.toolTip');
					},
					mouseleave: function(e) {								 
						jQuery(this).children('div.miniPopup500').remove();
					},
				});	
				
				
			
			}
						
				
			
			
		});
	}

}


$(document).ready(function(e) {
  listIconManipulator.init();  
});