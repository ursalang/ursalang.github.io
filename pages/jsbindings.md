# JavaScript bindings

Ursa can use the facilities of the underlying JavaScript system. There is a general-purpose mechanism for importing libraries, and there are ad-hoc bindings of some built-in libraries.

## Built-in facilities

* $ursa{JSON}: mirrors the JavaScript `JSON` object.
* $ursa{RegExp}: mirrors the JavaScript `RegExp` function.
* $ursa{process}: mirrors the `process` module.
* $ursa{document}: (in the DOM, or other environment with DOM) mirrors the `document` DOM element.

## $ursa{use js}

$ursa{use js} offers a generic interface to JavaScript libraries. $ursa{use js.foo} imports the library `foo` and binds it to the identifier $ursa{foo}.
