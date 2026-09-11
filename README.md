# Kösem Food House — Website

A stylish, colourful multi-page website for Kösem Food House (Schweinfurt),
built with Next.js 14 (App Router), React and Tailwind CSS.

## Pages

- `/` — Home (hero, quality highlights, menu preview, testimonials, location)
- `/about` — About us / story
- `/menu` — Full menu, grouped by category
- `/gallery` — Photo gallery (placeholder tiles until real photos are added)
- `/contact` — Contact form, map, address, hours

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Editing content

Almost everything you'll want to change lives in one file:

**`data/business.ts`**
- Business name, tagline, address, phone, email
- Opening hours
- Instagram / Facebook links
- The full menu (categories, items, descriptions, prices)

Edit that file and the whole site updates — nav, footer, home page preview,
full menu page, and contact page all read from it.

## Adding real photos

Every image on the site is currently a labelled placeholder block (dashed
border, diagonal stripes) — for example "Hero-Foto: frisch geschnittener
Döner". These are in:

- `app/page.tsx` (hero + location teaser)
- `app/about/page.tsx`
- `app/gallery/page.tsx`

Drop real photos into `public/images/` and swap each `<PhotoSlot ... />`
for an `<Image src="/images/your-photo.jpg" ... />` (using `next/image`,
already installed).

## Design notes

- **Colours:** crimson red, saffron gold, warm ink-brown and cream —
  a bold, appetite-driven palette instead of a generic dark steakhouse look.
- **Typography:** Fraunces (display/headlines, italic accents) + Work Sans
  (body/UI).
- **Diagonal "slice" motif:** section dividers use an angled clip-path cut,
  echoing a döner knife shaving meat off the spit — used instead of straight
  lines or generic blob shapes.
- **Menu-board leader lines:** menu items use dotted leader lines between
  name and price (`name ..... price`), like a classic menu board, instead of
  boxed cards.

## Deployment

This is a standard Next.js app — deploy to Vercel, Netlify, or any Node
host. No environment variables are required for the current feature set
(the contact form submits via `mailto:`; swap in a real form backend such
as Resend or Formspree when ready).
