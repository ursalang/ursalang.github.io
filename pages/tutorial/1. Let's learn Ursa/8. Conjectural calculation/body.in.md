# Step 8: Conjectural calculation

Here we get to the heart of our $run(ursa.in.py,collatz) function:

$run(ursabox.in.py){
n := (if n % 2 == 0 { n / 2 } else { n * 3 + 1 })
}

It combines multiple elements that we’ve looked at separately. At the top level, it is an assignment expression: it assigns a new value to $run(ursa.in.py,n). What value? The value of a conditional, that is, of an $run(ursa.in.py,if).

But wait! This $run(ursa.in.py,if) has a new element. Let’s look at $run(note.in.py,just the $run(ursa.in.py,if),The sharp-eyed reader will have noticed that the $run(ursa.in.py,if) was in parentheses; this is required by Ursa’s grammar in order to avoid ambiguity. Parentheses are often useful to remove ambiguity\, either\, as here\, for the computer\, or for the human reader.) expression:

$run(ursabox.in.py){
if n % 2 == 0 { n / 2 } else { n * 3 + 1 }
}

The condition of the $run(ursa.in.py,if) is $run(ursa.in.py,n % 2 == 0). The percent is a shorthand for “remainder after division by”. So we are testing whether the remainder after dividing $run(ursa.in.py,n) by 2 is 0; that is, whether $run(ursa.in.py,n) is even.

So if $run(ursa.in.py,n) is even, the value of the $run(ursa.in.py,if) expression is $run(ursa.in.py,n / 2). The forward slash $run(ursa.in.py,/) means division.

What if $run(ursa.in.py,n) is odd? This is where $run(ursa.in.py,else) comes in: if the condition of the $run(ursa.in.py,if) is false, we evaluate the $run(note.in.py,$run(ursa.in.py,else),What if there is no $run(ursa.in.py,else)? Good question! We’ll come back to it.) body. In this case, it is $run(ursa.in.py,n * 3 + 1), that is, 3 times $run(ursa.in.py,n) plus 1.

So, we assign $run(ursa.in.py,n) to be half of itself if it’s even, or three times itself plus 1 if it’s odd. Does that sound familiar? It’s the [steps](<../4. What are we counting%3F/>) of the Collatz conjecture!

$run(next-step.in.py,../9. What have we calculated%3F/,What have we calculated?)