# webetask.app

Marketing website for Webetask. Next.js 16 (App Router), TypeScript, plain CSS. The product lives at `app.webetask.app` in a separate repo.

## Run it on your computer

```bash
npm install
cp .env.example .env.local   # optional for local work
npm run dev
```

Open http://localhost:3000

## Where things are

| What | File |
|---|---|
| Colors, fonts, all styles | `src/app/globals.css` (tokens at the top) |
| Prices, plans, links, support email | `src/lib/site.ts` |
| Competitor numbers (compare pages) | `src/lib/competitors.ts` |
| Legal text (draft) | `src/lib/legal.tsx` |
| Blog posts | `src/content/posts/` (register new ones in `src/lib/blog.ts`) |
| Pages | `src/app/**/page.tsx` |
| Contact form backend | `src/app/api/contact/route.ts` |
| Contact table in Supabase | `supabase/contact_messages.sql` |
| Deploy to the VPS | `DEPLOY.md` |

## Pages

`/` · `/features` · `/pricing` · `/compare/asana` · `/compare/clickup` · `/compare/trello` · `/about` · `/contact` · `/blog` · `/blog/[slug]` · `/legal/terms` · `/legal/privacy` · `/legal/refunds`

Plus `sitemap.xml`, `robots.txt`, social share images and structured data for search engines.

## Rules for changes

- Colors and fonts only through the CSS variables in `globals.css`. No hard-coded hex values in components.
- Prices and plan limits only in `src/lib/site.ts`, so every page stays in sync.
- Write copy short and direct, in sentence case.
