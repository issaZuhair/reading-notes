# JavaScript Debugging
JavaScript interpreter executes one line of code at a time, when a statement needs data from otherit stacks it on top

# phases to execute 
1. Prepare:

Tyoe your code, call your functions before they are declared, and assign a value to a variable that is not decleared

**Each execution context also creates its own vari ab 1 es object. This object contains details of all of the variables, functions, and parameters for that  execution contex**

2. Execute:

Assign values to variables, refrence your functions.

Lexical scope: functions are linked to the object they were defined in 

# UNDERSTANDING ERRORS 
When the interpreter runs into an error it throughs and  exception, it stops the execution and looks for anexception handeling code

Why you need them? of an error is handeled the exexcution stops.

# Error objects
Error objects contain the following properties.
1. Name
2. Message
3. File number
4. Line number

# Steps to handle errors
**Errors are not always your enemy**

Debug the script track down the source of the error, and fix it. Handle the gracefully You can handle errors gracefully using try, catch, throw, and fina1ly statements. 

and alwasys ask two questions, What is th eproblem and Where is the problem.

