# Step 8: Conjectural calculation

Here we get to the heart of our $ursa{collatz} function:

$ursabox{
n := (if n % 2 == 0 { n / 2 } else { n * 3 + 1 })
}

It combines multiple elements that we’ve looked at separately. At the top level, it is an assignment expression: it assigns a new value to $ursa{n}. What value? The value of a conditional, that is, of an $ursa{if}.

But wait! This $ursa{if} has a new element. Let’s look at $note{just the $ursa{if},The sharp-eyed reader will have noticed that the $ursa{if} was in parentheses; this is required by Ursa’s grammar in order to avoid ambiguity. Parentheses are often useful to remove ambiguity\, either\, as here\, for the computer\, or for the human reader.} expression:

$ursabox{
if n % 2 == 0 { n / 2 } else { n * 3 + 1 }
}

The condition of the $ursa{if} is $ursa{n % 2 == 0}. The percent is a shorthand for “remainder after division by”. So we are testing whether the remainder after dividing $ursa{n} by 2 is 0; that is, whether $ursa{n} is even.

So if $ursa{n} is even, the value of the $ursa{if} expression is $ursa{n / 2}. The forward slash $ursa{/} means division.

What if $ursa{n} is odd? This is where $ursa{else} comes in: if the condition of the $ursa{if} is false, we evaluate the $note{$ursa{else},What if there is no $ursa{else}? Good question! We’ll come back to it.} body. In this case, it is $ursa{n * 3 + 1}, that is, 3 times $ursa{n} plus 1.

So, we assign $ursa{n} to be half of itself if it’s even, or three times itself plus 1 if it’s odd. Does that sound familiar? It’s the [steps](../4. What are we counting%3F/) of the Collatz conjecture!

$nextstep{../9. What have we calculated%3F/,What have we calculated?}