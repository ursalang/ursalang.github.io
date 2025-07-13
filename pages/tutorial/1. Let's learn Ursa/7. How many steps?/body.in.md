# Step 7: How many steps?

Now let’s look at the body of the function:

$run(ursabox.in.py){
var steps = 0
loop {
  if n == 1 { break steps }
  n := (if n % 2 == 0 { n / 2 } else { n * 3 + 1 })
  steps := steps + 1
}
}

What does this do? Notice the variable $run(ursa.in.py,steps): that seems to be a key; it’s mentioned several times. If we focus just on the $run(ursa.in.py,steps) variable, we get this view of the code:

$run(ursabox.in.py){
var steps = 0
loop {
  if n == 1 { break steps }
  …
  steps := steps + 1
}
}

We’re counting again! We have a $run(ursa.in.py,loop), the “more fundamental form” promised [earlier](<../5. Counting loops/>). This sort of loop will repeat until it is $run(note.in.py,explicitly stopped,Or until the “flow of control”\, as we say\, escapes in some other way\, as we’ll see later.) with a $run(ursa.in.py,break) expression. Almost always, such a $run(ursa.in.py,break) will be “conditional”; that is, it will depend on some condition being fulfilled; otherwise, the loop will never repeat, which is rather pointless.

Each time around this loop, the variable $run(ursa.in.py,steps) is increased by 1. How? The expression $run(ursa.in.py,steps := steps + 1) sets, or “assigns” the variable $run(ursa.in.py,steps) to the value $run(ursa.in.py,steps + 1).

When do we stop the loop? When the variable $run(ursa.in.py,n) is equal to 1: in the expression $run(ursa.in.py,if n == 1 { break steps}) we see our first conditional expression, or $run(ursa.in.py,if) expression. This has two parts: the condition, and the $run(note.in.py,body,Hopefully you are beginning to notice a consistent use of the word “body” to mean something like “the main part of an expression”.). Here, the condition is $run(ursa.in.py,n == 1). This tests whether the variable $run(ursa.in.py,n) is equal to be number 1. If it is, we evaluate $run(ursa.in.py,break steps), which exits the loop, making the value of the loop expression $run(ursa.in.py,steps). Since the loop is the last expression in the function body, that is also the value of the function.

> A quick aside: notice that we have three quite similar symbols which do different things:
>
> * $run(ursa.in.py,=) which we use to give the initial value of a variable in a $run(ursa.in.py,let) expression (more on that later)
> * $run(ursa.in.py,:=) which we use to assign a new value to an existing variable
> * $run(ursa.in.py,==) which we use to test equality of two values

So, how many steps do we take? To find out, we need to examine the bit of the function body we omitted above.

$run(next-step.in.py,../8. Conjectural calculation/,Conjectural calculation)