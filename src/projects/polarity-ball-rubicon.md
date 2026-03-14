---
title: Polarity Ball Rubicon
order: 5
featured: false
summary: The sequel to Polarity Ball. Expanded levels, 3DOF controller support, and deeper magnetic physics — Gear VR and Oculus Go.
projectTags:
  - software
  - vr
year: 2018
status: complete
meta: https://www.meta.com/experiences/polarity-ball-rubicon/2275654505793837/
---

The sequel to Polarity Ball, released October 18, 2018 for Gear VR and Oculus Go. Built in **Unity** and **C#** using the Oculus mobile SDK. Rubicon expanded on the original's magnetic physics with more complex level geometry, and added support for the Oculus Go 3DOF controller alongside the original touchpad controls — giving players a physical pointer in VR space for the first time in the series.

The name fits. Rubicon was the point of no return: more technically ambitious, harder to build, and a more committed statement about what the physics system could actually do.

<figure class="project-figure">
  <img src="{{ '/img/polarity-ball-rubicon/38974684_690704797971180_7738335833828098048_n.webp' | url }}" alt="Polarity Ball Rubicon — level environment" loading="lazy">
</figure>

<figure class="project-figure">
  <img src="{{ '/img/polarity-ball-rubicon/38974733_1144374729021141_6408534562221064192_n.webp' | url }}" alt="Polarity Ball Rubicon — magnetic physics interaction" loading="lazy">
</figure>

<figure class="project-figure">
  <img src="{{ '/img/polarity-ball-rubicon/38974745_2085543728143237_922859330833743872_n.webp' | url }}" alt="Polarity Ball Rubicon — 3DOF controller gameplay" loading="lazy">
</figure>

<figure class="project-figure">
  <img src="{{ '/img/polarity-ball-rubicon/38982619_341014279976144_1349810566461390848_n.webp' | url }}" alt="Polarity Ball Rubicon — level geometry" loading="lazy">
</figure>

## What changed from the original

The first Polarity Ball was controlled entirely by touchpad — you looked at things to target them. Rubicon added 3DOF controller support, which meant the magnetic interaction could now be aimed spatially in three dimensions. That opened up puzzle designs that weren't possible before, and it required rebuilding a significant portion of the interaction layer to support both input modes simultaneously.

## Technical details

- **Engine:** Unity
- **Language:** C#
- **SDK:** Oculus Mobile SDK (Gear VR / Go)
- **Platform:** Samsung Gear VR, Oculus Go
- **Controls:** 3DOF Controller, Touchpad
- **Physics:** Extended magnetic force simulation from the original — multi-body interactions, chained polarity effects, custom per-zone gravity
- **Input:** Dual-mode input system supporting both gaze/touchpad and 3DOF spatial controller in a single build

## On the physics

Getting magnetism to work convincingly in Unity means writing your own force system. Unity has gravity and collisions out of the box, but magnetic attraction and repulsion are custom — you calculate a force vector between every relevant pair of objects each frame, scale it by an inverse-square falloff, and apply it to the rigidbody. Do that wrong and objects tunnel through each other or oscillate. Do it right and a ball moving through a magnetic field feels like it has weight and intention.

That, combined with gravity that could be rotated or inverted per zone, meant levels could be designed in three dimensions in ways that feel genuinely impossible on a flat screen — and in VR, impossible-feeling geometry lands differently.

Available on the [Meta Horizon Store](https://www.meta.com/experiences/polarity-ball-rubicon/2275654505793837/).
