# Post 4: Lean times (19th July 2024)

It’s been four months since the last release of Ursa, in which time I’ve found little time to work on it, mostly owing to pressure of work. For an ambitious project that, even if I could work on it full time, would take several years to complete, this feels a bit worrying!

I take comfort from the fact that, although I did take some time to come back up to speed, I had not lost the basic context of what I wanted to do next, nor the motivation to get on with it, even when initial progress was slow (I had had the bad luck to stop in the middle of a complete rewrite of the interpreter).

I am also reassured by the fact that I continued to have enthusiastic conversations about Ursa with friends during this hiatus, and that none of my previous design decisions or future plans changed during the break—either I was simply too busy to advance my thinking, or, more optimistically, my earlier decisions were sufficiently well founded!

So, I have picked up where I left off, and am looking forward to the next major challenge, which is to rework the concurrency support based on the [Effection](https://frontside.com/effection) library, which implements delimited continuations in TypeScript, based on async generators.