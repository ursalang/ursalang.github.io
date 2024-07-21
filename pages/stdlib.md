# Ursa standard library

See also:

* [JavaScript bindings](jsbindings.md)

Ursa comes with some built-in definitions:

## Information

* $ursa{version} is a string giving the current version of Ursa.

## Output

* $ursa{print} prints the given value to the output.
* $ursa{debug} dumps debugging information about the given value to the output.

## Math

The following basic constants and functions are available:

* $ursa{sqrt(x)} the square root function
* $ursa{pi} the value of π, 3.14159…
* $ursa{exp(x)} the exponential function
* $ursa{log(x)} the natural logarithm function
* $ursa{sin(x)} the sine function
* $ursa{cos(x)} the cosine function
* $ursa{tan(x)} the tangent function

## Utilities

The iterator $ursa{range} is provided. $ursa{range(n)} generates the integers from 0 to $ursa{n}.

## File system access

The function $ursa{fs} provides basic access to the file system. Calling it with the path of a directory returns an object whose keys are files and subdirectories in that directory, and whose values are the contents of the respective files and directories. Setting the values of keys allows you to write the contents of files. Setting a value to $ursa{null} deletes the corresponding file or directory.
