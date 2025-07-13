# JavaScript bindings

Ursa can use the facilities of the underlying JavaScript system. There is a general-purpose mechanism for binding globals and importing libraries.

## $run(ursa.in.py,use js)

$run(ursa.in.py,use js) offers a generic interface to JavaScript globals. $run(ursa.in.py,use js.foo) binds JavaScript global `foo` to the identifier $run(ursa.in.py,foo).

## $run(ursa.in.py,use jslib)

$run(ursa.in.py,use jslib) offers a generic interface to JavaScript libraries. $run(ursa.in.py,use jslib.foo) imports the library `foo` and binds it to the identifier $run(ursa.in.py,foo).
