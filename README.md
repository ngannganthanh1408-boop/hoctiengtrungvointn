# MSUTONG Review Site — Scaffold

This commit adds a minimal scaffold for the MSUTONG review site (Lesson 1–10).

Structure
- backend/: Express server that serves the API and static frontend files
- frontend/: Minimal static frontend that fetches /api/lessons and displays lesson buttons

Quick start
1. Install backend deps: cd backend && npm install
2. Start server: npm start (runs node index.js)
3. Open http://localhost:3000

Notes
- This is a minimal scaffold to jumpstart development. Next steps: convert frontend to React/Vue, add DB, authentication, exercise components, tests.
