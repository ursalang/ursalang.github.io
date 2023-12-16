# Ursa language reference

See also:

* The [grammar](https://github.com/ursalang/ursa/blob/main/src/ursa/ursa.ohm) (made for [Ohm](https://ohmjs.org/))
* The [standard library](stdlib.md)
* The [test samples](https://github.com/ursalang/ursa/tree/main/test)
* The [Rosetta Code examples](https://rosettacode.org/wiki/Category:Ursalang)


## Introduction

Ursa is a language that is designed to look familiar to users of mainstream languages circa 2020. It is an imperative functional language that will offer static type checking and a class system that will have a circa 2000 feel. It will come with a standard library that offers file system and network access, keyboard and mouse interaction, and basic sound and graphics support.

Once it reaches maturity, it is intended to remain stable for a long time; colloquially, there will be no version 2.0. However, it has not been thoroughly designed in advance, and until it reaches version 1.0, its design is subject to change.

The rest of this document will become the language reference.


## Language basics

Ursa is a functional language: the basic syntactic unit is the *expression*. Every expression evaluates to some value.


## Comments

Comments come in two flavours: single-line comments start with $ursa{//}, and continue until the end of the line. Comments delimited with $ursa{/\*…\*/} may span multiple lines, and may be nested.


## Identifiers

Identifiers, or symbols, consist of a letter or underscore followed by zero or more letters, digits and underscores. The definition of “letter” and “digit” have not yet been made precise.

$ursabox{
abc
_
_12
sh33p
}


## Built-in data types

The following data types are built in:

* $ursa{null}: a distinguished value, used as the value of expressions that have no other natural value.
* Boolean: the constants $ursa{true} and $ursa{false}.
* Number: for now, floating point. Later, integers of various sizes will be distinguished from floating point.
* String: Unicode strings. Later, byte strings will also be supported.
* List: lists of arbitrary-typed values.
* Map: maps with arbitrary-types keys and values.
* Object: maps of symbolic properties to arbitrarily-typed values.
* Function: functions are first-class. See the next section for more details.


### Numbers

For now, only decimal numbers are permitted, with an optional decimal point and fractional part (no exponent notation). Later, hexadecimal and binary will also be supported, as well as exponent notation.

$ursabox{
3
42
-1
}

### Strings

For now, the same as JavaScript’s, but must be delimited with double quotes. JavaScript-style escapes are permitted.

$ursabox{
"abc"
"☺"
"\u2028"
}

<h3 id="lists">Lists</h3>

List literals are written between square brackets, with list items separated by commas:

$ursabox{
[1\, 2\, 3]
[4\, "hello"\, false]
}
Lists may be indexed (indices start at 0) and their length taken:

$ursabox{
[1\, 2\, 3][1] // 2
[1\, 2].length // also 2
}
Lists have an iterator method $ursa{iter} (see [Iterators](#iterators)) that returns the list elements in order:

$ursabox{
for e in [1\, 2\, 3].iter() { print(e) }
}

<h3 id="maps">Maps</h3>

Map literals are written between braces, with the key and value separated by a colon, and key–value pairs separated by commas:

$ursabox{
{"a": 1\, "b": 2\, "c": 3}
{1: "a"\, 2: "hello"\, [1\, 2\, 3]: false}
}
Maps have an iterator method $ursa{iter} (see [Iterators](#iterators)) that returns each key–value pair as a list of two elements, in insertion order.

### Objects

Object literals are written between braces, with a property name and value separated by an equals sign:

$ursabox{
{a = 1\, b = [1\, 2\, 3]\, c = false}
}


## Code

Ursa expressions combine the built-in data types above with operators, control-flow primitives, and functions.

### Sequences

Expressions may be combined into a sequence by separating them with semi-colons. The value of a sequence is that of its last expression:

$ursabox{
1; 2; 3 // value: 3
4; "hello" // value: "hello"
}
Semi-colons may usually be omitted at the end of a line.

### Blocks

A block is a sequence written in curly braces. Blocks are used to clarify the syntax.

### Declarations

Variables are declared with $ursa{let}, and must always include an initial value:

$ursabox{
let n = 3
let s = "hello"
let l = [1\, 2\, 3]
}
The value of a declaration expression is the value of its right-hand side. The scope of the identifier includes the initializer; this makes it easy to define recursive functions. On the other hand, the following is not allowed:

$ursabox{
let x = 1     // x is 1
let x = x + 1
}
The second $ursa{let} redeclares $ursa{x}, and since $ursa{x} has not yet been given a value when the $ursa{x} on the right-hand side is evaluated, an error will result.

Simultaneous declarations may be made, separated by $ursa{and}, which allows mutually-recursive functions to be written easily.

$ursabox{
let a = 3 and let b = 4
}

### Operators

The following operators are available. They are given in decreasing order of precedence.


#### Unary operators

* $ursa{not} logical not
* $ursa{~} bitwise not
* $ursa{+} the identity operation on numbers
* $ursa{-} negation

#### Binary operators

* $ursa{**} exponentiation
* $ursa{*} product
* $ursa{/} quotient
* $ursa{%} remainder
* $ursa{+} addition
* $ursa{-} subtraction
* $ursa{==} equals (value equality for atomic values, reference equality for containers)
* $ursa{!=} not equals
* $ursa{<} less than
* $ursa{<=} less than or equal
* $ursa{>} greater than
* $ursa{>=} greater than or equal
* $ursa{&} bitwise and
* $ursa{^} bitwise exclusive-or
* $ursa{|} bitwise or
* $ursa{<<} left shift
* $ursa{>>} arithmetic right shift
* $ursa{>>>} logical right shift

### Assignments

A variable may be assigned to with the assignment operator $ursa{:=}:

$ursabox{
let x = 1
x := x + 1 // x is now 2
}
The value of an assignment expression is the value of its right-hand side.

### Conditionals

The $ursa{if}…$ursa{else} form is used to evaluate expressions conditionally. $ursa{if} is followed by the condition; if it evaluates to true, the block following the condition will be evaluated; otherwise the block following $ursa{else} will be:

$ursabox{
if true {1} else {2} // value: 1
if false {3} else {4} // value: 4
}
Conditional expressions can be chained:

$ursabox{
if false {1} else if false {2} else {3} // value: 3
}
The short-circuit boolean operators $ursa{and} and $ursa{or} are also provided. $ursa{and} evaluates its right-hand operand only if its left-hand operand is true. $ursa{or} evaluates its right-hand operand only if its left-hand operand is false:

$ursabox{
true and 2  // value: 2
false and 2 // value: false
false or 2  // value: 2
true or 2   // value: true
}
For now, values are considered to be true or false as they would be in JavaScript; in future, only boolean values will be allowed.

### Loops

A general loop is written with the $ursa{loop} operator followed by a block:

$ursabox{
loop {} // loop forever
}
To exit a loop, use a $ursa{break} expression. The value of a loop, if it terminates, is the value supplied to $ursa{break}, if any; otherwise $ursa{null}.

$ursabox{
loop { break 4 } // value: 4
}
The $ursa{continue} expression jumps back to the top of a loop.

There is a special form of loop for use with an iterator function, $ursa{for}:

$ursabox{
for i of range(5) { print (i) }
}
See [Iterators](#iterators).

### Functions

Functions are first-class in Ursa. A function is written using the $ursa{fn} keyword, followed by its formal parameters in parentheses, followed by its body as a block. The value of a function is the value of the last expression evaluated before it returns, or the value given with $ursa{return}, if any, or $ursa{null}. Functions are called by adding parentheses containing zero or more arguments to a function value

$ursa{
let f = fn(x) { x + 1 }
f(1) // value: 2
}

<h3 id="iterators">Iterators</h3>

An iterator is just a function, but to be useful it should return a different value each time it is called, and then $ursa{null} when there are no more values. [Lists](#lists) and [maps](#maps) provide an $ursa{iter} method that iterates over the elements of the list or map.

### $ursa{use}

The $ursa{use} expression imports definitions from outside the current module. The expression $ursa{use x.y.z} is equivalent to $ursa{let z = x.use("y.z")}.