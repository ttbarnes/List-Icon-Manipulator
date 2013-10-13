$(document).ready(function(e) {
		$('#exampleWrapper').listIconManipulator({ //plain text, 1st level
			content: {
				iconContent: '>>'
			}
		});
		$('#featured').listIconManipulator({
			content: {
				iconContent: '!!! '
			}
		});
		
		$('#cool').listIconManipulator({
			content: {
				iconContent: '!!! '
			}
		});
		
		$('#badassList').listIconManipulator({
			content: {
				iconContent: '!!! '
			}
		});
		
		$('#toolTipMe').listIconManipulator({
			content: {
				iconContent: '!!! '
			}
		});
		
		$('#featured').listIconManipulator({
			content: {
				iconContent: '!!! '
			}
		});
		
		
		
		
	
	
	
	$(sectionExamples).find('div.large-2:eq(1)').each(function(){ //second box/UL section
		var i = $(this);
		i.find('ul:eq(0)').listIconManipulator({
			content: {
				iconContent: '<img src="img/icon-tick.png" alt="Check" />'
			}
		});
		i.find('ul:eq(1)').listIconManipulator({
			content: {
				iconContent: '<img src="img/icon-info.png" alt="Info" />'
			}
		});
		i.find('ul:eq(2)').listIconManipulator({
			content: {
				iconContent: '<img src="img/icon-star.png" alt="Featured" />'
			}
		});
		
		i.find('ul:eq(3)').listIconManipulator({
			content: {
				iconContent: '<img src="img/icon-arrow.png" alt="Check" />'
			}
		});
  });
	
	$(sectionExamples).find('div.large-2:eq(2)').each(function(){ //third box/UL section
		var i = $(this);
		i.find('ul').not('ul > ul').listIconManipulator({
			content: {
				iconContent: '--',
				tooltip:false
			}
		});
		
		i.find('ul ul.moreInfo').listIconManipulator({
			content: {
				iconContent: '--',
				tooltip:true,
				tooltipContent:'<a href="#">More info</a>'
			}
		});
		i.find('ul ul.warning').listIconManipulator({
			content: {
				iconContent: '!! ',
				tooltip:true,
				tooltipContent:'Only avaliable in the UK'
			}
		});
  });
	
	$(sectionExamples).find('div.large-2:eq(3)').each(function(){ //final box/UL section
		var i = $(this);
		i.find('ul.featured').listIconManipulator({
			content: {
				iconContent: '<img src="img/icon-star.png" alt="Featured" />'
			}
		});
		i.find('ul.textReplace').listIconManipulator({
			content: {
				iconContent: '! >> '
			}
		});
		i.find('ul.cool').listIconManipulator({
			content: {
				iconContent: '<img src="img/icon-cool.png" alt="Cool" />'
			}
		});
		i.find('ul.toolTipMe').listIconManipulator({
			content: {
				iconContent: 'hover:',
				tooltip:true,
				tooltipContent:'Boo!'
			}
		});
  });
	
});