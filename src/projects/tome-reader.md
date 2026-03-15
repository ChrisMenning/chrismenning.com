---
title: Tome Reader — An Improvised Ereader Device
order: 10
featured: true
summary: A hand-built e-ink ereader. Waveshare 7.5" e-paper display, Raspberry Pi Zero 2 W, rotary encoder, UPS battery hat. Reads epub and CBZ. Built from parts already on hand.
projectTags:
  - hardware
  - software
  - open-source
year: 2025
status: ongoing
github: https://github.com/ChrisMenning/ereader
---

An e-book reader built from spare parts. The question wasn't "what's the best ereader I could design?" — it was "what can I make from these parts I have lying around?" Two Waveshare e-paper displays had been sitting in a drawer, gifted by someone who never got around to using them. That felt like enough of a reason.

<figure class="project-figure">
  <img src="{{ '/img/tomereader/tome-reader-an-improvised-ereader-device-v0-tw2d81y7o83g1.webp' | url }}" alt="Tome Reader ereader device open, showing the e-paper display with a book loaded" loading="lazy">
  <figcaption>// Tome Reader — Waveshare 7.5" e-paper · Raspberry Pi Zero 2 W · rotary encoder navigation</figcaption>
</figure>

## Hardware

- **Waveshare 7.5" black and white e-paper display** — slow refresh, no backlight, readable in direct sunlight
- **Raspberry Pi Zero 2 W** — the same platform as the Nature Oracle
- **KY-040 rotary encoder** — the same encoder knob used in the CyGar cyberdeck: scroll in two directions, click to select
- **UPS battery hat** — onboard battery with power management; the device runs untethered

All input is handled by the rotary encoder. Two scroll directions plus a click action. No touch screen — this display doesn't support touch, and the constraint turned out to be fine.

<figure class="project-figure">
  <img src="{{ '/img/tomereader/tome-reader-an-improvised-ereader-device-v0-t5jpi1y7o83g1.webp' | url }}" alt="Tome Reader showing the internal components and wiring" loading="lazy">
  <figcaption>// Internal assembly — Pi Zero 2 W · UPS hat · rotary encoder wiring</figcaption>
</figure>

## Software

The reader is written in Python and runs on boot. It supports **epub** and **CBZ** formats. A book browser lets you navigate your library; once inside a book, the encoder scrolls through pages.

The main technical challenge with e-paper displays is refresh rate. Full refreshes — the kind that redraw the entire screen — take a couple of seconds and produce a distinctive flash. For a reading device, that's tolerable for page turns but painful for navigating menus.

Partial refreshes update only the changed region of the screen and are much faster, but the Waveshare Python driver didn't support them well out of the box. I had partial refreshes working fine on an Arduino using C++, but replicating that behavior in Python required modifying the driver directly.

The fix: I added a `getbuffer_region()` method to Waveshare's `epd7in5_V2.py` driver. It accepts any size image, converts it to 1-bit, inverts the bits for e-paper rendering, and returns the buffer — giving the application control over what region gets pushed to the display. The change is small but meaningfully improves navigation responsiveness.

<figure class="project-figure">
  <img src="{{ '/img/tomereader/tome-reader-an-improvised-ereader-device-v0-kqme1zx7o83g1.webp' | url }}" alt="Tome Reader displaying a manga page in CBZ format" loading="lazy">
  <figcaption>// CBZ support — manga page rendered on 7.5" e-paper</figcaption>
</figure>

## The driver modification

The change lives in a fork of the official Waveshare e-Paper repository. One commit, one new method:

```python
def getbuffer_region(self, image):
    # Accept any size image, convert to 1-bit, and invert bits for e-paper
    img = image.convert('1')
    buf = bytearray(img.tobytes('raw'))
    for i in range(len(buf)):
        buf[i] ^= 0xFF
    return buf
```

The fork is available on GitHub if you're working with the same display and running into the same partial refresh issues.

## Source

Full source on [GitHub](https://github.com/ChrisMenning/ereader). The driver fork is at [ChrisMenning/e-Paper](https://github.com/ChrisMenning/e-Paper).
