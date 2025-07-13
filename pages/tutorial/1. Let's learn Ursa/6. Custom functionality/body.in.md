# Step 6: Custom functionality

In the previous step, we wrote a simple $run(ursa.in.py,for) loop that $run(note.in.py,“printed”,The name $run(ursa.in.py,print) goes back to when computers used printers\, not screens\, to interact with their users.) some numbers. The name $run(ursa.in.py,print) refers to a “function”, which is a bundle of code. In Ursa, functions are values, and, like other values, we can give them a name. The $run(ursa.in.py,print) function is built into Ursa; but one of the fundamental features of most programming languages is the ability to define new functions.

Defining a new function is exactly what we did in the first part of our program: we defined a function and called it $run(ursa.in.py,collatz). What does it do?

Let’s look at the ‘outside’ of the function:

$run(ursabox.in.py){
fn(n) {…}
}

A function is introduced by the keyword $run(ursa.in.py,fn), which is followed by two main parts:

* The “parameters”, a list of names in parentheses
* The $run(note.in.py,“body”,The same as for a loop.), some code in braces which can refer to the parameters

Here, there is just one parameter, $run(ursa.in.py,n).

The function also “returns” a result. To see what the result, or “return value” might be, we need to look at the body. The return value can be the last value evaluated in the body of the function, or it can be a value of an explicit $run(ursa.in.py,return) expression. Which do we have? In order to answer that question, we will need to examine the function body.

$run(next-step.in.py,../7. How many steps%3F/,How many steps?)