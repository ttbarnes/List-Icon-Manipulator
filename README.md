# List Icon Manipulator
Custom bullet points and list icons

Demo: http://tonybarnes.me/showcase/code-snippets/listIconManipulator/demo/index.html


## Note
This has not been fully tested yet


## Requirments 
- jQuery: http://jquery.com/download/


### 1) Create a list
``` html
<ul id="listExample">
    <li>Dummy list item 1</li>
    <li>Dummy list item 2</li>
    <li>Dummy list item 3</li>
</ul>
```

### 2) Include jQuery/JavaScript
``` html
<script src="js/jquery.min.js"></script>
<script src="js/listIconManipulator.1.1.1.min.js"></script>
```

### 3) Initialise List Icon Manipulator
``` html
$('#listExample').listIconManipulator({
    content: {
      iconContent:'!>',
      iconColor:'#BADA55'
    }
});
```

## Options
``` html
$('#listExample').listIconManipulator({
  content: {
		iconContent:'!!>', //custom icon; text/html, html image..
		iconColor:'#BADA55' //optional icon color (html text only)
		tooltip:true, //optional tooltip (can remove)
		tooltipContent:'My tooltip content! <a href="#">More info</a>' //tooltip content
	}
});
```


## Contributions

Contributions are very welcome! Please contact me to discuss: tony@tonybarnes.me