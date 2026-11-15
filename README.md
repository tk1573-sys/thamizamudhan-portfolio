# Thamiz Amudhan — Professional Portfolio

Hybrid professional portfolio connecting enterprise data engineering, academia, doctoral research, software projects, freelance IT services, and online teaching.

## Professional profile
- Data Engineer at Tata Consultancy Services; experience across IBM DataStage, Teradata, SQL, Python, Unix shell scripting, ETL development, and data warehousing.
- Incoming Assistant Professor – CS Cluster, Dayananda Sagar University, Bengaluru; joining January 2027.
- M.Tech in Data Science, SRM Institute of Science and Technology; completed in 2026.
- Part-time PhD journey in Computer Science and Engineering (Generative AI), Shiv Nadar University Chennai.
- Research direction: Human-Centered Explainable AI for Early Healthcare in Children with Special Needs.

## Featured applications
- **Thamizh's Life Command Centre:** https://thamizh-app.vercel.app — live PWA URL documented in its repository.
- **AI Emotional Wellness Buddy:** https://github.com/tk1573-sys/AI-wellness-Buddy — Render/Vercel deployment architecture and instructions exist; public production endpoints are not yet verified.
- **Thamizh Life Coach:** https://github.com/tk1573-sys/thamizh-life-coach — standalone Windows desktop MVP; repository documents how to build a portable executable folder.

## Mini projects and technical work
- **Personal Analytics Platform:** https://github.com/tk1573-sys/tracker — Python, pandas, Excel dashboard generation, Power BI assets, and FastAPI foundation.
- **PolicyX:** https://github.com/tk1573-sys/policyx-global — evidence-grounded policy intelligence proof of concept with PDF/OCR ingestion, retrieval, policy lineage, deterministic comparisons, and audit logs.

## Research
Research explores personalised distress detection and intervention for children with limited verbal communication, combining potential wearable/physiological signals (ECG, PPG, heart rate, temperature, movement), visual behaviour, audio cues, multimodal learning, explainable AI, and caregiver decision support. This is a developing research direction; no clinical validation or completed results are claimed.

## Freelance services and teaching
Open to suitable work for both students and organisations:
- Teaching: SQL, Python, DBMS, Data Engineering, AI/ML.
- Freelance: SQL and ETL development, Python automation, web application development, AI/ML prototypes, and technical consulting.

Enquiries are intended through both email and WhatsApp. Configure the public contact details using the environment variables below before publishing.

## Local development
```bash
npm install
npm run dev
npm run typecheck
npm run build
```
Open http://localhost:3000.

## Contact configuration
Copy `.env.example` to `.env.local` and set:
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER` (international digits including country code, no plus sign)

Do not commit personal secrets, tokens, API keys, confidential employer information, or private academic documents.

## Deployment
Connect this repository to Vercel and deploy the production branch after the typecheck and production build pass.
