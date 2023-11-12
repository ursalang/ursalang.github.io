# Step 2: What is programming?

Before we get stuck into learning Ursa, we should consider: what is programming?

Programming is an act of communication. Most obviously, we instruct the computer what we want it to do. Less obviously, we tell other humans—other programmers—what we’re trying to accomplish. Programming is as much about reading as it is about writing; indeed, we typically spend more time reading code than we do writing it; and certainly more time reading documentation.


## What are programming languages?

A programming language, therefore, has two main audiences: human and machine. It must be *comprehensible* to humans: that is to say, human readers must be able without too much trouble to work out what the program is intended to do. It must be *tractable* for machines: that is, computers must be able to convert the program into instructions to perform.

In the early days of computing, the first programming languages were made easy for the computer to read; they were correspondingly harder for humans to read, and less expressive of human intentions. As time went on, it became possible to make languages more human-centric; the only constraint was that computers had to be able to work out the meaning of a program unambiguously, with a feasible amount of processing power. The process of converting programming language into machine instructions remains deterministic and logically precise, while the processing power and memory required to perform the conversion can now be quite considerable—yet with the power of modern computers, even a mobile phone can perform this translation for programs of thousands of lines of code in a fraction of a second.


## Why do we (still) need programming languages?

Thanks to machine learning, we no longer need programming languages to tell computers what to do: for many applications it’s possible to talk to a computer and have it interpret one’s natural language. So why do we still need programming languages?

* **Understanding natural language still requires a lot of processing power.** Typically today we do it by using online services that run in data centres full of powerful computers.
* **Natural language is ambiguous**. For programs that we want to rely on to run without human supervision, programming languages are more reliable.
* **Programming is fun**. Just like other formal systems, whether the wide world of mathematics or the microcosm of chess, programming is fun as an intellectual exercise. But it can have real-world effects: you can program machines that do things in the world. Instructing machines to do things is a rewarding and powerful way to relate to the human world.


## Ursa, a classical language

Ursa is a “classical” language. That is to say, it embodies ideas from the main stream of programming language development from the earliest days, even before computers, of the 1930s, to about the turn of the 21st century. It should look familiar to anyone who has learned to program between 1970 and 2020. It is intended to remain familiar to programmers for at least as long for the next 50 to 100 years, humans using programming languages should find Ursa straightforward, if increasingly old-fashioned.

Some computer languages have been around for 50 years or more already, and most of those have changed considerably over time. Ursa is designed not to change. If you write a program in Ursa today, still work on Ursa systems in 50 years’ time. But also conversely, a program written in 50 years’ time should run on an Ursa system of today. What’s the good of that? It’s that Ursa is meant to be an archival language.

Consider a language such as C, invented in the early 1970s. In the last 20 years, old C code stopped working, or at least working well, on modern C systems. Now, to be on the safe side, your code should be written in a dialect dating from 1989, at least.

With Ursa, this will not be necessary. Also, the language will not become more complicated with time, as most long-lived languages do, in order to retain backwards compatibility.

The disadvantage is that Ursa will not evolve to cope with programs and computers of the future. That’s OK; there will of course be new languages for that!

For more information on this, see the [rationale](../../rationale.html).


## Let's learn Ursa!

[Next step](../003-something-fun)