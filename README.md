# List Icon Manipulator
Custom bullet points and list icons

Demo: http://tonybarnes.me/showcase/code-snippets/listIconManipulator/index.html


## Note
This has not been fully tested yet. Working well in modern browsers.


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
  
### 2) Include css
``` html
<link rel="stylesheet" href="css/lim.styles.css">
```

### 3) Include jQuery/JavaScript
``` html
<script src="js/jquery.min.js"></script>
<script src="js/listIconManipulator.1.1.2.min.js"></script>
```

### 4) Initialise List Icon Manipulator
``` html
$('#listExample').listIconManipulator({
    content: {
      iconContent:'!>'
    }
});
```

## Options
``` html
$('#listExample').listIconManipulator({
  content: {
		iconContent:'!!>', //custom icon; text/html, html image..
		iconHoverOnly:true //display icon on hover only (cannot be used in conjunction with a tooltip)
		tooltip:true, //optional tooltip (can remove)
		tooltipContent:'My tooltip content! <a href="#">More info</a>' //tooltip content
	}
});
```


## Contributions

Contributions are very welcome! Please contact me to discuss: tony@tonybarnes.me