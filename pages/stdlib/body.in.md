# Ursa standard library

See also:

* [JavaScript bindings](</jsbindings/index.html>)

Ursa comes with some built-in definitions:

## Information

* $run(ursa.in.py,version) is a string giving the current version of Ursa.

## Output

* $run(ursa.in.py,print) prints the given value to the output.
* $run(ursa.in.py,debug) dumps debugging information about the given value to the output.

## Math

The following basic constants and functions are available:

* $run(ursa.in.py,sqrt(x)) the square root function
* $run(ursa.in.py,pi) the value of π, 3.14159…
* $run(ursa.in.py,exp(x)) the exponential function
* $run(ursa.in.py,log(x)) the natural logarithm function
* $run(ursa.in.py,sin(x)) the sine function
* $run(ursa.in.py,cos(x)) the cosine function
* $run(ursa.in.py,tan(x)) the tangent function

## Utilities

The iterator $run(ursa.in.py,range) is provided. $run(ursa.in.py,range(n)) generates the integers from 0 to $run(ursa.in.py,n).

## File system access

The function $run(ursa.in.py,fs) provides basic access to the file system. Calling it with the path of a directory returns an object whose keys are files and subdirectories in that directory, and whose values are the contents of the respective files and directories. Setting the values of keys allows you to write the contents of files. Setting a value to $run(ursa.in.py,null) deletes the corresponding file or directory.
