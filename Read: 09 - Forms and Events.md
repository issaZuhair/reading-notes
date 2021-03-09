 # Forms
 You work with forms everysingle day, some of us do not even know that they use forms, the most famous one is the google search bar.

 ![google](https://www.cheatsheet.com/wp-content/uploads/2016/03/google-search-bar.png)

 When you signed for a facebook account, shop on amazon or other services were you provide inforamtion mostly are forms.

 # Controlling forms
 You can controll how you collect information from your website visitors. 

 1. Adding text
 * Text input :used to take a single line input
 * Password input: same as text input but masks the input
 * Text area: you can collect multiple lines of text
 
 2. Making choices
 * Radio buttons: the user selescts one of multiple choices
 * Checboxes
 * Drop-down boxes

 3. Submitting forms
 * Submit buttons: submit "deploy" data from your form to another page
 * Image buttons: same as submit buttons but they allow you to use images
 * 
 4. Uploading files

 # How do forms work
 Quite simply they work as follows.
 1. Fill the form and press the button provided to submit the information to the server.
 2. The name of each form control is sent to the server along with the value the user enters or selects.
 3. The server processes the information.
 4. The server creates a new page to send back to the browser based on the information received.

 **A form may have one or all the form controls exeplained above**
 # Structurre
 The following is a code snipset from  Duckett HTML book:
 
 ```
<form action="http://www.example.com/subscribe.php" 
method="get">
<p>This is where the form controls will appear.
 </p>
</form>
 ```
 every form requires an action, the value of which is the URL for the page on the server that will receive the information in the form when it is submitted.

 To send a fform you use one of two methods post or get, use the get method for short forms or when there are no databases.

 # Text input
 The ```<input>``` element is used to create several different form controls. The value of the typeattribute determines what kind of input they will be creating.
The ```<input>``` has a an attribute of type, the value of which determine what control to use, password, texr, ...etc.

# Labelling Form Controls
Why? labelling forms makes it accessible for vision-impaired people but how to use the ```<label>```.

1. Wrap around both the text description and the form input (as shown on the first line of the example to your right).
2. Be kept separate from the form control and use the for attribute to indicate which form control it is a label for.

When working with forms it is a good idea to group related form controls, the ```<fieldset>``` does the job.

and provide a ```<legend>```, a caption that explains the forms purpose.
# Validation
Have you came across forms that warns you when you leave a blank field or provide wrong input?

This is form validation, it used to be done through JS but HTML5 can validate by itself.

# Lists
You have worked with lists in html, but how to style them.

css can work on both ```<ol>``` and the ```<ul>```, if you working with an unordered list, you can make the bullets appear asa disc. circle or other shapes.

And the same applies for ordered llists, instead of numbers you can use letters, or roman notation

Example code.

```
ol {
list-style-type: lower-roman;}
```

# Images for Bullets
This is a new topic, why dont we use images instead of bullets, it looks cuter, easy to do it using css

```
ul {
list-style-image: url("images/star.png");
}
```

# Marker position 
Lists are indented into the page by default and the list-styleposition property indicates whether the marker should appear on the inside or the 

outside of the box containing the main points. 

This property can take one of two values:

1. outside: the deafult position the marker sits to the left of the text block "The text inside the ```<li>```
2. inside: the marker sits inside the text block

# Table properties
```<table>``` just like other html elements can be styled using css, give it a padding, margin, control the borderalign its text and the lot.

The table have children elements, ```<tr>```, ```<th>```, ```<td>```, each one of them can be styled differently form the table.

give your cells a padding shade alternate rows, and do not forget to put a border around empty cells.

# Styling forms
No one likes a pale, boring form, lets go about how to style forms.

1. Tect-input:

you can control font size, the color, background-color of the input, give a border to make the input box more distiguished, if fits add a backgroud-image.

you can use the same propeties to style the submit button, fieldset and legends. lets take an example from our book, try to render it on your local machine.

```
input#submit {
color: #444444;
text-shadow: 0px 1px 1px #ffffff;
border-bottom: 2px solid #b2b2b2;
background-color: #b9e4e3;
background: -webkit-gradient(linear, left top, 
 left bottom, from(#beeae9), to(#a8cfce));
background: 
 -moz-linear-gradient(top, #beeae9, #a8cfce);
background: 
 -o-linear-gradient(top, #beeae9, #a8cfce);
background: 
 -ms-linear-gradient(top, #beeae9, #a8cfce);}
input#submit:hover {
color: #333333;
border: 1px solid #a4a4a4;
border-top: 2px solid #b2b2b2;
background-color: #a0dbc4;
background: -webkit-gradient(linear, left top, 
 left bottom, from(#a8cfce), to(#beeae9));
background: 
 -moz-linear-gradient(top, #a8cfce, #beeae9);
background: 
 -o-linear-gradient(top, #a8cfce, #beeae9);
background: 
 -ms-linear-gradient(top, #a8cfce, #beeae9);}
```

# Events
There are numerous number of events that  happen, but we group them so that we are able to characterize the information better.
* UI events
* Keyboard events
* Mouse events

How events trigger javascript code?

the proccess is known as event handeling, Select the element nodes you want the script to respond to. 

Select the element node(s) you want the script to respond to, then you state the code you need to run.

**Note** that you have bind events to an element.

# TRADITIONAL DOM EVENT HANDLERS
The syntax is simple 
```
element.onevent=functionname;
```
no parenthisies after function 

# EVENT LISTENERS 

```
element .addEventlistener('event', functionName [, Boolean]) ;
```
the last part the ```[,Boolean]``` is refered to as the event flow, 

You know that html elements live inside each other, if you hover an html element, you also hover over its parent.
 
We worry about the event flow in one case, when we have an event handelrs on an elimante and one of its ancestors or descendant.

## The event object
Objects provide information such as.
* What element the event happened on
* What key was pressed

The event object can tell you where the the event occured "triggered" , the position is give by the screenx and screeny properties,

and pageX, pageY indicate the postion relative to the entire page not your monitor and the client properties indicate the postion within the browser viewport