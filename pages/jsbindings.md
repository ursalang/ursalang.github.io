# JavaScript bindings

Ursa can use the facilities of the underlying JavaScript system. There is a general-purpose mechanism for binding globals and importing libraries.

## $ursa{use js}

$ursa{use jslib} offers a generic interface to JavaScript gloabls. $ursa{use js.foo} binds JavaScript global `foo` to the identifier $ursa{foo}.

## $ursa{use jslib}

$ursa{use jslib} offers a generic interface to JavaScript libraries. $ursa{use jslib.foo} imports the library `foo` and binds it to the identifier $ursa{foo}.
