# Step 5: Counting loops

The second part of our Collatz conjecture program counts, and does something with the number it’s counting with.

For now, let’s not worry about what it does with the number, but just focus on how the counting works.

In Ursa, the magic word (or “keyword”) $ursa{for} introduces a $note{loop,We’ll see a more fundamental form of loop later\, introduced by the $ursa{loop} keyword.}, a part of the program that is repeated, once for each value of an “iterator”, which is just a word that means here “a thing that gives a series of values”, a sort of list. In our current program, the iterator is $ursa{range}, which generates a series of numbers from $note{0 up to one less,Why does it start at 0, not 1? We’ll get to that later!} than the number you give it. Each time around the loop, the relevant value is assigned to the “loop variable”, which we’ve called $ursa{i}. In the “body” of the loop, the bit in braces, we can do whatever we want with the value.

Let’s try to do something simple (feel free to [remind yourself](../../1. Let's learn Ursa/) of what the corresponding part of our Collatz program looked like).

Note that the “Result” part of the challenge box below starts out with an error message. This is quite alright: in the “Playpen” you will see some triple question marks $ursa{???}, which are not valid Ursa code! You will need to fill them in with something that is valid to complete the challenge.

$include{../../tutorial-step.html}

$nextstep{../6. Custom functionality/,Custom functionality}
<script src="/tutorial.bundle.js"></script>