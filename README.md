# OCR Compliance Checker — Frontend

## Setup
1. `git clone https://github.com/Abhinav7234/Ocr-project.git`
2. `cd Ocr-project/frontend`
3. `npm install`
4. `npm run dev` — opens at http://localhost:5173

## Branching
- Never push directly to `main`
- Create your own branch: `git checkout -b feature/your-task-name`
- Push your branch, then open a Pull Request into `main`

## Folder structure
- `src/pages/` — one file per page (Login, Dashboard, Upload, ComplianceResults, History, Reports)
- `src/components/` — reusable pieces (common UI, ObjectRecognition, OcrExtraction)
- `src/data/mockData.js` — shared fake data, build against this until the real backend exists
