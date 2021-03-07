# Tables in html
```
<table>
 <tr>
 <th></th>
 <th scope="col">Saturday</th>
 <th scope="col">Sunday</th>
 </tr>
 <tr>
 <th scope="row">Tickets sold:</th>
 <td>120</td>
 <td>135</td>
 </tr>
 <tr>
 <th scope="row">Total sales:</th>
 <td>$600</td>
 <td>$675</td>
 </tr>
</table>
```

Take a good look at the code snip from the HTML-CSS book, you must know what a table is, it is just a way to represent dat.

The table head is where you put the name of the grouping variable, and the rows contain the data for thoes variables so kmow we are done with the ```<tr> </tr>``` and the ```<th></th>``` respectivly.

# Long tables
There are three elements that help distinguish between the main content of the table and the first and last rows (which can contain different content).

These elements help people who use screen readers and also allow you to style these sections in a different manner than the rest of the table 

What are thoes charachters?
* ``` <thead> ```
* ``` <tbody> ```
* ```<tfoot>```

# Constructor notation
The new keyword and the object constructor create and you can add the properties and methods to that object. How?

``` let hotel = new Object()``` and you have created a blank object. How to add properties?

``` 
hotel.rooms=40;
hotel.booked=20;
```
To update the properties of an object  use the dot notation or square barckets as such.

```
hotel.name='Issa';
```
or
```
hotel['name']='Issa';
```
**Object constructors have the ability to use functions as a template to create objects**

``` 
function Hotel(name,rooms,booked){
    this.name=name;
    this.rooms=rooms;
    this.booked=booked;
}
```
Now we have created the function, how to create the object.

```
let IssaHotel=new Hotel(Issa,40,25);
let JohnHotel=new Hotel(John,40,25);
```
Now we have created two objects one named IssaHotel and the other called JohnHotel.

## In case you have not noticed yet
Arrays are objects, objects are characterized by key:value pairs and arrays have that, each index "key" has a value.

# Groups of built-in objects
Each one of the three built-in groups offers a set of tools that help you build a website, it is up to ypu how you implement them.

The one we are conssered with now  is the *DOM*

# Domain modeling
A way to describe and model real world entities and the relationships between them, which collectively describe the problem domain space. 

When you try to model a phenomemna that have many instances you build self contained objects with the same attributes

Use contructors to define the attributes, remember how we talked about using functions as a template for generating objects.

Do not worry about how many methods you use, focus on how well the method does its job.

Always store created objects in a variable to access at any time