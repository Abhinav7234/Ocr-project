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

## Using AI assistants for your task
If you're using an AI assistant (Claude, ChatGPT, etc.) to help with your piece, give it context so the answer actually fits this project:
- Your specific task (see the GitHub Issues)
- The tech stack and how we're using it — priority order: React + Vite (frontend), TensorFlow.js/MobileNet (object recognition), Tesseract.js (OCR), client-side only for now — no backend yet, build against `src/data/mockData.js`
- What teammates have already built, so it doesn't suggest a folder structure or approach that conflicts with what's already in the repo (see Folder structure above)

Without this context, the AI will often suggest a different framework, structure, or library than what we've already committed to — always double-check its suggestions match this README before running anything it gives you.
