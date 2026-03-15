// Skills taxonomy for the SYS // CM-01 widget.
// level: "g" = active, "y" = occasional, "r" = dormant/rusty
//
// Add new skill IDs here when you want them to appear in the widget.
// Use the same IDs in project frontmatter `skills: [...]` arrays
// so the data stays connected even if the widget doesn't auto-compute colors yet.

module.exports = [
  {
    id: "lang",
    label: "LANG",
    skills: [
      { id: "python",  label: "Python",  level: "g" },
      { id: "c-sharp", label: "C#",      level: "g" },
      { id: "cpp",     label: "C++",     level: "y" },
    ]
  },
  {
    id: "plat",
    label: "PLAT",
    skills: [
      { id: "dotnet",     label: ".NET",       level: "g" },
      { id: "salesforce", label: "Salesforce", level: "g" },
      { id: "unity",      label: "Unity",      level: "y" },
      { id: "linux",      label: "Linux",      level: "g" },
    ]
  },
  {
    id: "hw",
    label: "HW",
    skills: [
      { id: "raspberry-pi", label: "Raspberry Pi", level: "g" },
      { id: "e-paper",      label: "e-paper",      level: "g" },
      { id: "lora",         label: "LoRa",         level: "y" },
      { id: "arduino",      label: "Arduino",      level: "y" },
    ]
  },
  {
    id: "domain",
    label: "DOMAIN",
    skills: [
      { id: "midi",         label: "MIDI / Synth",  level: "g" },
      { id: "self-hosting", label: "Self-hosting",  level: "g" },
      { id: "web",          label: "Web",           level: "g" },
      { id: "docker",       label: "Docker",        level: "y" },
      { id: "vr",           label: "VR / XR",       level: "r" },
    ]
  },
];
