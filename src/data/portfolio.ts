import type {
  ContactLink,
  ExperienceEntry,
  HighlightItem,
  LiveDemo,
  NavItem,
  Project,
  SkillCategory
} from "@/types/portfolio";

export const navigation: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Live Demos", href: "#live-demos" },
  { label: "Contact", href: "#contact" }
];

export const profile = {
  name: "Carlo Emilio Ida",
  initials: "CI",
  title: "Data and Analytics Lead | SQL, Data Modeling, and Analytics Delivery",
  description:
    "Portfolio website for Carlo Emilio Ida, a data and analytics professional with a background in SQL, data modeling, operations leadership, project delivery, Power BI, and applied analytics. Currently pursuing an MSc in Business Analytics at the National University of Singapore."
};

export const navigationCta = {
  label: "View Resume",
  href: "/carlo-emilio-ida-resume-2026.pdf"
};

export const hero = {
  eyebrow: "Data and analytics grounded in operations and execution",
  intro:
    "I am a data and analytics professional specializing in SQL, data modeling, and building structured datasets for decision support. My background spans operations leadership, project delivery, reporting pipelines, and applied analytics, with current MSc in Business Analytics work at NUS focused on valuation modeling, data warehousing, optimization, and AI solution design.",
  actions: [
    { label: "View Projects", href: "#projects" },
    { label: "View Resume", href: "/carlo-emilio-ida-resume-2026.pdf" },
    { label: "Contact", href: "#contact" }
  ],
  credentials: [
    "NUS MSc Business Analytics",
    "PMP",
    "Lean Six Sigma Yellow Belt",
    "Chemical Engineer",
    "SQL and Data Modeling",
    "Python and Power BI"
  ],
  achievement: {
    label: "Recognition",
    title: "2nd Runner-Up, NUS-SYNAPXE-IMDA AI Innovation Challenge 2026",
    description:
      "Led product structuring and solution design for a healthcare AI system using agent-based architecture, retrieval-augmented generation, and structured data pipelines to produce context-aware medical insights."
  },
  framework: [
    {
      title: "Frame",
      description:
        "Translate business requirements into clear questions, usable metrics, and decision-oriented problem statements."
    },
    {
      title: "Structure",
      description:
        "Build the data foundation through SQL, data modeling, pipelines, and analytical workflows that can be trusted."
    },
    {
      title: "Deliver",
      description:
        "Turn analysis into dashboards, models, and operating tools that support action rather than just reporting."
    }
  ],
  signalCards: [
    {
      title: "SQL and Data Modeling",
      description:
        "Comfortable designing structured datasets, 3NF and star schema models, and analytics-ready pipelines."
    },
    {
      title: "Business-to-Data Translation",
      description:
        "Experienced in turning operational requirements into metrics, dashboards, backlogs, and measurable outcomes."
    },
    {
      title: "Execution and Delivery",
      description:
        "Grounded in project management, transformation work, and implementation across real business workflows."
    }
  ] satisfies HighlightItem[]
};

export const about = {
  title: "A data profile built on structured execution, operational context, and analytical rigor",
  paragraphs: [
    "My background combines chemical engineering, operations leadership, and project delivery with a growing focus on data and analytics. That combination has shaped how I approach work: start with process reality, define the business question clearly, and build structured outputs that people can actually use.",
    "Professionally, I have worked across operations, PMO, and transformation roles, building SQL-driven reporting, data pipelines, dashboards, and decision-support workflows. I am currently pursuing an MSc in Business Analytics at the National University of Singapore, where my project work has expanded into valuation modeling, data warehousing, optimization, and applied AI solution design."
  ],
  strengths: [
    {
      title: "SQL and data modeling",
      description:
        "Strong interest in structured datasets, analytical data design, and shaping raw business data into usable information assets."
    },
    {
      title: "Business requirements to analytics output",
      description:
        "Able to translate real operating needs into metrics, dashboards, pipelines, and analytical workflows."
    },
    {
      title: "Execution discipline",
      description:
        "Brings PMP-style structure and operations experience to analytical work so delivery stays grounded and implementable."
    }
  ] satisfies HighlightItem[],
  secondaryPanelTitle: "NUS MsBA Highlights",
  secondaryHighlights: [
    {
      title: "AI Innovation Challenge",
      description:
        "Placed 2nd runner-up in the NUS-SYNAPXE-IMDA AI Innovation Challenge 2026 with a healthcare AI concept built around agent-based design, RAG, and structured pipelines."
    },
    {
      title: "Property valuation pipeline",
      description:
        "Built an end-to-end analytics pipeline in Python and SQL with feature engineering, model benchmarking, and Random Forest selected on generalization performance."
    },
    {
      title: "Movie profitability classification",
      description:
        "Developed a green-light decision support model for film profitability using LassoCV feature selection, Elastic-Net Logistic Regression, LightGBM benchmarking, and SHAP interpretation."
    },
    {
      title: "Data modeling and BI",
      description:
        "Designed 3NF and star schema structures for a Tour de France analytics project, then turned them into dashboard-ready SQL outputs and Power BI metrics."
    },
    {
      title: "Quantitative optimization",
      description:
        "Built a portfolio optimization pipeline using 30 years of data across 43 industry portfolios with MPT, CAPM, shrinkage, and out-of-sample evaluation."
    }
  ] satisfies HighlightItem[]
};

export const skills: SkillCategory[] = [
  {
    title: "Data and Analytics Engineering",
    description:
      "Structured data work focused on shaping reliable datasets and pipelines for reporting, modeling, and decision support.",
    items: [
      "SQL",
      "Data Modeling",
      "3NF",
      "Star Schema",
      "Data Pipelines",
      "Metrics Design",
      "Structured Datasets",
      "Analytics Engineering"
    ]
  },
  {
    title: "Applied Analytics and Machine Learning",
    description:
      "Analytical work spanning model development, evaluation, optimization, and decision-oriented interpretation.",
    items: [
      "Python",
      "EDA",
      "Feature Engineering",
      "Model Evaluation",
      "Random Forest",
      "XGBoost",
      "Logistic Regression",
      "LightGBM",
      "SHAP",
      "Classification",
      "Portfolio Optimization",
      "Business Analytics"
    ]
  },
  {
    title: "BI, Reporting, and Decision Support",
    description:
      "Business-facing outputs designed for clarity, usability, and faster operational decisions.",
    items: [
      "Power BI",
      "Dashboarding",
      "Data Visualization",
      "Reporting Automation",
      "KPI Design",
      "Decision Support",
      "VBA",
      "SAP ERP"
    ]
  },
  {
    title: "Operations and Delivery Leadership",
    description:
      "Execution capability built through operations management, project delivery, and transformation work.",
    items: [
      "Project Management",
      "Agile and Waterfall",
      "Continuous Improvement",
      "Product Ownership",
      "Backlog Structuring",
      "Stakeholder Alignment",
      "Process Redesign",
      "Operations Leadership"
    ]
  }
];

export const projects: Project[] = [
  {
    slug: "healthcare-ai-innovation-challenge",
    title: "Healthcare AI Insight System",
    summary:
      "A 2nd runner-up entry in the NUS-SYNAPXE-IMDA AI Innovation Challenge 2026, where I led product structuring and solution design for a healthcare AI system built to generate context-aware medical insights.",
    businessLens:
      "The work focused on shaping an applied AI concept around workflow usefulness by combining agent-based architecture, retrieval-augmented generation, and structured data pipelines.",
    tools: [
      "Agent-Based Architecture",
      "RAG",
      "Structured Data Pipelines",
      "AI Solution Design",
      "Healthcare AI"
    ],
    featured: true,
    actions: [
      { label: "Case Study" },
      { label: "Live Demo" },
      { label: "GitHub" }
    ]
  },
  {
    slug: "movie-profitability-classification-predictor",
    title: "Movie Profitability Classification and Predictor App",
    summary:
      "Built from an NUS DBA5106 classification project that predicts whether a movie is likely to meet a profitable gross-margin threshold using market, genre, budget, runtime, release timing, and director-profile features.",
    businessLens:
      "The project frames machine learning as green-light decision support for producers and financiers. The report compared Logistic Regression and LightGBM, selected unweighted Elastic-Net Logistic Regression on validation AUC of 0.8244, and used a cost-sensitive threshold of 0.45 to prioritize recall for profitable films.",
    tools: [
      "Python",
      "Logistic Regression",
      "LightGBM",
      "LassoCV",
      "SHAP",
      "FastAPI",
      "React"
    ],
    actions: [
      {
        label: "Project Repo",
        href: "https://github.com/carloida/portfolio_msba_moviepredictor",
        external: true
      },
      {
        label: "Frontend Code",
        href: "https://github.com/carloida/portfolio_msba_moviepredictor/tree/main/frontend",
        external: true
      },
      {
        label: "Model Notes",
        href: "https://github.com/carloida/portfolio_msba_moviepredictor#model-pipeline-summary",
        external: true
      }
    ]
  },
  {
    slug: "property-valuation-analytics-pipeline",
    title: "Private Property Valuation Analytics Pipeline",
    summary:
      "Built an end-to-end analytics pipeline for a property valuation system using Python and SQL, covering data preprocessing, feature engineering, model benchmarking, and evaluation.",
    businessLens:
      "Structured the data and metrics to compare Ridge, Random Forest, and XGBoost, selecting Random Forest based on generalization performance with MAE of roughly $153K and R-squared of 0.888.",
    tools: [
      "Python",
      "SQL",
      "Random Forest",
      "XGBoost",
      "Feature Engineering",
      "Model Evaluation"
    ],
    actions: [
      { label: "Case Study" },
      { label: "Live Demo" },
      { label: "GitHub" }
    ]
  },
  {
    slug: "tour-de-france-data-modeling-dashboard",
    title: "Tour de France Data Modeling and Dashboard Project",
    summary:
      "Cleaned and structured rider, team, and stage data using SQL and Power BI, then designed the underlying database using both 3NF and star schema approaches.",
    businessLens:
      "The project emphasized data modeling discipline and turning raw event data into reusable metrics, queries, and dashboard-ready views.",
    tools: ["SQL", "Power BI", "3NF", "Star Schema", "Data Modeling", "Dashboarding"],
    actions: [
      { label: "Case Study" },
      { label: "Live Demo" },
      { label: "GitHub" }
    ]
  },
  {
    slug: "portfolio-optimization-pipeline",
    title: "Portfolio Optimization Pipeline",
    summary:
      "Built a portfolio optimization workflow using 30 years of returns from 43 industry portfolios, applying MPT and CAPM with shrinkage to construct and combine EWP, GMV, and Tangency portfolios.",
    businessLens:
      "The objective was not just higher in-sample performance, but more stable out-of-sample behavior and clearer communication of allocation trade-offs through Sharpe-oriented optimization.",
    tools: ["Python", "MPT", "CAPM", "Shrinkage", "Optimization", "Out-of-Sample Testing"],
    actions: [
      { label: "Case Study" },
      { label: "Live Demo" },
      { label: "GitHub" }
    ]
  },
  {
    slug: "operations-reporting-and-data-pipelines",
    title: "Operations Reporting and Data Pipeline Buildout",
    summary:
      "Built analytics-driven reporting, SQL-backed data pipelines, and planning tools in an operations environment to reduce manual reporting and support faster decision-making.",
    businessLens:
      "This prior work shows how I translate enterprise requirements into structured backlogs, data models, workflows, and measurable transformation outcomes beyond standard ERP reporting.",
    tools: ["SQL", "VBA", "SAP ERP", "Reporting Automation", "Metrics Design", "Web Apps"],
    actions: [
      { label: "Case Study" },
      { label: "Live Demo" },
      { label: "GitHub" }
    ]
  }
];

export const experience: ExperienceEntry[] = [
  {
    phase: "Current Study",
    title: "MSc Business Analytics",
    organization: "National University of Singapore",
    period: "Aug 2025 - Dec 2026",
    location: "Singapore",
    summary:
      "Current graduate work focused on applied analytics, valuation modeling, data warehousing, optimization, and AI solution design in business-relevant settings.",
    points: [
      "Placed 2nd runner-up in the NUS-SYNAPXE-IMDA AI Innovation Challenge 2026.",
      "Built NUS project work spanning property valuation, relational and dimensional data modeling, and portfolio optimization.",
      "Expanded analytical work from reporting and operations support into more formal modeling and decision science."
    ]
  },
  {
    phase: "Consulting and Delivery",
    title: "Project Manager",
    organization: "Freelance",
    period: "Jun 2022 - Present",
    location: "Metro Manila",
    summary:
      "Led cross-functional projects across operations and software using hybrid Agile and Waterfall delivery approaches.",
    points: [
      "Coordinated work across stakeholders, timelines, and delivery constraints.",
      "Applied structured project execution to both business process and software-oriented initiatives.",
      "Maintained a delivery style centered on clarity, accountability, and measurable outcomes."
    ]
  },
  {
    phase: "Operations and Analytics Leadership",
    title: "Operations Manager",
    organization: "Blaine Corp",
    period: "Jul 2019 - Feb 2023",
    location: "Carmona, Cavite",
    summary:
      "Led operational reporting, digitization, and transformation work with increasing emphasis on analytics, SQL pipelines, and decision support.",
    points: [
      "Built analytics-driven reporting and SQL plus VBA pipelines that reduced manual reporting time and enabled near real-time decision support.",
      "Designed SQL-backed data pipelines, analytics tools, and web applications to extend workflow digitization beyond legacy SAP processes.",
      "Acted as product owner for 60-plus transformation and continuous improvement initiatives with structured backlogs and measurable outcomes."
    ]
  },
  {
    phase: "Planning and PMO",
    title: "Planner and PMO Lead",
    organization: "Blaine Corp",
    period: "Mar 2018 - Jul 2019",
    location: "Philippines",
    summary:
      "Built planning structure and PMO discipline in a manufacturing context, improving alignment between demand, inventory, and operational execution.",
    points: [
      "Led PMO setup and SOP redesign to improve governance and execution visibility.",
      "Optimized MRP planning to address supply gaps and support better operating coordination.",
      "Strengthened the foundation for later reporting, process, and transformation work."
    ]
  },
  {
    phase: "Technical Foundation",
    title: "R&D Staff",
    organization: "YSS Labs (Cathay Drug)",
    period: "Jun 2016 - Mar 2017",
    location: "Philippines",
    summary:
      "Early technical role that reinforced disciplined problem solving, technical documentation, and process-oriented thinking.",
    points: [
      "Built hands-on exposure to technical workflows in a regulated product environment.",
      "Developed the process discipline that later carried into operations and analytics work.",
      "Established a technical foundation before moving into planning, PMO, and business operations roles."
    ]
  }
];

export const liveDemos: LiveDemo[] = [
  {
    title: "Movie Hit Predictor",
    summary:
      "Interactive project application for early-stage movie profitability screening, built from the DBA5106 classification model and packaged with a React frontend plus FastAPI model backend.",
    status: "Repo Ready",
    stack: ["React", "FastAPI", "Elastic-Net Logistic Regression", "SHAP"],
    url: "https://github.com/carloida/portfolio_msba_moviepredictor",
    actionLabel: "Open Project"
  },
  {
    title: "Property Valuation Workbench",
    summary:
      "Planned interactive interface for valuation scenarios, comparable screening, and model-assisted property assessment.",
    status: "Coming Soon",
    stack: ["Next.js", "Python model integration later", "Scenario controls"]
  },
  {
    title: "Healthcare Insight Assistant",
    summary:
      "Planned applied AI interface inspired by the innovation challenge concept, designed for context-aware knowledge retrieval and guided insight generation.",
    status: "Concept Ready",
    stack: ["Agent workflows", "RAG", "Structured data pipelines"]
  },
  {
    title: "Portfolio Allocation Explorer",
    summary:
      "Planned interface for comparing EWP, GMV, and Tangency allocations with clearer risk-return interpretation.",
    status: "Coming Soon",
    stack: ["Optimization", "Scenario comparison", "Performance charts"]
  },
  {
    title: "Operations Analytics Workspace",
    summary:
      "Planned reporting environment for KPI monitoring, filtered operational views, and structured decision support.",
    status: "Coming Soon",
    stack: ["SQL-backed metrics", "Dashboard UI", "Operational reporting"]
  }
];

export const contactLinks: ContactLink[] = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/carloida",
    description: "Professional profile and background.",
    href: "https://www.linkedin.com/in/carloida",
    external: true,
    actionLabel: "Open LinkedIn"
  },
  {
    label: "GitHub",
    value: "Code portfolio",
    description: "Add your GitHub profile or repository collection when you are ready to publish it."
  },
  {
    label: "Email",
    value: "carloida.pm@gmail.com",
    description: "Best contact point for opportunities, collaboration, and analytics work.",
    href: "mailto:carloida.pm@gmail.com",
    actionLabel: "Send Email"
  },
  {
    label: "Resume",
    value: "Updated 2026 resume",
    description: "Download the latest resume used to update this portfolio.",
    href: "/carlo-emilio-ida-resume-2026.pdf",
    download: true,
    actionLabel: "Download Resume"
  }
];
