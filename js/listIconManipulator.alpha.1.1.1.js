var config = {
	parentSelectors:'div.listIconManipulatorExample ul:first, #customList', //choose 'all' for all UL/OL instances, or select specific parent UL/OL/DIV elements
	iconContent:'<img src="img/icon-warning.png" alt="Warning" />', //the icon content. can be simple text (eg '!*'), or HTML content
	toolTip:true, //toolTip
	toolTipContent:'Only avaliable in the UK <a href="#">More info</a>' //toolTip text
}

var listIconManipulator = {
	init: function(){	
		
		elmIcon = '<span class="icon">' + config.iconContent + '</span>';
		
		  if (config.parentSelectors == 'all' && /\S/.test(config.toolTipText) ){ //parent list selectors
				var elmParent = 'ul, ol';
				init1 = true;
			} 
			else {
				var elmParent = config.parentSelectors;
				init2 = true;
			}
			
			if (config.toolTip == true && /\S/.test(config.toolTipText)) { //popup (test if true and if the string is not empty and not just whitespace)
				initTooltip = true;
			}
			else if (config.toolTip == false) {}
			else {		
				console.log('error! string is empty or contains purely whitespace. See config.toolTipText')
			}
			
			jQuery.each($(elmParent), function() {
				jQuery(this).addClass('listIconManipulator').children('li').wrapInner('<span class="content"></span>').prepend(elmIcon);
				
				
				jQuery(this).children('li').bind({
					mouseenter: function (e) {
						var iHover = jQuery(this);
						iHover.addClass('active');
		
						if(initTooltip == true) { //toolTip
							var toolTip = jQuery('<div class="toolTip"></div>').hide().appendTo((jQuery(this).children('span.icon'))).html(config.toolTipContent).text();
							jQuery('div.toolTip').fadeIn(300).css({
								'z-index':'9'
							});
						}
					},
					mouseleave: function(e) {
						jQuery(this).removeClass('active');
						if(initTooltip == true) {
							jQuery(this).children('span.icon').children('div.toolTip').fadeOut(200).remove();
						}
					},
				});
			});
			
		
	}
}
listIconManipulator.init();