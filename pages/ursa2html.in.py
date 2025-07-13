#!/usr/bin/env python3

import os
import subprocess
import sys
from pathlib import Path


path = sys.argv[1]
code_file = sys.argv[2]
if code_file != "-":
    code_file = Path(os.environ["NANCY_INPUT"]) / Path(path).parent / code_file
# code.replace("&lt;", "<")
# code.replace("&amp;", "&")

cmd = ["pygmentize", "-l", "ursa", "-f", "html", "-O", "nowrap=True"]
if code_file != "-":
    cmd.append(str(code_file))
html = subprocess.check_output(cmd, text=True)
print(html.strip(), end="")
