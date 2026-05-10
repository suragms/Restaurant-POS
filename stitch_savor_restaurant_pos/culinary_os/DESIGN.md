---
name: Culinary OS
colors:
  surface: '#fdf7ff'
  surface-dim: '#ded8e0'
  surface-bright: '#fdf7ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f2fa'
  surface-container: '#f2ecf4'
  surface-container-high: '#ece6ee'
  surface-container-highest: '#e6e0e9'
  on-surface: '#1d1b20'
  on-surface-variant: '#494551'
  inverse-surface: '#322f35'
  inverse-on-surface: '#f5eff7'
  outline: '#7a7582'
  outline-variant: '#cbc4d2'
  surface-tint: '#6750a4'
  primary: '#4f378a'
  on-primary: '#ffffff'
  primary-container: '#6750a4'
  on-primary-container: '#e0d2ff'
  inverse-primary: '#cfbcff'
  secondary: '#63597c'
  on-secondary: '#ffffff'
  secondary-container: '#e1d4fd'
  on-secondary-container: '#645a7d'
  tertiary: '#765b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#c9a74d'
  on-tertiary-container: '#503d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#cfbcff'
  on-primary-fixed: '#22005d'
  on-primary-fixed-variant: '#4f378a'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#cdc0e9'
  on-secondary-fixed: '#1f1635'
  on-secondary-fixed-variant: '#4b4263'
  tertiary-fixed: '#ffdf93'
  tertiary-fixed-dim: '#e7c365'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#594400'
  background: '#fdf7ff'
  on-background: '#1d1b20'
  surface-variant: '#e6e0e9'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.5'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
  price-display:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  touch_target: 44px
---

## Brand & Style
The design system is engineered for high-performance hospitality environments where speed meets sophistication. The aesthetic leans heavily into **Apple-level minimalism**, prioritizing functional whitespace and high-contrast legibility to reduce cognitive load during peak service hours.

The visual direction combines a "Soft High-Contrast" approach: deep slate tones provide a professional foundation, while a vibrant energetic orange drives action. Elements are tactile and responsive, utilizing glassmorphism for non-disruptive layering, ensuring the interface feels like a high-end tool rather than just software.

## Colors
The palette is rooted in a clean, clinical white-label foundation (`#F8FAFC`) to allow food photography and status indicators to pop. 

- **Primary Orange:** Reserved for "Commit" actions—placing orders, processing payments, and primary navigation states.
- **Dark Slate:** Used for structural elements like sidebars and headers to provide a grounded, premium feel.
- **Semantic Colors:** Success and Danger are used sparingly for order status (e.g., "Paid" vs. "Void") and critical alerts.
- **Gradients:** Use subtle linear gradients on primary buttons (e.g., Primary to 10% lighter) to add a sense of depth without breaking the minimal aesthetic.

## Typography
Inter is the selected typeface for its exceptional legibility on digital screens and its neutral, premium character. 

For the POS environment, **Price Display** tokens are prioritized to ensure billing accuracy at a glance. Tabular numerals (monospaced numbers) should be used in all data tables and receipt views to prevent jumping during price updates. Labels use a slightly heavier weight (`500`-`600`) to remain legible under harsh restaurant lighting.

## Layout & Spacing
This design system utilizes a **12-column fluid grid** for back-office analytics and a **fixed-pane layout** for the POS terminal. 

- **POS Layout:** A 3-pane architecture is recommended: Category Navigation (Left), Item Grid (Center), and Current Order/Cart (Right).
- **Touch Targets:** A minimum 44px hit area is enforced for all interactive elements to accommodate fast-paced manual entry.
- **Margins:** Consistent 24px (lg) margins are used for page containers, while inner card padding is set to 16px (md) for a dense but breathable information density.

## Elevation & Depth
Depth is communicated through "soft layering" rather than heavy shadows.

- **Level 0 (Floor):** Background (`#F8FAFC`).
- **Level 1 (Cards):** Surface white with a 1px border (`#E2E8F0`) and an ultra-soft ambient shadow: `0 4px 12px rgba(30, 41, 59, 0.03)`.
- **Level 2 (Modals/Popups):** Glassmorphism effect. `Backdrop-filter: blur(12px)` with a semi-transparent surface `rgba(255, 255, 255, 0.8)` and a crisp 1px white border to simulate physical glass.
- **Level 3 (Active State):** High-contrast primary shadows for active buttons to indicate a "pressed" or "active" state.

## Shapes
The shape language is "Friendly Professional." 

Large corner radii (`16px`) are used for main containers and cards to evoke a modern, high-end appliance feel. Smaller components like buttons (`12px`) and input fields (`10px`) maintain a consistent curve but are optimized for tighter spaces. Interaction states (hover/active) should maintain the same radius to ensure visual consistency.

## Components
- **Buttons:** Primary buttons use a subtle vertical gradient (Primary to Primary-Hover) with white text. Secondary buttons are ghost-style with a 1px slate border.
- **Order Cards:** Feature a top-border accent color (Orange for Pending, Green for Served) and use `headline-md` for table numbers.
- **Input Fields:** Crisp 1px border that transitions to a 2px Primary border on focus. Include clear "X" icons for quick clearing of search terms.
- **Glass Modals:** Used for "Order Options" or "Modifiers." These appear over the grid with a blurred backdrop to keep the waiter's context visible while focusing on the specific task.
- **Chips/Status Tags:** Fully pill-shaped with low-opacity backgrounds (e.g., Success color at 10% opacity) for high legibility without visual noise.
- **Data Visualization:** Use clean, thin-stroke line charts and donut charts utilizing the primary and dark palette for restaurant performance metrics.