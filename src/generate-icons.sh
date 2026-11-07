#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SOURCE="$SCRIPT_DIR/assets/logo.png"
ICONS_DIR="$SCRIPT_DIR/../public/img/icons"
PUBLIC_DIR="$SCRIPT_DIR/../public"

magick "$SOURCE" -resize 192x192 "$ICONS_DIR/android-chrome-192x192.png"
magick "$SOURCE" -resize 512x512 "$ICONS_DIR/android-chrome-512x512.png"
magick "$SOURCE" -resize 180x180 "$ICONS_DIR/apple-touch-icon.png"
magick "$SOURCE" -resize 16x16 "$ICONS_DIR/favicon-16x16.png"
magick "$SOURCE" -resize 32x32 "$ICONS_DIR/favicon-32x32.png"
magick "$SOURCE" -resize 150x150 "$ICONS_DIR/mstile-150x150.png"

magick "$SOURCE" -define icon:auto-resize=16,32,48 "$PUBLIC_DIR/favicon.ico"

echo "✅ All icons generated successfully!"
