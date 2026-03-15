---
title: PeeWeeMonster — Arduino PWM Add-on for TB-303 / TD-3
order: 11
featured: false
summary: Arduino-based add-on that reads CV/Gate output from the TB-303 or TD-3 and generates a PWM square wave oscillator — fed back into the synth's filter input for phasing and wobble effects.
projectTags:
  - hardware
  - software
  - open-source
  - music
year: 2021
status: complete
github: https://github.com/ChrisMenning/PeeWeeMonster2
---

The Roland TB-303 and its Behringer clone the TD-3 have two features that most people ignore: a **Mix/Filter input** that routes an external audio signal through the synth's analog filter, and **CV/Gate outputs** that expose the pitch and note-on/off signals as analog control voltage — the pre-MIDI standard for synth communication.

PeeWeeMonster exploits both. An Arduino Uno reads the CV and Gate output from the synth, uses that signal to drive an additional square wave oscillator at the same pitch, and feeds that oscillator back into the Mix/Filter input. The result: a second voice, running through the same filter, tuned to the same sequence — no MIDI, no DAW, just analog signals talking to each other.

## PWM and LFO modes

The square wave output can be modulated using Pulse Width Modulation to create phasing and harmonic effects. PeeWeeMonster exposes seven modes, selected by an RGB LED color indicator:

| Color | Mode |
|-------|------|
| **Red** | CV voice · single potentiometer PWM |
| **Green** | CV voice · dual potentiometer PWM sweeps |
| **Blue** | Potentiometer-driven tone · potentiometer PWM |
| **Cyan** | Potentiometer-driven tone · automatic PWM sweeps |
| **Purple** | Low-frequency filter wobble in even steps |
| **Yellow** | Low-frequency filter wobble, smooth |
| **White** | Sync signal repeat *(in progress)* |

The LFO modes (Purple and Yellow) don't track the CV pitch at all — they just send the signal high and low at variable rates to modulate the filter directly, producing the kind of bubbling, rhythmic filter movement that the 303's filter is famous for, driven externally.

## Build

Built on an **Arduino Uno** using **PlatformIO** and written in C++. The CV/Gate reading, tone generation, PWM control, and LFO sweeps all run in the main loop, which creates timing constraints — getting notes to output at accurate frequencies while everything else is running is a known limitation of relying on Arduino's `delay()` and `delayMicroseconds()` methods. A timer-based solution is the intended fix.

Source on [GitHub](https://github.com/ChrisMenning/PeeWeeMonster2).
