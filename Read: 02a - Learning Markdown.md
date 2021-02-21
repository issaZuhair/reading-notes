mastering markdown
markdown is simply a regular text with non-alphabetic characters that control how the text looks like 
You can use Markdown most places around GitHub:

Gists
Comments in Issues and Pull Requests
Files with the .md or .markdown extension
examples 
# this text will be displayed as an h1 element
and the number of bound signs determines what heading this is
33 this is an h2
or you can add links like this
[this text will direct you to google](https://www.google.com/)
how to change font type in markdown:
*this is italic text* and anything between asterisks is italic 
or _this text is italic_ 
and even _this **text** also_
# we have two types of list 
ordered list
unordered list
the ordered list use the following 
1 first item
2-second item

the numbering does not have to be correct
the unordered list use the asterisks
* item
* item

but how to insert images


![GitHub logo](https://th.bing.com/th/id/OIP.Mqvv5KhzcLkajdAT3-taCgAAAA?w=280&h=77&c=7&o=5&dpr=1.25&pid=1.7)

how to use blockquotes put a left open triangle or the greater than sign before the quote 
> We're living the future so
> the present is our past.


# GitHub.com uses its own version of the Markdown syntax that provides an additional set of useful features,
# many of which make it easier to work with content on GitHub.com.


# tables
you can assemble tables by separating them with - for the first row and a | for each column
First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column


you can also strike a line through words simply use this ~~this text is struck ~~ use ~~  ~~ just do not leave a space between the sign and the text


### any url will be converted to a clickable one

#### mentions are easy use @ before the user name and they will be notified, just like Facebook


# Any number that refers to an Issue or Pull Request will be automatically converted into a link.

# git hub pages allows you to turn github repositories into elegant websites


### to show off anything you want


advantages:
1 no data bases to set up
2 no servers to configure 
3 sometimes you dont even have to know HTML




*you can use syntax highlighting in markdown*
the following syntax was taken as is
```
javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```


# if ypu want to build awesome websites do it with Jekyll
## Jekyll is an open-source tool that transforms plain text files into websites


since your git hub file are a part of the GitHub repository you can maintain them using the same tools you use on GitHub and when you are ready to publish changes just merge them

 
 
 #### the beauty of it is that you dont have to memorize the markdown, simply go to [Basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax) to see all of them
 
 
 you can see how to control headings, text type, styling options and much more 
 
 
 you can even see how to call out codes I will give an example
 
 
 ##### search for the quoting code


You can call out code or a command within a sentence with single backticks. The text within the backticks will not be formatted. 


anything between `whatever text is here` 

### To format code or text into its own distinct block, use triple backticks.

Some basic Git commands are:
```
git status
git add
git commit
``` 


what about the tasks list.
To create a task list, preface list items with a regular space character followed by [ ]. To mark a task as complete, use [x]. also retrived from the githib bookmarks


- [x] Finish my changes
- [x] Push my commits to GitHub
- [ ] Open a pull request
