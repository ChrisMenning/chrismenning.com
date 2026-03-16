---
title: NWTC.edu
order: 6
featured: false
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

## On the team

This is collaborative work. The dev side is a four-person team; the project management and content strategy on the public website comes from a webmaster on the marketing side who coordinates between the content team, the developers, and institutional stakeholders. That structure matters: the marketing-side PM owns the editorial vision and keeps the whole pipeline moving, while the dev team handles the technical implementation. The relationship works because both sides have clear ownership and a shared understanding of what the site is for.

One moment stands out as a good example of how that team dynamic functions. While building a modal component, I had a working custom implementation. During code review, a teammate suggested scrapping it in favor of an existing accessibility library — the argument being that rolling our own meant taking on ongoing responsibility for ARIA behavior, focus management, and keyboard navigation that the library had already solved correctly. I pushed back mentally for a moment, then recognized they were right. "Working" and "correct" aren't the same thing when accessibility is in scope, and inheriting a maintained solution with a real a11y track record was the better call. I replaced my implementation with the library.

I've heard since that this kind of response to feedback — actually processing it rather than defending the original decision — is something the team values. I'm glad it's legible. Taking in a critique and coming out the other side with a better answer feels like the baseline of how good technical collaboration should work.

## On working in a CMS at this scale

A large institutional site has different constraints than a personal project. The audience is broad and non-technical. The content team needs to be able to publish without developer involvement. The data comes from external systems that change on their own schedule. The challenge isn't building features — it's building features that stay correct when the people using them and the systems feeding them are outside your control.
