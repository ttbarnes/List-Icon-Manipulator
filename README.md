# List-Icon-Manipulator
Custom bullet points and list icons

Demo: http://tonybarnes.me/showcase/code-snippets/listIconManipulator/demo/index.html


## Note
This has not been tested yet


## Requirments 
- jQuery: http://jquery.com/download/


### 1) Create a list

<ul id="listExample">
    <li>Dummy list item 1</li>
    <li>Dummy list item 2</li>
    <li>Dummy list item 3</li>
</ul>


### 2) Include jQuery/JavaScript

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="js/listIconManipulator.1.1.1.min.js"></script>


### 3) Initialise List Icon Manipulator

$('#listExample').listIconManipulator({
    content: {
      iconContent:'!>',
      iconColor:'#BADA55'
    }
});


## Contributions

Contributions are very welcome! Please contact me to discuss: tony@tonybarnes.me