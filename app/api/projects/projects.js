export const projects = [
  {
    id: 1,
    title: "Multi-Location Smart Inventory & Procurement System",
    category: "Internal Business Tools",
    imageUrl: "/projects/tantun.jpg",
    shortDescription: "Replaced error-prone manual spreadsheets with a high-reliability full-stack inventory platform featuring real-time stock tracking and automated PO generation.",
    tags: ["React", "NestJS", "PostgreSQL", "Prisma", "AWS", "Docker"],
    urls: [
      {
        title: "View Case Study",
        url: "/projects/1",
        type: "casestudy",
      },
    ],
    color: "#0F172A",
    problem: "A growing multi-location business relied entirely on Google Sheets for stock tracking and vendor order management. Over-ordering, frequent stockouts, and manual PO preparation mistakes cost over 25 hours per week in wasted labor and thousands in spoilage.",
    solution: "Designed and deployed a modern enterprise inventory system. Features mobile-responsive stocktaking for floor workers, automated low-stock threshold alerts, one-click purchase order PDF generation, and multi-tier user role permissions.",
    architecture: "React (Next.js) frontend consuming NestJS REST APIs. Backend backed by PostgreSQL and Prisma ORM, deployed on AWS with containerized Docker services. PDF generation offloaded to serverless utility workers.",
    results: [
      "75% reduction in weekly stocktake processing time",
      "100% elimination of manual PO calculation errors",
      "700+ active end-users served across multiple branches",
      "Zero downtime over 12+ months of continuous operations"
    ],
    challenges: "Handling concurrent stock adjustments across multiple locations without race conditions. Solved using database transactions and optimistic locking in PostgreSQL.",
    lessonsLearned: "Floor staff adoption is heavily driven by mobile UX simplicity. Simplifying mobile inputs drastically increased data accuracy."
  },
  {
    id: 2,
    title: "Deplora: AI-Powered Deployment Orchestration Platform",
    category: "AI Engineering & DevOps",
    imageUrl: "/projects/deplora.png",
    shortDescription: "AI system that analyzes codebase semantics to automatically generate, validate, and personalize cloud deployment pipelines (Published in MERCon 2025 IEEE).",
    tags: ["Python", "FastAPI", "LangChain", "Neo4j", "Terraform", "Gemini API"],
    urls: [
      {
        title: "IEEE Paper / Code",
        url: "https://github.com/sahiruw/deplora",
        type: "codebase",
      },
    ],
    color: "#1E1B4B",
    problem: "DevOps engineering bottlenecks frequently delay software deployments because developers must manually write complex IaC scripts and CI/CD pipelines tailored to specific cloud environments.",
    solution: "Built Deplora, an agentic AI deployment assistant. It extracts intent from user natural language prompts and codebase structure, generating customized Terraform scripts and GitHub Actions workflows automatically.",
    architecture: "FastAPI backend integrated with LangChain and Graph RAG (Neo4j). Uses Transformer-based intent classification and LLM reasoning to output validated IaC configurations.",
    results: [
      "80% reduction in deployment pipeline setup time for dev teams",
      "Research published in MERCon 2025 IEEE Conference",
      "Automated detection of security misconfigurations prior to deployment"
    ],
    challenges: "Ensuring LLM generated infrastructure code was syntactically correct and safe. Implemented deterministic static analysis validation loops on output.",
    lessonsLearned: "Combining deterministic code validation with probabilistic LLM generation delivers enterprise-grade reliability."
  },
  {
    id: 3,
    title: "High-Throughput Supply Chain & Staging Integration Engine",
    category: "Backend & Enterprise Integrations",
    imageUrl: "/projects/BAirways.jpg",
    shortDescription: "Built high-throughput backend services and staging databases for enterprise warehouse logistics serving one of the world's largest food distributors.",
    tags: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "PL/pgSQL", "AWS"],
    urls: [
      {
        title: "Enterprise Project Details",
        url: "/projects/3",
        type: "casestudy",
      },
    ],
    color: "#064E3B",
    problem: "Legacy warehouse management interfaces (SIGMA / BlueYonder) struggled to handle peak transaction spikes, leading to data synchronization delays and order fulfillment bottlenecks.",
    solution: "Engineered high-concurrency middleware services utilizing event-driven architecture with Kafka and optimized PL/pgSQL database procedures to buffer, transform, and ingest shipment records in real-time.",
    architecture: "Spring Boot microservices communicating asynchronously via Apache Kafka. PostgreSQL staging database with high-performance stored procedures and automated data archival utilities.",
    results: [
      "Millions of supply chain records processed daily",
      "99.99% system availability during high-volume operations",
      "Sub-second data staging response times under peak load"
    ],
    challenges: "Preventing database locks during bulk record ingestion. Addressed through partitioned tables and asynchronous batching.",
    lessonsLearned: "Event-driven buffering is indispensable when integrating modern microservices with legacy enterprise systems."
  },
  {
    id: 4,
    title: "Automated Enterprise Cloud Governance & Cost Guard",
    category: "Cloud Infrastructure & DevOps",
    imageUrl: "/projects/poapp.jpg",
    shortDescription: "Automated cloud infrastructure governance, security compliance checks, and AMI build pipeline optimization for financial technology platforms.",
    tags: ["AWS", "Terraform", "Packer", "Cloud Custodian", "OWASP ZAP", "Datadog"],
    urls: [
      {
        title: "View Case Study",
        url: "/projects/4",
        type: "casestudy",
      },
    ],
    color: "#312E81",
    problem: "Unused AWS cloud resources across development sandboxes caused budget overruns, while manual security vulnerability checks slowed down release cadences.",
    solution: "Designed policy-driven cloud governance with automated resource lifecycle management. Integrated OWASP ZAP into CI/CD pipelines for continuous DAST security scanning and optimized machine image builds.",
    architecture: "Infrastructure-as-Code engineered with modular Terraform modules. Cloud Custodian scripts enforcing real-time policy rules on AWS Lambda. Packer pipelines for rapid AMI creation.",
    results: [
      "62.5% reduction in AMI image build time",
      "Thousands saved monthly in cloud expenditure via automated resource cleanup",
      "Automated security vulnerability reporting embedded in all deployment pipelines"
    ],
    challenges: "Enforcing strict governance without disrupting ongoing developer work. Implemented automated slack alerts prior to resource teardown.",
    lessonsLearned: "DevOps governance works best when paired with proactive developer notifications and self-service capabilities."
  },
  {
    id: 5,
    title: "Enterprise Process & Google Workspace Automation Suite",
    category: "Business Automation",
    imageUrl: "/projects/BAirways.jpg",
    shortDescription: "Custom automation ecosystem replacing manual data entry across Google Workspace, Microsoft Office, and third-party REST APIs for global clients.",
    tags: ["Google Apps Script", "VBA", "Python", "REST APIs", "Google Sheets"],
    urls: [
      {
        title: "View Client Feedback",
        url: "/projects/5",
        type: "casestudy",
      },
    ],
    color: "#701A75",
    problem: "Operational teams spent 30+ hours weekly manually extracting client data from incoming emails, converting PDF invoices, and updating disparate Google Sheets.",
    solution: "Developed 600+ tailored scripts, webhooks, and custom add-ins connecting email parsers directly to spreadsheet databases, automated PDF generation, and external CRM endpoints.",
    architecture: "Serverless execution using Google Apps Script triggers, Python backend micro-scrapers, and custom Excel VBA macros with RESTful API hooks.",
    results: [
      "600+ bespoke automation solutions successfully delivered",
      "Over 500 hours saved monthly across client operations",
      "99.9% reduction in manual data entry transcription errors"
    ],
    challenges: "Handling quota limits on cloud script executions during heavy payload days. Built exponential backoff retry algorithms.",
    lessonsLearned: "Lightweight cloud automations yield massive ROI when targeting specific repetitive administrative bottlenecks."
  },
  {
    id: 6,
    title: "AI Customer Knowledge Base RAG Assistant",
    category: "AI Engineering & Vector Search",
    imageUrl: "/projects/deplora.png",
    shortDescription: "Retrieval-Augmented Generation (RAG) system enabling support teams to instantaneously query complex technical documentation using natural language.",
    tags: ["Python", "FastAPI", "LangChain", "Pinecone", "OpenAI API", "Docker"],
    urls: [
      {
        title: "View Case Study",
        url: "/projects/6",
        type: "casestudy",
      },
    ],
    color: "#042F2E",
    problem: "Support engineers spent up to 20 minutes finding exact policy and technical guidelines buried across hundreds of internal PDF user manuals and technical specs.",
    solution: "Engineered a high-speed RAG pipeline that indexes company documents into vector space, allowing real-time context-aware answers complete with page citations.",
    architecture: "LangChain orchestration retrieving semantic vectors from Pinecone DB. Context fed into LLM prompts via a secure FastAPI backend.",
    results: [
      "Reduced average knowledge retrieval time from 15 mins to under 3 seconds",
      "94% accuracy rating verified by enterprise support team leaders",
      "Instant onboarding of new support personnel with zero manual training"
    ],
    challenges: "Chunking heterogeneous PDFs without losing tabular context. Implemented custom layout-aware PDF parsers.",
    lessonsLearned: "Document chunking strategy is 80% of the battle in production RAG systems."
  }
];
