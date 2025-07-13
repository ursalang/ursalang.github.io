#!/usr/bin/env python3

import sys


code = sys.stdin.read()
print(
    # The newlines below make the <pre> element visible to the Markdown
    # processor, so that it does not process the contents.
    f'<pre class="highlight"><code>$run(ursa2html.in.py,,-){{{code}}}</code></pre>',
    end="",
)
