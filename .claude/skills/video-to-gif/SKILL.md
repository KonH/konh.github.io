---
name: video-to-gif
description: Convert one or more mp4 (or other video) clips into GIF files via ffmpeg, optionally speeding them up (e.g. 2x), and drop the output in a given folder as plain asset files. Use when the user asks to convert video/mp4 to GIF, make a GIF from a clip, or speed up a video into a GIF.
---

# Video to GIF

Converts video clips (mp4, etc.) to GIF using `ffmpeg`, with an optional
speed multiplier. Produces standalone files in the target folder — it does
**not** wire them into any HTML/Vue component unless the user explicitly
asks for that as a separate step.

## Steps

### 1. Resolve ffmpeg

Check in this order:

```
where.exe ffmpeg   # or: which ffmpeg
```

If not on PATH, check the winget install location before assuming it's
missing (a shell restart is needed for PATH to pick it up after install):

```
find "/c/Users/$USER/AppData/Local/Microsoft/WinGet/Packages" -iname "ffmpeg.exe" 2>/dev/null
```

If truly not installed anywhere, **ask the user** before installing
(installing software is worth a confirmation) — recommend:

```
winget install --id Gyan.FFmpeg -e --accept-source-agreements --accept-package-agreements
```

Then locate the extracted `ffmpeg.exe`/`ffprobe.exe` under
`.../WinGet/Packages/Gyan.FFmpeg_.../ffmpeg-*-full_build/bin/` and use the
full path directly for the rest of the session instead of waiting on a
shell restart.

### 2. Probe source clips (optional but useful for sizing decisions)

```
ffprobe -v error -select_streams v:0 \
  -show_entries stream=width,height,r_frame_rate,duration \
  -of default=noprint_wrappers=1 <input.mp4>
```

Useful to know resolution/duration up front, especially for longer clips
where default settings would produce oversized GIFs.

### 3. Two-pass palette conversion (per file)

GIF only supports a 256-color palette, so a naive single-pass encode looks
banded. Generate a palette from the (already sped-up/scaled) frames, then
reuse it:

```
ffmpeg -y -i <input.mp4> \
  -vf "setpts=<1/speed>*PTS,fps=<fps>,scale=<width>:-1:flags=lanczos,palettegen=stats_mode=diff" \
  <tmp_palette.png>

ffmpeg -y -i <input.mp4> -i <tmp_palette.png> \
  -lavfi "setpts=<1/speed>*PTS,fps=<fps>,scale=<width>:-1:flags=lanczos[x];[x][1:v]paletteuse=dither=bayer:bayer_scale=3" \
  <output.gif>
```

- Speed multiplier: `setpts=(1/speed)*PTS` — e.g. 2x speed →
  `setpts=0.5*PTS`. Applied to *both* palettegen and paletteuse passes so
  the palette is sampled from the same sped-up frame sequence.
- Write the palette PNG to the scratchpad/temp directory, not the output
  folder — it's an intermediate, delete it after the second pass.
- If the source has audio and the user wants it preserved... they don't —
  GIF has no audio track, audio is always dropped.

### 4. Default scale/fps — and check output size before calling it done

Sensible defaults for web-asset GIFs, absent other direction:

- `fps=12`, `scale=640:-1` — good balance of watchability and file size.
- Bump to `fps=15`/`scale=960:-1` only if the user wants higher quality and
  is fine with roughly 3-4x larger files.

After encoding, check sizes:

```
du -sh <output_folder>/*.gif
```

Full-resolution 1080p/30fps source clips even a few seconds long can
produce GIFs tens of MB each — multiple such files easily add up to
100MB+, which is heavy to commit to a git repo (GitHub has a 100MB
per-file hard limit, and large binary blobs bloat history permanently
since they can't be diffed/compressed away later).

**If any output file is large (tens of MB) or the total across all files
is large, don't just proceed — tell the user the sizes and ask whether to
shrink (lower fps/scale) or keep as-is**, before that lands in git history.
As a rough guide, halving `scale` width and dropping `fps` from 15→12
typically cuts size 3-4x with modest visible quality loss.

### 5. Clean up and report

- Delete the temporary palette PNGs from the temp/scratchpad dir.
- List the final files and sizes for confirmation.
- Do not stage/commit anything unless asked — leave that decision to the
  user (see `.claude/commands/commit.md` / the `commit` skill).

## Notes

- This skill produces plain files only. If the user separately wants them
  referenced from a page (e.g. `<img>`/lightbox on a custom static page
  like `public/hidden-council/`), that's a distinct follow-up step — ask
  or wait to be asked rather than assuming.
- `custom/` and `public/*/index.html` pages in this repo are hand-authored
  static HTML, not part of the Vue build — see `CLAUDE.md`.
