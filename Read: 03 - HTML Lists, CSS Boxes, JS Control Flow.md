# Lists in HTML
html offers the possibility of listing items in your webpage and there are two types of lists.
* Ordered list:

The tag for it is ```<ol> </ol>```

* Unordered list:

The tag fot it is ```<ul> <ul>```

How would you speccify the content of the list? using the ```<li> </li>``` element, each elemt represents a single item. Here is an example

``` 
<ul>
    <li> Issa</li>
    <li> John</li>
    <li> Farhan</li>
</ul>
```
This will be displayed as:
* Issa
* John
* Farhan

``` 
<ol>
    <li> Issa</li>
    <li> John</li>
    <li> Farhan</li>
</ol>
```
This will be displayed as:
1. Issa
2. John
3. Farhan

you can style them using css or even do nested lists in html such as
``` 
<ul>
    <li> Issa</li>
        <ol>
            <li>24 years old</li>
        </ol>
    <li> John</li>
    <li> Farhan</li>
</ul>
```
This will be displayed as:
* Issa
  1. 24 years old
  2. Nuclear engineer
* John
* Farhan

Is that is all? well not quite there is something called defeintion list.

The oppening and closing tags for the defeintion list are ```<dl> </dl>```  usually consists of a series of terms and their definitions.

```
<dl>
   <dt> Gamma ray</dt>
   <dd> electromagnitic rays coming from the nuclie of the atom</dd> 
</dl>
```

```<dt>``` used with terms you want to define and ```<dd>``` used with definition of the terms.

# Boxes
css treats each html element as if it was living in a box, to see thoes boxes is easy follow the steps.
1. open any page in the browser.
2. Right click any where on the main window.
3. click inspect.
4. Move the arrow on any tag to see the box it lives in.

But how would you control the dimention of the boxes?

css allows you to control all the properties you need to control.
lets take an example

The dafault layout lets the box take the entire width of screen, how do make it less, you litterally tell it to make it 100px for example.

```
p{
    width:100px;
}
```
The same applies for height, border, margin, padding, and the lot. you can even set it to minimum width or maximum width. How?

```
p{
    min-height: 10px;
    max-height: 30px;
    min-width: 10px;
    max-width: 30px;
}
```

# Overflowing Content
What if you specified a boxes size but the content was larger than the box itself?

Thats exactly the job of overflow there are several properties to set that are.
* hidden : use it to hide any extra content

```
p
 {
overflow: hidden;
}
```
* scroll : use it to add a scroll bar to the box so you go through the content

```
p
 {
overflow: scroll;
}
```

The overflow property is specially handy when you change the size of the browsers screen.

# Border, Margin and Padding
* Boreders are the line where the box that the live in ends.
* Padding is the distance between the content of an element and its border.
* Margin is the distance outside the border.

How can you as a developer control thoes properties? The exact same say you controlled width before.

```
p 
 {
 margin:15px;
 padding:10px;
 border:20px;
 }
 ```
 
 And there you have it, the paragraph lives in a box with a border 20 pixels in thickness, 10 pixels distance between content and the border, and 15 pixels margin outside the border.

 Is that all you control? well no there is a lot more, no matter how much you learn there is always more.

 ```
 p{
border-width: 2px;
}
h1 {
border-width: thick;
}
li {
border-width: 1px 4px 12px 4px;
}
 ```

pay attention to the line ```border-width: 1px 4px 12px 4px; ```, what  fo you think it means? top, right, bottom, left borders.

you know its a box so four sides each one with different border dimention, you can also select color by ```border-color:red;```

# Inline blocks
Browsers by deafult lists block elements one on top of the other, like a list, but how would you change that?

Once again the answer is using css. here is a code sample to make everything clear.
```
li {
    display:inline-block;
}
this ```     display:inline-block;``` allows block level elements to act like inline while keeping other block features.

Its like maybe you need to list items in a list side by side and not on different rows like a single column table.

Lets wrap up with boxes with one last topic? can you hide them?

Once again do not underestimate the power of css you hide a box like this.

```
li.coming-soon {
visibility: hidden;}
```

Now any ```<li>``` element with class coming-soon is hidden and will not be displayed.

You can even make the border as  a a picture using the following.

```
p.one {
-moz-border-image: url("images/dots.gif")
 11 11 11 11 stretch;
-webkit-border-image: url("images/dots.gif")
 11 11 11 11 stretch;
border-image: url("images//dots.gif")
 11 11 11 11 stretch;}
```
# Arrays i JavaScript
Arrays in JavaScript are a simple and easy concept, as a concept only do not be fooled.

Arrays are like matricies in math, you store multiple values in a single variable such the following example.

``` 
let x=['red', 'black','green'];
```
Now you stored the values in a single variable, but how to do you refere to the?

Simple, the red is index by zero ```x(0)='red'``` and you start counting up from there.

# SWITCH STATEMENTS in JavaScript
A switch statement first evaluates its expression. It then looks for the first case clause whose expression evaluates to the same value as the result of the input expression (using the strict comparison, ===) 

and transfers control to that clause, executing the associated statements. (If multiple cases match the provided value, the first case that matches is selected, even if the cases are not equal to each other.)

If no matching case clause is found, the program looks for the optional default clause, and if found, transfers control to that clause, executing the associated statements.

If no default clause is found, the program continues execution at the statement following the end of switch. By convention, the default clause is the last clause, but it does not need to be so.

lets take an example from the book **javascript_and_jquery_interactive_jon_du**.

```
var msg;
var level = 2;
/I Determine message based on level
switch (level) {
case 1:
msg = 'Good luck on the first test ' ;
break;
case 2:
msg = 'Second of three - keep going!';
break;
case 3:
msg = ' Final round, al most there!';
break;
default :
msg = 'Good l uck!';
break;
var el = document.getEl ementByld('answer');
el .textContent = msg
```
The goal of the switch here is to present a different message for each level each variable contains a number indicating the level.

# DATA types
We already defined three types of data, boolean, number, and string. Lets define two more data types.
* null : which means empty value
* undefined : Variable has been declared but not yet assigned a value 

# TRUTHY & FALSY VALUES

Falsy values are treated as if they are fa 1 se. The table to the lef shows a hi ghScore variable with

a series of values, all of which are falsy. 

Truthy values are treated as if they are true. Almost everything that is not in the falsy table can

be treated as if it were true. 

# SHORT CIRCUIT VALUES 
The meaning of short circuit values in logical operators is that they stop as soon as they find an answer.

# loops in javascript
loops check check a condition if its true they execute the codes in thier scope over and over 
until the condition is not met anymore, "false".
# three types of loops
* For loops:
we use them when know exactly how many times we need to run the statement
* while loops:
we dont know how many times to run, but we know that we should stop when a certain event happens
* do while:
same as while except that it will run atleast one time if the condition is false

![logic](https://www.w3resource.com/w3r_images/javascript-do-while.gif)
the logic of loops is provide in the figure and as they say a picture is woth a thousand words.
# syntax
* do while :
![do while](https://codebrainer.azureedge.net/images/JS-loop-do-while.jpg)
* while: 
![while](https://lh4.googleusercontent.com/TnhsAWY4-3YeitpHvIsRZXkh1tqnBwdR4KtyEEgO746ddiATkd9CP51FgCbyYeVxfPMtZedckp3AbwmFrC4j-ipZM8v1_wVwzNYuaBIfFCNIONheuIFkUpL6P1nSpsJ6Y2nY5lJB)
* for:
![for](https://www.toolsqa.com/wp-content/gallery/javascript/For-loop-3.png)

