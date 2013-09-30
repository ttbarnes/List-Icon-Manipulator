var config = {
	oneInstance:{
		parentSelectors:'div.listIconManipulatorExample ul:first', //choose 'all' for all UL/OL instances, or select specific parent UL/OL/DIV elements
		iconContent:'<<', //the icon content. can be simple text (eg '!*'), or HTML content
	},
	twoInstances:{
		yesNo:true,
		lim1:{					
			parentSelectors:'div.listIconManipulatorExample ul:first', //choose 'all' for all UL/OL instances, or select specific parent UL/OL/DIV elements
			iconContent:'<img src="http://www.openideas.info/wiki/images/d/d7/Template_warning.png" alt="Warning" />', //the icon content. can be simple text (eg '!*'), or HTML content
		},
		lim2:{
			parentSelectors:'#customList',
			iconContent:'!-WARNING-!',
		}
	},
	toolTip:true, //toolTip
	toolTipText:'Only avaliable in the UK' //toolTip text
	
	//limParentSelectors:'div.listIconManipulatorExample ul:first, #customList', //choose 'all' for all UL/OL instances, or select specific parent UL/OL/DIV elements
	//limIconContent:'<img src="http://www.openideas.info/wiki/images/d/d7/Template_warning.png" alt="Warning" />', //the icon content. can be simple text (eg '!*'), or HTML content
	//limToolTip:true, //toolTip
	//limToolTipText:'Only avaliable in the UK' //toolTip text
}

var listIconManipulator = {
	init: function(){	
		
		//private config
		limElmIcon = '<span class="icon">' + config.limIconContent + '</span>';
		limElmIconText = config.limIconContent;
		init1 = false;
		init2 = false;
		init3 = false;
	
		//rules
		if (config.limParentSelectors == 'all'){ //parent list selectors
			var limElmParent = 'ul, ol';
			init1 = true;
		} 
		else {
			var limElmParent = config.limParentSelectors;
			init2 = true;
		}
		
		if (config.limToolTip == true && /\S/.test(config.limToolTipText)) { //popup (test if true and if the string is not empty and not just whitespace)
			var limToolTipText = config.limToolTipText;
			init3 = true;
		}
		else if (config.limToolTip == false) {}
		else {		
			console.log('error! string is empty or contains purely whitespace. See config.listElementPopupText')
		}
		
		jQuery.each($(limElmParent), function() {
			jQuery(this).addClass('listIconManipulator').children('li').wrapInner('<span class="content"></span>').prepend(limElmIcon);
			
			if(init3 == true) { //toolTip
				jQuery(this).children('li').bind({
					mouseenter: function (e) {
						var iHover = jQuery(this);
						iHover.addClass('active');
						var limToolTip = jQuery('<div class="limToolTip"></div>').hide().appendTo((jQuery(this).children('span.icon'))).html(config.limToolTipText).text();
						jQuery('div.limToolTip').fadeIn(300).css({
							'z-index':'9'
						});
					},
					mouseleave: function(e) {
						jQuery(this).removeClass('active').children('span.icon').children('div.limToolTip').fadeOut(200).remove();
					},
				});
			}
		});
	}
}
listIconManipulator.init();