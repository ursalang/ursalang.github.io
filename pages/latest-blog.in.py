#!/usr/bin/env python3

import calendar
import os
from datetime import datetime
from pathlib import Path

from num2words import num2words


blogdir = Path(os.environ["NANCY_INPUT"]) / "blog"
posts = []
for entry in sorted(list(blogdir.iterdir())):
    if entry.is_dir():
        posts.append(entry)
latest = posts[-1]
latest_name = Path(latest.name)
timestamp = (latest / "body.in.md").stat().st_mtime
date = datetime.fromtimestamp(timestamp)
date_string = f"{calendar.month_name[date.month]} {num2words(date.day, to='ordinal_num')} {date.year}"
print(f'<a href="blog/{latest_name}/body.in.md">{latest_name}</a> ({date_string})')
