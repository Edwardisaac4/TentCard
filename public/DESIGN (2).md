---
name: Executive Seminar
colors:
  surface: '#f2fbfd'
  surface-dim: '#d3dbde'
  surface-bright: '#f2fbfd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#edf5f7'
  surface-container: '#e7eff2'
  surface-container-high: '#e1eaec'
  surface-container-highest: '#dce4e6'
  on-surface: '#151d1f'
  on-surface-variant: '#41484a'
  inverse-surface: '#2a3234'
  inverse-on-surface: '#eaf2f5'
  outline: '#71787a'
  outline-variant: '#c0c8ca'
  surface-tint: '#3c646d'
  primary: '#00252b'
  on-primary: '#ffffff'
  primary-container: '#0e3b43'
  on-primary-container: '#7ca5ae'
  inverse-primary: '#a4cdd7'
  secondary: '#7f5700'
  on-secondary: '#ffffff'
  secondary-container: '#ffc565'
  on-secondary-container: '#765100'
  tertiary: '#321b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#4b3010'
  on-tertiary-container: '#bf976f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c0eaf4'
  primary-fixed-dim: '#a4cdd7'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#234c55'
  secondary-fixed: '#ffdead'
  secondary-fixed-dim: '#f6bd5d'
  on-secondary-fixed: '#281900'
  on-secondary-fixed-variant: '#604100'
  tertiary-fixed: '#ffdcbc'
  tertiary-fixed-dim: '#eabf93'
  on-tertiary-fixed: '#2c1700'
  on-tertiary-fixed-variant: '#5e411f'
  background: '#f2fbfd'
  on-background: '#151d1f'
  surface-variant: '#dce4e6'
typography:
  display-lg:
    fontFamily: Newsreader
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Newsreader
    fontSize: 30px
    fontWeight: '500'
    lineHeight: 38px
    letterSpacing: -0.015em
  display-md:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: -0.01em
  display-sm:
    fontFamily: Newsreader
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
  title-card:
    fontFamily: IBM Plex Sans
    fontSize: 17px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: IBM Plex Sans
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-sm:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system serves senior executives, directors, and institutional leaders convening within a premier business school cohort. The visual environment mirrors the physical presence of a high-level executive boardroom: calm, poised, and intellectually rigorous. It rejects the hyperactive engagement patterns of consumer social media in favor of dignified clarity and purposeful networking.

The aesthetic fuses architectural minimalism with tangible editorial prestige:
- **Seminar Metaphors:** Visual cues draw directly from polished brass nameplates, heavy paper stock, and folded leather-grain seminar folders.
- **Tone:** Measured, authoritative, quiet, and direct. The interface acts as a silent, impeccably organized facilitator.
- **Negative Constraints:** Strictly zero ambient glassmorphism, no bright neon glows, no gradient fills, no illustrated empty states, and no emoji in system copy. The UI relies entirely on precise spatial cadence, deliberate border weights, and quiet editorial contrast.

## Colors

The palette balances maritime depths with architectural metallics:

- **Lagoon (Primary):** Rooted in `#0E3B43`. Used for primary actions, critical interactive selections, and key brand anchors. Hover states elevate to `#2A6B73`. Soft grounding surfaces utilize `#DCEBEC` (tint) and `#EEF5F5` (faint backdrop). Persistent structural framing (such as desktop navigation rails) uses `#0A2E34`.
- **Brass (Accent & Identity):** Rooted in `#B8862B`. Reserved strictly for prestige accents: 2px avatar borders, honorific leader badges, and the 2px accent rule atop executive tent cards. High-contrast brass typography renders in `#9A6F1E`, while brass surface chips use `#F3E7CE`.
- **Neutrals & Content:** High-legibility charcoal scale. Primary text `#1A2224` (near-black, tempered charcoal), secondary metadata `#5B6669`, and muted inputs/placeholders `#8A9497`.
- **Surfaces & Borders:** Base canvas `#F5F7F6` provides an oyster-tinted, warm backdrop. Interactive cards, forms, and sheets sit on pure white `#FFFFFF`. Structural borders universally apply crisp `#DDE2E1`.
- **Functional Semantics:** Unambiguous status indicators. Success `#2E7D4F`, Warning `#B26B00`, Danger `#B3261E`.

## Typography

Typography establishes an intentional distinction between editorial authority and interface precision:

- **Newsreader (Display, Editorial, Cohort Member Names):** Set at weight 500. Applied exclusively to top-level view headers, biographical intros, module names, and individual executive names on attendee lists and profile cards.
- **IBM Plex Sans (System UI, Inputs, Body, Metadata):** Functional, robust, and neutral. Set across body copy (16px), dense tabular/directory metadata (14px), navigation labels (13px medium), and card titles (17px semibold).
- **Casing and Ornamentation Rules:**
  - Strict sentence case across all headlines, action buttons, table columns, and badge indicators.
  - Never use uppercase or tracking hacks on metadata.
  - Ban eyebrow labels above section headings. Let clear visual grouping and whitespace define context.
  - Never use middle dots (·) or bullet dividers between metadata strings. Use explicit visual spacing or structural tabular columns.

## Layout & Spacing

The layout is grounded in a strict 8px incremental grid, emphasizing spatial rhythm and uncrowded content density:

- **Desktop Form Factor (>= 1024px):** Fixed left navigation rail (`#0A2E34`, 260px width) paired with a responsive 12-column layout. Page gutters default to 24px (`1.5rem`) with outer page padding set firmly to 32px (`margin: 2rem`). Content max-width is constrained to 1280px to preserve comfortable scan lengths for biographical and directory copy.
- **Tablet Form Factor (768px – 1023px):** 8-column layout, 24px margins, with collapsible drawer navigation.
- **Mobile Form Factor (< 768px):** 4-column layout, 16px margins (`margin-mobile: 1rem`), 16px gutters. Outer margins reduce strictly to 16px, eliminating nested padding layers to prioritize reading real estate.
- **Spatial Rhythm:** Form controls and stacked list entries adhere strictly to `space-sm` (8px), `space-md` (16px), and `space-xl` (32px) margins. No arbitrary spacing overrides are permitted.

## Elevation & Depth

Visual hierarchy is constructed through structural linework and surface value shifts rather than drop shadows:

- **Flat Architectural Baseline:** Content containers, list items, cards, input frames, and profile panels feature no box shadows. Structural separation is achieved via a crisp 1px solid border (`#DDE2E1`) resting over the `#F5F7F6` floor.
- **Floating Overlays Only:** Drop shadows are restricted exclusively to temporary floating layers: select menus, dropdowns, modal dialogs, and mobile sheets. When required, shadows must be soft, deep, and cast in neutral charcoal tint: `0 12px 32px rgba(14, 59, 67, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04)`.
- **Top Brass Line Treatment:** Key seminar artifacts (such as directory highlight cards and cohort lead panels) use a solid 2px accent rule (`#B8862B`) flush along the upper card border, evoking folded executive brass desk plaques.

## Shapes

The shape system communicates precision, permanence, and restraint:

- **Inputs, Buttons, and Chips:** Set strictly to 6px (`0.375rem`). This slight softening removes brutalist harshness while avoiding consumer-grade playfulness.
- **Cards, Panels, and Sheets:** Set strictly to 12px (`0.75rem`). Larger structural containers retain calm poise without appearing balloon-like.
- **Avatars:** Fully circular (`roundedness: 9999px`). When a high-resolution executive portrait is missing, the circular avatar features a 2px brass rim (`#B8862B`), an `#EEF5F5` faint lagoon ground, and the member's initials set centrally in Newsreader serif (weight 500).
- **Prohibitions:** Fully rounded pill buttons and pill-shaped inputs are strictly prohibited.

## Components

### Buttons
- **Primary:** Background `#0E3B43`, foreground `#FFFFFF`, border none, 6px radius. Height 40px (desktop), 44px (touch). Padding 0 16px. Hover state: `#2A6B73`. Active state: `#0A2E34`. Typography: IBM Plex Sans, 14px semibold, sentence case. No directional arrows.
- **Secondary / Outlined:** Background `#FFFFFF`, foreground `#0E3B43`, 1px solid `#DDE2E1`, 6px radius. Hover state: `#EEF5F5` surface with border `#0E3B43`.
- **Tertiary / Text:** Background transparent, foreground `#0E3B43`. Hover: underline with `#0E3B43` or tint background `#EEF5F5`.

### Chips & Badges
- **Status Chips:** Height 24px, 6px radius, padding 0 8px. Typography: 12px IBM Plex Sans, sentence case.
- **Cohort Lead / Executive Badge:** Surface `#F3E7CE`, text `#9A6F1E`, border 1px solid `#B8862B`.
- **Department / Topic Chips:** Surface `#EEF5F5`, text `#0E3B43`, border 1px solid `#DCEBEC`.

### Lists & Directories
- Clean rows bound by 1px solid border `#DDE2E1` on top and bottom.
- Row padding: 16px vertical, 16px horizontal.
- Hover state: Background shifts subtly to `#FFFFFF` from `#F5F7F6`.
- Executive initials or photo anchored on the left (44px size), accompanied by participant name (Newsreader, 18px), title (IBM Plex Sans, 14px `#5B6669`), and organization/cohort tag anchored on the right.

### Checkboxes & Radio Buttons
- **Checkboxes:** 18px square with 3px border radius. Unchecked: 1.5px border `#DDE2E1`, white fill. Checked: `#0E3B43` fill with white checkmark icon (1.5px stroke).
- **Radio Buttons:** 18px circle. Checked: 2px border `#0E3B43` with a solid 8px `#0E3B43` center dot.

### Input Fields
- Height 40px, surface `#FFFFFF`, border 1px solid `#DDE2E1`, radius 6px, padding 0 12px.
- Text: 14px IBM Plex Sans `#1A2224`. Placeholder: `#8A9497`.
- Focus state: Border transitions to `#0E3B43` with an unobtrusive 1px `#0E3B43` outline. No glowing or high-saturation outer rings.

### Seminar Cards (Folded Tent Metaphor)
- Surface `#FFFFFF`, border 1px solid `#DDE2E1`, radius 12px.
- Distinctive 2px solid top rule in Brass (`#B8862B`).
- Internal padding: 24px.
- Card title: IBM Plex Sans 17px semibold (`#1A2224`).

### Icons
- Lucide-style linear icons, standardized to 1.5px stroke width.
- Always accompanied by clear textual labels; standalone icon buttons are prohibited in primary workflows. Color maps to contextual text token (`#0E3B43` or `#5B6669`).