---
title: Polarity Ball Rubicon
order: 5
featured: false
summary: The sequel to Polarity Ball. Expanded levels, 3DOF controller support, and deeper magnetic physics — Gear VR and Oculus Go.
projectTags:
  - software
  - vr
skills:
  - c-sharp
  - unity
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

## On shadows in mobile VR

Mobile VR hardware runs on a tight GPU budget. Real-time shadow calculation requires rendering the scene a second time from the perspective of each light source — at 60fps in VR, on a Snapdragon 820, that's not viable.

The obvious solution is to turn shadows off. Rubicon used a different approach: a fake shadow caster. Rather than calculating where light doesn't reach, a flat mesh is positioned beneath each object and textured to match the surface geometry below it, scaled and positioned dynamically as the object moves. The result reads as a shadow — convincingly enough that you don't notice it isn't one. Same perceptual result at a fraction of the GPU cost.

This kind of decision is what mobile VR development forces. You're not finding workarounds for ideal solutions — you're finding the right solution for the actual hardware and frame budget you're shipping on. The constraint shapes the design.

Available on the [Meta Horizon Store](https://www.meta.com/experiences/polarity-ball-rubicon/2275654505793837/). I wrote about the private beta process [on Medium](https://medium.com/@cjmenning/polarity-ball-rubicon-enters-private-beta-4e06e7b557de).

## On immersive learning

Building Polarity Ball and Rubicon, and later the [NWTC Metaversity demo](/projects/nwtc-metaversity-demo/), gave me a concrete view of when VR actually earns its cost and when it doesn't.

It works when the thing you're learning has a spatial or embodied dimension that flat media can't replicate — blueprint folding, anatomical structure, field interaction where the relationship between objects matters more than any single object. It works when shared presence is part of the experience itself. Outside those two cases, a well-designed interactive on a flat screen is usually the better answer. A lecture in VR is still a lecture.

The mistake most institutions make is treating immersive technology as a general-purpose delivery mechanism for content that wasn't designed for it. The question is never "can we put this in VR." It's "does this problem benefit from being spatial and embodied." Building the magnetic interaction system in these games — and then adapting it as a physics playroom in the Metaversity — gave me a concrete answer to that question in specific contexts. I trust a specific yes more than I trust general enthusiasm for the medium.
