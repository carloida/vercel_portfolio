export type AppLauncher = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  directUrl: string;
  repoUrl: string;
  localCommand: string;
  notes: string[];
};

const movieUrl =
  process.env.NEXT_PUBLIC_MOVIE_PREDICTOR_EMBED_URL ??
  process.env.NEXT_PUBLIC_MOVIE_PREDICTOR_URL ??
  "http://127.0.0.1:5174";

const qrmUrl =
  process.env.NEXT_PUBLIC_QRM_PORTFOLIO_EMBED_URL ??
  process.env.NEXT_PUBLIC_QRM_PORTFOLIO_URL ??
  "http://127.0.0.1:3002";

const qcpUrl =
  process.env.NEXT_PUBLIC_QCP_GST_F5_EMBED_URL ??
  process.env.NEXT_PUBLIC_QCP_GST_F5_URL ??
  "http://127.0.0.1:5173";

export const appLaunchers: AppLauncher[] = [
  {
    slug: "movie-predictor",
    title: "Movie Profitability Classification and Predictor App",
    eyebrow: "DBA5106 movie green-light model",
    summary:
      "Explore movie investment scenarios, run profitability classifications, compare scenario changes, inspect genre trends, and generate optional model interpretation from the companion FastAPI backend.",
    directUrl: movieUrl,
    repoUrl: "https://github.com/carloida/portfolio_msba_moviepredictor",
    localCommand: ".\\scripts\\start-linked-apps.ps1",
    notes: [
      "Requires the Movie FastAPI backend and Vite frontend.",
      "The local launcher serves this app on port 5174 to avoid colliding with the QCP app.",
      "LLM insight generation requires an OPENAI_API_KEY in the movie backend environment."
    ]
  },
  {
    slug: "qrm-portfolio",
    title: "Portfolio Optimization Pipeline",
    eyebrow: "DBA5109/QRM allocation explorer",
    summary:
      "Interact with the portfolio optimization lab for EWP, GMV, tangency, and regularized allocation behavior across 43 industry portfolios with risk-return and concentration diagnostics.",
    directUrl: qrmUrl,
    repoUrl: "https://github.com/carloida/portfolio_msba_QRMportfolio",
    localCommand: ".\\scripts\\start-linked-apps.ps1",
    notes: [
      "Runs as a standalone Next.js app.",
      "The local launcher serves this app on port 3002.",
      "Its data assets stay inside the linked QRM project repository."
    ]
  },
  {
    slug: "qcp-gst-f5",
    title: "AI Agent for GST F5 Filing Automation",
    eyebrow: "QCP finance compliance prototype",
    summary:
      "Use the GST F5 workspace for quarterly setup, transaction ingestion, AI-assisted GST treatment classification, anomaly handling, GST F5 computation, manager approval, audit trail review, and filing pack export.",
    directUrl: qcpUrl,
    repoUrl: "https://github.com/carloida/QCP_proofofconcept_carloida",
    localCommand: ".\\scripts\\start-linked-apps.ps1",
    notes: [
      "Requires the QCP FastAPI backend and Vite frontend.",
      "The local launcher serves this app on port 5173.",
      "The app prepares filing-ready materials for manual IRAS myTax Portal submission; it does not submit filings automatically."
    ]
  }
];

export function getAppLauncher(slug: string) {
  return appLaunchers.find((app) => app.slug === slug);
}
