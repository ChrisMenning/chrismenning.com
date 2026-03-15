---
title: Self-Hosting Home Automation
order: 9
featured: false
summary: Replaced Google Home with a self-hosted Home Assistant instance on a salvaged Raspberry Pi 3B. Local control, no cloud, no data leaving the house.
projectTags:
  - open-source
  - home-lab
skills:
  - linux
  - self-hosting
year: 2024
status: ongoing
---

I had a Google Home setup. I sold the Google Home. I still had a collection of GoSund smart outlet plugs on my lamps and no interest in sending my home automation data to Google indefinitely.

The replacement runs entirely in my house, on hardware I own, with no cloud dependency.

## Hardware

- **Raspberry Pi 3B** — salvaged from a Kano Computer Kit my niece had grown out of; reformatted and repurposed rather than discarded
- **GoSund smart outlets** — the existing plugs I was already using on lamps
- **SONOFF Zigbee 3.0 USB Dongle Plus-E** — Zigbee coordinator; turns the Pi into a Zigbee gateway
- **Wireless Zigbee Smart Button (4-way scene controller)** — physical push-button control for triggering automations without reaching for a phone

## Software

**Home Assistant** — the standard open-source home automation platform. Everything runs locally: device state, automations, history. Nothing phones home.

Getting the GoSund plugs working required registering them through the Tuya app first to provision them, then pulling them into Home Assistant via the Tuya local integration. It's a workaround for the fact that these devices were designed to be cloud-dependent — you have to meet them where they are before you can bring them local.

The Zigbee dongle is handled by Home Assistant's Zigbee Home Automation (ZHA) integration, which provides local Zigbee control without any cloud bridge. The 4-way scene controller button maps to different lamp automations depending on which button is pressed.

## Why local matters

Google Home works fine until you think about what it's doing: every device state change, every trigger, every automation — that data flows through Google's infrastructure. The convenience is real. The cost is a continuous stream of information about what's happening in your home.

Home Assistant keeps all of that on the local network. The automations run whether or not the internet is up. No account required to turn on a lamp.
