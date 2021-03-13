# Images in html
### controlling the size of images
You can control the width and height of an image in your website using css, you simply set, specifiying the size is crucial.

HTML and CSS code loads before the images, so telling the browser how much space to leave makes the site loads more smoothly.

You might think that your site is likely to have images of all different sizes, but a lot of sites use the same sized image across 

many of their pages. 

## Alinging images using css
Two ways to align images
1. Using float properties: the most common used attributes to align images float left or right
2. Using postion property

Images by deafult are inline images, but what to do if you need to center the images?

Using CSS you can display them as blocks like such
```
img.align-center{
  display: block; 
  margin: 0px auto;
} 
```

## Using background images
You must have noticed that websites have background images, to set one to your site e background-image property allows you to do so.

As an example lets set a background image to the header element of your html document

```
header{
background-image: url("The url for the image here");
}
```

Now if you need to repeat the background image in both direction or one of them, the following attributes make it happen.
1. repeat: the image is repeated horizontally and vertically.
2. repeat-x: the image is repeated in the hrizontal direction.
3. repeat-y: the image is repeated in the vertical direction.
4. fixed: the image stays in its location.
5. scroll: the image moves up and down as the user scrolls.

# CSS3: Gradients
### background
Using css you can set a gradient as a background of a box "the place an element lives in"
Here is an example from the Duckett HTML book.
```
#gradient {
/* fallback color */
background-color: #66cccc;
/* fallback image */
background-image: url(images/fallback-image.png);
/* Firefox 3.6+ */
background-image: -moz-linear-gradient(#336666, 
 #66cccc);
/* Safari 4+, Chrome 1+ */
background-image: -webkit-gradient(linear, 0% 0%, 
 0% 100%, from(#66cccc), to(#336666));
/* Safari 5.1+, Chrome 10+ */
background-image: -webkit-linear-gradient(#336666, 
 #66cccc); 
/* Opera 11.10+ */
background-image: -o-linear-gradient(#336666, 
 #66cccc);
height: 150px;
width: 300px;}
```
Why are there background images in the code? not all browser support all gradients, so it is a good idea to include the background image in case the users browser does not support it.

# Practical information

# Search Engine optimaization
Search Engine Optimaization [SEO] is a huge topic and several books have been written on the subject.

### The basics
SEO is the practice of trying to help your site appear nearer the top of search engine results when people look for the topics that your website covers.

### On page techniques
On-page techniques are the methods you can use on your web pages to improve their rating in search engines.

### off-page techniques
Getting other sites to link to you is just as important as on-page techniques. Search engines help determine how to rank your 
site by looking at the number of other sites that link to yours.

# Video and audio elements
```<video>``` and ```<audio>``` tags come with their own APIs for controlling playback, seeking, etc.

# The HTMLMediaElement API
>example HTMLMediaElement.play(), HTMLMediaElement.pause(), etc. This interface is available to both <audio> and <video> elements, 
>as the features you'll want to implement are nearly identical. Let's go through an example, adding features as we go.

quoted from MDN.

You can control the audio and video in your site using css and javascript 

the MDN haev a [starter code](https://github.com/mdn/learning-area/raw/master/javascript/apis/video-audio/start/media-player-start.zip) that you can start with to understand 

> The whole player is wrapped in a``` <div>``` element, so it can all be styled as one unit if needed.

> The ```<video>``` element contains two <source> elements so that different formats can be loaded depending on the browser viewing the site.
> The controls HTML is probably the most interesting: We have four ```<button>```s — play/pause, stop, rewind, and fast forward.

> Each ```<button>``` has a class name, a data-icon attribute for defining what icon should be shown on each button (we'll show how this works in the below section), 

>and an aria-label attribute to provide an understandable description of each button, since we're not providing a human-readable label inside the tags. The contents of aria-label 

>attributes are read out by screenreaders when their users focus on the elements that contain them.

>There is also a timer ```<div>```, which will report the elapsed time when the video is playing. Just for fun, we are providing two reporting mechanisms — a ```<span>``` 

>containing the elapsed time in minutes and seconds, and an extra <div> that we will use to create a horizontal indicator bar that gets longer as the time elapses. To get an idea of what the finished product will look like, check out our finished version.

> -- <cite>MDN/cite>