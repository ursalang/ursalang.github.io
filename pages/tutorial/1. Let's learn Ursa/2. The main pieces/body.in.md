# Step 2: The main pieces

Let’s take another look at the program, but this time just at its top-level structure:

<div class="highlight"><code>
$run(ursa2html.in.py,$path,collatz-main-pieces.ursa)
</code></div>

We’ve $run(note.in.py,left out,See the odd colouring on the ellipses (three dots)? That indicates that they are not valid Ursa code! And indeed\, if you try to run this version of the code\, Ursa will give an error.) most of the code. We’re left with two pieces:

* The first starts $run(ursa.in.py,let collatz =). You can pronounce this “let collatz equal”. This is called a “$run(note.in.py,declaration,An old-fashioned style of declaration that might be familiar is “Let there be light!”)”, and it declares the name $run(ursa.in.py,collatz) to refer to whatever comes after the equals sign.
* The second starts $run(ursa.in.py,for i in range(10)). We’ll see what this does next.

$run(next-step.in.py,../3. A range of answers/,A range of answers)