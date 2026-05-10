---
name: Premium Restaurant POS
colors:
  surface: '#fff8f6'
  surface-dim: '#eed5cd'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ed'
  surface-container: '#ffe9e3'
  surface-container-high: '#fde3db'
  surface-container-highest: '#f7ddd5'
  on-surface: '#261814'
  on-surface-variant: '#594139'
  inverse-surface: '#3c2d28'
  inverse-on-surface: '#ffede8'
  outline: '#8d7168'
  outline-variant: '#e1bfb5'
  surface-tint: '#ab3500'
  primary: '#ab3500'
  on-primary: '#ffffff'
  primary-container: '#ff6b35'
  on-primary-container: '#5f1900'
  inverse-primary: '#ffb59d'
  secondary: '#545f73'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f8'
  on-secondary-container: '#586377'
  tertiary: '#00677e'
  on-tertiary: '#ffffff'
  tertiary-container: '#00a7cb'
  on-tertiary-container: '#003744'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd0'
  primary-fixed-dim: '#ffb59d'
  on-primary-fixed: '#390c00'
  on-primary-fixed-variant: '#832600'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#b5ebff'
  tertiary-fixed-dim: '#59d5fb'
  on-tertiary-fixed: '#001f28'
  on-tertiary-fixed-variant: '#004e60'
  background: '#fff8f6'
  on-background: '#261814'
  surface-variant: '#f7ddd5'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  title-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  price-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  safe-area: 20px
  gutter: 12px
---

## Brand & Style
This design system is engineered for the high-velocity environment of modern hospitality. The brand personality is **Energetic, Reliable, and Precise**. It balances the heat of the kitchen with the cool efficiency of high-end fintech.

The visual style leverages **Glassmorphism** and **Modern Minimalism** to create a sense of depth without clutter. The interface uses translucent layers and background blurs to maintain context during complex billing workflows. Motion is a first-class citizen, using micro-interactions to provide haptic-like visual feedback, ensuring the "Fast" attribute is felt by the user at every tap.

## Colors
The palette is led by **Crave Orange (#FF6B35)**, a high-action primary color that drives attention to checkout and order submission. This is grounded by **Slate Dark (#1E293B)** for high-contrast typography and navigational elements, ensuring legibility under harsh restaurant lighting.

**Success Green (#22C55E)** is reserved for payment confirmations and "ready" order statuses. The background uses a soft **Slate Tint (#F8FAFC)** to reduce eye strain. Glassmorphic elements use a white semi-transparent fill with a high-saturation background blur (20px-30px) to distinguish active overlays from the base layout.

## Typography
This design system utilizes **Plus Jakarta Sans** for headlines and display elements to inject a modern, friendly character into the POS. **Inter** is used for all functional body text, data tables, and input labels due to its exceptional legibility at small sizes and its neutral, systematic feel.

Numeric data, specifically prices, should always use the `price-lg` or `title-sm` styles with tabular lining to ensure decimals align perfectly in vertical lists. For mobile optimization, titles are kept compact to maximize screen real estate for order items.

## Layout & Spacing
The layout follows a **Fluid Mobile Grid** philosophy. It uses a 4-column structure for standard portrait mobile views, transitioning to an 8-column grid for tablet "Station Mode." 

A **20px safe-area margin** is maintained on the left and right edges of the screen. Interaction targets (buttons, list items) must maintain a minimum height of 48px to accommodate fast-paced touch input. Spacing follows a strict 4pt / 8pt rhythmic scale to ensure consistent alignment across dense order summaries and sparse settings pages.

## Elevation & Depth
Depth is communicated through **Tonal Stacking** and **Backdrop Blurs**.
1. **Base Level:** The Slate-tinted background (#F8FAFC).
2. **Card Level:** Pure white cards with a subtle 4px blur shadow (Color: #1E293B, Opacity: 4%) and a 1px border (#E2E8F0).
3. **Glass Level:** Floating Action Buttons and Bottom Navigation use a glassmorphic effect (Blur: 20px, Fill: 70% White) to appear as if floating above the content.
4. **Active/Swipe Level:** Elements being dragged or swiped increase their shadow spread and scale slightly (1.02x) to indicate "lift."

## Shapes
The shape language is **Generously Rounded**. Standard components like input fields and buttons use a **0.5rem (8px)** radius. Larger structural containers and swipeable cards use a **1.5rem (24px)** radius to evoke a premium, consumer-grade feel similar to modern OS patterns. Floating Action Buttons (FABs) and status chips utilize **Full Pill** rounding for immediate visual distinction from data containers.

## Components
- **Buttons:** Primary buttons use a smooth linear gradient from #FF6B35 to #FF8C61. The "Press" state triggers a subtle inward scale (0.98x).
- **Glass Bottom Nav:** A semi-transparent bar with active icons highlighted in Crave Orange. Icons use a 2.5pt stroke weight.
- **Swipeable Order Cards:** Cards that reveal "Delete" (Red) or "Duplicate" (Blue) actions when swiped horizontally.
- **Floating Action Button (FAB):** A large, circular button with a heavy drop shadow, primarily used for "New Order" or "Quick Scan."
- **Status Chips:** Small, pill-shaped labels for "Paid," "Pending," or "Void," using low-saturation background tints of their respective semantic colors.
- **Checkboxes & Radios:** Oversized touch targets (minimum 24x24px) with a 4px corner radius for checkboxes, ensuring they are easy to hit during peak hours.
- **Input Fields:** Bottom-aligned labels that transition to floating labels on focus, using a 2px bottom border highlight in Primary Orange.