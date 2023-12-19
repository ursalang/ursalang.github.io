# Blog: “Into the Woods”

## Post 1: Conception (19th December 2023)

Ursa is the fruition of more than 30 years’ day-dreaming, note-scribbling and occasional brief and quickly abandoned experimentation in programming language design. In this blog I’ll try to document its creation, but this first post is about its pre-history.

In the 1980s as a user of BASIC and 8-bit assembly language, I was entranced by [Forth](http://www.forth.org/), a language that promised you the ability to implement new languages. Its terminology is redolent of language: instead of subroutines or functions it has “words”; instead of modules or libraries, “wordlists”; instead of a global namespace, the “dictionary”. I implemented my own [Forth compiler](https://github.com/rrthomas/pforth), whose abstractions continued the theme, adding codices and volumes. But Forth’s low-level, concrete programming model was for me mostly a source of frustration, endless crashses and debugging; and though I spent countless hours over many years on my Forth compiler, I wrote only a handful of non-trivial short programs in that language.

From the mid 1990s onwards, I was interested in low-level virtual machines, first to [run Forth](https://github.com/rrthomas/beetle), and then to run “any language”; the idea took me through a [PhD](https://rrt.sc3d.org/Research/Mite/) and then on into a quixotic attempt to crystallise the idea of a classical CPU in software. I was still working on the most recent iterations of that idea, [Mit](https://github.com/rrthomas/mit) and [Bee](https://github.com/rrthomas/bee) in 2020.

Throughout that time I was determined to build a high-level programming language eventually, but from the ground up. I made copious notes on what the language might look like, and over the years it took many forms; I even made occasional prototypes, of languages like Forth’s concatenative cousin, [Joy](https://www.kevinalbrecht.com/code/joy-mirror/joy.html), or Lisp, or rewriting rules, but they never got very far.

My PhD virtual machine, [Mite](https://rrt.sc3d.org/Software/Mite), was JIT-based and aimed to be a target for conventional compiled
languages like C; Mit and Bee had similar ambitions to host most languages,
but their implementations were much simpler C interpreters (though they
have recently grown more ambitious). Yet Mite only ever ran C (via the
[LCC compiler](https://en.wikipedia.org/wiki/LCC_(compiler))), on a single
native architecture (early ARM chips) and Mit and Bee have to date only
run Forth!

I also played with [PEG.js](https://pegjs.org/), and kept a download of [OMeta](https://en.wikipedia.org/wiki/OMeta) around, unused, for years. I finally found the time to study the [famous paper](http://www.hcs64.com/files/pd1-3-schorre.pdf) describing [META II](https://en.wikipedia.org/wiki/META_II) around 2020, which I long wanted to implement in Forth and use as the heart of an extensible language.

By 2023 I was calling my protean idea “Hak”, to the exasperation of friends who pointed out that the name was not only too generic, but [already](https://haxe.org/) [taken](https://hacklang.org/). Previously I’d called a rather baroque early idea Mine, reasoning that it was a good answer to “what’s your favourite language?”, and various ideas for a minimal language Gnat ([also taken](https://www.gnu.org/software/gnat/)), a reference both to small size and to my fondness for using the names of small arthropods for my virtual machines.

On the 10th June 2023, I decided it was finally time to pick one basic
idea and implement it. I gathered up my notes on programming languages, some on scraps of paper, which I had started to try to winnow, and put them aside. I reasoned that simply working out of my head and not worrying too much about whether I had the best possible result was more likely to lead to progress.

I installed [Ohm](https://ohmjs.org) to start work on what I was still calling “Hak”; but now I thought I’d just use Ohm to build a language. I had changed my goal significantly, from the all-things-to-all-programmers language of the early years and the minimal, malleable language of more recent times (a hard road taken by, for example [Seed7](https://seed7.sourceforge.net/) and [Pliant](http://www.fullpliant.org/)), to an idea with a smaller scope: a language that is simple but not minimal, familiar to current programmers, and that, once it is mature, will not change.

Spoiler: Ohm has turned out to be fun, and my recent acquaintance with [TypeScript](https://www.typescriptlang.org/) has made it even more fun. I am so glad I swapped Forth and META II for JavaScript and Ohm: Ohm is a much more powerful tool than META-II; and secondly, because JavaScript, in which it is written, and from which it is used, is a much more powerful substrate for a language than Forth: the language (especially as enchanced by TypeScript) offers much more powerful abstractions than Forth, from the fundamentals such as strings, through built-in basic data structures such as maps, to advanced class-building facilities, all with static type-checking; and the runtime has all of these and more built in, including garbage collection and coroutines. I have not yet tapped JavaScript’s potential as a code-generation *target* (not to mention WASM), but they are big attractions for the future.