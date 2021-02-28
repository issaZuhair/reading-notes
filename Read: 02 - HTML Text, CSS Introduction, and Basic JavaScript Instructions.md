# Text in HTML
By know you already know that you use tags when writing webpages known as markup.

## Structural markup: 
the elements that you can use to describe both headings and paragraphs

## Semantic markup: 
which provides extra information; such as where emphasis is placed in a sentence, that something
you have written is a quotation (and who said it), 

the meaning of acronyms, and so on.
## Headings ##
html offers 6 headings ```<h1>``` through ```<h6>``` as the heading number goes uo the importance goes down, and the of the heading.

## Paragraphs ##
To write a paragraph in html you type the text between ```<p> </p>```, by deafult each paragraph starts on a new line in the breowser leaving some space between paragraphs.
## BOLD AND ITALIC ##
To make a text bold do as this example, ```<b> TEXT</b>``` and will be displayed as: **TEXT**

to make rext appear itallic ``` <i>TEXT</i>``` and it wil appear as: *TEXT*

**Superscript & Subscript**
Lets say your a researcher or an engineering student, you will need Superscript &
Subscrip htrought your writing. but how to do it ?
will lets write carbon dioxide known as CO<sub>2</sub>, to do so in html ``` CO<sub>2</sub>```.

to write a supersctipt replace ```<sub>``` with ```<sup>```

**White sapces**
white spaces are spaces that you leave in the text you typed in a paragraph for example, they all get collapsed.
**Line Breaks & Horizontal Rules**
Line break ```<br/>``` and horizontal rules ```<hr/>``` are known as empty tags because they dont have anything in them, but do we use them.

```<br/>``` is used to break the line inside a paragraph for example, and use ```<hr/>``` to break when there is a change in theme.
# Semantic Markup
Semantic markups are text elements that add extra information to your page without affecting the structure of it.

* Strong:

As the name  emplies the ```<strong>``` is used to indicate that its content is of a srong iportance.
* Emphasis:

The ```<em>``` element indicates emphasis that subtly change the meaning of a sentence.
By default browsers will show the contents of an ```<em>``` element in italic.

* Quotations:

Two element are used for quotations which are
1. ```<blockquote>```: used for long quotes maybe you qouted an entire paragraph then you need ```<blockquote>```.
2. ```<q>``` : used for shorter quotes, many  developers avoid to use it since some browser do not put " " around the quoted sentence.

* Abbreviations & Acronyms:

```<abbr>``` chapter-02/abbreviations.html HTML If you use an abbreviation or an acronym, then the ```<abbr>``` element can be used. 

A title attribute on the opening tag is used to specify the full term.

* Citations:

Lets say you published a paragraph from a book or a research, you have to cite it thats the role of ```<cite>``` 
and browsers will render the contents of ```<cite>   </cite>``` as in italics 

* Definitions:

as the name implies, use ```<dfn>```to describe a terminology, 

* Author Details:

How do you include your information when you build a webpage, you are the author of the page.

To do so you use ```<address> ```. Here is an example.

```
<address>
<p><a href="mailto:homer@example.org">
 homer@example.org</a></p>
<p>742 Evergreen Terrace, Springfield.</p>
</address>
```

# CSS
css is how we style the html elements, how we control the color, text decoration, the lot.

But how do you apply css rules to the html elements, here is an example and the explanation will be according to it.

``` h1{
    color:red;
}
```
the h1 here is the selector, this makes the ruke color:red applies to all h1 elements. and the "rule" color:red is called a declaration.

**Uisng css**
* External:

To link an external css page to your documentwe use the ```<link>``` tag as follows.

``` <link rel="stylesheet" href="the path of" css sheet>``` and you put this in the head of the html document.

* Enternal:

Declare each css rule in the head of the elements, between style tags, ```<style> </style>```, not a best practice and can make your html document much bigger.

# CSS selectors
* Universal Selector: targets all the elements denoted as ```*{}```.
* Type Selector: tagets specific html elements, can be h1, p, ....etc.
* Class Selector: targets elements whoes attribute have the value of the class to name a class put a dot before the name ```.class-name{}```.
* ID Selector: same as class selectors, but this is unique, applies to one element named as ```#class-name```.
* Child Selector: matches an element that is a direct child of another example ```li>a{}``` targets ```<a>``` that is achild of ```<li>```.
* Descendant Selector: Matches an element that is a descendent of another specified element (not just a direct child of that element) 

```p a{}``` Targets any```<a>``` elements that sit inside a ```<p>``` element, even if there are other elements nested between them.
* Adjacent Sibling Selector: Targets any ```<a>``` elements that sit inside a ```<p>``` element, even if there are other elements nested between them.

example: h1+p {} Targets the first ```<p>``` element after any ```<h1>``` element (but not other ```<p>``` elements)
* General Sibling Selector: Matches an element that is a sibling of another, although it does not have to be the directly preceding element

example: h1~p {} If you had two ```<p>``` elements that are siblings of an ```<h1>``` element, this rule would apply to both.

# JAVASCRIPT basic intructions
How to declare variables?

Before you use a variable in java script you have to declare it, there is a reserved keyword for that.

use the word var to declare variables, example. To declare a variable x use var x;

How to assign a value to variables?

You already decleared the variable x, assigning a value is quite simple, x=5;
now you assigned the value 5 to the decleared variable x.

## DATA TYPES.
* NUMERIC: any nymber
* STRINGS: any thing inside ""
* BOOLEAN: true and false

Now you know how to assign values and the data types, why dont you store the value 7 in variable x and declare y that has 

a value of x multiplied by 5.

Try it your self before looking ate solution below.

let x =7;
let y=x*5;

and the cool thing is that you use exactly the same steps to store strings in variables, like so let y="Issa"; and the same thing for booleans.

in case you dont already know values of variables can be changed.

 let x=15; 

let x= 20;

now the value of x is 20.

# Arrays in javascript
if you are good at math then you have heard the term matrix before, arrays are something like that, think about itas a variable having more than value, a list of values and each one of thoes values have its own unique index.

example lets define an array containing odd numbers.

let oddArray=[1,3,5,7,9];
you start counting the index from 0 so oddArray(0)=1 and oddArray(4)=9. You can use arrays to store strings or any type of data.
# JAVASCRIPT operators

![operators](https://th.bing.com/th/id/Rb1659c721538d1881daff767b51a4f0a?rik=qlL7VdYVF6g0Vw&riu=http%3a%2f%2foer.nios.ac.in%2fwiki%2fimages%2f3%2f3b%2fJavascript3.png&ehk=78Ws4B9QvjBlSG%2fyy2RWOht7pWg%2bqk9egRze5Sxl0Oo%3d&risl=&pid=ImgRaw)


# logic in javascript
# logical operators in javascript
* equal to ==:
compares to value to see if they are the same
* strict equal to ===:
checks to see if to to values have the same type and and value
* not equal to !=
checks to value to see if they are different 
* strict not equal !==:
value and type cant be equal in this one.
* the greater than /> 
* less than \<
* greater than or equal />= 
* less than or equal \<= 
 they are all logical and and result in a true or false based on the values they are comparing.
 # and, or , not
 * and (&&) needs two true statements to result in a true
 * or (||) 
 if one statement is true the result is true
 * not (!)
 flips true to false and false to true 

Now you know about operators, decleration, variables, and arrays. Well lets get into something abit more exciting.
why dont we join all of the on a single code block with the if statement.

# if statement.
the concept of an if statement is simple and clear, it takes to arguments and compares them based on an operator.

If the condition is true then the code is exceuted, if false then not.

lets dive right into the example.

say you want to gather a team of 21 year olds for a football team

```
if (age==21){
    you can play;
}else{
    sorry you have to be exactly 21;
}
```

here you set a condition if the player was 21 then the result of the condtion is true hence he can play.

