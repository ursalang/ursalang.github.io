#!/bin/sh
# Extra build steps before running webpack

latest_news_item=$(awk '/^###/ {if (++i > 1) exit} i' pages/news.md | head -n -1)
date=$(echo "$latest_news_item" | head -1 | cut -d " " -f 2-)
body=$(echo "$latest_news_item" | tail -n +3)

printf %s "$date" > pages/latest-news-date.txt
printf %s "$body" | markdown > pages/latest-news.html
