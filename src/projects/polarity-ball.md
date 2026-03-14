---
title: Polarity Ball
order: 4
featured: false
summary: A VR physics game for Gear VR and Oculus Go. Simulated magnetism and custom gravity, built in Unity and C#.
projectTags:
  - software
  - vr
year: 2018
status: complete
meta: https://www.meta.com/experiences/polarity-ball/1197064677075806/
---

A VR game for Gear VR and Oculus Go built in **Unity** and **C#** using the Oculus mobile SDK. The core mechanic is simulated magnetism — the player manipulates magnetic polarity to attract and repel a ball through environments with custom gravity fields. No two paths through a level feel the same once the physics start interacting with each other.

The most satisfying part of building it was getting Unity's physics engine to behave like a real magnetic system. Magnetism doesn't exist natively in Unity — you simulate it by calculating force vectors between objects based on distance and polarity, then applying them frame by frame. Getting that to feel physically convincing in VR, where your sense of space is heightened, required a lot of iteration.

## Technical details

- **Engine:** Unity
- **Language:** C#
- **SDK:** Oculus Mobile SDK (Gear VR / Go)
- **Platform:** Samsung Gear VR, Oculus Go
- **Controls:** Touchpad
- **Physics:** Custom magnetic force simulation — attraction and repulsion calculated per-frame using inverse-square force falloff applied via Unity's `Rigidbody` system
- **Gravity:** Per-level custom gravity vectors, allowing walls and ceilings to become floors mid-level

## On building VR for mobile

Gear VR and Oculus Go were tightly constrained platforms — mobile GPUs, fixed foveation, strict frame budget. Every physics calculation had to justify its cost. The magnetic simulation needed to be convincing enough to feel real without tanking the frame rate on a phone processor. That constraint shaped a lot of decisions about how the levels were designed.

Available on the [Meta Horizon Store](https://www.meta.com/experiences/polarity-ball/1197064677075806/).
