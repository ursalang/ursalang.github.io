#!/usr/bin/env python3

import sys


code = sys.argv[1]
print(
    f'<span class="highlight"><code>$run(ursa2html.in.py,,-){{{code}}}</code></span>',
    end="",
)
