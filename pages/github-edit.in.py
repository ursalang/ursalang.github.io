#!/usr/bin/env python3

import sys
from pathlib import Path


page = Path(sys.argv[1]).parent
print(
    f"https://github.com/ursalang/ursalang.github.io/edit/main/pages/{page}/body.in.md"
)
