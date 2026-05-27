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

The portfolio itself is a frontend Next.js app. Interactive project applications live in `linked-projects/` and can be launched beside the portfolio for local review.

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
  qcp-gst-f5/
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

The QCP GST F5 proof of concept is also used by this portfolio. If it is not already present locally, clone it with:

```bash
git clone https://github.com/carloida/QCP_proofofconcept_carloida linked-projects/qcp-gst-f5
```

## Project App Links

The portfolio buttons now open internal launch pages:

- `/apps/movie-predictor`
- `/apps/qrm-portfolio`
- `/apps/qcp-gst-f5`

Those pages embed or open the running companion applications. The launch page iframe URLs use:

- `NEXT_PUBLIC_MOVIE_PREDICTOR_EMBED_URL`, defaulting to `http://127.0.0.1:5174`
- `NEXT_PUBLIC_QRM_PORTFOLIO_EMBED_URL`, defaulting to `http://127.0.0.1:3002`
- `NEXT_PUBLIC_QCP_GST_F5_EMBED_URL`, defaulting to `http://127.0.0.1:5173`

For local portfolio review, copy `.env.example` to `.env.local` and use:

```text
NEXT_PUBLIC_MOVIE_PREDICTOR_URL=/apps/movie-predictor
NEXT_PUBLIC_MOVIE_PREDICTOR_EMBED_URL=http://127.0.0.1:5174
NEXT_PUBLIC_QRM_PORTFOLIO_URL=/apps/qrm-portfolio
NEXT_PUBLIC_QRM_PORTFOLIO_EMBED_URL=http://127.0.0.1:3002
NEXT_PUBLIC_QCP_GST_F5_URL=/apps/qcp-gst-f5
NEXT_PUBLIC_QCP_GST_F5_EMBED_URL=http://127.0.0.1:5173
```

For deployment, replace the embed values with the public URLs of the deployed project frontends.

Important: the Med Seal healthcare project is linked to GitHub only, per the project requirement. It does not open an embedded app from the portfolio.

## Running All Interactive Apps Locally

Install the portfolio dependencies, then start the portfolio:

```bash
npm install
npm run dev
```

In another PowerShell terminal, start all companion apps:

```powershell
npm run start:apps
```

Use this the first time, or after dependency changes:

```powershell
.\scripts\start-linked-apps.ps1 -Install
```

The launcher starts:

- QCP GST F5 frontend: `http://127.0.0.1:5173`
- QCP GST F5 API: `http://127.0.0.1:8000`
- Movie Predictor frontend: `http://127.0.0.1:5174`
- Movie Predictor API: `http://127.0.0.1:8001`
- QRM Portfolio app: `http://127.0.0.1:3002`

## Current Portfolio Focus

This portfolio currently highlights:

- Carlo Emilio Ida's analytics and operations profile
- NUS MSc Business Analytics work
- applied SQL, Power BI, machine learning, and optimization projects
- the Movie Hit Predictor project from DBA5106, linking to the standalone full-stack app repository
- the Interactive Portfolio Optimization Lab from DBA5109/QRM, linking to the standalone app repository
- the QCP GST F5 Filing Automation proof of concept, linking to its interactive compliance workflow application
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
NEXT_PUBLIC_QCP_GST_F5_URL=https://your-qcp-gst-f5-app-domain
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
