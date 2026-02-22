# PIONEXUS LABS Website (Next.js)

This project is ready to deploy on Vercel.

## Local run
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy to Vercel (important)
When uploading to GitHub, make sure **package.json** and the **app/** folder are in the repository root.

Repo root must contain:
- app/
- components/
- public/
- package.json

If you accidentally upload an extra parent folder, Vercel will fail with:
"Couldn't find any `pages` or `app` directory".


### Note
The `/contact` page uses `useSearchParams()` and is wrapped in a React `Suspense` boundary for Next.js build compatibility.
