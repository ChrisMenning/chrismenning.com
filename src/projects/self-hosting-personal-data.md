---
title: Self-Hosting Personal Data
order: 8
featured: true
summary: Migrated personal files, photos, and media off Google Drive, iCloud, Facebook, and OneDrive onto a self-hosted Nextcloud server running on a Raspberry Pi 5.
projectTags:
  - open-source
  - home-lab
year: 2024
status: ongoing
---

For years the deal was: free storage in exchange for your data. Google Drive, iCloud, Facebook, OneDrive — all of it just living on someone else's servers, indexed and mined. At some point the tradeoff stops feeling acceptable. This project is about ending that arrangement.

I migrated my personal files, photos, and media off all of those platforms and onto a self-hosted **Nextcloud** instance running on a **Raspberry Pi 5** in my home. The process was not easy, and the maintenance is not recommended for the average user. But for users who are willing to do a little more work in exchange for data sovereignty, read on.

## Hardware

- **Raspberry Pi 5** — runs the Nextcloud server
- **2× 1 TB USB hard drives** — one for primary storage, one for local backup
- **Powered USB hub** — required because the Pi 5 doesn't deliver enough bus power to run two external drives reliably; without it, the drives caused intermittent failures that were genuinely baffling to diagnose before I figured out the power was the culprit

## Software

I first tried **NextcloudPi**, the installer specifically built for Raspberry Pi. It didn't work for me — persistent issues I couldn't resolve after significant time spent on them. I switched to **Nextcloud AIO** (All-In-One), a Docker-based installer that bundles Nextcloud with a collection of companion services. It's overbuilt for a single-user home server on a Pi — it includes more than I need and isn't optimized for the hardware — but it's the configuration that actually worked.

Getting there took months. I didn't document the process well as I went, which I regret. A lot of it was iterative troubleshooting: power problems, storage mounting, routing, backups, making sure upgrades don't break things.

## What's on it

- Personal photos going back years, migrated off iCloud and Google Photos
- Documents and files migrated off Google Drive and OneDrive
- Media previously scattered across platform storage

## The upgrade problem

Every time a Nextcloud upgrade is available, I'm nervous. The AIO stack has a lot of moving parts and upgrades have a history of introducing issues. So far it's held together, but the anxiety is real. This is the tax on self-hosting: you own the maintenance.

## Why it's worth it

The data is mine. It's on hardware I control, in my home, not being scanned, indexed, or used to improve recommendation algorithms. I'm not the product anymore. That's the whole point.
