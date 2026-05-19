# Carlo Emilio Ida Portfolio

Frontend-first portfolio website for Carlo Emilio Ida, built as the main landing page for MSBA work, analytics projects, operations experience, and future deployed applications.

This repository is the portfolio shell that will later connect to:

- project detail pages
- case studies
- live machine learning demos
- analytics dashboards
- downloadable resume assets
- future backend-powered contact or application features

## Overview

The site is designed to present Carlo as a structured, business-aware analytics professional with a background spanning:

- NUS MSc in Business Analytics
- project management and operations delivery
- SQL and data modeling
- Python and machine learning
- reporting, KPI design, and decision support

The current version is intentionally frontend only.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- App Router

## Project Structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    layout/
    sections/
    ui/
  data/
    portfolio.ts
  lib/
  types/

public/
  carlo-emilio-ida-resume-2026.pdf
```

## Main Content Source

Most editable portfolio content lives in:

`src/data/portfolio.ts`

Update this file to change:

- hero copy
- about details
- skills
- project cards
- experience timeline
- live demo placeholders
- contact links

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

[http://localhost:3000](http://localhost:3000)

Build for production:

```bash
npm run build
```

## Project App Links

The Movie Hit Predictor button uses `NEXT_PUBLIC_MOVIE_PREDICTOR_URL`.
The Portfolio Optimization Pipeline button uses `NEXT_PUBLIC_QRM_PORTFOLIO_URL`.

For local portfolio review:

```text
NEXT_PUBLIC_MOVIE_PREDICTOR_URL=http://localhost:5173
NEXT_PUBLIC_QRM_PORTFOLIO_URL=http://localhost:3002
```

For deployment, replace these values with the public URLs of the deployed project frontends.

## Current Portfolio Focus

This portfolio currently highlights:

- Carlo Emilio Ida's analytics and operations profile
- NUS MSc Business Analytics work
- applied SQL, Power BI, machine learning, and optimization projects
- the Movie Hit Predictor project from DBA5106, linking to the standalone full-stack app repository
- the Interactive Portfolio Optimization Lab from DBA5109/QRM, linking to the standalone app repository
- the NUS-SYNAPXE-IMDA AI Innovation Challenge 2026 recognition
- future live-demo slots for deployed applications

## Deployment

This project is suitable for deployment on platforms such as:

- Vercel
- Cloudflare Pages
- Netlify

For a Next.js-first workflow, Vercel is the simplest option.

## Future Extensions

Planned additions may include:

- dedicated project pages under the App Router
- GitHub project links per project card
- live app routes
- blog or writing section
- downloadable case study PDFs
- backend contact form handling
- authenticated private project areas if needed later

## Notes

- This repository is intended to remain the main portfolio landing page.
- Other projects can be linked into this site over time without replacing the overall portfolio structure.
- The current implementation is deployment-ready on the frontend side, with content and sections organized for future expansion.
