# Ursa language reference

*Under construction.*

For now, see also:

* The [grammar](https://github.com/ursalang/ursa/blob/main/src/ursa/ursa.ohm) (made for [Ohm](https://ohmjs.org/))
* The [abstract syntax and interpreter](https://github.com/ursalang/ursa/blob/main/src/ark/interp.ts)
* The [test samples](https://github.com/ursalang/ursa/tree/main/test)
* The [Rosetta Code examples](https://rosettacode.org/wiki/Category:Ursalang)


## Introduction

Ursa is a language that is designed to look familiar to users of mainstream languages circa 2020. It is an imperative functional language that will offer static type checking and a class system that will have a circa 2000 feel. It will come with a standard library that offers file system and network access, keyboard and mouse interaction, and basic sound and graphics support.

Once it reaches maturity, it is intended to remain stable for a long time; colloquially, there will be no version 2.0. However, it has not been thoroughly designed in advance, and until it reaches version 1.0, its design is subject to change.

The rest of this document will become the language reference.


## Language basics

Ursa is a functional language: the basic syntactic unit is the *expression*. Every expression evaluates to some value.


## Comments

For now, single-line comments starting with `//` are allowed. Comments delimited with `/*`…`*/` will be added, which may be nested.


## Identifiers

Identifiers, or symbols, consist of a letter or underscore followed by zero or more letters, digits and underscores. The definition of “letter” and “digit” have not yet been made precise.

```
abc
_
_12
sh33p
```


## Built-in data types

The following data types are built in:

* `null`: a distinguished value, used as the value of expressions that have no other natural value.
* Boolean: the constants `true` and `false`.
* Number: for now, floating point. Later, integers of various sizes will be distinguished from floating point.
* String: Unicode strings. Later, byte strings will also be supported.
* List: lists of arbitrary-typed values.
* Map: maps with arbitrary-types keys and values.
* Object: maps of symbolic properties to arbitrarily-typed values.
* Function: functions are first-class. See the next section for more details.


### Number syntax

For now, only decimal numbers are permitted, with an optional decimal point and fractional part (no exponent notation). Later, hexadecimal and binary will also be supported, as well as exponent notation.

```
3
42
-1
```

### String syntax

For now, the same as JavaScripts, but must be delimited with double quotes. JavaScript-style escapes are permitted.

```
"abc"
"☺"
"\u2028"
```

### List syntax

List literals are written between square brackets, with list items separated by commas:

```
[1, 2, 3]
[4, "hello", false]
```

Lists may be indexed (indices start at 0) and their length taken:

```
[1, 2, 3][1] // 2
[1, 2].length // also 2
```

### Maps

Map literals are written between braces, with the key and value separated by a colon, and key–value pairs separated by commas:

```
{"a": 1, "b": 2, "c": 3}
{1: "a", 2: "hello", [1, 2, 3]: false}
```

### Objects

Object literals are written between braces in the same way as maps. The keys must be identifiers, which are treated as literal symbols, and the values may be of any type:

```
{a: 1, b: [1, 2, 3], c: false}
```


## Code

Ursa expressions combine the built-in data types above with operators, control-flow primitives, and functions.

### Sequences

Expressions may be combined into a sequence by separating them with semi-colons. The value of a sequence is that of its last expression:

```
1; 2; 3 // value: 3
4; "hello" // value: "hello"
```

Semi-colons may usually be omitted at the end of a line.

### Blocks

A block is a sequence written in curly braces. Blocks are used to clarify the syntax.

### Declarations

Variables are declared with `let`, and must always include an initial value:

```
let n = 3
let s = "hello"
let l = [1, 2, 3]
```

The value of a declaration expression is `null`. The scope of the identifier includes the initializer; this makes it easy to define recursive functions. On the other hand, the following is not allowed:

```
let x = 1     // x is 1
let x = x + 1
```

The second `let` redeclares `x`, and since `x` has not yet been given a value when the `x` on the right-hand side is evaluated, an error will result.

Simultaneous declarations may be made, separated by `and`, which allows mutually-recursive functions to be written easily.

```
let a = 3 and let b = 4
```

### Operators

The following operators are available. They are given in decreasing order of precedence.


#### Unary operators

* `not` logical not
* `~` bitwise not
* `+` the identity operation on numbers
* `-` negation

#### Binary operators

* `**` exponentiation
* `*` product
* `/` quotient
* `%` remainder
* `+` addition
* `-` subtraction
* `==` equals (value equality for atomic values, reference equality for containers)
* `!=` not equals
* `<` less than
* `<=` less than or equal
* `>` greater than
* `>=` greater than or equal
* `&` bitwise and
* `^` bitwise exclusive-or
* `|` bitwise or
* `<<` left shift
* `>>` arithmetic right shift
* `>>>` logical right shift

### Assignments

A variable may be assigned to with the assignment operator `:=`:

```
let x = 1
x := x + 1 // x is now 2
```

The value of an assignment expression is the value of its right-hand side.

### Conditionals

The `if…else` form is used to evaluate expressions conditionally. `if` is followed by the condition; if it evaluates to true, the block following `if` will be evaluated; otherwise the block following `else` will be:

```
if true {1} else {2} // value: 1
if false {3} else {4} // value: 4
```

Conditional expressions can be chained:

```
if false {1} else if false {2} else {3} // value: 3
```

The short-circuit boolean operators `and` and `or` are also provided. `and` evaluates its right-hand operand only if its left-hand operand is true. `or` evaluates its right-hand operand only if its left-hand operand is false:

```
true and 2  // value: 2
false and 2 // value: false
false or 2  // value: 2
true or 2   // value: true
```

For now, values are considered to be true or false as they would be in JavaScript; in future, only boolean values will be allowed.

### Loops

A loop is written with the `loop` operator followed by a block:

```
loop {} // loop forever
```

To exit a loop, use a `break` expression. The value of a loop, if it terminates, is the value supplied to `break`, if any; otherwise `null`.

```
loop { break 4 } // value: 4
```

The `continue` expression jumps back to the top of a loop.

### Functions

Functions are first-class in Ursa. A function is written using the `fn` keyword, followed by its formal parameters in parentheses, followed by its body as a block. The value of a function is the value of the last expression evaluated before it returns, or the value given with `return`, if any, or `null`. Functions are called by adding parentheses containing zero or more arguments to a function value

```
let f = fn(x) { x + 1 }
f(1) // value: 2
```

### `use`

*To be written.*
