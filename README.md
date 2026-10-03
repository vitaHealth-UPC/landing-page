# Tata Landing Page

A responsive, bilingual landing page for **Tata**, a medication-care experience designed to help older adults manage daily medication routines while keeping their families informed.

The site is implemented as a lightweight static web project and follows the approved Tata visual direction across desktop, laptop, tablet, and mobile breakpoints.

## Highlights

- Responsive implementation aligned with the Figma desktop and mobile layouts
- Medication reminder, confirmation, family follow-up, pricing, testimonial, support, and CTA sections
- English and Spanish localization with runtime language switching
- Responsive app-preview carousel on mobile
- Semantic HTML and keyboard-focus support
- Optimized local image and icon assets
- GitHub Pages deployment through GitHub Actions

## Tech stack

| Layer | Technology |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS3 |
| Interactivity | Vanilla JavaScript (ES6+) |
| Localization | Custom JavaScript i18n |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |

No framework, bundler, or package installation is required.

## Project structure

```text
.
├── .github/
│   └── workflows/
│       └── pages.yml
├── assets/
│   ├── icons/
│   ├── images/
│   └── logo/
├── css/
│   ├── responsive.css
│   └── styles.css
├── js/
│   ├── i18n.js
│   └── main.js
├── index.html
└── README.md
```

## Run locally

Because the project is fully static, it can be opened directly in a browser. For a local HTTP server, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Localization

The landing page supports:

- **English** as the default locale
- **Spanish (Latin America)**

Localized copy is maintained in `js/i18n.js`. Elements that change language use `data-i18n` attributes, while responsive copy variants use `data-i18n-mobile` where needed.

## Responsive design

The implementation includes dedicated behavior for:

- Desktop and wide screens
- Laptop/intermediate widths
- Tablet layouts
- Mobile layouts up to 767 px

The responsive rules live primarily in `css/responsive.css`, while base visual styles and design tokens are defined in `css/styles.css`.

## Branching workflow

- `main` — stable branch intended for the final integrated version
- `develop` — integration branch for completed feature and fix work
- `feature/*` — isolated feature development
- `fix/*` — focused corrective changes

Changes should be integrated through pull requests so the history remains reviewable.

## Deployment

GitHub Pages deployment is configured in `.github/workflows/pages.yml`.

The workflow runs on pushes to:

- `develop`
- `main`

It can also be launched manually with `workflow_dispatch`.

Deployment uses the official GitHub Pages actions:

1. `actions/checkout`
2. `actions/configure-pages`
3. `actions/upload-pages-artifact`
4. `actions/deploy-pages`

## Accessibility and quality

The page includes semantic landmarks, descriptive labels for interactive controls, keyboard-visible focus states, responsive image handling, and decorative assets marked appropriately for assistive technologies.

For visual changes, validate both supported languages and the desktop/mobile layouts before merging.

## Repository

Maintained by **VitaHealth UPC** for the Tata product landing page.
