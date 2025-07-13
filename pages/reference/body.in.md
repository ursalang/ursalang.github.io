# Ursa language reference

See also:

* The [grammar](https://github.com/ursalang/ursa/blob/main/src/ursa/ursa.ohm) (made for [Ohm](https://ohmjs.org/))
* The [standard library](</stdlib/index.html>)
* The [test samples](https://github.com/ursalang/ursa/tree/main/test)
* The [Rosetta Code examples](https://rosettacode.org/wiki/Category:Ursalang)


## Introduction

Ursa is a language that is designed to look familiar to users of mainstream languages circa 2020. It is an imperative functional language that will offer static type checking and a class system that will have a circa 2000 feel. It will come with a standard library that offers file system and network access, keyboard and mouse interaction, and basic sound and graphics support.

Once it reaches maturity, it is intended to remain stable for a long time; colloquially, there will be no version 2.0. However, it has not been thoroughly designed in advance, and until it reaches version 1.0, its design is subject to change.

The rest of this document will become the language reference.


## Language basics

Ursa is a functional language: the basic syntactic unit is the *expression*. Every expression evaluates to some value.


## Comments

<p>Comments come in two flavours: single-line comments start with $run(ursa.in.py,//), and continue until the end of the line. Comments delimited with $run(ursa.in.py,/*…*/) may span multiple lines, and may be nested.</p>


## Identifiers

Identifiers, or symbols, consist of a letter or underscore followed by zero or more letters, digits and underscores. The definition of “letter” and “digit” have not yet been made precise.

$run(ursabox.in.py){
abc
_
_12
sh33p
}


## Built-in data types

The following data types are built in:

### $run(ursa.in.py,null)

A distinguished value, used as the value of expressions that have no other natural value. It has the following methods:

* $run(ursa.in.py,equals)
* $run(ursa.in.py,notEquals)

These are also available as [operators](#operators).

### Boolean

This consists of the constants $run(ursa.in.py,true) and $run(ursa.in.py,false). It has the following methods:

* $run(ursa.in.py,equals)
* $run(ursa.in.py,notEquals)
* $run(ursa.in.py,not)

These are also available as [operators](#operators).

### Number

For now, floating point. Later, integers of various sizes will be distinguished from floating point.

For now, only decimal numbers are permitted, with an optional decimal point and fractional part (no exponent notation). Later, hexadecimal and binary will also be supported, as well as exponent notation.

$run(ursabox.in.py){
3
42
-1
}

It has the following methods:

* $run(ursa.in.py,equals)
* $run(ursa.in.py,notEquals)
* $run(ursa.in.py,toString)
* $run(ursa.in.py,pos)
* $run(ursa.in.py,neg)
* $run(ursa.in.py,bitwiseNot)
* $run(ursa.in.py,lt)
* $run(ursa.in.py,leq)
* $run(ursa.in.py,gt)
* $run(ursa.in.py,geq)
* $run(ursa.in.py,add)
* $run(ursa.in.py,sub)
* $run(ursa.in.py,mul)
* $run(ursa.in.py,div)
* $run(ursa.in.py,mod)
* $run(ursa.in.py,exp)
* $run(ursa.in.py,bitwiseAnd)
* $run(ursa.in.py,bitwiseOr)
* $run(ursa.in.py,bitwiseXor)
* $run(ursa.in.py,shiftLeft)
* $run(ursa.in.py,shiftRight)
* $run(ursa.in.py,shiftRightArith)

These are also available as [operators](#operators).

### String

Unicode strings. Later, byte strings will also be supported.
For now, the same as JavaScript’s, but must be delimited with double quotes. JavaScript-style escapes are permitted.

$run(ursabox.in.py){
"abc"
"☺"
"\u2028"
}

Strings have the following methods available as [operators](#operators):

* $run(ursa.in.py,equals)
* $run(ursa.in.py,notEquals)

The following methods are also available:

* $run(ursa.in.py,get(n)) returns the $run(ursa.in.py,n)th character of the string (0-indexed).
* $run(ursa.in.py,iter()) returns an iterator for the characters of the string. 
* $run(ursa.in.py,split(sep)) returns a list of sub-strings separated by the string $run(ursa.in.py,sep).

<h3 id="list">List</h3>

Lists of arbitrary-typed values.

List literals are written between square brackets, with list items separated by commas:

$run(ursabox.in.py){
[1\, 2\, 3]
[4\, "hello"\, false]
}

Lists may be indexed (indices start at 0) and their length taken:

$run(ursabox.in.py){
[1\, 2\, 3].get(1) // 2
[1\, 2\, 3].set(1, 4) // [1, 4, 2]
[1\, 2].length // 2
}

Lists have the following methods:

* $run(ursa.in.py,len()) returns the number of elements in the list.
* $run(ursa.in.py,get(n)) returns the $run(ursa.in.py,n)th element of the list, or $run(ursa.in.py,null) if $run(ursa.in.py,n) is not a valid index.
* $run(ursa.in.py,set(n, v)) sets the $run(ursa.in.py,n)th element of the list to value $run(ursa.in.py,v). The list must already contain at least $run(ursa.in.py,n) values.
* $run(ursa.in.py,push(v)) adds the value $run(ursa.in.py,v) to the end of the list.
* $run(ursa.in.py,pop()) removes the last value from the list and returns it, or $run(ursa.in.py,null) if the list is empty.
* $run(ursa.in.py,slice([from[, to]])) returns a new list consisting of the items from $run(ursa.in.py,from) inclusive to $run(ursa.in.py,to) exclusive. If ${to} is omitted, items to the end of the original list are included in the new one. If $run(ursa.in.py,from) is also omitted, the entire list is copied.
* $run(ursa.in.py,iter()) returns an iterator (see [Iterators](#iterators)) that returns the list elements in order.
* $run(ursa.in.py,sorted()) returns a new list with the elements sorted in ascending order.
* $run(ursa.in.py,join(sep)) returns a string consisting of the elements of the list separated by the string $run(ursa.in.py,sep).

Here is an example that uses $run(ursa.in.py,iter):

$run(ursabox.in.py){
for e in [1\, 2\, 3].iter() { print(e) }
}

<h3 id="map">Map</h3>

Maps with arbitrary-types keys and values.

Map literals are written between braces, with the key and value separated by a colon, and key–value pairs separated by commas:

$run(ursabox.in.py){
{"a": 1\, "b": 2\, "c": 3}
{1: "a"\, 2: "hello"\, [1\, 2\, 3]: false}
}

Maps may be indexed. Note the final example: two lists with identical contents are not the same value!

$run(ursabox.in.py){
{"a": 1\, "b": 2\, "c": 3}.get("a") // 1
{1: "a"\, "hello": 2\, [1\, 2\, 3]: false}.set("hello", "goodbye") // {1: "a"\, "hello": "goodbye", [1\, 2\, 3]: false}
{1: "a"\, "hello": 2\, [1\, 2\, 3]: false}.set([1\, 2\, 3], "goodbye") // N.B.
}

The following methods are available:

* $run(ursa.in.py,get(k)) returns the value corresponding to key $run(ursa.in.py,k), or $run(ursa.in.py,null) if no such key exists.
* $run(ursa.in.py,set(k\, v)) sets key $run(ursa.in.py,k) to value $run(ursa.in.py,v), and returns the map.
* $run(ursa.in.py,delete(k)) removes the entry for key ${k}, if any, and returns the map.
* $run(ursa.in.py,has(k)) returns $run(ursa.in.py,true) if the map contains key ${k}, and $run(ursa.in.py,false) otherwise.
* $run(ursa.in.py,iter()) returns an iterator (see [Iterators](#iterators)) that successively returns lists of each key–value pair, in insertion order.
* $run(ursa.in.py,keys()) returns an iterator over the keys, in insertion order.
* $run(ursa.in.py,values()) returns an iterator over the values, in insertion order.

### Object

Maps of symbolic properties to arbitrarily-typed values.

Object literals are written between braces, with a property name and value separated by an equals sign:

$run(ursabox.in.py){
{a = 1\, b = [1\, 2\, 3]\, c = false}
}

Objects have two methods:

* $run(ursa.in.py,equals)
* $run(ursa.in.py,notEquals)

### Function

Functions are first-class. See the next section for more details.

Type annotations and definitions are built into the grammar, but are currently ignored, so this guide does not yet describe them.

## Code

Ursa expressions combine the built-in data types above with operators, control-flow primitives, and functions.

### Sequences

Expressions may be combined into a sequence by separating them with semi-colons. The value of a sequence is that of its last expression:

$run(ursabox.in.py){
1; 2; 3 // value: 3
4; "hello" // value: "hello"
}

Semi-colons may usually be omitted at the end of a line.

### Blocks

A block is a sequence written in curly braces. Blocks are used to clarify the syntax.

### Declarations

Constants are declared with $run(ursa.in.py,let) and variables with $run(ursa.in.py,var). Declarations must include an initial value:

$run(ursabox.in.py){
let n = 3
let s = "hello"
let l = [1\, 2\, 3]
var total = 0
}

The value of a declaration expression is the value of its right-hand side. The scope of the identifier includes the initializer; this makes it easy to define recursive functions. On the other hand, the following is not allowed:

$run(ursabox.in.py){
let x = 1     // x is 1
let x = x + 1
}

The second $run(ursa.in.py,let) redeclares $run(ursa.in.py,x), and since $run(ursa.in.py,x) has not yet been given a value when the $run(ursa.in.py,x) on the right-hand side is evaluated, an error will result.

Simultaneous declarations may be made, separated by $run(ursa.in.py,and), which allows mutually-recursive functions to be written easily.

$run(ursabox.in.py){
let a = 3 and let b = 4
}

<h3 id="operators">Operators</h3>

The following operators are available. They are given in decreasing order of precedence.

#### Unary operators

* $run(ursa.in.py,not) logical not
* $run(ursa.in.py,~) bitwise not
* $run(ursa.in.py,+) the identity operation on numbers
* $run(ursa.in.py,-) negation

#### Binary operators

* $run(ursa.in.py,**) exponentiation
* $run(ursa.in.py,*) product
* $run(ursa.in.py,/) quotient
* $run(ursa.in.py,%) remainder
* $run(ursa.in.py,+) addition
* $run(ursa.in.py,-) subtraction
* $run(ursa.in.py,==) equals (value equality for atomic values, reference equality for containers)
* $run(ursa.in.py,!=) not equals
* $run(ursa.in.py,<) less than
* $run(ursa.in.py,<=) less than or equal
* $run(ursa.in.py,>) greater than
* $run(ursa.in.py,>=) greater than or equal
* $run(ursa.in.py,&) bitwise and
* $run(ursa.in.py,^) bitwise exclusive-or
* $run(ursa.in.py,|) bitwise or
* $run(ursa.in.py,<<) left shift
* $run(ursa.in.py,>>) arithmetic right shift
* $run(ursa.in.py,>>>) logical right shift

### Assignments

A variable or object property may be assigned to with the assignment operator $run(ursa.in.py,:=):

$run(ursabox.in.py){
var x = 1
x := x + 1 // x is now 2
}

The value of an assignment expression is the value of its right-hand side.

### Conditionals

The $run(ursa.in.py,if)…$run(ursa.in.py,else) form is used to evaluate expressions conditionally. $run(ursa.in.py,if) is followed by the condition; if it evaluates to true, the block following the condition will be evaluated; otherwise the block following $run(ursa.in.py,else) will be:

$run(ursabox.in.py){
if true {1} else {2} // value: 1
if false {3} else {4} // value: 4
}

Conditional expressions can be chained:

$run(ursabox.in.py){
if false {1} else if false {2} else {3} // value: 3
}

The short-circuit boolean operators $run(ursa.in.py,and) and $run(ursa.in.py,or) are also provided. $run(ursa.in.py,and) evaluates its right-hand operand only if its left-hand operand is true. $run(ursa.in.py,or) evaluates its right-hand operand only if its left-hand operand is false:

$run(ursabox.in.py){
true and 2  // value: 2
false and 2 // value: false
false or 2  // value: 2
true or 2   // value: true
}

For now, values are considered to be true or false as they would be in JavaScript; in future, only boolean values will be allowed.

### Loops

A general loop is written with the $run(ursa.in.py,loop) operator followed by a block:

$run(ursabox.in.py){
loop {} // loop forever
}

To exit a loop, use a $run(ursa.in.py,break) expression. The value of a loop, if it terminates, is the value supplied to $run(ursa.in.py,break), if any; otherwise $run(ursa.in.py,null).

$run(ursabox.in.py){
loop { break 4 } // value: 4
}

The $run(ursa.in.py,continue) expression jumps back to the top of a loop.

There is a special form of loop for use with an iterator function, $run(ursa.in.py,for):

$run(ursabox.in.py){
for i of range(5) { print (i) }
}

See [Iterators](#iterators).

### Functions

Functions are first-class in Ursa. A function is written using the $run(ursa.in.py,fn) keyword, followed by its formal parameters in parentheses, followed by its body as a block. The function parameters are constant (as if declared with $run(ursa.in.py,let)). The value of a function is the value of the last expression evaluated before it returns, or the value given with $run(ursa.in.py,return), if any, or $run(ursa.in.py,null). Functions are called by adding parentheses containing zero or more arguments to a function value:

$run(ursabox.in.py){
let f = fn(x) { x + 1 }
f(1) // value: 2
}

<h3 id="iterators">Iterators</h3>

An iterator is just a function, but to be useful it should return a different value each time it is called, and then $run(ursa.in.py,null) when there are no more values. [Lists](#lists) and [maps](#maps) provide an $run(ursa.in.py,iter) method that iterates over the elements of the list or map. Iterators are often written using [Generators](#generators).

<h4 id="generators">Generators</h4>

Generators are functions where a single invocation can be called and return more than once. When a generator function is called, it returns a function that successively returns the values of the generator, until it returns $run(ursa.in.py,null). After that, the generator will only return $run(ursa.in.py,null).

The $run(ursa.in.py,yield) keyword is used to return a value from a generator. If $run(ursa.in.py,return) is used in a generator, then it will stop at that point.

Generators are introduced with the keyword $run(ursa.in.py,gen) (instead of $run(ursa.in.py,fn)), and $run(ursa.in.py,yield) may only be used in generators.

Here is an example of a generator that takes a list as input, and returns its values, doubled:

$run(ursabox.in.py){
let g = gen(l) {
    for n of l.iter() { yield n * 2 }
}
}

When a generator is called, it takes a single argument which becomes the value of the $run(ursa.in.py,yield) expression. Here is an example of a generator that keeps a running total and returns the current total on each call:

$run(ursabox.in.py){
let totalizer = gen() {
    var i = 0
    loop {
        i := i + (yield i)
    }
}
let t = totalizer()
print(t(0)) // prints: 0
print(t(3)) // prints: 3
print(t(2)) // prints: 5
}


### Asynchronous execution

_This area of Ursa is under development and will change in some details._

It is possible to make an expression run asynchronously by prefixing it with `launch`. This gives an “operation”.

$run(ursabox.in.py){
let p = launch f()
g() // g may be called before f returns
}

Operations can be “awaited”:

$run(ursabox.in.py){
let x = await p // x now has the value computed by f()
}

When the main program stops running, any currently-running operations are also stopped.

### $run(ursa.in.py,use)

The $run(ursa.in.py,use) expression imports definitions from outside the current module. The expression $run(ursa.in.py,use x.y.z) is equivalent to $run(ursa.in.py,let z = x.use("y.z")).