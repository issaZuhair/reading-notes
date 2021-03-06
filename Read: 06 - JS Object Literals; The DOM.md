# WHAT IS AN OBJECT? 
Objects group together a set of variables and functions to create a model, and in a variables and functions take on new names. 

What are thoes new names?
* Variables become properties
* Functions become methods

Variables and functions have names like ```let x=5;```  or ``` function name(){}``` . In an object, instead of name its Key.

The value of a property can be a string, number, Boolean, array, or even another object. The value of a  method is always a function. 

# Creating an object 

Literal notation is the easiest way and most popular way to create an object.

The following example is taken from javascript_and_jquery_interactive_jon_du

```
var hotel ={
    name:Quay,
    rooms:40,
    boked:25,
    checkavailability: function(){
        return this.rooms - this.booked;
    }
}
```
In the checkavailability method, this is a keyword that indicates the use of the properties in the ogbject

# ACCESSING AN OBJECT AND DOT NOTATION

You access objects properties or methods using the dot notation, or square brackets.

# The DOM
*DOM* [Document Object Model] specifies how browsers should create a model of an HTML page and how JavaScript can access and update the 
contents of a web page while it is in the browser window.

Its important to note that DOM is not a part of the JavaScript not the html document it is a separate set of rules.

The DOM specifies the way in which the browser should structure this model using a DOM tree.

What is the DOM tree? it is simply a model of a web page when the browser loads a page it creates a model of it and that model is called the *DOM* tree and stored in the memory.

![DOM tree](https://cf.ppt-online.org/files/slide/l/lG6hjyFR8carDYH7oVAtPW3exEOg0sSpQ1JKfm/slide-4.jpg)

# How to work with the *DOM* tree
TO access or update a *DOM* tree you perform two steps
* Locate the node that represents the element you want to work with.
*  Use its text content, child elements, and attributes. 

How to access elements?  There are many ways you do this
* getElementByld(): use this to select a single element
* getElementsByClassName(): the name of it states it all, select elements with the same class
* parentNode: returns the parent of the elelment your in
* querySe1ector(): this one returns the first matching css selector
* getElementsByTagName(): is the name implies selects a certain tag
* previousSibling / nextSibling
* querySelectorAll(): selects all matching css selectors
* firstChild / lastChild: Select the first or last child of the current element

How to work with elements?
* ACCESS/ UPDATE: 
* Work with html content
* ACCESS OR UPDATE ATTRIBUTE VALUES

# Caching *DOM* QUERIES
What are *DOM* queries? they are the methods that can find elements in the *DOM*

> DOM queries may return one element, or they may return a Nodelist, 
>which is a collection of nodes.

When the methods returns more than a single element, it returns a Nodelist even it found a one single element.

What is a Nodelist: a collection of element nodes, and the nodes are given index number same as arrays, and they appear in the same order as they are found.

# LIVE & STATIC NODELISTS 
* In a static Nodelist when your script updates the page, the NodeList is not updated to reflect the changes made by the script. 
* In a live Nodelist, when your script updates the page, the Nodelist is updated at the same time. 

# SELECTING AN ELEMENT FROM A NODELIST 
There are two ways to select an element from a Nodelist.
* item() method
* array syntax

1. item() method:

>Nodelists have a method  called item() which will return  an individual node from the Node list.

>simply you specify the index number of the element

2. array syntax:

you access node elements the same way to access array elements ```array[0]``` you provide the index of element between brackets.

# Repeating actions for a Nodelist

You can loop through each node of a Nodelist  and apply the same statment to each node in it, just like when you put an array in a for loop.

![loops](https://image1.slideserve.com/2223086/node-list-l.jpg)
the previous example is just for clarification 

```
var hotltems = document .querySelectorAl l('li.hot'); // Store Nodelist in array 
if (hotltems.length > O) { // If it contains items 
for (var i=O; i<hotl tems.length; i++) { // Loop throug h each it em 
hotltems[i] .className = 'cool'; // Change val ue of class at tri bute 
  }
}
```

The previous example was taken as is from javascript_and_jquery_interactive_jon_du.

# adding or removing html content
You add or remove html content using the innerHTML property or the *DOM* manipulation.

you use the innerHTML property to retrive or replace content of any html tag but you must note that the innerHTML comes with its own security issues.

The DOM manipulation methods allow you to create element and text nodes and then attach them to the DOM tree, it is slower and requires more coding than innerHTML

**BUT STILL SAFER THAN innerHTML**

