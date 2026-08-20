---
title: Meshtastic Off-Grid Mesh Network
order: 14
featured: false
summary: Adding solar-powered repeater and handheld nodes to Green Bay's existing Meshtastic mesh — an open-source, off-grid LoRa network — plus a small bot that answers DM queries with live pollinator and hazard data.
projectTags:
  - hardware
  - software
  - open-source
  - home-lab
skills:
  - lora
  - linux
  - self-hosting
year: 2026
status: ongoing
---

Meshtastic is an open-source project — not mine — that turns inexpensive LoRa radio hardware into an encrypted, off-grid mesh network. Nodes find each other automatically, relay messages across the mesh, and communicate without the internet, without cell towers, and without any central authority. Range between nodes is typically several kilometers in open terrain; a mesh of repeaters can cover a neighborhood or a city.

This page is about my small part: three nodes I've added to a Meshtastic mesh that already existed in Green Bay, and a bot I've since built on top of it.

<figure class="project-figure">
  <img src="{{ '/img/Meshtastic/26-02-08%2016-24-29%209562.jpg' | url }}" alt="LILYGO T-Deck Plus Meshtastic node showing mesh network map" loading="lazy">
  <figcaption>// LILYGO T-Deck Plus · 915MHz LoRa · GPS · Meshtastic firmware</figcaption>
</figure>

The appeal is not just technical. It's what the technology makes possible: communication infrastructure that is resilient, decentralized, and not subject to the decisions of any particular company or government. In an era where "the internet" and "the phone network" increasingly mean "Amazon's servers" and "AT&T's towers," a protocol you can run on a $40 device and a solar panel is worth understanding.

## What's here now

My contribution to the mesh is three nodes, two device types, currently running or ready to deploy:

**KEEPTEEN D5L Solar Repeater**
A dedicated mesh repeater built around RAKWireless RAK19007 and RAK4631 LoRa modules. Solar panel built in, 5000mAh battery, 915MHz antenna, weatherproof enough to mount outdoors. This is a fixed infrastructure node — a relay point that extends the range of the mesh without requiring a human to carry it. Set it somewhere with sun and line of sight, leave it alone.

**LILYGO T-Deck Plus** (×2)
ESP32-S3 handheld devices with integrated 915MHz LoRa, GPS, a 2.8" display, keyboard, and external antenna. These function as the user-facing nodes — send and receive messages, see node locations on the map, navigate the mesh. Portable, battery-powered, and entirely self-contained.

## Why this matters

While watching the situation in Minneapolis unfold — ICE incursions into the city, residents organizing mutual aid, early warning networks, neighborhood observation — I kept thinking about what happens to that kind of coordination when the infrastructure it runs on becomes unreliable, or when the companies running it decide to cooperate with the people you're organizing against.

Meshtastic doesn't solve every problem. But a mesh of local nodes, running open-source firmware, carrying encrypted messages between neighbors, with no telemetry, no accounts, and no servers to subpoena, is a meaningful piece of infrastructure for mutual aid and community resilience. It works when the internet doesn't. It works when someone has decided the internet shouldn't work for you.

## The bot

Once the nodes were up, the obvious next question was what to actually *do* with the mesh besides send text messages by hand. The answer was a small Python bot, running as a systemd service on an Orange Pi Zero 2W, that pairs with one of the T-Decks ("Contact Alpha") over Bluetooth LE and answers direct messages on demand.

It covers two unrelated domains, because they happen to share the same hardware:

- **Bay Hive commands** (`habitat`, `activity`, `plants`, `expand`, `hazards`, `species`) — a Python port of the relevant scoring logic from [Bay Hive](/projects/bay-hive/), my pollinator-habitat mapping project, so questions like "how many PFAS sites are within a kilometer of home" or "what's the nearest waystation" get answered by querying the same public APIs Bay Hive uses in the browser, since there's no Bay Hive backend to call directly (yet).
- **Surveillance-terminal commands** (`sitrep`, `incidents`, `cameras`, `flock`, `alerts`, `traffic`, `fight`) — a thin client on top of a companion project running on the same Orange Pi, which already aggregates scanner traffic, Flock camera locations, NWS alerts, and WI 511 traffic data.

It's deliberately conservative about noise: it replies only to direct messages by default, never posts unprompted to the shared channel, is rate-limited per-user and globally, and truncates replies to fit LoRa's narrow message budget. 

## What's next

The nodes are configured and running. The two T-Deck handhelds have been tested around the neighborhood and at various locations around Green Bay — range and reliability are solid. The solar repeater extends the mesh from a fixed point.

When I first powered up the nodes I expected to be starting from scratch — maybe one of a handful of people in the area with this equipment. Instead, there were already nodes all over much of the city. Green Bay has an active Meshtastic presence that was already growing before I joined it. That reframed the whole project: I wasn't building a network, I was adding to one that was already there.

I'm still mostly just exploring what's possible with Meshtastic — there's no fixed end state I'm building toward. But having the bot live and actually answering messages on the mesh, unattended, is a genuinely good feeling.

The longer-term interest is in the mesh as infrastructure — not for my own use exclusively, but as something that could be useful to people nearby who might need it. That's a different kind of project than most things in this portfolio. It points outward.
