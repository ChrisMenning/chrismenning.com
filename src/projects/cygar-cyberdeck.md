---
title: cyGar-01 — Cigar Box CyberDeck
order: 2
featured: true
summary: A Raspberry Pi 5 laptop built into a cigar box. Dual 7-inch screens, salvaged laptop hinges mounted to pine two-by-four, Kano keyboard, junkyard energy. Actually runs Linux.
projectTags:
  - hardware
  - open-source
skills:
  - raspberry-pi
  - linux
year: 2025
status: complete
---

A Raspberry Pi 5 laptop built into a Punch Britannia Deluxe cigar box. Dual 7-inch screens — one landscape, one portrait. Keyboard salvaged from an old Kano computer kit. Hinges from a dead HP laptop, mounted to a block of pine two-by-four because the cigar box walls weren't strong enough to hold them. UPS hat plus a spare phone battery bank for power. Intentionally junky-looking. Actually runs Linux.

[Watch the launch video on Instagram →](https://www.instagram.com/reel/DOEHGCeDxU9/)

## The idea

While exploring the Raspberry Pi 5, it occurred to me that one could build a reasonably capable laptop for not much money — something better than a Chromebook, at minimum. I typically work on a dual-screen setup, so I thought: why not build a laptop with two screens?

The screens I settled on are [7-inch 1024×600 HDMI displays](https://www.amazon.com/dp/B0BKGCB18T). Small, cheap, and they run off USB power. Fitting two of them into a single enclosure meant one had to rotate to portrait orientation — which ended up being a useful constraint rather than a compromise.

For the enclosure, I tried a few cigar boxes before landing on the Punch Britannia Deluxe. The dimensions were close enough to perfect: both screens fit with the lid open, one landscape and one portrait, leaving room for the board and cabling underneath.

The keyboard is the one that came with a Kano computer kit I bought for my niece years ago. It's small, orange, and has just enough key travel to be usable. It was sitting in a box. It fit. Done.

## Power

For power, I used a [Waveshare UPS HAT](https://www.amazon.com/dp/B0D2LFKP5G) — an uninterruptible power supply that sits on top of the Pi and keeps it running off battery when wall power isn't available.

The problem: when running off the UPS alone, the Pi couldn't reliably power both screens. On wall power through the recommended cable it was fine. On battery, one screen would drop out. The fix was inelegant and correct — I added a second battery to the system, reusing an old phone-charging battery bank that was already in a drawer. One battery for the board, one for the screens. Problem solved.

## The hinge problem

The cigar box came with hinges. They were decorative at best — the lid flopped open and wouldn't hold position.

First attempt: friction hinges from Amazon. Too stiff. The lid either snapped shut or required two hands to open.

Second attempt: salvaged hinges from an old HP laptop. These worked mechanically. The motion was right, the friction was right. The only problem was that cigar box walls are thin enough that the screws had nothing to bite into. The hinges pulled out under load.

Third attempt: I cut a piece of pine two-by-four to span the hinge mounting area inside the lid and base, giving the screws actual wood depth to seat into. This worked. It's also now clearly visible inside the machine — a raw chunk of construction lumber inside a decorative cigar box — and that is, frankly, the correct aesthetic for this project. Raw compute. By any means necessary.

## cyGar-01 v1.1 — the third screen

A few months after completing the initial build, I added a 2-inch LCD and a rotary encoder — the same components used in the [Nature Oracle](/projects/nature-oracle/) slide viewer — to the cyGar-01. This gave it a tiny third screen and a physical knob, mounted on the outside of the box.

I mostly use it to run the Nature Oracle software on a secondary device while working. It's a small thing but it's useful — a purpose-built ambient display that doesn't require switching windows.

Note: the video and earlier photos show the 1.0 build, which had bulkier cabling and didn't include the third screen or encoder.

## Photos

<figure class="project-figure">
  <img src="{{ '/img/cygar/25-08-29 19-38-26 9239.jpg' | url }}" alt="cyGar-01 early build — first fit test with dual screens in the cigar box" loading="lazy">
  <figcaption>// cyGar-01 · early build · first fit test</figcaption>
</figure>

<figure class="project-figure">
  <img src="{{ '/img/cygar/25-08-30 19-08-01 9248.jpg' | url }}" alt="cyGar-01 — interior layout with Raspberry Pi 5 and wiring" loading="lazy">
  <figcaption>// cyGar-01 · interior layout · Raspberry Pi 5</figcaption>
</figure>

<figure class="project-figure">
  <img src="{{ '/img/cygar/25-09-01 10-28-55 9258.jpg' | url }}" alt="cyGar-01 — completed build, lid open, dual screens running" loading="lazy">
  <figcaption>// cyGar-01 · completed build · dual screens</figcaption>
</figure>

<figure class="project-figure">
  <img src="{{ '/img/cygar/25-09-01 10-29-25 9260.jpg' | url }}" alt="cyGar-01 — keyboard and screen layout" loading="lazy">
  <figcaption>// cyGar-01 · Kano keyboard · landscape + portrait screens</figcaption>
</figure>

<figure class="project-figure">
  <img src="{{ '/img/cygar/25-09-01 10-33-36 9261.jpg' | url }}" alt="cyGar-01 — hinge detail, pine block mounting" loading="lazy">
  <figcaption>// cyGar-01 · HP laptop hinges · pine block mount</figcaption>
</figure>

<figure class="project-figure">
  <img src="{{ '/img/cygar/25-09-01 10-35-07 9263.jpg' | url }}" alt="cyGar-01 — side profile showing cigar box enclosure" loading="lazy">
  <figcaption>// cyGar-01 · Punch Britannia Deluxe enclosure</figcaption>
</figure>

<figure class="project-figure">
  <img src="{{ '/img/cygar/25-09-01 10-35-42 9264.jpg' | url }}" alt="cyGar-01 — top view showing both screens in use" loading="lazy">
  <figcaption>// cyGar-01 · top view · dual screen Linux desktop</figcaption>
</figure>

<figure class="project-figure">
  <img src="{{ '/img/cygar/25-09-01 10-36-17 9265.jpg' | url }}" alt="cyGar-01 — power system detail, UPS hat and secondary battery" loading="lazy">
  <figcaption>// cyGar-01 · UPS hat + secondary battery bank</figcaption>
</figure>

<figure class="project-figure">
  <img src="{{ '/img/cygar/25-09-05 09-38-26 9273.jpg' | url }}" alt="cyGar-01 v1.1 — third screen and rotary encoder added" loading="lazy">
  <figcaption>// cyGar-01 v1.1 · 2-inch LCD + rotary encoder · Nature Oracle integration</figcaption>
</figure>
