# Links in html
You normally see that websites contain links that that redirect the user to a different page, what are links and how to write them?

The simpleset way to put is that links are text that when click on it erdirects you to a different page "the link text", how to write them?

``` <a href="URL goes here"> the text you need to appear </a>``` and you wrote your a tag.

![anchor tag](https://lorelle.files.wordpress.com/2015/03/links-html-anchor-tag-code-breakdown-lorelle-wordpress-school.png?w=1024)

In case you did not know. URL stands for Unifor Resource Locator and an absolute url starts with 
the domain name for that site, and can be followed by the path to a specific page

What about linking to pages on your website, when you have the html document for the page on your server?

That is when relative URL's come into play. A shorter version of absolute URL's, when the html document is in the same directory as the home page.

``` <a href="index.html">link text</a>``` in case index was the html document name.

# Directory structure
What if you have a large website take the [IAEA](https://www.iaea.org/), go through the site, can you imagine how many html documents are written.

So you should keep the files organized you find them with realtive ease when you need to modify something for instance.

## email links
To link to emails you also use the ```<a>``` tag setting the href attribute value to mailto as such ```<a href="mailto:someone@domain.com">.

## Opening links in a new window
You may have noticed that when you click on a link text provided by the ```<a>``` tag, to open the link in a new window use taget attribute.

```<a href="http://www.imdb.com" target="_blank">Internet Movie Database</a>``` this will open the link in a new window.

## Linking to a specific part of the same page
If you have a huge webpage, the user will get bored scrolling through the entire page to reach the jobs links for example at the bottom of page.

**How would you do it**?

to use the ```<a>``` to link to different parts in your page, you can only link to elements that have an id attribute.

to link to a heading that you placed in the bottom with and of bottom_page you use <a href="#bottom_page"> end</a>```, when clicking on end you go the element with id bottom_page.

# Layout
The that css locks at html is as if they live in boxes, on eaither leve block, or inline. The difference between them is that in a deafault layout

block elements start in a new line while inline ones float arounf the surrounding text.

Block level examples
* ```<p>``` 
* ```<h>```
* ```<ul>```
* ```<ol>```

Inline elements examples
* ```<img>```
* ```<a>```
* ```<img>```

# Containing elements
What is a containing element? when a block level element lives or sites inside another block level element, the outer is refered to as containing or parent element.

![parent element ](https://i.stack.imgur.com/Lr0JC.jpg)

# Positioning elements
css allows you to postion the elements based on multiple schemes.
1. Normal flow: 

Every block-level element appears on a new line, causing each item to appear lower down the page than the previous one.

Even if you specify the width of the boxes and there is space for two elements to sit side-byside, they will not appear next to each other.

2. Relative positioning:

this shifts the element from the postion it would normally live in to maybe top right, or bottom left, you specify, but note that it do not affect  position of surrounding elements.

3. Absolute positioning:

This positions the element in relation to its containing element. It is taken out of normal flow, meaning that it does not affect the position

of any surrounding elements (as they simply ignore the space it would have taken up). Absolutely positioned elements move as users scroll up and down the page.

One form of this scheme is **fixed  positioning** postions elemnts in relation with browser window , as opposed
to the containing element. 

4. Box offset:

specifies how far from the box should be from any end of the window, top, right, bottom, left.

**When you move any element from normal flow, boxes can overlap. The z-index property allows you to control which box appears on top.**

# Why pair programming
In pair programming the team of two developers is devided into two roles the driver and the navigotor, the driver is one who types the code, manages the version control and switching files.T

he navigator do not do any coding, he checks for typos, thinks about hte big picture, whats coming next, debugs the code and thinks about how the algorithim  might be converted into code.

Pair programming touches all the basic skills needed to learn a new language, can be interpreted to programming languages.

you learn to speak and communicate with the computer, collaborate making it easier to adapt to wotk enviroments.

Pair programming increases work effiency, when two people are working on the same code, you have more ideas to reach the goal, higher probability to catch errors, even if takes longer.

When actively collaborating with others its lesslikely that you waste time scrolling through facebook posts. And always you can learn from your fellow student.

Team work always produces more point of views that may have not noticed working alone. Social skills and enchanced significantlly, you learn how to work with

people from other backgrounds or having different beliefs than you, by combining all thoes benifits when go to an interview if they want to see that you can work thier employee you wont have any problems.

