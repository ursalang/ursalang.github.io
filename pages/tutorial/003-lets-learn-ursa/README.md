# Step 3: Let’s learn Ursa!

Programming tutorials often start by printing text on the screen or showing how to use the computer as a calculator. But you can print text on the screen in a word processor, and use a calculator app for that! (Of course, there’s nothing wrong with using Ursa for calculations if you like.)

And as we said earlier, you will spend more time reading code than writing it. So let’s start by reading some code. Here it is:

<div class="ursa-code" id="collatz">
<pre>
let collatz = fn(n) {
  let steps = 0
  loop {
    if n == 1 { break steps }
    n := (if n % 2 == 0 { n / 2 } else { n * 3 + 1 })
    steps := steps + 1
  }
}

for i of range(10) {
  let n = i + 2
  print(collatz(n))
}
</pre>
</div>

<script src="/tutorial.bundle.js"></script>
