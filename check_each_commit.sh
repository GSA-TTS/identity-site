#!/bin/bash

out_dir="all_paths"

mkdir -p "$out_dir"

while read sha
do
  echo "$sha"
  git checkout "$sha" >/dev/null 2>/dev/null

  sha_actual=$(git rev-parse HEAD)
  # URLs from files
  find _help -type f | sed 's/_help/\/help/' | sed 's/.md/\//g' > "$out_dir/${sha_actual}-help.txt"
  # URLs from explicit permalinks
  git grep permalink: -- '*.md' | cut -d: -f 3 | cut -d' ' -f 2 > "$out_dir/${sha_actual}-permalinks.txt"
done < "${1:-/dev/stdin}"
