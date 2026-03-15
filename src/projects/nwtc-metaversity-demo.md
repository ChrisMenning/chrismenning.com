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

NWTC's CTO at the time, Dan Mincheff, had seen the VR games I'd shipped — Polarity Ball and Polarity Ball Rubicon — and knew I was capable of working in the medium. When COVID hit and most instruction moved remote, Dan commissioned a two-phase project: first, a structured R&D effort to evaluate existing metaverse and social VR platforms; then, if the research supported it, a working proof-of-concept.

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

## Anatomy Classroom

A functioning model of the human heart. Students can pick it up, observe its structure and motion, and interact with it in ways that a textbook diagram or even a 3D web viewer can't replicate.

## Physics Playroom

A gravity simulation with interactive physics objects. Spheres with simulated weight that respond to gravity per object — players can pick them up, throw them, and observe how they interact as they orbit each other. The room also includes simulated magnets with attraction and repulsion behavior, revisiting the same magnetic force system I built for the Polarity Ball games in a new educational context.

## What happened next

Dan was impressed with the demo. The next logical step would have been to port the world to a format compatible with Microsoft's VR meeting experience � which would have made it deployable inside Teams, more palatable to institutional IT, and easier to integrate with NWTC's existing Microsoft infrastructure. I planned to pursue that path. It didn't happen.

Ultimately, NWTC chose not to invest in continued custom VR development. Instead, the college purchased off-the-shelf products suited to specific departments: Ovation for public speaking practice in the business college, Acadicus and Microsoft Dynamics 365 Guides for the nursing program, and spatial tools for advanced manufacturing. That's a reasonable institutional decision � purpose-built software for defined use cases has a lower support burden than custom-built environments, and the Metaversity demo had proven the concept without creating a mandate to maintain it.

The demo is still live and functional on VRChat. NWTC's current [VR resource guide](https://nwtc.libguides.com/c.php?g=1387298&p=10260642) gives a sense of how the college ultimately deployed the technology.

## Where immersive learning stands

I'm less confident about the near-term trajectory of VR in education than I was when I built this. When the AI wave crested, funding and institutional attention that had been flowing toward the metaverse drained almost overnight. That's partly the attention economy doing what it does � tech media can only sustain one cycle of hype at a time � but it also reflects something real: VR hardware remained expensive, setup friction remained high, and the compelling use cases turned out to be narrower than the 2020\u20132022 discourse suggested.

What I actually saw in the demo is that VR is genuinely valuable for spatial learning � things you can't teach adequately on a flat screen: folding a blueprint into its 3D form, handling an anatomical model, feeling the difference between magnetic attraction and repulsion at arm's length. Those use cases are real. But they're specific, not universal. The vision of VR as a general-purpose replacement for the classroom was always more about the platforms needing a market than about what educators actually needed.

The most durable direction I see is hybrid and targeted deployment: VR for specific high-value scenarios � clinical simulation, spatial reasoning, exposure therapy, hazardous environment training � rather than as a default medium. The expensive custom-world approach I was building has largely given way to that model, which is probably the healthier one. It's less exciting as a vision, but it maps to how institutions actually operate and what students actually benefit from.

What concerns me about what's left of the field is where investment is concentrating. A meaningful portion of ongoing XR development is now funded by defense applications. That's not a reason to abandon the technology, but it's worth naming.
