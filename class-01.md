# Introductory HTML and JavaScript
## SRTUCTURE.
 HyperText Markup Language [HTML] is used to build the structure of wesites, a simple analogy is that if we considered the website to be human HTML is the skeleton.
### composition of HTML.
HTML is composed of elemnts that control the structure of a webpage. but what are elements?
Elements are text writen between angle brackets, <>, thoes elements can be headins, page title a list or a a paragraph.
HTML elemnts are way to many to many to talk about all of them in a single section, whats important is to understand th concept of them.
usually HTML elements are wrriten with an oppening and a closing tag for wxample to write a heading ``` <h1>your text here</h1> ```.
h1 means heading one the one with most importance and the largest in text.
Another type of tags are self closing tags, an exxample of them are images ```<img src="img.jpg" alt="text describing the image"> ```,
HTML elemnts also have whats called an attribute, attributes containes additional information about the element, they appear on the oppening tag they aare explained in this example taken from [HTML-CSS](http://www.htmlandcssbook.com/code/)

```<p lang="eng-us"> Paragraph in english </p>```
here lang is the attribute name, lang-us is the attribute value and its telling the browser that the content of this tag is written in english, place in the oppening tag, and in case you have not noticed yet a closing tag contains / in it.
## HTML body, head, and title.
**the following is an example of an html document** take a good look at it so you get the hang of it 
```
<html>
<head>
 <title>This is the Title of the Page</title>
</head>
<body>
 <h1>This is the Body of the Page</h1>
 <p>Anything within the body of a web page is
 displayed in the main browser window.</p>
</body
</html>
```
all the elements we talked about and many more are place within the body ```<body> </body>``` of the html document everything placed here is shown in the main browser window.
the head is were you place the information about the page it self, not what you need to show in the main browser window.

the title. ```<title> Page title here</title>```, this how you specify the title shown on the browser tab once the page is rendered, placed inside the head on html.
## EXTRA MARKDOWN.
It have not been the same html since the web started.
* HTML4: 

released in 1997. Pretty similar to html5 used today but is not recommended to authors due to presentation abilities.
* XHTML 1.0:

released in 2000. An upgrade to html4, html4 was reformulated to follow the rules of xml and renamed xhtml which ment that authors had to follow more strict rules 
about writing mark up such as 
* all element except empty ones had to had a closing tag
* attribiutes are writen in lower case and the values are writen inside double quotes
* Every element that was opened inside another element should be closed inside that same element.
## Doctype.
with all the versions of html how browsers distiguish what version the developer is using?

the ```<Doctype>``` is where the browser reads the version of html. The following are the tags for each version html taken from [HTML-CSS](http://www.htmlandcssbook.com/code/)

* HTML5: ```<!DOCTYPE html>```
* HTML4: ```<!DOCTYPE html PUBLIC
"-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">```
* Transitional XHTML 1.0 ``` <!DOCTYPE html PUBLIC
"-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/
 xhtml1-transitional.dtd"> ```
* Strict XHTML 1.0 ``` <!DOCTYPE html PUBLIC
"-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/  xhtml1-strict.dtd"> ```
* XML Declaration ``` <?xml version="1.0" ?> ```

## COMMENTS.
Comments are lines of the html document that are ignored by the browser and never rendered.

since that is the case why use comments. Comments allows you to collaborate with other developers by writing the purpose of the document and explain the lines of code.

even if you are a student it help you study html by comminting lines instead of deleting them and rewriting every time you compare how each tag looks on the page.

how to write comments in html? any thing inside ```<!-- -->``` is a comment. example the paragraph ```<!-- <p>this is a comments </p> -->``` 

will not appear on the browser main page as if you never wrote it
## ID ATTRIBUTE.
think about the id attribute as your national number, it uniquely identifies you no one else has the national number.

id attribute is used to give a certain html element a style different than other elements using Cascading Style Sheets [CSS], dont worry about css for now everything will be explained in its sutible place.

How is the the id attribute implemented?

```<p id="blue">The content of the paragraph</p>```and the blue idenitiy is identified in the css.

This id can be used to make text float left or give a background color or any other feature you can think of. The id is considered a global attribute since it can be applied to any html tag

## CLASS ATTRIBUTE.
The class atribute is very similar to the id attribute with a very important difference, a class can be applied to any number of html tags, while the 
id attribute is specific to a single tag, unique cant be repeated.

## BLOCK ELEMENTS.
How do know if it was a block element?

Block elements apear on a new line when rendered by the browser without the developer using a line break in the html document ```<br>```.
Examples on block level elemnts
* heading ```<h1> </h1>```
* paragraph ```<p> </p>```
* list items ```<li> </li>```

The previous are only few examples you can always see more on [W3schools](https://www.w3schools.com/)

## INLINE elements.
Inline elemnts are thoes that continue on the same line, when you make a certain word bold for example.
Examples on inline elements
* ```<b> </b>``` 
* ```<em> </em>```

## GROUPING TEXT AND ELEMENTS IN A BLOCK.
* ``` <div> </div>```

The ```<div>``` element allows you to group a set of elements together in one block-level box. you can create a div element to group all the elements fro the site header.
* ```<span> </span>```

the most common use for the ```<span>``` is to control the appearance of its content. its the inline equivellent of ```<div>``` and used when there is no other suitable element.

* ```<iframe>```

A little window that has been cut into your page and in that window you can see another page. The term iframe is an abbreviation of inline frame.
the following example is taken from [HTML-CSS](http://www.htmlandcssbook.com/code/) all copy wrights and credits are refered to the owner of the book.

```
<iframe
width="450"
height="350"
src="http://maps.google.co.uk/maps?q=moma+new+york
&amp;output=embed">
</iframe> 
```
The use of it depends on the developer, you can imbed a google map or an ad for other sites, what ever you with to put in it.

## INFORMATION ABOUT PAGES.
You have constructed the website, included all the images, features you need, now you need to include the information of your site.
We need an example to work with so you visulize how everything work, the example code is taken from [HTML-CSS](http://www.htmlandcssbook.com/code/) page # 192
```
<!DOCTYPE html>
<html>
<head>
 <title>Information About Your Pages</title>
 <meta name="description"
 content="An Essay on Installation Art" />
 <meta name="keywords"
 content="installation, art, opinion" />
 <meta name="robots"
 content="nofollow" />
 <meta http-equiv="author"
 content="Jon Duckett" />
 <meta http-equiv="pragma"
 content="no-cache" />
 <meta http-equiv="expires"
 content="Fri, 04 Apr 2014 23:59:59 GMT" />
</head>
<body>
</body>
</html>
```
everything is done using tags, these tags will be explained one by one pay attention.
* ```<meta>```

the ```<meta>``` is an empty element is done have a closing tag it carries the information via attributes.

what is ```<meta>``` most common uses.
* descreption: is the name impliesthis one contains a descreption of the page, used by browser to know what the page is about.
* keywords: this used to be used to tell the breowser what are the words that leads to the page in search, no longer used any more.
* robots: gives the control over wether search engines to include your page or not, nofollow means include page without pages it links to.
* author: who wrote the document.
* pragma: pervents the browser from caching the page
* expires: is it time sensetive: if it is it can be set to expire.
## ESCAPE CHARACTERS.
The following image contains the list for escape code, there are too many but it will be explained.

![escpae code](https://harbormist.com/links/reference/HTMLescapeCodes.gif)

Simply put some chatacters or symbols are reserved by html as keywords, bur still you can make them appear on your site, which the use of escape code in html.
Simple as that.

# HTML 5 LAYOUT.
In this section we will talk about:
* HTML5 layout elements.
* How old browsers understand new elements.
* Styling HTML5 layout elements with CSS.

Remember how we talked about ```<div>``` we said that its used to group related elemnts.

HTML 5 introduces new elements allowing to devide up the pages, in the old html to include a footer in site body you used ```<div id="footer">```.

With the new html 5 you simply use ```<footer>```.

For example, the header sits inside a new ```<header>``` element, the navigation in a ```<nav>``` element, and the articles are in

individual ```<article>``` elements.

## HEADERS AND FOOTERS.
What are they used for?
* The main header or footer that appears at the top or bottom of every page on the site.
* A header or footer for an individual ```<article>``` or ```<section>``` within the page.

Each individual ```<article>``` or ```<section>``` can have there own header and footer within the page.

You specifically need this feature when working on a webpage cantaining multiple blog posts or articles, so each on them can be given the correct information in the correct place of the document.

* NAVIGATION:
the ```<nav>``` element contains the navigational blocks of the site.
Going back to our blog example, if you wanted to finish an article with links to related blog posts,


these would not be counted as major navigational blocks and therefore should not sit inside a <nav> element.

* ARTICLES:
The ```<article>``` element acts as a container for any section of a page that could stand alone and
potentially be syndicated.
* ASIDES:
The ```<aside>``` element has two purposes, depending on whether it is inside an ```<article>``` element or not.
* SECTIONS:
As its name emplies you use ```<section>``` to group related content.
* HEADING GROUPS:
The ```<hgroup>``` is used to group a set of related ```<h1>``` trhough ```<h6>``` tags.
* FIGURES:
Lets say you have an article on you site or displaying a scientific research paper, you have to be organized and follow a certain protocol.

Thats the role of ```<figure> <figcaption>```, you give the figure "image your displaying a certain block in the site and provide describtion for it

here is an example code to get the hange of dont be afraid to try it on your own.

```
<figure>
<img src="https://th.bing.com/th/id/OIP.Ouh8SWiGXN-UINAhGnMnkQHaGJ?pid=ImgDet&rs=1" alt="fission cross section" />
<figcaption>nuclear fission cross-section</figcaption>
</figure>
```
## PROCESS AND DESIGN.
How do you design a website. Do you use the same design for all your websites? You need to target your audience, which is achieved using css.

Lets say you know who is your audience, know you need to ask your self. Why are they visiting my site?

## SITE MAPS.
> The aim is to create a diagram of the pages that will be used to structure the site. This is
known as a site map and it will show how those pages can be grouped.

There is a technique called card sorting, you can use to know what information goes where on ypur website. This involves placing

each piece of information on a separate paper and then organize everything into groups.

>Each group relates to a page and, on larger sites the, pages can in turn can be grouped together to create different sections of the website.

Turn the groups into a diagram and you have a site map.

![site map example](https://th.bing.com/th/id/Rb3fc58d0e1a88bf710fa73b9fe84c67a?rik=A5VRUizn%2fvZnNQ&riu=http%3a%2f%2fkarlcleveland.com%2f165%2fimages%2fsitemaps%2fsitemap4.gif&ehk=rKXiH7Y9pgK3ojZqN%2bm8lSjg1oH2LLLGCFnkZw5ulzk%3d&risl=&pid=ImgRaw)

## Wireframes
A wireframe is a simple sketch of the key information that needs to go on each page of a site. 

It shows the hierarchy of the  information and how much space it might require. You can draw on a notepad or a paint, or even a piece of paper whatever suits you.

Note that you should NOT include color, font style, or any other styling choice

![Example wireframe](https://th.bing.com/th/id/OIP.x61GvDMmFjI-hsNEhe9IuwHaFn?w=245&h=186&c=7&o=5&dpr=1.25&pid=1.7)

## INTRODUCTION TO JAVASCRIPT.

### HOW JAVASCRIPT MAKES WEBSITES INTERACTIVE.
1. ACCESS CONTENT:

You can use JavaScript to select any element, attribute, or text from an HTML page.

For example:
* Select the text inside all of the ```<hl>``` elements on a page.
* Select any elements that have a class attribute with a value of note.
* Find out what was entered into a text input whose id attribute has a value of email.

2. MODIFY CONTENT:

You can use JavaScript to add elements, attributes, and text to the page, or remove them. For example:
* Add a paragraph of text after the first ```<hl>``` element.
* Change the value of class attributes to trigger new CSS rules for those elements.
* Change the size or position of an ```<img>``` element. 

3. PROGRAM RULES: 

You can specify a set of steps for the browser to follow (like a recipe), which allows it to access or change the
content of a page. For example:
* A gallery script could check which image a user clicked on and display a larger version of that image.
* A mortgage calculator could collect values from a form, perform a calculation, and display repayments.
* An animation could check the dimensions of the browser window and move an image to the bottom
of the viewable area (also known as the viewport). 

4.  REACT TO EVENTS:

You can specify that a script should run when a specific event has occurred. For example, it could be run when:
* A button is pressed.
* A link is clicked (or tapped) on.
* A cursor hovers over an element.
* Information is added to a form.
* An interval of time has passed.
* A web page has finished loading.

## points 1 through 4 are taken as is from javascript_and_jquery_interactive_jon_du ##





## JS THE ABC OF PROGRAMMING.
# JAVA SCRIPT
Web developers mostly work with 3 languages, html, css, java script that represent the skiliton, skin, and mind of a web page respectively
But how do you link the javascript to your html page?
When you want to use JavaScript with a web page, you use the HTML script element to tell the browser it is coming across a script.
Its s re attribute tells people where the JavaScript file is stored.
But as a best practice you script javascript in a seperate file using your favorite text editor ex: VScode. and then linking it using 
the script tag providing the path in the src attribute.
# how to use java script. 
first you need to understand that java script runs wherever its found in the html.
>When the browser comes across a script element, it stops to
load the script and then checks to see if it needs to do anything.

A script is a series of instructions that a computer can follow one-by-one. Each individual instruction or step is known as a statement. 
you should end every statement with a semicolon not all browsers are smart enough to overlook the mistake of not using them.
ex) you need to store the date in a variable.
type :
var today=new Date();
here var is a keyword indicating that today is a variable.
new Date(); is apredefined function in JS dont worry about it know all will be clear at the right time.
and give your self a pat on the back you just wrote your first JS statment.
but keep in mind JAVASCRIPT is case sensetive X<> x caps do not equal small case letters.
### statment are instructions and each one starts on a new line.
### statments can organized into code blocks .
## any set of statments between curly braces {} are known as code blocks.
can you collaborate with others while working JAVASCRIPT ?
JAVASCRIPT allows the ability to write comments on your file 
any thing typed after // is a comment and will never be executed. 

So you can clarify the code for other developers and work together.

A script will have to temporarily store the bits of information it needs to do its job. It can store this data in variables
A variable is a good name for this concept because the data stored in a variable can change (or vary) each time a script runs. 

No matter what the dimensions of any individual wall are, you know that you can find its area by
multiplying the width of that wall by its height.

Similarly, scripts often need to achieve the same goal even when they are run with different data, so variables can be used to represent values in your
scripts that are likely to change. The result is said to be calculated or computed using the data stored in
the variables. 

The use of variables to represent numbers or other kinds of data is very similar to the concept of algebra
(where le.tters are used to represent numbers). There is one key difference, however. 
The equals sign does something very different in programming
## HOW TP DECLEARE VARIABLES. ##
var today=new Date();
same explained before here we declared the variable today.
## DATA TYPES.
* NUMERIC: any nymber
* STRINGS: any thing inside ""
* BOOLEAN: true and false

For example the line of code ```document.write('Hello world!');``` can be used to wrie the phrase hello world directly into the website.

