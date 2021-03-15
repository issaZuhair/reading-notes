# Local storage
In your local machine the OS provides an abstraction layer for storing and retrieving application-specific data or runtime state.

**Cookies**: invented early in the in the webs history, they are used for presistent local storage for small amounts ofa data.

Cookies have downsides, *deal breakers*

* Cookies are included with every HTTP request, this lowers the web app performance
* sending data unencrypted over the web
* limited to 4kb of data

# Before HTML5

Microsoft included in thier browser something called DHTMLBehaviors, one of the behaviors was userData. UserData allows web pages

to store up to 64kb of data perdomain.

# Flash cookies
Within the flash enviroment the feature is properly known as Local Shared Objects, it allows Flash objects to store up to 100kb per domain.

> Neuberg developed an early prototype of a Flash-to-JavaScript bridge called AMASS (AJAX Massive Storage System),

> -- <cite>[Local storage](http://diveinto.html5doctor.com/storage.html)/cite>

As AMASS became harder, and javascript became easier and faster, Brad rewrote AMASS integrating it into Dojo Tookit.

In 2007 google launched Gears which is an open sourse plugin aimed at providing additional capabilitiesGears provide an API to an embedded SQL.

# HTML5 storage
Some vendors refere to it as local or DOM storage, but we will refer to HTML5 storage as web storage.

So what is HTML5 Storage? Simply put, it’s a way for web pages to store named key/value pairs locally, within the client web browser. Like cookies, 

this data persists even after you navigate away from the web site, close your browser tab, exit your browser, or what have you. 

Unlike cookies, this data is never transmitted to the remote web server (unless you go out of your way to send it manually).

Now that we defined HTML5 storage same as the sourse, how to use it?

Store data based on a key like your ID the goverment know you by your ID number

Like other JavaScript objects, you can treat the localStorage object as an associative array. 

Instead of using the getItem() and setItem() methods, you can simply use square brackets. For example, this snippet of code:

```
var foo = localStorage.getItem("bar");
// ...
localStorage.setItem("bar", foo);
```

# Tracking changes
Trap the storage event, The storage event is fired on the window object whenever setItem(), removeItem(), or clear() is called and actually changes something.

Where can you see it? Everywhere the localstorage object is supported

# Limitations
* Storage limits.
* Standardized HTML5 Storage.

Each origin by default have 5 megabytes of space, and keep in mind you are storing strings, not the original format of data.

# BEYOND NAMED KEY-VALUE PAIRS: COMPETING VISIONS
A new API has been standardized and implemented across all major browsers, platforms, and devices. The future is not just 5 megabytes of named key value pairs.

