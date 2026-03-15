---
title: Polarity Ball
order: 4
featured: false
summary: A VR physics game for Gear VR and Oculus Go. Court-based competitive play with simulated magnetism — built in Unity and C#.
projectTags:
  - software
  - vr
skills:
  - c-sharp
  - unity
  - vr
year: 2018
status: complete
meta: https://www.meta.com/experiences/polarity-ball/1197064677075806/
---

A VR game for Gear VR and Oculus Go built in **Unity** and **C#** using the Oculus mobile SDK. The core mechanic is simulated magnetism played in a court — closer to racquetball or tennis than a navigation puzzle. Each player has a magnetic pole as their target and a polarity switch as their paddle. The ball is magnetic. You score by using polarity — attraction and repulsion — to direct the ball into your opponent's pole while defending your own. No two rallies play out the same once the physics start interacting.

The most satisfying part of building it was getting Unity's physics engine to behave like a real magnetic system. Magnetism doesn't exist natively in Unity — you simulate it by calculating force vectors between objects based on distance and polarity, then applying them frame by frame. Getting that to feel physically convincing in VR, where your sense of space is heightened, required a lot of iteration.

<figure class="project-figure">
  <img src="{{ '/img/polarity-ball/12138842_708846572623135_3646880589576929280_n.webp' | url }}" alt="Polarity Ball — VR level with magnetic field visualization" loading="lazy">
</figure>

<figure class="project-figure">
  <img src="{{ '/img/polarity-ball/12386302_1621071608198528_617560458294984704_n.webp' | url }}" alt="Polarity Ball — ball navigating a custom gravity environment" loading="lazy">
</figure>

<figure class="project-figure">
  <img src="{{ '/img/polarity-ball/12410271_709409465889407_8078884830110023680_n.webp' | url }}" alt="Polarity Ball — polarity mechanics in action" loading="lazy">
</figure>

## Technical details

- **Engine:** Unity
- **Language:** C#
- **SDK:** Oculus Mobile SDK (Gear VR / Go)
- **Platform:** Samsung Gear VR, Oculus Go
- **Controls:** Touchpad
- **Physics:** Custom magnetic force simulation — attraction and repulsion calculated per-frame using inverse-square force falloff applied via Unity's `Rigidbody` system

## On building VR for mobile

Gear VR and Oculus Go were tightly constrained platforms — mobile GPUs, fixed foveation, strict frame budget. Every physics calculation had to justify its cost. The magnetic simulation needed to be convincing enough to feel real without tanking the frame rate on a phone processor. That constraint shaped a lot of decisions about how the levels were designed.

Available on the [Meta Horizon Store](https://www.meta.com/experiences/polarity-ball/1197064677075806/).
