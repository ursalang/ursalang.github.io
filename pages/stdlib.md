# Ursa standard library

See also:

* [JavaScript bindings](jsbindings.md)

Ursa comes with some built-in definitions:

## Information

* `version` is a string giving the current version of Ursa.

## Output

* `print` prints the given value to the output.
* `debug` dumps debugging information about the given value to the output.

## Math

The following basic constants and functions are available:

* `sqrt(x)` the square root function
* `pi` the value of π, 3.14159…
* `exp(x)` the exponential function
* `log(x)` the natural logarithm function
* `sin(x)` the sine function
* `cos(x)` the cosine function
* `tan(x)` the tangent function

## File system access

The function `fs` provides basic access to the file system. Calling it with the path of a directory returns an object whose keys are files and subdirectories in that directory, and whose values are the contents of the respective files and directories. Setting the values of keys allows you to write the contents of files. Setting a value to `null` deletes the corresponding file or directory.
