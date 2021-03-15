# CHARTS
Charts are used to display data most common in statitiscs, a pie chart is commonly used to display what percentages exhibit what phenomena.

[Charts.js](https://www.chartjs.org/) is a plugin for javascript that uses html5 ```<canvas>``` element to draw.

First [download](https://github.com/nnnick/Chart.js) and copy Chart.min.js  out of the unzipped folder.

To get started lets take an example from [chartjs.org](https://www.chartjs.org/docs/latest/)

```
<canvas id="myChart" width="400" height="400"></canvas>
<script>
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
</script>
```
And if this sample code you will find alot more on [documentation](https://www.chartjs.org/docs/latest/getting-started/usage.html).

# Basic usage of canvas
```<canvas>``` just like anyother element it can have and id, class, width.... the lot.

At first sight a ```<canvas>``` looks like the ```<img>``` element, with the only clear difference being that it doesn't have the src and alt attributes. Indeed, 

The ```<canvas>``` element has only two attributes, width and height. These are both optional and can also be set using DOM properties. When no width and height attributes are specified, 

The canvas will initially be 300 pixels wide and 150 pixels high. The element can be sized arbitrarily by CSS, 

But during rendering the image is scaled to fit its layout size: if the CSS sizing doesn't respect the ratio of the initial canvas, it will appear distorted.

It can be styled it can have rules, itt differs from the ```<img>``` in the fact that it can have fallback content in cas a browser does not support it.

```<canvas>``` requires a closing tag ```</canvas>``` if the closing tag is not provided then the rest of the html is considered as fallback content.

# The rendering context
```<canvas>``` creates a fixed-size drawing surface that exposes one or more rendering contexts, which are used to create and manipulate the content shown.

Fallbackcontent is displayed only is browsers that does not support it . Scripts can also check for support programmatically by testing for the presence of the getContext() method

# Drawing shapes

# The grid
The grid is the coordinate space 

# Rectangles 
```<canvas>```. Scripts can also check for support programmatically by testing for the presence of the getContext() method.

Any other shape you need to draw is done through combining paths to achieve the desired shape.

# Drawing text
The canvas rendering context provides two methods to render text:
1. ``` fillText(text, x, y [, maxWidth]) ```: fills text at given point with a maximum width.
2. ``` strokeText(text, x, y [, maxWidth]) ```: strokes the text at the given position.

# Advanced text measurements
 ## measureText()
 returns a [TextMetrics object](https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics) containing the width in pixels.
 ## 