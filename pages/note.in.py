#!/usr/bin/env python3

import os
import sys
from pathlib import Path
from tempfile import gettempdir


linkText = sys.argv[1]
noteText = sys.argv[2]

# Read or initialize counter
counterPath = (
    Path(gettempdir())
    / f"{os.environ['NANCY_INPUT'].replace('/', '_')}_note-number.txt"
)
try:
    with open(counterPath) as f:
        noteNumber = int(f.read())
except OSError:
    noteNumber = 0

linkId = f"note{noteNumber}"

# Increment counter
noteNumber += 1
with open(counterPath, "w") as f:
    f.write(str(noteNumber))

print(
    f'<button class="note-button btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#{linkId}" aria-expanded="false" aria-controls="{linkId}">{linkText}</button><span class="collapse" id="{linkId}"><span class="card card-body"><span>{noteText}</span></span></span>',
    end="",
)
