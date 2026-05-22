# Carlo Emilio Ida Portfolio

Frontend-first portfolio website for Carlo Emilio Ida, built as the main landing page for MSBA work, analytics projects, operations experience, and future deployed applications.

This repository is the portfolio shell that will later connect to:

- project detail pages
- case studies
- live machine learning demos and linked project applications
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

linked-projects/
  movie-predictor/
  qrm-portfolio/
  med-seal-rad/
```

The `linked-projects/` folders are Git submodules that point to the standalone project repositories. They keep the portfolio lightweight while still making the related application code discoverable from this main repo.

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

## Cloning With Project Applications

This portfolio links to the source code for the project applications through Git submodules. To clone the portfolio and the linked project repos together, use:

```bash
git clone --recurse-submodules https://github.com/carloida/Portfolio_msba.git
```

If you already cloned the portfolio without submodules, run:

```bash
git submodule update --init --recursive
```

This brings in:

- `linked-projects/movie-predictor` from `carloida/portfolio_msba_moviepredictor`
- `linked-projects/qrm-portfolio` from `carloida/portfolio_msba_QRMportfolio`
- `linked-projects/med-seal-rad` from `AI-Innovation-Challenge-2502/med-seal-rad`

## Project App Links

The Movie Hit Predictor button uses `NEXT_PUBLIC_MOVIE_PREDICTOR_URL`.
The Portfolio Optimization Pipeline button uses `NEXT_PUBLIC_QRM_PORTFOLIO_URL`.
The Healthcare AI Insight System button uses `NEXT_PUBLIC_HEALTHCARE_AI_URL`.

For local portfolio review, copy `.env.example` to `.env.local` and use:

```text
NEXT_PUBLIC_MOVIE_PREDICTOR_URL=http://localhost:5173
NEXT_PUBLIC_QRM_PORTFOLIO_URL=http://localhost:3002
NEXT_PUBLIC_HEALTHCARE_AI_URL=http://localhost:3003
```

For deployment, replace these values with the public URLs of the deployed project frontends.

Important: the portfolio intentionally keeps `Open App` links separate from `Project Repo` links. If a deployed app URL is not configured, the `Open App` button is disabled rather than sending reviewers to GitHub by accident.

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

Recommended Vercel setup:

1. Deploy this repository as the main portfolio site.
2. Deploy each interactive app as its own Vercel project or appropriate backend/frontend hosting pair.
3. In the main portfolio Vercel project, add these environment variables:

```text
NEXT_PUBLIC_MOVIE_PREDICTOR_URL=https://your-movie-app-domain
NEXT_PUBLIC_QRM_PORTFOLIO_URL=https://your-qrm-app-domain
NEXT_PUBLIC_HEALTHCARE_AI_URL=https://your-healthcare-ai-app-domain
```

4. Redeploy the portfolio after setting the variables.

Vercel will not automatically run the standalone app repositories just because they are linked from the portfolio. They need their own deployments, then the portfolio points to those live URLs.

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
