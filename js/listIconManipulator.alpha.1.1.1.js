var config = {
	
	oneInstance:{
		yesNo:true,
		parentSelectors:'div.listIconManipulatorExample ul:first', //choose 'all' for all UL/OL instances, or select specific parent UL/OL/DIV elements
		iconContent:'>>', //the icon content. can be simple text (eg '!*'), or HTML content
		toolTip:true,
		toolTipText:'Be careful!'
	},
	twoInstances:{
		yesNo:false,
		lim1:{					
			parentSelectors:'div.listIconManipulatorExample ul:first', 
			iconContent:'<img src="http://www.openideas.info/wiki/images/d/d7/Template_warning.png" alt="Warning" />',
		},
		lim2:{
			parentSelectors:'#customList',
			iconContent:'!-WARNING-!',
		}
	},
	//toolTip:true, //toolTip
	//toolTipText:'Only avaliable in the UK' //toolTip text
	
	//limParentSelectors:'div.listIconManipulatorExample ul:first, #customList', //choose 'all' for all UL/OL instances, or select specific parent UL/OL/DIV elements
	//limIconContent:'<img src="http://www.openideas.info/wiki/images/d/d7/Template_warning.png" alt="Warning" />', //the icon content. can be simple text (eg '!*'), or HTML content
	//limToolTip:true, //toolTip
	//limToolTipText:'Only avaliable in the UK' //toolTip text
}

var listIconManipulator = {
	init: function(){	
		
		//private config
		init1 = false;
		init2 = false;
		//initTooltip = true;
	
		//rules
		
		
		if (config.oneInstance.yesNo == true && /\S/.test(config.oneInstance.yesNo)) {
			console.log('oneInstance correct')
			instances1 = true;
			configInstances1 = config.oneInstance;
			console.log(instances1)
			elmIconText = configInstances1.iconContent;
			elmIcon = '<span class="icon">' + configInstances1.iconContent + '</span>';
		}
		
		if (instances1 == true){
		  if (configInstances1.parentSelectors == 'all'){ //parent list selectors
				var elmParent = 'ul, ol';
				init1 = true;
			} 
			else {
				var elmParent = configInstances1.parentSelectors;
				init2 = true;
			}
			
			if (configInstances1.toolTip == true && /\S/.test(configInstances1.toolTipText)) { //popup (test if true and if the string is not empty and not just whitespace)
				initTooltip = true;
			}
			else if (configInstances1.toolTip == false) {}
			/*else {		
				console.log('error! string is empty or contains purely whitespace. See config.toolTipText')
			}*/
			
			jQuery.each($(elmParent), function() {
				jQuery(this).addClass('listIconManipulator').children('li').wrapInner('<span class="content"></span>').prepend(elmIcon);
				
				if(configInstances1.toolTip == true) { //toolTip
				console.log('instance 1 tooltip true')
				
					jQuery(this).children('li').bind({
						mouseenter: function (e) {
				console.log('hovered')
							var iHover = jQuery(this);
							iHover.addClass('active');
							var limToolTip = jQuery('<div class="limToolTip"></div>').hide().appendTo((jQuery(this).children('span.icon'))).html(configInstances1.toolTipText).text();
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
}
listIconManipulator.init();