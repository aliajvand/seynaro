# SEYNARO — Bilingual Typography & RTL Engineering
**Document Control ID:** `TYP-SYS-001`  
**Author:** Agent 06 — Typography & Persian RTL Specialist  
**Reviewed by:** Creative Director  
**Date:** November 2026

---

## 1. Bilingual Typographic Philosophy

SEYNARO operates globally while maintaining deep cultural and operational fluency in Persian and English. Typography must bridge two scripts with radical differences in ductus, baseline behavior, and rhythm:
- **Latin Script (SEYNARO):** Modular, bicameral (uppercase/lowercase), rigid vertical stems, baseline-to-cap-height discipline.
- **Persian Script (سینارو):** Fluid, unicameral, cursive connecting baseline, dynamic inter-word proportioning, ascender-descender delicacy.

Rather than forcing Persian to behave like Latin, our system creates **optical parity through calibrated weights, matched x-heights, and consistent terminal stroke thickness**.

---

## 2. Selected Typeface Families & Commercial Verification

```
┌────────────────────────────────────────────────────────────────────────┐
│                        TYPEFACE ALLOCATION MATRIX                      │
├─────────────────┬─────────────────┬──────────────────┬─────────────────┤
│ ROLE            │ LATIN FONT      │ PERSIAN FONT     │ LICENSE TYPE    │
├─────────────────┼─────────────────┼──────────────────┼─────────────────┤
│ Master Wordmark │ Inter Display   │ Vazirmatn Heavy  │ SIL OFL 1.1     │
│                 │ (Custom Vector) │ (Custom Vector)  │ (100% Free Com) │
├─────────────────┼─────────────────┼──────────────────┼─────────────────┤
│ Display / Hero  │ Inter Display   │ Vazirmatn /      │ SIL OFL 1.1     │
│ Headings        │ (Bold 700)      │ Shabnam (700)    │ (No Royalties)  │
├─────────────────┼─────────────────┼──────────────────┼─────────────────┤
│ UI & Long-Form  │ Inter           │ Vazirmatn        │ SIL OFL 1.1     │
│ Body Copy       │ (Regular 400)   │ (Regular 400)    │ (Web & Desktop) │
├─────────────────┼─────────────────┼──────────────────┼─────────────────┤
│ Technical Code  │ JetBrains Mono  │ JetBrains Mono + │ SIL OFL 1.1 /   │
│ & Solver Data   │ (Medium 500)    │ Vazirmatn Code   │ Apache 2.0      │
└─────────────────┴─────────────────┴──────────────────┴─────────────────┘
```

### 2.1 The Master Fonts
1. **Inter & Inter Display (Designed by Rasmus Andersson):**
   - The definitive contemporary grotesque sans-serif for deep-tech enterprises.
   - Micro-engineered for screen legibility with tall x-height, open apertures, and specialized display optical weights.
   - License: SIL Open Font License 1.1.
2. **Vazirmatn (Designed by Saber Rastikerdar):**
   - The pinnacle of modern Persian digital typography.
   - Clean, geometric, highly legible across tiny dashboard labels and commanding editorial headlines.
   - License: SIL Open Font License 1.1.
3. **JetBrains Mono (Designed by JetBrains):**
   - Specifically engineered for readability in developer and logic environments (Z3 SMT solver syntax, JSON schemas, telemetry logs).
   - License: SIL Open Font License 1.1.

---

## 3. Typographic Scale & Hierarchy

All sizes adhere to a strict modular typographic scale:

| Level | Size (Desktop) | Size (Mobile) | Line Height | Weight | Letter Spacing (Latin) | Usage |
|---|:---:|:---:|:---:|:---:|:---:|---|
| **Display 01** | `64px` | `40px` | `1.1` | Bold 700 / 800 | `-0.025em` | Website Hero, Keynote Cover |
| **Heading 01** | `44px` | `32px` | `1.2` | Bold 700 | `-0.02em` | Section Titles, Major Cards |
| **Heading 02** | `32px` | `24px` | `1.25` | SemiBold 600 | `-0.015em` | Dashboard Page Titles |
| **Heading 03** | `22px` | `18px` | `1.35` | SemiBold 600 | `-0.01em` | Widget Headers, Sub-sections |
| **Body Large** | `18px` | `16px` | `1.55` | Regular 400 | `0` | Lead Paragraphs, Introductions |
| **Body Regular**| `15px` | `14px` | `1.5` | Regular 400 | `0` | Default UI Copy, Table Rows |
| **Caption / Mono**| `13px`| `12px` | `1.4` | Medium 500 | `+0.02em` | Metadata, Tags, Status Badges |
| **Micro** | `11px` | `10px` | `1.3` | SemiBold 600 | `+0.06em` | Chart Axis Labels, Overlines |

---

## 4. Bilingual & Bidirectional (BiDi) Engineering

### 4.1 Optical Size & Baseline Adjustment
- When Persian and Latin text are mixed in the same sentence, Persian glyphs naturally appear slightly smaller than Latin capitals at identical point sizes.
- **Rule:** Apply a CSS multiplier of `1.05` to Persian text when set alongside Latin body text, ensuring uniform optical density across the reading line.
- **CSS Rule:**
  ```css
  :lang(fa) {
    font-family: 'Vazirmatn', -apple-system, sans-serif;
    letter-spacing: 0; /* Persian must NEVER have positive letter-spacing */
  }
  ```

### 4.2 Isolation & Text Direction Guardrails
- **Directional Isolation:** Never place Latin product names (like `SEYNARO`, `ZICR`, `MTTR`, `ShadowBox`) into Persian sentences without wrapping them in `<bdi>` or `<span dir="ltr">`.
- **Bad:** `پلتفرم SEYNARO راهکار نهایی است.` (Punctuation and trailing spaces will jump erratically in legacy rendering engines).
- **Good:** `پلتفرم <bdi dir="ltr">SEYNARO</bdi> راهکار نهایی است.`

### 4.3 Numeral System Policy
- **Persian UI / Local Reports:** Use native Persian digits (`۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹`) for dates, Persian text counters, and administrative labels.
- **Enterprise Dashboard / Financial Exposure / SMT Code:** Use Western tabular figures (`0 1 2 3 4 5 6 7 8 9` with `font-variant-numeric: tabular-nums;`) for all quantitative metrics (e.g., `ZICR: 98.4%`, `MTTR: 1.4h`, `VaR: $1.2M`) to ensure numerical alignment across international holding companies.

---

## 5. Letterform Prohibitions

1. 🚫 **NEVER apply letter-spacing (kerning expansion) to Persian text.** In Arabic/Persian script, letters connect via baseline ligatures; expanding letter-spacing breaks the connecting stems, producing grotesque typographical errors.
2. 🚫 **NEVER artificial-slant (oblique) Persian fonts.** Persian has its own historical italic styles; using automated browser obliquing produces distorted, ugly glyphs.
3. 🚫 **NEVER use low-contrast thin font weights (100/200) for enterprise dashboard data.** Always use Medium (500) or SemiBold (600) for numerical metrics against dark backgrounds.
