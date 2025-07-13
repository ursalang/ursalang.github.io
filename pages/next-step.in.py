#!/usr/bin/env python3

import sys


# Read command-line arguments
def maybe_argv(n: int) -> str | None:
    return sys.argv[n] if len(sys.argv) > n else None


page = sys.argv[1]
text = sys.argv[2]
klass = maybe_argv(3) or "next-step"
print(
    f'<a class="btn btn-primary" href="{page}"><span class="{klass}">{text}</span></a>'
)
