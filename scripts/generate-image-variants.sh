#!/usr/bin/env bash
set -euo pipefail
# Requires the WebP command-line tools (cwebp). Originals stay untouched.
cd "$(dirname "$0")/.."
for source in src/assets/images/uav/*-hero.webp src/assets/images/industries/*.webp src/assets/images/engineering/engineering-services-hero.webp; do
  [[ "$source" == *-480.webp ]] && continue
  cwebp -quiet -q 90 -m 6 -resize 480 0 "$source" -o "${source%.webp}-480.webp"
done
