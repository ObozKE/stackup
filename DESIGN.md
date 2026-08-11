# Stackup — Design System

Reference spec for build in Google Antigravity. Layout, spacing, typography scale, and
component shapes come straight from the attached reference screenshots. The only thing
that changes is color mode: **everything ships in light mode**, using the brand palette
below. Do not reinterpret structure, spacing, or component shapes — only recolor.

---

## 1. Color Palette

Brand colors (from palette reference card):

| Name | Hex | Use |
|---|---|---|
| Strong Red | `#C50022` | Primary accent — CTAs, active states, wordmark, highlights |
| Black | `#000000` | Primary text, headlines, borders, dark UI elements |
| White | `#FFFFFF` | Primary background |

**Flag:** the palette card lists "White" as `#B5AC8A` (a tan/khaki value, not white) —
the RGB/CMYK values also repeat across all three swatches, which looks like a template
error rather than intentional. I've defaulted the background to true white (`#FFFFFF`)
since the brief is "light mode." If `#B5AC8A` was actually meant as a warm secondary
neutral (tag backgrounds, dividers), say so and I'll fold it in — I've left a slot for
it in the tokens below (`--tan`) just in case.

### Light mode tokens

```css
:root {
  --background: #FFFFFF;
  --surface: #F5F5F4;        /* card/section backgrounds instead of dark panels */
  --surface-border: #E7E5E2;
  --foreground: #000000;
  --muted-foreground: #6B6B68;

  --primary: #C50022;
  --primary-foreground: #FFFFFF;

  --tan: #B5AC8A;            /* held in reserve — confirm before using */

  --radius-pill: 999px;
  --radius-card: 20px;
}
```

---

## 2. Typography

- **Display / headline font** — bold, tall, condensed, all-caps grotesque
  (matches "OUR PROCESS", "FAQ", "LATEST INSIGHTS", "LET'S BUILD SOMETHING
  EXTRAORDINARY.", "BOLDWAY"). Closest common matches: **Anton**, **Archivo Black**,
  or **Bebas Neue**. Exact font wasn't identifiable from the screenshots — confirm if
  you have a brand guideline, otherwise default to Anton.
  - Huge scale on hero/CTA sections (roughly 80–160px+ desktop, scales down on mobile)
  - Tight line-height, minimal letter-spacing on the big display sizes
- **Body / UI font** — clean grotesque sans, regular weight, for paragraphs, nav
  pills, tags, category labels. Default: **Inter**.
- **Numbered badges** (001, 002 / 01, 02) — same display font as headlines, small size.

---

## 3. Section-by-Section Reference

Two of the screenshots are **already light mode** — use those almost verbatim for
color/component behavior. The rest are from a dark template and need color inversion
only.

### A. Hero (light-mode reference — kitpro-monero screenshot)
Use as-is for color behavior:
- Small eyebrow label above heading ("• Studio •")
- Large centered heading mixing regular and semi-bold words, with small
  rounded-rect photo chips embedded inline mid-sentence
- Grayscale logo cloud row beneath the hero

### B. Services / Portfolio list *(dark → invert to light)*
- Stacked alternating rows: numbered badge, large rounded-corner thumbnail (~16:9),
  bold title, 2-line description, right-aligned "CATEGORIES" label with a row of pill tags
- Thin divider line between rows
- **Convert:** black background → `--background`; white text → `--foreground`;
  translucent-white-on-black pill tags → `--surface` bg with `--surface-border`,
  black text

### C. Our Process *(dark → invert to light)*
- Two-column: left = big display heading + intro paragraph + pill CTA button;
  right = stacked cards, each with a circular numbered badge, title, description
- **Convert:** card background (was near-black) → `--surface`; numbered circle can stay
  solid black (or switch to `--primary` red for more pop — your call); body text → `--foreground`

### D. FAQ Accordion *(dark → invert to light)*
- Two-column: left = "FAQ" heading + description + pill CTA; right = stacked
  accordion rows with numbered badge, question text, plus icon
- **Convert:** row background → `--surface`; plus icon and numbered badge stay black
  (already light, no change needed there)

### E. Latest Insights / blog grid *(dark → invert to light)*
- Large centered display heading + subtitle
- 3-column card grid: rounded thumbnail image, small circular arrow-icon button
  top-right of each image, gray date label, bold headline below
- **Convert:** background → `--background`; headline text → `--foreground`; date label
  stays muted gray; arrow button can stay solid black circle w/ white icon for contrast

### F. Big CTA band *(dark → invert to light — or keep as contrast band, your call)*
- Full-bleed centered giant heading, subtext, two buttons (filled pill primary +
  plain underline-style secondary)
- **Convert:** default to white background, black heading, `--primary` filled pill
  button. Alternative: keep this one section black or red as a deliberate contrast
  break in an otherwise light page — flag if you want that instead of full conversion.

### G. Footer (light-mode reference — Boldway screenshot)
Use as-is for color behavior:
- Giant red display wordmark, top-left
- Two nav columns ("Explore" / "Utilities") with pill-style link buttons —
  `--surface` background, black text, fully rounded
- Contact line bottom-left, copyright/credits bar bottom-right

---

## 4. Component Specs

- **Buttons** — fully rounded pill (`border-radius: 999px`). Primary = black or
  `--primary` red fill, white text. Secondary = white fill with black border/text,
  or plain underlined text with an arrow icon.
- **Tags / pills** — rounded-full, small padding, `--surface` background, black text.
  Small tracked uppercase label ("CATEGORIES") above the row, in `--muted-foreground`.
- **Numbered badges** — rounded-square or circle, ~40–48px, bold number, high-contrast fill.
- **Cards** — large radius (16–24px), replace dark-panel elevation with a soft border
  or subtle shadow on `--surface`.
- **Dividers** — 1px lines in `--surface-border` between stacked list rows.

---

## 5. Open Items to Confirm

1. Is `#B5AC8A` (the "white" swatch) meant to be used anywhere, or was it a
   template error? Currently unused, held in `--tan`.
2. Confirm the display font (defaulting to Anton).
3. Confirm whether the big CTA band should fully convert to light, or stay as a
   deliberate dark/red contrast section.