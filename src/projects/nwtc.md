---
title: NWTC.edu
order: 6
featured: true
summary: Website for Northeast Wisconsin Technical College, built on Kentico with custom PageBuilder and FormBuilder web parts and integrations into the college's LMS and ERP.
projectTags:
  - software
  - web
skills:
  - c-sharp
  - dotnet
  - web
year: 2021
status: ongoing
website: https://www.nwtc.edu
---

The public website for [Northeast Wisconsin Technical College](https://www.nwtc.edu), built on **Kentico** and developed collaboratively with a team of three other developers. NWTC serves tens of thousands of students across northeast Wisconsin — the site is the primary entry point for prospective students, current students, faculty, and staff.

## What I built

The project involved more than content management. Most of the meaningful work was extending Kentico's editing tools to give the content team real authoring flexibility without requiring developer involvement for every change.

**PageBuilder web parts** — custom components that editors drag into page layouts. Each web part needed to be flexible enough to cover real editorial use cases while constraining the options appropriately so the page structure stays coherent. That balance between flexibility and guardrails is most of the design work in a CMS like this.

**FormBuilder web parts** — custom form fields and field types integrated into Kentico's FormBuilder. Campus forms have requirements that don't map neatly to generic field types — program-specific logic, conditional fields, validation tied to internal systems. Building these cleanly meant understanding both what editors needed to configure and what the forms needed to submit downstream.

**LMS integration** — connecting the site to the college's Learning Management System so course and program data stays synchronized without manual data entry. The integration needed to be reliable and handle update cycles gracefully.

**ERP integration** — connecting to the college's Enterprise Resource Planning system for enrollment and student data. Getting these integrations right meant working carefully around the existing systems rather than against them.

## Kentico developer certification

I earned my Kentico developer certification during this project. The certification validated knowledge of the Kentico Xperience platform including the module APIs, widget development, content tree architecture, and deployment patterns.

## On working in a CMS at this scale

A large institutional site has different constraints than a personal project. The audience is broad and non-technical. The content team needs to be able to publish without developer involvement. The data comes from external systems that change on their own schedule. The challenge isn't building features — it's building features that stay correct when the people using them and the systems feeding them are outside your control.
