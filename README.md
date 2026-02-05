# MyPort Portfolio

Modern portfolio built with Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui components, lucide-react icons, and framer-motion.

## Getting started

Choose one package manager.

```bash
npm install
npm run dev
```

```bash
pnpm install
pnpm dev
```

```bash
yarn
yarn dev
```

The site runs at `http://localhost:3000`.

## Content editing

All content is stored in TypeScript files and can be edited without a CMS.

- `content/profile.ts`: name, headline, bio, stack, social links, resume URL.
- `content/projects.ts`: projects list, tags, links, images, and detailed copy.
- `content/certificates.ts`: certificates list, issuers, credential IDs, preview images.
- `content/timeline.ts`: optional experience timeline.

Images are stored in `public/projects` and can be replaced with real assets.

## Contact form configuration

The contact form posts to `/api/contact` using Resend. Configure these environment variables:

```
RESEND_API_KEY=your_api_key
CONTACT_TO_EMAIL=you@yourdomain.com
CONTACT_FROM_EMAIL=portfolio@yourdomain.com
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

If the variables are missing, the API returns a 503 error and the UI shows a failure state.

## Build and deploy

```bash
npm run build
npm run start
```

```bash
pnpm build
pnpm start
```

```bash
yarn build
yarn start
```

For Vercel:

1. Push the repo to GitHub.
2. Import the project in Vercel.
3. Add the environment variables above.
4. Deploy.

## Lint and format

```bash
npm run lint
npm run format
```
