# Estro Tech website guide

## Main files

- `src/main.jsx` starts the React application.
- `src/App.jsx` defines routes, shared navigation and footer, page metadata, scroll behavior, reveal animations, and the enquiry provider.
- `src/styles.css` contains shared design tokens, layout styles, and responsive rules.
- `src/components/` contains shared navigation, footer, links, and enquiry form components.
- `src/pages/` contains the homepage, company pages, product detail pages, and page-specific styles.

## Routes

| Route | Page file |
| --- | --- |
| `/` | `src/pages/HomePage.jsx` |
| `/products/:slug` | `src/pages/ProductDetailPage.jsx` |
| `/resources` and `/resources/*` | `src/pages/CompanyPages.jsx` |
| `/about` | `src/pages/CompanyPages.jsx` |
| `/careers` | `src/pages/CompanyPages.jsx` |
| `/contact` | `src/pages/CompanyPages.jsx` |
| Unknown route | `src/pages/CompanyPages.jsx` |

## Content and assets

- Homepage content and the product reel are in `src/pages/HomePage.jsx` and `src/pages/ProductReel.jsx`.
- Product detail content is in the product records in `src/pages/ProductDetailPage.jsx`.
- Company, resources, careers, and contact content is in `src/pages/CompanyPages.jsx`.
- Company gallery images are in `src/assets/images/gallery/`.
- Product imagery and responsive feature images are in `src/assets/images/products/` and `src/assets/images/responsive/`.
- The client strip images are imported from `Clients/STRIP 1.png` through `Clients/STRIP 5.png`, in that order.
- Site logos are in `src/assets/logos/`.

## Styles

- `src/styles.css` contains shared colors, fonts, layout, header, footer, homepage, motion, and responsive styles.
- `src/pages/InnerPages.css` contains company, resource, contact, enquiry dialog, and product detail styles.

The site uses locally hosted Geist and Geist Mono variable fonts. The font files and their license are in `src/assets/fonts/` and `src/assets/licenses/`.

## Run and publish

In the project folder:

```powershell
npm install
npm run dev
npm run build
npm run preview
```

The production build is written to `dist/`.

The contact form sends submissions only when `VITE_ENQUIRY_ENDPOINT` is configured. See `ENQUIRY_SETUP.md` for setup details.
