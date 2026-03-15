---
title: Nature Oracle
order: 1
featured: true
summary: Repurposed 1970s slide viewer, Raspberry Pi Zero, NASA API. A retrofuturistic passive info display.
projectTags:
  - hardware
  - software
  - open-source
  - nature
year: 2025
status: complete
github: https://github.com/ChrisMenning/nature-oracle
skills:
  - python
  - raspberry-pi
---

A daily briefing for a passive info display. The housing is a gutted Hanimex Vista Viewer II — a 1970s analog 35mm slide viewer. The LCD sits where the film slide used to go. You look into it and it tells you something about the world.

<figure class="project-figure">
  <img src="https://github.com/user-attachments/assets/8fe96961-3098-4c05-9ccd-16bbb9b60349" alt="Nature Oracle displaying weather data in orange ASCII on a black screen" loading="lazy">
  <figcaption>// Weather module — Open Weather API · Orange ASCII on black · Hanimex Vista Viewer II housing</figcaption>
</figure>

## Hardware

- Raspberry Pi Zero 2 W
- Waveshare 2 Inch LCD Module
- KY-040 Rotary Encoder

Mounted inside the gutted body of a Hanimex Vista Viewer II. The LCD occupies exactly the space where the 35mm slide would have sat.

<figure class="project-figure">
  <img src="https://github.com/user-attachments/assets/2cb7d15a-4c19-4ab6-882b-3bbfb7a60f75" alt="Nature Oracle showing the internal Raspberry Pi and LCD assembly" loading="lazy">
  <figcaption>// Internal assembly — Raspberry Pi Zero 2 W · Waveshare 2in LCD · KY-040 rotary encoder</figcaption>
</figure>

## Software

The program runs as a slideshow — rendered in orange ASCII on a black background. The rotary encoder cycles through slides. Each slide is a module pulling from a different data source:

- **Weather** — current conditions via Open Weather API
- **Climate** — longer-range climate data
- **Nature** — species observations via iNaturalist
- **Near-Earth Objects** — asteroid proximity data from NASA
- **Space Weather** — solar activity and geomagnetic conditions
- **Meditation** — rotating quotes

Full source and setup instructions on [GitHub](https://github.com/ChrisMenning/nature-oracle). Free API keys from Open Weather and NASA are all you need to run it.
