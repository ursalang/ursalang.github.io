# News

A summary of the main events around and about Ursa.

## 2023

### 16 November 2023

Release 0.1.6 adds long comments, long and literal strings, and bug fixes for bugs that unfortunately crept into the last few releases owing to problems with the tests not being run correctly. The tests have been improved to try to avoid this happening again!

### 13 November 2023

Ursa has long comments. Note: there’s no new release of Ursa itself, just of the Ohm grammar. The easiest way tgo update is to uninstall and reinstall Ursa. All of the editing modes have also been updated, and the VS Code extension has been [published](https://marketplace.visualstudio.com/items?itemName=ursalang.ursa-vscode) in the Visual Studio Marketplace!

### 12 November 2023

The [tutorial](tutorial) is underway!

### 11 November 2023

A quick series of releases ending in 0.1.5 improves the code quality in preparation for development towards 0.2. There are some documentation fixes too.

### 8 November 2023

Release 0.1.1 splits the code base into 3 packages: Ark, the Ohm grammar, and the Ursa compiler/REPL. There’s some minor bug fixes and tidying up, too.

### 4 November 2023

Release 0.1 reached! This is really just release 0.0.17, made just before, which improves both compile- and run-time error messages. At compile-time, undefined symbols give an error with a source location; meanwhile, run-time errors now show a stack backtrace.

A couple more Rosetta Code tasks have been completed, and the web site’s home page now shows the latest release and its release notes.

### 31 October 2023

Release 0.0.16 allows `let` bindings to persist in the REPL, which makes the REPL reasonably usable for the first time. It is possible to have sessions like the following:

```ursa
Welcome to Ursa 0.0.16.
> let a = 3
3
> a + 4
7
> 
```

### 30 October 2023

An initial bare-bones version of the [language reference](reference.md) is up.

### 24 October 2023

Release 0.0.15 improves the language in various small ways: simultaneous declarations are now possible with `let…and let…`, making it easier to write mutually recursive functions. The assignment operator has been changed to `:=`. Various under-the-hood improvements and fixes have been made.

A new web page of “Ursalang tasks” has been created on [Rosetta Code](https://rosettacode.org/wiki/Tasks_not_implemented_in_Ursalang).

### 19 October 2023

Release 0.0.14 adds some library facilities, and improves the `argv` interface. The design of the “standard library” is by no means final; the idea is just to make it easy to write somewhat useful Ursa programs! There's a test program `syms.ursa` in the `test` directory that lists the words in its input file.

The syntax colouring modes have been updated to colour `and`, `or` and `not` better, typically as keywords.

### 17 October 2023

Release 0.0.13 adds the support for DOM hacking to Ursa itself, and adds shebang support, so that Ursa scripts can now be run directly by adding a line at the start that says something like `#!/usr/bin/env ursa`.

The various editing and highlighting modes now support shebang lines, and the Pygments lexer is now a fully-fledged plugin that can be installed with `pip` like any other Python package.

### 16 October 2023

Release 0.0.12 fixes some bugs in the Ursa compiler around property access. The web site uses these fixes to simplify the demo of modifying `document`.

### 15 October 2023

Release 0.0.11 adds the ability to call methods on JavaScript objects wrapped as Ursa objects. The web version of Ursa exposes the `document` object to Ursa, and the web site's “Try Ursa!” box now demonstrates this by changing the contents of the web page. Ursa now has bitwise operations, including shifts. There are also fixes and improvements under the hood.

### 8 October 2023

Release 0.0.10 fixes more bugs, particularly improving the implementation of (Ursa) objects. The rest of the work is under the hood, to support some more exciting changes coming soon!

### 29 September 2023

Release 0.0.9 fixes some important bugs: variables captured by a closure that is instantiated multiple times now work correctly, and declarations can now be interleaved with expressions.

### 24 September 2023

The web site now has a news page. I’ve filled in earlier news. From now on it will be in the present tense!

I’ve had a the first code contribution to Ursa from someone else: the author of
[syntastica](https://github.com/RubixDev/syntastica/), a syntax-highlighting tool based on tree-sitter, is kindly helping me add Ursa to the supported languages; meanwhile, Ali Anvari helped me find a couple of important bugs, one in the interpreter and one in the grammar of Ursa.

### 23 September 2023

I signed up for and registered “Ursalang” on [Rosetta Code](https://www.rosettacode.org), and wrote the [first example](https://www.rosettacode.org/wiki/Hello_world/Text#ursalang) for Ursa.

### 22 September 2023

I added syntax highlighting patterns for the [GNU Nano](https://nano-editor.org)
editor.

### 21 September 2023

The Ursa live demo could now produce output as well as show its computed
result value.

### 20 September 2023

A reasonably full set of pages was now live, albeit many of them stubs.

My good friend and programming partner Alistair Turnbull noticed Ursa in his
GitHub feed and asked me about it; I’d not mentioned it to him, to see how
long it would take him to find out about it!

### 19 September 2023

After a crash course in [webpack](https://webpack.js.org/) I managed to get
Ursa working on the web, for a live demo version on the web site. Pleasingly
the only change I had to make to Ursa itself was to export one class I
needed.

The example code was syntax highlighted with
[Pygments](https://pygments.org) patterns.

I created the first [Matrix](https://matrix.org/)
[rooms](https://matrix.to/#/#ursalang:matrix.org) for Ursa. One of them was
for newbies; Fanì pointed out that we’re all newbies at the moment!

### 17 September 2023

A skeleton home page for the web site was up. It already included example
code.

### 10 September 2023

The release of [version 0.0.7](https://github.com/ursalang/ursa/releases/tag/v0.0.7)
marked a temporary cessation of development of Ursa itself to work on the
ecosystem. I started work on the [web site](https://ursalang.github.io).

I made a [trivial VS Code plugin](https://github.com/ursalang/ursa-vscode),
having previously tried and failed to use the tree-sitter parser with
Microsoft’s
[anycode](https://marketplace.visualstudio.com/items?itemName=ms-vscode.anycode)
extension, which I could not make work at all. To console myself I made
[GtkSourceView patterns](https://github.com/ursalang/ursa-gtksourceview),
for use with GEdit and other GNOME programs.

### 8 September 2023

Finally nailed the implementation of variables captured by closures with the
[two double closures test](https://github.com/ursalang/ursa/blob/main/test/two-double-closures.ursa),
the test for which I had overhauled the syntax the day before.

### 7 September 2023

The syntax got an overhaul, motivated by a test program I wanted to write
that was “obviously valid” but failed to parse. I used the ES5 syntax from
Ohm as a model. This set a precedent: I have since repeatedly used
JavaScript models for syntax highlighting patterns.

### 5 September 2023

The culmination of a lot of clean-up work, debugging and re-working was a
better implementation of symbol references that was fully symbolic
(previously, I had been looking up symbols by name at run-time, at least in
some circumstances). Another much-rewritten commit (dated 29th August).

### 24 August 2023

I tweaked the [compact-json](https://pypi.org/project/compact-json/) JSON
pretty-printer to work for Ursa, so now I could have nicely formatted Ark.

### 22 August 2023

A major restructuring of the interpreter: rather than using `eval` methods of
a class hierarchy of Ursa values, I used a single function. This was easier
to understand and maintain, though it meant that the organization of the
code became rather less consistent.

### 21 August 2023

I used the new JSON syntax to make the test suite more principled, by having
it compare results against JSON values rather than using `print()` and
comparing the resultant text.

### 20 August 2023

I added a JSON syntax for Ark, which soon replaced the sexp-like syntax. One
less custom parser to maintain, and Ursa programs and values could easily be
serialized and shared with other programs.

The Emacs mode was accepted to [MELPA](https://melpa.org), and Ursa support
was now available “off the shelf” in a major editor.

### 17 August 2023

Conversion of Ursa values to JavaScript was implemented. An important step
towards interoperability in the JavaScript environment in which the Ohm
implementation of Ursa lives.

### 13 August 2023

The [ursalang organization](https://github.com/ursalang) came into being on
GitHub, and I made the first release of Ursa on
[npm](https://www.npmjs.com/package/@ursalang/ursa). I also used the
tree-sitter grammar to make an [Emacs mode](https://github.com/ursalang/ursa-ts-mode).

A red-letter day for Ursa visibility and usability!

### 12 August 2023

My first foray into [Langium](https://langium.org/). I wanted to implement
Ursa with this more sophisticated language building system, which would give
me rather more than Ohm, in particular an implementation of web workers, and
an [LSP](https://microsoft.github.io/language-server-protocol) server.

However, seeing its complexity I decided to wait until Ursa was a bit more
stable.

### 9 August 2023

The first of a series of early support for editing and syntax highlighting
Ursa source code: I started work on my second parser, using the excellent
[tree-sitter](tree-sitter.github.io/). This helped me better understand my
original parser (which wasn’t in great shape).

### 8 August 2023

I renamed Hak (formerly HakLisp) to Ark, short for the ancient Greek word
for a bear, “arktos” (άρκτος).

### 1 August 2023

I found and named the mascot, Ursula.

### 30 July 2023

I implemented a basic REPL for the first time. This was part of my plan to
make Ursa user-friendly early on.

### 28 July 2023

I had used the name “Hak” for the language I wanted to build for some time,
and it was close to my heart. Friends had made well-reasoned objections; not
least, the existence of [Haxe](https://haxe.org) and
[Hack](https://hacklang.org). I finally thought of an alternative name I was
happy with, by thinking about possible mascots under the influence of my
partner Fanì, who insisted that my new project should be “cute”. “Ursa” is
euphonious, short, suggests a bear, and is just short enough to be a file
extension.

The file extension was not widely used. The language name, unfortunately,
already existed, but, as a general-purpose programming language, only on
[Rosetta Code](https://www.rosettacode.org/wiki/Category:Ursa) for a
language that seemed to be an abandoned experiment. (Apologies to the author
if this is not the case!) I figured that I could refer to my Ursa as
“Ursalang”, using the common contemporary convention, and indeed this turned
out to be necessary in various places—the organization name was already
taken on GitHub, for example.

In a rapidly-repented step, I renamed HakLisp to Hak. Apologies to anyone
trying to understand the early history of the project!

### 25 July 2023

The first implementation of lexical scope. Even though Hak was meant to be
lexically scoped, at first I used dynamic scope, which is simpler to
implement, just so I could get the language up and running. I had a set of
example programs in both Hak and HakLisp even at this stage!

### 20 July 2023

I finally stopped rewriting my first commit, and pushed a second. By now I
had two languages: Hak, and HakLisp. I was having trouble working out the
semantics of the language and its implementation, and decided to work out
these problems in a simpler Lisp-like notation. This turned into the
compiled representation of the language.

### 17 June 2023

The first commit to the [repo](https://github.com/ursalang/ursa). The
language was called “Hak”, and was an idea that I had been working on for
longer than I care to remember—I had been working on the design of various
programming languages for at least 30 years, but never implemented anything
beyond a few experiments! I decided it was finally time to pick one basic
idea and implement it. Many of the ideas I had worked on over the years
either seemed out of date, not so good any more, or too hard; the latter
category included “minimal, malleable language”, of which examples that have
made some progress include [Seed7](https://seed7.sourceforge.net/) and
[Pliant](http://www.fullpliant.org/).

So, I chose an idea with a smaller scope: a language that is simple but not
minimal, familiar to current programmers, and that, once it is mature, will
not change.

The other inspiration was the parsing toolkit [Ohm](https://ohmjs.org),
which is based on [OMeta](https://en.wikipedia.org/wiki/OMeta), in a lineage
that goes all the way back to [META II](https://en.wikipedia.org/wiki/META_II),
the [famous paper](http://www.hcs64.com/files/pd1-3-schorre.pdf) describing
which I had finally gotten around to reading a few years ago. I had long
wanted to use something like this as the heart of an extensible language, but
now I thought I’d just use Ohm to build a language.

Much easier than the last time I had tried implementing a language, the old,
extraordinary but primitive extensible stack-based language
[Forth](http://www.forth.org/), which I first used in the mid 1980s. In the
early ’90s, I tried writing [my own implementation](https://github.com/rrthomas/pforth),
which still runs today, usually on a Forth-oriented VM,
[Beetle](https://github.com/rrthomas/beetle).
For the rest of the ’90s and much of the next 20 years, I was thinking more
about VMs than languages. Maybe that was a mistake! I feel like I went round
in circles a lot. Certainly, my work had little practical result, aside from
the low-level virtual machines [Mite](https://rrt.sc3d.org/Software/Mite),
[Mit](https://github.com/rrthomas/mit) and [Bee](https://github.com/rrthomas/bee).
Mite was JIT-based and aimed to be a target for conventional compiled
languages like C; Mit and Bee had similar ambitions to host most languages,
but their implementations were much simpler C interpreters (though they
have recently grown more ambitious). Yet Mite only ever ran C (via the
[LCC compiler](https://en.wikipedia.org/wiki/LCC_(compiler))), on a single
native architecture (early ARM chips) and Mit and Bee have to date only
run Forth!

So, I gathered up my notes on programming languages, some on scraps of
paper, which I had started to try to winnow, and put them aside. I reasoned
that simply working out of my head and not worrying too much about whether I
had the best possible result was more likely to lead to progress. Ohm turned
out to be fun, my recent acquaintance with [TypeScript](https://www.typescriptlang.org/)
made it even more fun, and off I went!