# chrismenning.com

> Personal website and project portfolio of Chris Menning — Developer, Electronic Musician, and Maker based in Green Bay, WI.

[chrismenning.com](https://chrismenning.com)

## About

This is the source code for my personal website, built with [Eleventy (11ty)](https://11ty.dev) — a static site generator that produces a fast, maintainable, and privacy-focused website.

## Project Overview

The site showcases my work across three main areas:

### 🎛️ Software Development
- **Web**: Kentico CMS development, .NET/C# integrations, enterprise applications at NWTC
- **Open Source**: Self-hosted infrastructure, Meshnet projects, experimental tools
- **VR/AR**: Unity/C# development (Polarity Ball for Oculus Go/Gear VR)

### 🎵 Music
- **Disaster Preparedness Club**: DAWless electronic music project using hardware synthesizers (Korg MS-20, Yamaha CS01-II, Sequential Drumtraks)
- Genre: Darkwave, EBM, industrial electronic forms
- [Bandcamp](https://disasterpreparednessclub.bandcamp.com)

### 🔧 Hardware / Making
- **Nature Oracle**: Retrofitted 1970s slide viewer with Raspberry Pi Zero displaying NASA/NOAA data
- **cyGar-01**: Cigar box cyberdeck — Raspberry Pi 5 laptop with dual 7" screens
- **Tome Reader**: Improvised e-reader device
- **Pollinator Habitat**: Native landscaping with monitoring system

## Tech Stack

| Category | Technology |
|----------|-----------|
| **Static Site Generator** | [Eleventy](https://11ty.dev) v2.x |
| **Templates** | Nunjucks (.njk) |
| **Styling** | CSS with custom properties (CSS variables) |
| **Hosting** | GitHub Pages |
| **Build Tools** | Node.js (npm) |
| **Self-Hosted** | Nextcloud, Home Assistant, Pi-hole |

## Features

- **Tag-based organization**: Projects organized by discipline (software, hardware, music, vr, open-source, nature, home-lab, web)
- **Skill-based filtering**: Browse projects by technical skill (Python, C#, Raspberry Pi, Linux, MIDI, etc.)
- **Responsive design**: Mobile-first approach with custom visual style
- **Dark theme**: Custom color palette with gold accents and LED-style indicators
- **Performance focused**: Static output, no JavaScript dependencies, optimized images

## Directory Structure

```
├── src/
│   ├── _data/               # Data files for templates
│   │   └── skillGroups.js   # Skills taxonomy
│   ├── _layouts/            # Base templates
│   │   ├── base.njk         # Main layout
│   │   └── project.njk      # Project detail layout
│   ├── css/                 # Stylesheets
│   │   └── main.css         # Main CSS with token system
│   ├── img/                 # Project images
│   ├── projects/            # Project markdown files
│   │   ├── *.md             # Individual project pages
│   │   └── projects.json    # Project collection config
│   ├── about.njk            # About page
│   ├── contact.njk          # Contact page
│   ├── index.njk            # Homepage
│   ├── projects.njk         # Projects listing
│   ├── skills.njk           # Skills listing
│   ├── tags.njk             # Tags listing
│   └── CNAME                # Custom domain file
├── _site/                   # Generated output (build directory)
├── .github/workflows/       # CI/CD for GitHub Pages
│   └── deploy.yml
├── eleventy.config.js       # Eleventy configuration
├── package.json
└── README.md
```

## Development

### Requirements

- Node.js >= 18

### Setup

```bash
# Install dependencies
npm install

# Start development server (with live reload)
npm start

# Build for production
npm run build
```

The development server runs at `http://localhost:8080/` by default.

### Project Frontmatter

Each project in `src/projects/*.md` uses this frontmatter structure:

```markdown
---
title: Project Name
order: 1
featured: true
summary: Brief description
projectTags:
  - software
  - open-source
skills:
  - python
  - raspberry-pi
year: 2025
status: complete
website: https://example.com
github: https://github.com/user/repo
bandcamp: https://bandcamp.com/...
meta: https://meta.com/...
---
```

**Tags**: software, hardware, music, vr, open-source, nature, home-lab, web  
**Status**: complete, ongoing, paused  
**Skills**: See `src/_data/skillGroups.js` for the complete taxonomy

## Customization

### Color Tokens

Colors are defined as CSS custom properties in `src/css/main.css`:

```css
:root {
  --void:        #0a0806;
  --panel-black: #0f0c08;
  --panel-dark:  #1a1610;
  --panel-mid:   #2a2418;
  --panel-light: #3a3028;
  --wood:        #5a3e28;
  --gold:        #d4a820;
  --gold-burn:   #c07010;
  --gold-dark:   #7a5e10;
  --stripe-red:  #8a1a08;
  --led-green:   #50e030;
  --led-red:     #cc2010;
  --parchment:   #f0ebe0;
  --warm-gray:   #a09080;
  --dim-brown:   #8a7a68;
  --ghost:       #907868;
}
```

### Font Stack

- **Display**: Oxanium (sans-serif)
- **Body**: Archivo (sans-serif)
- **Mono**: Share Tech Mono (monospace)

## Deployment

The site is deployed automatically via GitHub Actions:

- Push to `main` branch → Build → Deploy to GitHub Pages
- Custom domain: `chrismenning.com`

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Chris Menning**  
- GitHub: [@chrismenning](https://github.com/chrismenning)  
- LinkedIn: [linkedin.com/in/chrismenning](https://linkedin.com/in/chrismenning)  
- Bandcamp: [disasterpreparednessclub.bandcamp.com](https://disasterpreparednessclub.bandcamp.com)  
- Mastodon: [@chrismenning](https://mastodon.social/@chrismenning)