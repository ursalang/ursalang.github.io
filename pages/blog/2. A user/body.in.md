# Post 2: A user (29th December 2023)

On 26th December, I had the first unsolicited contact from someone I didn’t know about Ursa. Andrei Olea wrote to the [Matrix space](https://matrix.to/#/#ursalang:matrix.org) to say that he had done [2023 Advent of Code Day 25](https://adventofcode.com/2023/day/25) partly in Ursa. [His solution](https://gitlab.com/nonreviad/advent-of-code-2023/-/blob/main/day_25/) also uses Graphviz!

Andrei kindly offered some feedback. He found a bug in Ursa’s lists, where adding or removing the elements would not change the `.len` property, which I quickly fixed to be a `.len()` method. He also noted that it was not possible to write an empty map literal, which was more complicated to fix; I took advantage of wanting to change the syntax to make it possible to write both empty maps and empty objects.

It seems I struck lucky in one way: Andrei told me that he was doing each day of Advent of Code in a language starting with a different letter, and Ursa was the only “modern” language he could find that started with the letter “U”. Ironic, considering that one of Ursa’s goals is not to change once it reaches version 1, and hence quite quickly become anything but modern!

Andrei, I quickly realised, had written more Ursa code than I had to date. It was magical to see over 80 lines of code implementing a non-trivial algorithm: it made Ursa seem more real to me!

It seems that my efforts to publicise Ursa have been neither fruitless nor too premature, though, apart from the basic problems with the data structures, Andrei also pointed out that it was necessary to use Ursa’s JavaScript bindings for basically all non-trivial library functionality. This is fair enough: I haven’t yet really started on the standard library (though I wonder whether it would be possible to use the `fs` file system binding for his program); but the fact that it’s possible to use significant JavaScript functionality with only a small amount of glue code is also, I would argue, a feature!

I look forward to seeing what others do with Ursa; at least, I hope Andrei is only the first of many…