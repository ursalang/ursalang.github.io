# Step 4: What are we counting?

So, what are those numbers? They seem pretty random! To answer that, we need to know a bit more about the Collatz conjecture. It claims that if you take a whole number bigger than 1 and do the following:

* If the number is even, halve it.
* If the number is odd, multiply it by 3 and add 1.
* Repeat!

then eventually $note{you’ll end up,You might like to try this for the first few numbers\, starting from 2.} at 1.

What we’re doing is counting $note{how many times,What if the conjecture was false and our program didn’t stop? Fortunately\, we already know that won’t happen until at least a very large starting number\, as this has already been tried!} we have to repeat the above steps to reach 1, starting at 2, then 3, then 4, and so on for ten numbers ($ursa{range(10)}), which takes us up to 11.

We can now get a fairly good idea of what the second part of the program is doing.

$nextstep{../05-counting-loops/,Counting loops}