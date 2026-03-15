---
title: Stealing from Shepard Fairey
order: 12
featured: false
summary: A Python script running on a Raspberry Pi scrapes Shepard Fairey's print archive, converts each image to 7 colors, and displays it on a color e-paper screen. Built fast, with parts already on hand.
projectTags:
  - hardware
  - software
  - open-source
year: 2025
status: complete
github: https://github.com/ChrisMenning/ObeyArtDisplay
---

Shepard Fairey built his career on appropriation. He took an AP photograph of Barack Obama, transformed it into an icon, and sold prints. He took a wrestling photo, transformed it into the Andre the Giant "OBEY" campaign that made him famous. He has been sued for it, settled for it, and kept doing it — because the argument is that transformation is the point. The work becomes something new in the act of taking it.

This project takes his work.

A Python script scrapes a random image from Fairey's print archive at obeygiant.com, converts it to the 7-color palette supported by a color e-paper display, and renders it on the screen. The next time the script runs, a different print. His catalog as a passive rotating art display, displayed in the home without a subscription, without a transaction, without his knowledge. 

It felt fitting.

<figure class="project-figure">
  <img src="{{ '/img/obey-art/25-11-01%2013-51-35%209429.jpg' | url }}" alt="Color e-paper display showing a Shepard Fairey print" loading="lazy">
  <figcaption>// Waveshare color e-paper · 7-color palette · Shepard Fairey print archive</figcaption>
</figure>

<figure class="project-figure">
  <img src="{{ '/img/obey-art/25-11-01%2013-54-48%209430.jpg' | url }}" alt="Color e-paper display showing a different Shepard Fairey print" loading="lazy">
  <figcaption>// Each run of the script pulls a random print from obeygiant.com</figcaption>
</figure>

<figure class="project-figure">
  <img src="{{ '/img/obey-art/25-11-01%2014-17-55%209432.jpg' | url }}" alt="Color e-paper display showing another Shepard Fairey print" loading="lazy">
  <figcaption>// Flat color separations and high contrast — well-suited to the e-paper medium</figcaption>
</figure>

<figure class="project-figure">
  <img src="{{ '/img/obey-art/25-11-03%2017-55-44%209436.jpg' | url }}" alt="Color e-paper display showing a Shepard Fairey print in context" loading="lazy">
  <figcaption>// Displayed in the home · no subscription · no transaction</figcaption>
</figure>

## The display

This is the second of two e-paper displays gifted by someone who'd never gotten around to using them. The first became the Tome Reader. This one had a 7-color palette — black, white, red, green, blue, yellow, and orange — which suited Fairey's work well. His prints lean on flat color, bold separations, and high contrast. The e-paper aesthetic amplified that rather than fighting it.

## The build

This was a speed project. The goal was to go from idea to working display as fast as possible using only what was already on hand — Raspberry Pi, display, a Python script, no additional hardware purchases. The script handles scraping, image conversion, and rendering in one pass.

- **Hardware**: Raspberry Pi · Waveshare color e-paper display
- **Language**: Python
- **Method**: scrape → convert to 7-color palette → render to display

Source on [GitHub](https://github.com/ChrisMenning/ObeyArtDisplay).
