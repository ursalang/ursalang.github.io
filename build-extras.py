#!/usr/bin/env python3
# Extra build steps before running webpack

import re


# Read news page
news = open("pages/news/body.in.md").readlines()

# Find first item heading
start = 0
while not news[start].startswith("### "):
    start += 1

# Find next heading (news item or year)
end = start + 1
while not news[end].startswith("##"):
    end += 1

# Latest news item is between these two headings
latest_news_item = news[start : end - 1]

# Extract date
date = re.sub("^### ", "", latest_news_item[0])
with open("pages/latest-news-date.txt", "w") as f:
    f.write(date)

# Extract news item body
body = "".join(latest_news_item[2:])
with open("pages/latest-news.md", "w") as f:
    f.write(body)
