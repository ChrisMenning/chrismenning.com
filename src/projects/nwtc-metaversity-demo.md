---
title: NWTC Metaversity Demo
order: 7
featured: true
summary: A custom VRChat world built for Northeast Wisconsin Technical College in UdonSharp and Unity. A lobby space with three interactive educational classrooms.
projectTags:
  - software
  - vr
skills:
  - c-sharp
  - unity
  - vr
year: 2023
status: complete
website: https://vrchat.com/home/world/wrld_38f7dcf4-d770-42ca-a5f4-61b69a0f93e7
---

A commissioned proof-of-concept for immersive distance learning in VR, built for Northeast Wisconsin Technical College during COVID. Deployed on VRChat, built in **Unity** and **UdonSharp**. Supports both PC and Quest headsets with a capacity of 32 concurrent users.

The world was never expanded to full production, but it works — and the three classrooms in it do things that are genuinely hard to do in a flat learning environment.

## The brief

NWTC's CTO at the time had seen the VR games I'd shipped — Polarity Ball and Polarity Ball Rubicon — and knew I was capable of working in the medium. When COVID hit and most instruction moved remote, the college commissioned a two-phase project: first, a structured R&D effort to evaluate existing metaverse and social VR platforms; then, if the research supported it, a working proof-of-concept.

The research phase covered the major social VR platforms available at the time — AltspaceVR, Mozilla Hubs, Engage, Rec Room, Horizon Worlds, and others. The criteria were practical: platform maturity, scripting and customization capability, support for educational use cases, hardware compatibility, and deployment friction. VRChat emerged as the strongest candidate, primarily because of Udon — the platform's scripting system, which allowed full Unity development workflows and C# via UdonSharp. It was the only platform that gave a developer enough control to build genuinely interactive environments rather than just decorated meeting rooms.

## Why VRChat

Most social VR platforms at the time fell into one of two failure modes for education: either they were too locked down to build anything meaningful, or they required such heavyweight infrastructure that institutional IT wouldn't touch them. VRChat threaded that needle. It ran on Meta Quest and PC, meaning students didn't need expensive hardware. Worlds were published from Unity, a tool I already knew. And Udon meant I could write real interactive behavior — not just animated objects, but physics simulations, grabbable items with synchronized state, and classroom mechanics with actual pedagogical logic.

The tradeoff was the sandbox. VRChat's Udon VM is deliberately restricted: no arbitrary network calls, no persistent state outside the platform's own sync system, limited access to Unity's full API. Everything that needs to behave consistently across 32 simultaneous users has to be designed with explicit ownership and network sync in mind. That discipline is actually good for educational applications — it forces you to think carefully about what interaction is meaningful versus what's just complexity.

<figure class="project-figure">
  <img src="https://api.vrchat.cloud/api/1/file/file_8a02a58d-509a-438a-98cd-785fb6268b7c/4/file" alt="NWTC Metaversity Lobby — entrance to the three interactive classrooms" loading="lazy">
  <figcaption>// NWTC Metaversity Lobby · VRChat · PC + Quest · Capacity 32</figcaption>
</figure>

## Blueprint Reading Classroom

An interactive drafting classroom with manipulable blueprints. The intent was to let students in technical programs engage with engineering drawings spatially — turning, examining, and reading blueprints in three dimensions rather than on a flat page. Furthermore, the instructor described folding a blueprint to visualize the 3D shape. So I made the blueprint foldable, and when folded into position the part is rendered in full 3D. Blueprint reading is a foundational skill in trades and technical programs, and the spatial qualities of VR make it a natural fit.

<figure class="project-figure">
  <div class="video-embed">
    <iframe src="https://www.youtube-nocookie.com/embed/8nhPo7mzbnM" title="Early blueprint reading classroom demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
  </div>
  <figcaption>// Blueprint Reading Classroom · early prototype · foldable blueprint + 3D part render</figcaption>
</figure>

## Anatomy Classroom

A functioning model of the human heart. Students can pick it up, observe its structure and motion, and interact with it in ways that a textbook diagram or even a 3D web viewer can't replicate.

## Physics Playroom

A gravity simulation with interactive physics objects. Spheres with simulated weight that respond to gravity per object — players can pick them up, throw them, and observe how they interact as they orbit each other. The room also includes simulated magnets with attraction and repulsion behavior, revisiting the same magnetic force system I built for the Polarity Ball games in a new educational context.

## The Matterport Scan

Prior to the Metaversity project, NWTC had used Matterport to create 3D scans of all its campuses for a virtual tour. The ldemo world incorporates one of those scans: a low-poly capture of the Engineering wing of the Green Bay campus, intended to give students a sense of spatial orientation before entering the classrooms.

Getting the scan into the world was one of the more technically tedious parts of the project. Matterport exports a Matterpak — a bundle of mesh data and textures — which then had to be opened in Blender, cleaned up, and re-exported in a format Unity could import cleanly. The pipeline worked, but each step introduced friction: mesh topology that Blender didn't love, texture atlases that needed reworking, polygon counts that had to be reduced further to meet Quest's GPU budget.

The more interesting problem was what happened once it was in VR. Matterport's dollhouse view — the little floating 3D model you see in the browser player — looks impressive on a screen. The scans read as detailed and spatially convincing. Put a person *inside* that mesh in a headset and the illusion collapses. Seams, warped geometry, floating textures, surfaces that look like melted plastic at close range — all of it invisible at dollhouse scale, all of it unavoidable at human scale. The scan was designed to be looked *at*, not inhabited.

It's a concrete illustration of something VR forces you to confront: the quality bar is not the same as it is for flat-screen media. A 3D asset that looks fine in a viewport or a web viewer may be genuinely unusable in an immersive context. The medium doesn't forgive shortcuts that other contexts absorb without complaint.

<figure class="project-figure">
  <div class="video-embed">
    <iframe src="https://www.youtube-nocookie.com/embed/b9kPGDiLnAA" title="Matterport scan of the Eagle Event Center navigated in Unity" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
  </div>
  <figcaption>// Eagle Event Center · Matterport scan imported into Unity · early navigation demo</figcaption>
</figure>

## What happened next

<figure class="project-figure">
  <div class="video-embed">
    <iframe src="https://www.youtube-nocookie.com/embed/KIio0iI0-A4" title="What made the Metaversity demo a success" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
  </div>
  <figcaption>// What Made it a Success · retrospective walkthrough in VR</figcaption>
</figure>

The demo was well-received. The next logical step would have been to port the world to a format compatible with Microsoft's VR meeting experience — which would have made it deployable inside Teams, more palatable to institutional IT, and easier to integrate with NWTC's existing Microsoft infrastructure. I planned to pursue that path. It didn't happen.

Ultimately, NWTC chose not to invest in continued custom VR development. Instead, the college purchased off-the-shelf products suited to specific departments: Ovation for public speaking practice in the business college and Acadicus for the nursing program, and spatial tools for advanced manufacturing. That's a reasonable institutional decision — purpose-built software for defined use cases has a lower support burden than custom-built environments, and the Metaversity demo had proven the concept without creating a mandate to maintain it.

The demo is still live and functional on VRChat. 

## Where immersive learning stands

I'm less confident about the near-term trajectory of VR in education than I was when I built this. When the AI wave crested, funding and institutional attention that had been flowing toward the metaverse drained almost overnight. That's partly the attention economy doing what it does — tech media can only sustain one cycle of hype at a time — but it also reflects something real: VR hardware remained expensive, setup friction remained high, and the compelling use cases turned out to be narrower than the 2020\u20132022 discourse suggested.

What I actually saw in the demo is that VR is genuinely valuable for spatial learning — things you can't teach adequately on a flat screen: folding a blueprint into its 3D form, handling an anatomical model, feeling the difference between magnetic attraction and repulsion at arm's length. Those use cases are real. But they're specific, not universal. The vision of VR as a general-purpose replacement for the classroom was always more about the platforms needing a market than about what educators actually needed.

The most durable direction I see is hybrid and targeted deployment: VR for specific high-value scenarios — clinical simulation, spatial reasoning, exposure therapy, hazardous environment training — rather than as a default medium. The expensive custom-world approach I was building has largely given way to that model, which is probably the healthier one. It's less exciting as a vision, but it maps to how institutions actually operate and what students actually benefit from.

What concerns me about what's left of the field is where investment is concentrating. A meaningful portion of ongoing XR development is now funded by defense applications. That's not a reason to abandon the technology, but it's worth naming.
