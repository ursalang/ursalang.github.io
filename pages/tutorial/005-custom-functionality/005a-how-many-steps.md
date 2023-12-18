# Step 5a: How many steps?

Now let’s look at the body of the function:

$ursabox{
let steps = 0
loop {
  if n == 1 { break steps }
  n := (if n % 2 == 0 { n / 2 } else { n * 3 + 1 })
  steps := steps + 1
}
}

What does this do? Notice the variable $ursa{steps}: that seems to be a key; it’s mentioned several times. If we focus just on the $ursa{steps} variable, we get this view of the code:

$ursabox{
let steps = 0
loop {
  if n == 1 { break steps }
  …
  steps := steps + 1
}
}

We’re counting again! We have a $ursa{loop}, the “more fundamental form” promised [earlier](../004-counting-loops/). This sort of loop will repeat until it is $note{explicitly stopped,Or until the “flow of control”\, as we say\, escapes in some other way\, as we’ll see later.} with a $ursa{break} expression. Almost always, such a $ursa{break} will be “conditional”; that is, it will depend on some condition being fulfilled; otherwise, the loop will never repeat, which is rather pointless.

Each time around this loop, the variable $ursa{steps} is increased by 1. How? The expression $ursa{steps := steps + 1} sets, or “assigns” the variable $ursa{steps} to the value ${steps + 1}.

When do we stop the loop? When the variable $ursa{n} is equal to 1: in the expression $ursa{if n == 1 { break steps}} we see our first conditional expression, or $ursa{if} expression. This has two parts: the condition, and the $note{body,Hopefully you are beginning to notice a consistent use of the word “body” to mean something like “the main part of an expression”.}. Here, the condition is $ursa{n == 1}. This tests whether the variable $ursa{n} is equal to be number 1. If it is, we evaluate $ursa{break steps}, which exits the loop, making the value of the loop expression $ursa{steps}. Since the loop is the last expression in the function body, that is also the value of the function.

> A quick aside: notice that we have three quite similar symbols which do different things:
> 
> * $ursa{=} which we use to give the initial value of a variable in a $ursa{let} expression (more on that later)
> * $ursa{:=} which we use to assign a new value to an existing variable
> * $ursa{==} which we use to test equality of two values 

So, how many steps do we take? To find out, we need to examine the bit of the function body we omitted above.

$nextstep{005b-conjectural-calculation.md,Conjectural calculation}