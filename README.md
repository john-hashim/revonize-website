# Rovonize website

React, TypeScript, Tailwind CSS and shadcn/ui, built with Vite. Inter is bundled locally through Fontsource, so the site does not depend on a Google Fonts request.

## Getting started

```sh
npm install
npm run dev
```

## Scripts

- `npm run dev` — development server with hot reload.
- `npm run build` — TypeScript checks and production build in `dist/`.
- `npm test` — intake validation and email-draft regression checks (Node 22.6+).
- `npm run lint` — static analysis with Oxlint.
- `npm run preview` — local preview of the production build.

## Source structure

```text
src/
  app/                    Router, shared layout and route effects
  components/
    common/               Shared actions and section/page headings
    layout/               Header, mobile navigation and footer
    sections/             Reusable landing-page content sections
    ui/                   shadcn/ui component source
  data/                   Navigation, company, capabilities, products and courses
  lib/                    Shared class-name utility
  pages/                  Route-level page composition
  App.tsx                 Router provider
  main.tsx                React entry point
  index.css               Tailwind imports, theme tokens and global styles
```

Use `@/` for imports from `src/`. Keep editable content in `src/data/`, compose pages in `src/pages/`, and reuse the section and UI components rather than duplicating them.

## Routes

| URL               | Page                                    |
| ----------------- | --------------------------------------- |
| `/`               | Landing page                            |
| `/products`       | UAV platforms                           |
| `/products/:slug` | Spectra, Veeksha, IBEX and STEM details |
| `/engineering`    | Capabilities and engineering workflow   |
| `/engineering/:serviceId` | Six engineering service detail pages |
| `/consult-engineering` | Engineering and prototyping quote request |
| `/academy`        | Aerospace Academy application            |
| `/about`          | Company and leadership                  |
| `/contact`        | Contact details and email enquiry draft |
| Unmatched paths   | Not-found page                          |

Contact links can preselect `topic`, `product` and `course` through query parameters. The contact, engineering quote request and academy application forms use `mailto:` to open an email draft in the visitor’s email application. They have no backend and do not send or store submissions. The previous `/request-quote` URL redirects to `/consult-engineering`.

Engineering detail pages link to `/consult-engineering?service=<serviceId>` to preselect the relevant services. Unknown service IDs fall back to an unselected enquiry. The legacy quote redirect preserves query parameters. Both intake forms validate required fields, checkbox groups and web links, then show a reviewable draft with copy and text-download fallbacks for email clients that cannot open or retain long `mailto:` messages. Changing a field clears the prepared draft so it cannot be sent with stale details.

## UI and styling

- Inter is the primary font for headings and body copy.
- Theme colours, spacing helpers and shared typography are in `src/index.css`.
- [shadcn/ui](https://ui.shadcn.com/docs/installation/vite) components are checked into `src/components/ui/`; `components.json` configures the CLI.
- Add components with `npx shadcn@latest add <component>` and keep utility imports pointing to `@/lib/utils`.
- Mobile navigation uses a shadcn Sheet; forms, badges and buttons use shared shadcn components.
- Product specifications and engineering capabilities live in `src/data/products.ts` and `src/data/capabilities.ts`. Academy fees and intake dates are not published.

## Replacing site images

Replace the matching WebP pair under `src/assets/images/uav/`, `src/assets/images/engineering/` or `src/assets/images/research/` with square exports at 1024 × 1024 and 480 × 480. Keep the filenames and redeploy. The engineering and UAV pages share the IBEX image pair. Vite updates the built filenames when image contents change, so the new deployment references the new versions.

## Image loading

Hero and industry images also have 480px WebP variants. `AssetImage` selects these for smaller rendered sizes and keeps the original for higher-density displays; retain the source image's actual width and height when using it. After replacing these originals, run `bash scripts/generate-image-variants.sh` (requires `cwebp`, available in the WebP command-line tools) and rebuild. The script preserves the originals.

The first hero image has high fetch priority. Hero rotation waits for the next image to decode and pauses in hidden tabs. A delayed HTML loading message covers startup before JavaScript runs; lazy route failures offer an explicit reload action.

## Deployment

Run `npm run build` and serve `dist/`. Configure your host to rewrite non-file requests (such as `/academy` and `/products/spectra`) to `/index.html` so direct route visits and refreshes work with React Router. No hosting provider is configured yet.
