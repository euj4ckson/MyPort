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
CONTACT_FROM_EMAIL=portfolio@yourdomain.com
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

The destination email is fixed in `app/api/contact/route.ts` as `jacksonduardo6@gmail.com`.
If `RESEND_API_KEY` is missing, the API returns a 503 error and the UI shows a failure state.

### How to get `RESEND_API_KEY`

1. Create/login to your account at `https://resend.com`.
2. Open API keys in the dashboard: `https://resend.com/api-keys`.
3. Click **Create API Key**.
4. Choose a name and permission (`sending_access` is enough for this project).
5. Copy the token (starts with `re_...`). Resend only shows it once.

### Local setup

1. Copy `.env.local.example` to `.env.local`.
2. Set your key in `RESEND_API_KEY`.
3. For first tests, use `CONTACT_FROM_EMAIL=onboarding@resend.dev`.
4. Restart `npm run dev`.

If you need to send to recipients other than your own account email, verify a custom sending domain in Resend and use it in `CONTACT_FROM_EMAIL`.

### Quick API test (PowerShell)

```powershell
$payload = @{
  name = "Teste local"
  email = "teste@example.com"
  message = "Teste de envio do formulario de contato."
} | ConvertTo-Json

Invoke-WebRequest `
  -Uri http://localhost:3000/api/contact `
  -Method POST `
  -ContentType "application/json" `
  -Body $payload
```

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
