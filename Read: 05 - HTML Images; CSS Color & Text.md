# Images in html
There are many reasons why you need images in a site, include ypur logo, figures that displays data relationships and it is easy to include them in your website.

To include an image in a site you use the ```<img>``` tag, what is and are the attributes it takes?

```
<img src="images/quokka.jpg" alt="A family of
 quokka" title="The quokka is an Australian
 marsupial that is similar in size to the domestic cat." />
```

The src is the soursce of the image you use the absolute URL of relative URL depending on the location of the image, alt is the text that should be displayed

if the picture is not available.

## Controlling image  size
css provides the ability to control the image size, you simply by saying width is 400 px or height is 150 px.

```<img src="images/quokka.jpg" alt="A family of
     quokka" width="600" height ="450" />
```
## Placing images
You can place an image where ever you need to place it in your page, in a paragraph, al a list element. 

Wherever the ```<img>``` tag is provided in is provided in the html document thats where it will show. Unless you manipulated the positioning using css.

# Rules to follow
1. Store images in the correct format: chosing the wrong format results in no image when you open the site.
2. Use images with appropriate size: if its too small or too large, it will either be stretched or shrunk.
3. Use the correct resolution: Computer screens are made up of dots known as pixels. Images used on the web are also made up of tiny dots. Resolution refers

to the number of dots per inch, and most computer screens only show web pages at 72 pixels per inch.

adding color to a webpage can really bring your site to life 
# Color
There are different ways you can use to color html elements provided by css:
* rgb values : specify how much red, green, blue to make the color.
* hex codes: These are six-digit codes that represent the amount of red, green and blue in a color, preceded by a pound or hash # sign.
* color names: simply as saying black, white, red .......etc.

By know you that css treates each html element as if it lived in a box.
but how does that affect the topic, lets take the body of html document.

In css use the following code
``` 
body {
    backbround-color:red;
    color:white;
}
```
this will make the entire body of your site have a red background with white text written over it.

## Understanding colors
## every color you see on a computer screen is a mix of red, green, blue
The color of every pixel on the screen is expressed in terms of
a mix of red, green, and blue just like on a television screen.

#### but still one may ask do I have to memorize each code for each color?
There are color picker tools provided by abode and w3scools
 # what does every code mean
 * RGB Values

Values for red, green, and blue are expressed as numbers between 0 and 255.
* Hex Codes

Hex values represent values for red, green, and blue in hexadecimal code
* Color Names
* Hue

Hue is near to the colloquial idea of color.
Technically speaking however, a color can also have saturation and brightness as well as hue.
In HSL colors, hue is often represented as a color circle where the angle represents the color, although it may also be
shown as a slider with values from 0 to 360.
* Saturation

Saturation refers to the amount of gray in a color. 
At maximum saturation, there would be no gray in the color. At minimum saturation, the color would be mostly gray.

* Brightness

Brightness (or "value") refers to how much black is in a color.
At maximum brightness, there would be no black in the color.
At minimum brightness, the color would be very dark.
* lightness

Lightness is the amount of white (lightness) or black (darkness) in a color. Lightness is represented as a percentage.
0% lightness is black, 100% lightness is white, and 50% lightness is normal. Lightness is sometimes referred to as
luminosity
### Contrast
If text is reversed out (a light color on a dark background), you can increase the height between lines and the weight of the font
to make it easier to read.

To check contrast there is a handy online [tool](www.snook.ca/technical/colour_contrast/colour.html)
### OPACITY
CSS3 introduces the opacity property which allows you to specify the opacity of an element and any of its child elements.
The value is a number between 0.0 and 1.0 (so a value of 0.5 is 50% opacity and 0.15 is 15% opacity).

**The CSS3 rgba property allows you to specify a color, just like you would with an RGB value**
**but adds a fourth value to  indicate opacity**

# Text in html
**Typeface Terminology** 

* SERIF: Serif fonts have extra details on the ends of the main strokes of the letters. These details are known as serifs.
* SANS-SERIF: Sans-serif fonts have straight ends to letters, and therefore have a much cleaner design.
* MONOSPACE: Every letter in a monospace (or fixed-width) font is the same width.
* CURSIVE: Cursive fonts either have joining strokes or other cursive characteristics, like hand writing it is not straight.
* FANTASY: Usually used for titles since they are decorative fonts.

![comparing](https://www.bitdegree.org/learn/storage/media/images/0faf0b6b-ff9f-4b2d-96b5-b4642a4cfa0e.jpg)
# How to chose a typeface
Typefaces will only work if they are installed on the users computer if not the browser simply wont display them.

After listing the fontfaces and all how to use the, the following css code illustrates how to use serif.
```
font-family: Georgia, Times, serif;
```

# Techniques That Offer a Wider Choice of Typefaces

You cant just take a font and use it they are subject to copyright. The following will help you avoid any complications.

* FONT-FAMILY: You are not distributing the typeface, so there is no licensing issue.
* FONT-FACE: The license to use the font must permit its distribution using @font-face.
* SERVICED-BASED FONT-FACE: The service takes care of the licensing issues with the people who made the font.

*HOW TO SET A TYPE-FACE*

To set the font family, size use the following syntax.
```
p{
    font-family: Arial, Verdana, sans-serif;
    font-size: 12px;}
}
```
```
p{
    font-size: 2em;
}
```
```
p{
    font-size:200%;
}
```
Pixels are used when you need precise control over the font size, percenteges are relative to default size of 16px and the em is equivalent to the width of the letter m.

![comparing units](https://user.oc-static.com/upload/2018/04/30/15251064835155_fontsizes.png)

# UpperCase & LowerCase
To activate any property related to UpperCase or LowerCase use the following

```
h1 {
text-transform: uppercase;}
h2 {
text-transform: lowercase;}
.credits {
text-transform: capitalize;}
```

**The capitalize** property makes every word to be capitalized, and the other two are self explained.

# Leading
Leading (pronounced ledding) is a term typographers use for the vertical space between lines of text.

![line-height](https://th.bing.com/th/id/Refe30b60d553cb6237f9c0cbdebb240b?rik=kXNLXKpg4NFDOw&riu=http%3a%2f%2fiamvdo.me%2fcontent%2f01-blog%2f30-css-avance-metriques-des-fontes-line-height-et-vertical-align%2fline-height.png&ehk=MBbB4vjkn6%2bpsCh9I5wwEw6BG%2f1d6y5UD9OZAH56RaA%3d&risl=&pid=ImgRaw)

## Spacing in between letters and words
![letter spacing](https://th.bing.com/th/id/OIP.XpVbXGdRiNtejAT9Nvg0PAHaEc?pid=ImgDet&rs=1) 

What is the difference between the three words above? the space between letters and it is easy to set it css

```
P{
letter-spacing: 0.2em;
 }
```

You can use px, em, or even percentages what ever suites you as a developer. and you the space between words in the exact same manner just replace letter with word in the code above.

# TEXT-ALIGN

![text-align](https://hative.com/wp-content/uploads/2013/12/css-horizontal-align/css-horizontal-align-css-tricks.png)

The ```text-align``` property allows you to control the alignment of text. The property can take one of four values:

What is the code that makes you control the text as the photo above?

```
p {
text-align: center;
text-align: left;
text-align: right;
text-align: justify;
}
```

## Indenting Text

![Indenting Text](https://i.ytimg.com/vi/0aV9L6C8e9k/hqdefault.jpg)
 
 Controls the space left before the first line of the text in the html element controlled by the following:

```
p{
    text-indent: 20px;
}
```

# TEXT SHADOW
![shadow](https://www.designyourway.net/blog/wp-content/uploads/2018/08/CSS3-text-shadow-effec_-h.jpg)

Note that this property is not supported by all browsers It is used to create a drop shadow, which is a dark version of the word just behind it and

slightly offset. It can also be used to create an embossed effect by adding a shadow that is slightly lighter than the text.

The value of this property is quite complicated because it can take three lengths and a color for the drop shadow.

# Responding to Users
To change the appearance of elements that the user interact with you use the following:
* :hover: change the appearance of elements when the pointer comes over them
* :active: used to change th appearance of links or buttons when pressed so they feel like actually being pressed
* :focus: Focus occurs when a browser discovers that you are ready to interact with an element on the page

# JPEG vs PNG vs GIF
**Compression**

all data on the browser are compressed, its not logical if everysingle page you view takes a many gigabytes so how does images react when compressed.

* JPEG is a lossy compression specification that takes advantage of human perception. It can achieve compression ratios of 1:10 without any perceivable difference in quality.
* PNG is a lossless image format using DEFLATE compression. No data is lost during compression and no compression artefacts are introduced in the image. 
* GIF is also a lossless image format that uses LZW compression algorithm. It was favoured over PNG for simple graphics in websites in its early days because the support of PNG was still growing.

**Transparency**

* JPEG does not support transparency.
* PNG images support transparency in two ways — inserting an alpha channel that allows partial transparency or by declaring a single colour as transparent.
* GIF images support transparency by declaring a single colour in the colour palette as transparent.

**Colors**

* JPEG images are suitable for nature photos they can support around 16 million colours. 
* PNG images mainly have two modes — PNG8 and PNG24. PNG8 can support upto 256 colours whereas PNG24 can handle upto 16 million colours like a JPEG image.
* GIF images are limited to 256 colours. If index transparency is used, then one of these 256 colours is assigned as transparent and the remaining 255 are used for other colours.

**Animation**

Animation refers to any motion in the photo the only format that support animation is GIF and that somewhat compensate for its lake of colors.