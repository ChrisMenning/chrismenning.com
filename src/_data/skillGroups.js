// Skills taxonomy for the SYS // CM-01 widget.
// level: "g" = active, "y" = occasional, "r" = dormant/rusty
// featured: true  → shown in the homepage widget (keep to ~5)
//
// All skills generate /skills/{id}/ pages and can be referenced in
// project frontmatter `skills: [...]` arrays.

module.exports = [
  {
    id: "lang",
    label: "LANG",
    skills: [
      { id: "python",  label: "Python",  level: "g", featured: true },
      { id: "c-sharp", label: "C#",      level: "g", featured: true },
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
      { id: "raspberry-pi", label: "Raspberry Pi", level: "g", featured: true },
      { id: "e-paper",      label: "e-paper",      level: "g" },
      { id: "lora",         label: "LoRa",         level: "y" },
      { id: "arduino",      label: "Arduino",      level: "y" },
    ]
  },
  {
    id: "domain",
    label: "DOMAIN",
    skills: [
      { id: "midi",         label: "MIDI / Synth",  level: "g", featured: true },
      { id: "self-hosting", label: "Self-hosting",  level: "g", featured: true },
      { id: "web",          label: "Web",           level: "g" },
      { id: "docker",       label: "Docker",        level: "y" },
      { id: "vr",           label: "VR / XR",       level: "r" },
    ]
  },
];

