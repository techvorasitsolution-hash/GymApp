# Adding Real Photos & Video

The site is wired to automatically pick up real gym media the moment you drop
files into this `assets/` folder with the **exact names** below — no code
changes needed. Until then, the site shows an attractive animated gradient
fallback so nothing ever looks broken.

## Hero section (full-screen, top of homepage)

| File | Purpose | Recommended size |
|---|---|---|
| `assets/video/hero-gym.mp4` | Background video (auto-plays muted, loops). Takes priority over the hero photo if present. | 1920×1080, H.264 mp4, under ~15MB, 10–20s loop |
| `assets/images/hero-poster.jpg` | Poster frame shown while the video loads | 1920×1080 |
| `assets/images/hero-bg.jpg` | Fallback photo if you don't have a video | 1920×1080 (landscape) |

## Gallery section ("A Gym Your Members Will Love")

| File | Suggested subject |
|---|---|
| `assets/images/gallery-1.jpg` | Free weights / weight training area (large tile) |
| `assets/images/gallery-2.jpg` | Cardio zone (treadmills, bikes) |
| `assets/images/gallery-3.jpg` | Yoga / stretching studio |
| `assets/images/gallery-4.jpg` | Group fitness class |
| `assets/images/gallery-5.jpg` | Personal training session (large tile) |
| `assets/images/gallery-6.jpg` | Locker rooms / facility |

Recommended: 1200×900 or larger, landscape, JPG/WEBP.

## Trainer photos

| File | Trainer |
|---|---|
| `assets/images/trainer-1.jpg` | Arjun Mehta |
| `assets/images/trainer-2.jpg` | Sneha Kapoor |
| `assets/images/trainer-3.jpg` | Rohit Verma |
| `assets/images/trainer-4.jpg` | Ayesha Khan |

Square photos (min. 300×300) work best — they're cropped into circles.

## How it works

Every `<img>`/`<video>` tag has an `onerror` fallback that hides itself if the
file is missing, revealing a designed gradient/icon placeholder underneath.
So you can add these files one at a time (e.g. just the hero video first) and
the rest of the site keeps looking intentional.
