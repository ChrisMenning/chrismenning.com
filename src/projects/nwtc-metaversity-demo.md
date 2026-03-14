---
title: NWTC Metaversity Demo
order: 7
featured: true
summary: A custom VRChat world built for Northeast Wisconsin Technical College in UdonSharp and Unity. A lobby space with three interactive educational classrooms.
projectTags:
  - software
  - vr
year: 2023
status: complete
website: https://vrchat.com/home/world/wrld_38f7dcf4-d770-42ca-a5f4-61b69a0f93e7
---

A custom VRChat world built for Northeast Wisconsin Technical College as a proof-of-concept for immersive, interactive education in VR. Built in **Unity** and **UdonSharp** — VRChat's C#-based scripting layer that runs on top of Udon, the platform's sandboxed VM. Supports both PC and Quest headsets with a capacity of 32 concurrent users.

The world never went to full production, but it works — and the three classrooms in it do things that are genuinely hard to do in a flat learning environment.

<figure class="project-figure">
  <img src="https://api.vrchat.cloud/api/1/file/file_8a02a58d-509a-438a-98cd-785fb6268b7c/4/file" alt="NWTC Metaversity Lobby — entrance to the three interactive classrooms" loading="lazy">
  <figcaption>// NWTC Metaversity Lobby · VRChat · PC + Quest · Capacity 32</figcaption>
</figure>

## Blueprint Reading Classroom

An interactive drafting classroom with manipulable blueprints. The intent was to let students in technical programs engage with engineering drawings spatially — turning, examining, and reading blueprints in three dimensions rather than on a flat page. Furthermore, the instructor described folding a blueprint to visualize the 3D shape. So I made the blueprint foldable, and when folded into position the part is rendered in full 3D. Blueprint reading is a foundational skill in trades and technical programs, and the spatial qualities of VR make it a natural fit.

## Anatomy Classroom

A functioning model of the human heart. Students can pick it up, observe its structure and motion, and interact with it in ways that a textbook diagram or even a 3D web viewer can't replicate.

## Physics Playroom

A gravity simulation with interactive physics objects. Spheres with simulated weight that respond to gravity per object — players can pick them up, throw them, and observe how they interact as they orbit each other. The room also includes simulated magnets with attraction and repulsion behavior, revisiting the same magnetic force system I built for the Polarity Ball games in a new educational context.

## On UdonSharp and VRChat as a platform

UdonSharp lets you write C# that compiles down to Udon bytecode, which runs in VRChat's sandboxed environment. The sandbox imposes real constraints — no arbitrary network calls, no persistent state outside of the platform's sync system, limited access to Unity's full API. Working within those constraints while still building interactive physics and manipulable objects takes careful design. Everything that needs to be synchronized across users has to be explicitly managed.

Building for Quest alongside PC adds an additional constraint layer: the Quest's GPU budget is tight, and anything that works fine on a PC headset needs to be profiled and often rebuilt to run acceptably on mobile hardware.
