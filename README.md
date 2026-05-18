# GST F5 Compliance Agent Prototype

Full stack prototype for an AI-assisted Singapore GST F5 filing preparation workflow. It is designed as a capstone/job-aligned showcase for Carlo Emilio Ida, NUS MSc Business Analytics, targeting finance + data/AI work where automation prepares the filing package and human accountants retain final approval.

## Project Overview

The app ingests quarterly transaction CSV data, validates and cleans it with Pandas, classifies GST treatment with deterministic explainable rules, computes GST F5 Box 1 to Box 8 values, flags reconciliation exceptions, supports accountant overrides with reasons, maintains an audit trail, and exports a submission-ready workpaper package.

It intentionally does not connect to the IRAS myTax Portal and does not perform actual submission.

## Why This Matches QCP GST F5 Automation

- Automates GST F5 preparation steps from transaction ingestion through review package export.
- Uses explainable classification and reconciliation checks rather than opaque black-box decisions.
- Preserves human oversight through mandatory accountant override reasons and final approval.
- Maintains audit logs for file upload, ingestion, classification, exception generation, override, recalculation, approval, and exports.
- Produces exportable CSV/JSON artifacts suitable for manual review and manual IRAS entry.

## Reflection Of Previous MSBA Projects

- Med-SEAL: specialized classification, reconciliation, GST summary, export, and audit services mirror guarded agent orchestration, safety checks, auditability, role-aware workflows, and human oversight.
- Agentic property valuation system: ingestion, preprocessing, feature-like rule signals, confidence scoring, anomaly flags, and business-facing UI are reflected in the transaction review cockpit.
- SQL/data warehousing project: normalized SQLite tables, filing-period transaction facts, exception records, override history, and audit trail support analytical review and export.
- Portfolio optimization project: validation, robustness checks, high-value anomaly detection, and risk-based decision support appear in the reconciliation and approval gates.

## Architecture

```text
frontend/ React + TypeScript + Tailwind
  App dashboard
  UploadPanel -> CSV upload
  TransactionReviewTable -> filters + override modal
  GSTF5Summary -> Box 1 to Box 8 + approval
  ReconciliationPanel -> exception review
  AuditTrail -> chronological events
  ExportCenter -> CSV/JSON workpapers

backend/ FastAPI + SQLite + Pandas + Pydantic
  main.py -> REST API
  database.py -> SQLite schema
  services/
    ingestion_service.py -> validate, clean, classify, store
    classification_service.py -> deterministic GST treatment rules
    reconciliation_service.py -> mismatch, duplicate, missing, FX, period, negative, high-value checks
    gst_f5_service.py -> Box 1 to Box 8 calculation
    audit_service.py -> immutable workflow trail
    export_service.py -> CSV and JSON package exports
```

## Setup

### Backend

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

Health check:

```bash
curl http://127.0.0.1:8000/health
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open [http://127.0.0.1:5173](http://127.0.0.1:5173).

## Sample Data

Use:

```text
backend/sample_data/sample_qcp_gst_transactions.csv
```

Suggested demo flow:

1. Create filing period `GST F5 Q1 2026` with dates `2026-01-01` to `2026-03-31`.
2. Upload the sample CSV.
3. Review auto-classified GST treatments and reconciliation exceptions.
4. Override a transaction with an accountant reason.
5. Confirm the audit trail updates and the GST F5 summary recalculates.
6. Export GST F5 JSON, reviewed transactions CSV, exceptions CSV, and audit CSV.

## Core API

- `GET /health`
- `POST /api/filing-periods`
- `GET /api/filing-periods`
- `POST /api/filing-periods/{id}/upload`
- `GET /api/filing-periods/{id}/transactions`
- `PATCH /api/transactions/{transaction_id}/override`
- `GET /api/filing-periods/{id}/exceptions`
- `GET /api/filing-periods/{id}/gst-f5-summary`
- `POST /api/filing-periods/{id}/approve`
- `GET /api/filing-periods/{id}/audit-log`
- `GET /api/filing-periods/{id}/export/transactions.csv`
- `GET /api/filing-periods/{id}/export/exceptions.csv`
- `GET /api/filing-periods/{id}/export/audit.csv`
- `GET /api/filing-periods/{id}/export/gst-f5.json`

## Limitations

- This is a prototype, not tax advice.
- It does not submit to IRAS.
- GST rules are simplified and should be validated by qualified accountants.
- Real implementation requires integration with accounting systems, document OCR, access control, secure deployment, and full IRAS rule validation.

## Future Improvements

- Add user authentication, role-based access, and approval segregation.
- Add exception acknowledgement and resolution workflow.
- Add OCR invoice evidence matching and source-document links.
- Add richer GST rule packs validated by Singapore tax professionals.
- Add accounting-system connectors and secure deployment.
- Add Power BI style analytics for exception trends, filing cycle time, and GST exposure.
