# Roadmap

*Currently more a list of desiderata than a map.*

Also see:

* The language [TODO](https://github.com/ursalang/ursa/blob/main/TODO.md)
* The issue trackers of the [Ursalang projects](https://github.com/ursalang), in particular:
  * The [language issue tracker](https://github.com/ursalang/ursa/issues)
  * The [web site issue tracker](https://github.com/ursalang/ursalang.github.io/issues)

# Areas of concern

## Documentation

* Tutorial
* Reference (language and libraries)
* Specification (ditto)
* Ursadoc

## Top-level commands

* `build`
* `install`
* `test`
* `version`
* `publish`

## Packaging

* Simple declarative format (TOML?)
* Produces a set of files (Zip)
  * Containing Ursa/Ark sources (installation may run compiler—arbitrary code!)
* Represent a package as a URL whose scheme specifies whether it points at an archive or repo; a repo can contain packages (npm-like) or sources that need building.
* Controlled namespaces (like npm) can be implemented on top of the above (i.e. we don’t mandate a single canonical repo).

## Other compiler backends

* LLVM or [BRIL]() (could be in same repo to start with)
* Scheme (implement Ark in Scheme)
* Python
* 3rd-party types (like Typeshed/DT) for C, JavaScript, Python etc. libraries: need type declarations/parsers for TypeScript, C headers, Java classes, GLib IR etc. Installation of libraries and linking will be back-end–dependent. Pragma in declarations points to code (e.g. shared library). Need “types only” syntax for module declaration. A principled way to do this:
  * Modules, first-class, have a type.
  * Allow declarations without implementation of values (or treat module declarations as interfaces?)

## Testing

Something like Rust.

## Misc

Auto-detect syntax (JSON/Ursa): use filename, file contents (for `#!`)

## Standard libraries needed

* Introspection
* Data structures
* Math
* Network (client/server; including sockets?)
* File system (including pipes?)
* Terminal?
* Graphics (Canvas ((EaselJS)[https://createjs.com/easeljs]), OpenGL/WebGL ((PixiJS)[https://pixijs.com]))
* Text rendering
* Text handling (strings)
* Sound
* Keyboard, mouse/pointer
* Parallelism
* Concurrency

(Sockets and pipes give IPC.)

All else via FFIs/pure Ursa libs.
