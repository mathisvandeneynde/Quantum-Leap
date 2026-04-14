# Quantum Leap Physics

Free physics education platform covering classical mechanics to QFT.

---

## Setup (eerste keer)

Je hebt Node.js nodig (https://nodejs.org, download de LTS versie).

```bash
# 1. Clone de repo
git clone https://github.com/JOUW_NAAM/quantum-leap-physics.git
cd quantum-leap-physics

# 2. Installeer dependencies
npm install

# 3. Start de development server
npm run dev
# → Site draait op http://localhost:4321
```

---

## Een nieuwe les schrijven

1. Maak een nieuw bestand in `src/content/lessons/`
2. Naamgeving: `[modulecode]-[nummer].md` — bv. `sr-04.md`
3. Kopieer de frontmatter van een bestaande les en pas aan
4. Schrijf de inhoud in Markdown + de HTML-blokken uit de template

Dat is alles. Astro bouwt de pagina automatisch.

---

## Bestandsstructuur

```
quantum-leap-physics/
│
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro      ← gedeelde HTML-shell (sidebar, header)
│   │   └── LessonLayout.astro    ← layout voor lespagina's
│   │
│   ├── content/
│   │   └── lessons/
│   │       ├── sr-01.md          ← schrijf hier je lessen
│   │       ├── sr-02.md
│   │       └── sr-03.md
│   │
│   └── pages/
│       ├── index.astro           ← homepage / landingspagina
│       ├── dashboard.astro       ← dashboard
│       └── modules/
│           ├── sr/
│           │   └── index.astro   ← module overzichtspagina
│           └── [...]
│
├── public/
│   └── assets/
│       ├── css/
│       │   └── global.css        ← alle gedeelde stijlen
│       ├── js/
│       │   └── progress.js       ← voortgang bijhouden
│       └── img/
│           └── sr-03-light-clock.png   ← afbeeldingen per les
│
├── astro.config.mjs              ← Astro configuratie
└── package.json
```

---

## Beschikbare blokken in een les

| Blok | Class | Gebruik |
|------|-------|---------|
| Vergelijking | `equation-block` | Centrale formules |
| Kernidee | `callout callout--insight` | Modulekleur |
| Waarschuwing | `callout callout--warning` | Veelgemaakte fouten (goud) |
| Notitie | `callout` | Neutrale noot (teal) |
| Afleiding | `derivation` | Stap-voor-stap berekeningen |
| Widget | `widget` | Interactieve p5.js elementen |
| Video | `video-embed` | YouTube embed |
| Oefening | `exercise` | Opgaven met uitklapbare oplossing |

---

## Deployen naar GitHub Pages

```bash
# Eenmalig instellen
# Ga naar je repo → Settings → Pages → Source: GitHub Actions

# Daarna: elke push naar main deployt automatisch
git add .
git commit -m "add sr-04 length contraction"
git push
```

Vergeet niet in `astro.config.mjs` de `base` aan te passen naar jouw repo-naam.

---

## Module kleuren

| Module | ID | Kleur |
|--------|-----|-------|
| Special Relativity | `sr` | Gold `#f5a623` |
| Quantum Mechanics | `qm` | Teal `#00c9a7` |
| Electrodynamics | `em` | Blue `#3b82f6` |
| Analytical Mechanics | `ana` | Purple `#a855f7` |
| Statistical Mechanics | `sm` | Green `#22c55e` |
| Quantum Field Theory | `qft` | Red `#ef4444` |
