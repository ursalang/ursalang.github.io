# JavaScript bindings

Ursa can use the facilities of the underlying JavaScript system. There is a general-purpose mechanism for importing libraries, and there are ad-hoc bindings of some built-in libraries.

## Built-in facilities

* `JSON`: mirrors the JavaScript `JSON` object.
* `RegExp`: mirrors the JavaScript `RegExp` function.
* `process`: mirrors the `process` module.
* `document`: (in the DOM, or other environment with DOM) mirrors the `document` DOM element.

## `use js`

`use js` offers a generic interface to JavaScript libraries. `use js.foo` imports the library `foo` and binds it to the identifier `foo`.
