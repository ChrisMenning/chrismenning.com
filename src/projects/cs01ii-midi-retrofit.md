---
title: MIDI Retrofit — Yamaha CS01-II
order: 13
featured: false
summary: Added MIDI input to a 1982 Yamaha CS01-II analog synthesizer using a Highly Liquid UMR2 universal retrofit board. Involves soldering, the service manual, and a transposition quirk baked into the keyboard layout.
projectTags:
  - hardware
  - music
skills:
  - midi
year: 2024
status: complete
---

The Yamaha CS01-II is a monophonic analog synthesizer from 1982 — small, battery-powered, and built with a full-size keyboard in a surprisingly compact form factor. It has no native MIDI. Adding MIDI meant installing a retrofit board that reads the keyboard's key contacts directly and translates them into MIDI signals. That board is the **Highly Liquid UMR2**, a universal MIDI retrofit designed to work with a wide range of vintage keyboards.

<figure class="project-figure">
  <img src="{{ '/img/cs01II/2048-820-max.jpg' | url }}" alt="Yamaha CS01-II synthesizer with MIDI retrofit installed" loading="lazy">
  <figcaption>// Yamaha CS01-II · 1982 analog monophonic synth · Highly Liquid UMR2 retrofit</figcaption>
</figure>

## The UMR2

The Highly Liquid UMR2 works by connecting directly to the keyboard's scan matrix — the grid of row and column signals the keyboard uses to detect which key is pressed. Once wired in, it monitors that matrix and outputs standard MIDI note on/off messages. No modification to the synth's core voice circuitry is required; the UMR2 just listens to the keyboard and speaks MIDI.

<figure class="project-figure">
  <img src="{{ '/img/cs01II/umr2.jpg' | url }}" alt="Highly Liquid UMR2 MIDI retrofit board" loading="lazy">
  <figcaption>// Highly Liquid UMR2 — universal MIDI retrofit board</figcaption>
</figure>

The wiring diagram and the CS01-II service manual were both essential references throughout the process. The service manual is available via the Internet Archive.

- [UMR2 wiring reference (PDF)]({{ '/img/cs01II/cs01_umr2.pdf' | url }})
- [CS01-II service manual (PDF)]({{ '/img/cs01II/CS01%20II%20Sythesizer.pdf' | url }})

## Installation and soldering

The UMR2 connects to the keyboard matrix via the existing header connectors on the CS01-II's keyboard PCB. In principle this is straightforward; in practice, it requires soldering a number of individual connections to small, closely spaced pins.

The first two attempts both had bad connections — not immediately obvious, but revealed when running the UMR2 through its setup and calibration process, where certain keys would fail to register. This meant desoldering and starting over twice.

That process pushed me to actually study soldering technique more carefully — watching instructional videos, understanding heat transfer, flux, and how long to dwell on a joint. The connections on the third attempt held. I'm not a precision solderer, but I'm better than I was before this project, and the device works. For a retrofit like this, that's the standard that matters.

Many people who have done this retrofit remove the CS01-II's internal speaker to free up enough interior space to mount the UMR2 inside the original housing. I opted to keep the speaker — it's part of what makes the instrument useful in certain contexts — and instead mounted the board in a separate project enclosure. The enclosure I used is bulkier than it needs to be; a smaller one would look cleaner as a companion to the synth. But it was the one I had on hand, it fits, and it works. I'm not bothered.

## The transpose quirk

Once the hardware was working, there was a consistent offset in the MIDI output: every note was off by 5 semitones. The root cause is that the CS01-II's keyboard starts on **F**, not C. The UMR2 assigns MIDI note numbers starting from C, so it maps the lowest key (F) to C2 rather than F2 — shifting everything down by the distance between F and C.

The fix is simple once you know what's happening: apply a **−5 semitone transpose** in your sequencer or DAW to shift the output back so that the physical F key produces an F in MIDI. In the Squarp Pyramid (the sequencer this synth is now integrated with), this is a per-track transpose setting that persists with the project.

## Result

The CS01-II now receives MIDI from the Squarp Pyramid alongside the rest of the setup. Its particular character — the slightly unstable filter, the thin but cutting oscillator, the way it responds to the envelope — is now sequenceable, repeatable, and lockable to a tempo. It's one of the more useful additions to the rack for exactly the kind of sounds it's already good at.
