### `README.md`
```md
# Portfolio — Pierre Chahine

Site-portfolio (CV en ligne) **React + Vite + TypeScript + Tailwind CSS + Framer Motion + React Router**.

Objectifs : moderne, rapide, responsive, accessible (WCAG 2.1 AA), SEO-friendly, mode clair/sombre. Cible Lighthouse ≥ 95.

## Prérequis
- Node.js **≥ 20.19**
- npm 10+

## Installation
```bash
npm i
```

## Démarrer en dev
```bash
npm run dev
```

## Build production
```bash
npm run build
```

## Prévisualiser le build
```bash
npm run preview
```

## Structure
Voir arborescence dans le dépôt. Principales pages : Accueil, Parcours, Projets, Compétences, Contact, Mentions légales, Privacy.

## Formulaire de contact (Formspree)
1. Créez un formulaire sur [Formspree](https://formspree.io/).
2. Récupérez l’URL d’action (ex : `https://formspree.io/f/xxxxxx`).
3. Créez un fichier `.env.local` à la racine :
   ```env
   VITE_FORMSPREE_ACTION=https://formspree.io/f/xxxxxx
   ```
4. Relancez `npm run dev`.

> Alternative minimale : remplacez `action` par `mailto:pierrechahine2@gmail.com` (moins fiable, pas recommandé).

## Déploiement

### Vercel
- Importez le repo, framework : **Vite**.
- Ajoutez la variable `VITE_FORMSPREE_ACTION` si utilisée.

### Netlify
- Build command : `npm run build`
- Publish directory : `dist`
- Variable : `VITE_FORMSPREE_ACTION`

### GitHub Pages
- `npm run build`
- Publiez le dossier `dist` via GitHub Actions ou Pages.
- Si le site n’est pas à la racine, configurez `base` dans `vite.config.ts`.

## SEO & Accessibilité
- `<html lang="fr">`, meta tags, OpenGraph/Twitter dans `index.html`.
- SEO par route via `react-helmet-async` (`src/seo.tsx`).
- `robots.txt` et `sitemap.xml` dans `public/` (remplacez `https://example.com`).
- JSON-LD `Person` + `BreadcrumbList` injectés.

## Performance
- Images lazy-loaded, pas de webfonts externes, Tailwind purge, code-splitting automatique de Vite.

## Tests
- **Vitest** + **@testing-library/react** : voir `src/tests/*`.

## Lint/Format
- ESLint + Prettier. CI GitHub Actions vérifie lint, build et tests.

## Accessibilité
- Focus visibles, libellés ARIA, contraste élevé (mode sombre clair), structure sémantique, "skip link".

## Licence
© Pierre Chahine. Usage personnel & académique.
