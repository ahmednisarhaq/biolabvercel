# Bio Labs website

GitHub-ready source for the Bio Labs wellness landing page and study-based PDF guide library.

## Included guides

- **The Olfactory Reset** - based on the 2026 randomized trial of circadian-timed inhaled aromatherapy in older adults.
- **Sauna After Exercise** - based on the 2022 multi-arm randomized trial of exercise plus post-exercise sauna.
- **The Brain Health Lifestyle Plan** - based on the 2025 US POINTER randomized clinical trial.

The PDFs are stored in `public/guides/` and are copied into the final static website during the build.

## Publish with GitHub Pages

1. Create an empty GitHub repository.
2. Upload every file and folder from this package to the repository root.
3. Commit the files to the `main` branch.
4. In the repository, open **Settings > Pages**.
5. Under **Build and deployment**, choose **GitHub Actions**.
6. Open the **Actions** tab and allow the `Deploy Bio Labs to GitHub Pages` workflow to finish.

The workflow automatically detects the repository name and configures the correct GitHub Pages sub-path. It also works for a user or organization Pages repository ending in `.github.io`.

## Publish with Vercel

Import the GitHub repository into Vercel. The included `vercel.json` selects Next.js, runs `pnpm build:github`, and serves the generated `out/` directory. No Vite or `.openai/hosting.json` configuration is required.

If an older failed Vercel deployment was created before this fix, redeploy after uploading the corrected package and select **Redeploy without build cache**.

## Run locally

Requirements: Node.js 22+ and pnpm.

```bash
pnpm install
pnpm dev:github
```

Open `http://localhost:3000`.

To test the production export:

```bash
pnpm build:github
```

The static website is generated in `out/`.

## Important email limitation

GitHub Pages serves static files and cannot securely send verification emails or store subscribers by itself. The included form validates email structure and unlocks the selected PDF in the browser.

Before public launch, connect a hosted newsletter form or API from a service such as Kit, MailerLite, Brevo or Mailchimp. Double opt-in, domain/MX validation, consent records and verified PDF delivery must be handled by that provider or by a separate server-side function.

Do not place newsletter API secrets in browser code or in this public repository.

## Health-content notice

The guides are educational summaries, not medical advice. Review the copy and citations before publication, keep affiliate disclosures near recommendations, and avoid claims that a wellness product diagnoses, treats, cures or prevents disease.

## Source structure

- `app/` - website interface and styling
- `public/` - logo, social image and PDFs
- `.github/workflows/deploy-pages.yml` - automatic GitHub Pages deployment
- `next.config.ts` - static export and repository path configuration
