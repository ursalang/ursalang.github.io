# Step 2: The main pieces

Let’s take another look at the program, but this time just at its top-level structure:

$pasteconvert{collatz-main-pieces.ursa}

We’ve $note{left out,See the odd colouring on the ellipses (three dots)? That indicates that they are not valid Ursa code! And indeed\, if you try to run this version of the code\, Ursa will give an error.} most of the code. We’re left with two pieces:

* The first starts $ursa{let collatz =}. You can pronounce this “let collatz equal”. This is called a “$note{declaration,An old-fashioned style of declaration that might be familiar is “Let there be light!”}”, and it declares the name $ursa{collatz} to refer to whatever comes after the equals sign.
* The second starts $ursa{for i of range(10)}. We’ll see what this does next.

$nextstep{../03-a-range-of-answers/,A range of answers}