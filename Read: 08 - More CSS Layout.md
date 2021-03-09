# MORE CSS
By know you should be comftrable around css, so lets dive deeper into it.

css treats html elements as if they lived in a box, one advantage of this that you position them with high accuracy.

Thre ways to postion elemnts
* Fixed
* Absolute
* Relative

In fixed postion, as the name implies its function, no matter how much you scroll in a page the element will be seen in the same spot of the screen.

In absolute postion This positions the element in relation to its containing element.

In relative position you move the object from where it should have been by default, left right does not matter, specify a direction and amount for displacment.

# SCREEN SIZES
Not every user have screens of  the same size, mobile phone screens, gaming bent screens, ...etc. so your design needs to be able to 
work on a range of different sized screens.

Its just like when you try to print a paper using MS word, the software provides you with the option the choes your paper size.

So before deploying a project and calling it done, you have to make sure that your design works on all screen sizes.

How do screens differ from one another, screen resolution is of the amin diffrences for screens of the same size.

>Resolution refers to the number of dots a screen shows per inch. Some devices have a higher resolution than desktop computers and most 
>operating systems allow users to adjust the resolution of their screens.

**Friendly tip** create web pages that are 960-1000 pixels wide, this a wider range that what was before, since handheld devices became popular.

developers stoped having the fear that users will not scroll around in the page and now working with 960-1000 pixels  instead 600 pixels.

# Fixed Width Layouts
For this case, measurements are given in pixels and even if the browser window size was changed, it will affect the size of the page.

Advantages
* Pixel values are accurate  at controlling size and positioning of elements.
*The designer has far greater control over the appearance and position of items on the page than with liquid layouts.
* You can control the lengths of lines of text regardless of the size of the user's window.
* The size of an image will always remain the same relative to the rest of the page.

Disadvantages
* You can end up with big gaps around the edge of a page.
* If the user's screen is a much higher resolution than the designer's screen, the page can look smaller and text can be harder to read.
* If a user increases font sizes, text might not fit into the allotted spaces.
* The design works best on devices that have a site or resolution similar to that of desktop or laptop computers.
* The page will often take up more vertical space than a liquid layout with the same content.

# Liquid Layouts
They are the exact opposite of fixed width layouts, they interact with the screen size, they stretch or compress as you change your window site.

Advantages
* Pages expand to fill the entire browser window so there are no spaces around the page on a large screen.
* If the user has a small window, the page can contract to fit it without the user having to scroll to the side.
* The design is tolerant of users setting font sizes larger than the designer intended (because the page can stretch).

Disadvantages
* If you do not control the width of sections of the page then the design can look very different than you intended, with unexpected gaps around certain elements or items squashed together.
* If the user has a wide window, lines of text can become very long, which makes them harder to read.
* If the user has a very narrow window, words may be squashed and you can end up with few words on each line.
* If a fixed width item (such as an image) is in a box that is too small to hold it (because the user has made the window smaller) the image can overflow over the text.

