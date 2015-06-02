CIStringBuilder
======


Node.js string builder based on c#

###Install
```
npm install cistringbuilder
```

###Setup
```javascript

var CIStringBuilder = require('cistringbuilder');

```


###Constructor
Creates a new string builder object

Example
```javascript
	var sb = new CIStringBuilder();
	
	var sb = new CIStringBuilder('testing');
```

###append
Appends a string to the string builder
	
```javascript
	sb.append('string to append ');
```

###appendLine
Appends a string followed by the \r\n 
	
```javascript
	sb.appendLine('this string will be appeneded')
```

###appendFormat
Appends a foramtted string e.g
	
```javascipt
	sb.appendForamt("this {0} will be {1}",['will','refomated']);
```
this will create a string in the string builder with the {x} replaced with the correct value from the array

###toString

This function will convert all the text added to the string builded in to one string.

so ```sb.toString()``` would create the following 
>string to append this string will be appended\r\nthis will be reformated

