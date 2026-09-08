---
name: RentRide System
colors:
  surface: '#f9f9fe'
  surface-dim: '#dad9df'
  surface-bright: '#f9f9fe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f9'
  surface-container: '#eeedf3'
  surface-container-high: '#e8e8ed'
  surface-container-highest: '#e2e2e7'
  on-surface: '#1a1c20'
  on-surface-variant: '#43474e'
  inverse-surface: '#2f3035'
  inverse-on-surface: '#f0f0f6'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#445f8a'
  primary: '#415d87'
  on-primary: '#ffffff'
  primary-container: '#5a75a1'
  on-primary-container: '#fefcff'
  inverse-primary: '#acc8f8'
  secondary: '#565f71'
  on-secondary: '#ffffff'
  secondary-container: '#d7e0f5'
  on-secondary-container: '#5a6375'
  tertiary: '#62557f'
  on-tertiary: '#ffffff'
  tertiary-container: '#7b6d99'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#acc8f8'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#2b4770'
  secondary-fixed: '#dae2f8'
  secondary-fixed-dim: '#bec7dc'
  on-secondary-fixed: '#131c2b'
  on-secondary-fixed-variant: '#3e4758'
  tertiary-fixed: '#eaddff'
  tertiary-fixed-dim: '#cfbfef'
  on-tertiary-fixed: '#20143a'
  on-tertiary-fixed-variant: '#4d4069'
  background: '#f9f9fe'
  on-background: '#1a1c20'
  surface-variant: '#e2e2e7'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
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
  label-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4rem
  gutter-desktop: 1.5rem
  gutter-mobile: 1rem
  margin-desktop: 2rem
  margin-mobile: 1rem
---

## Brand & Style
The design system establishes a premium, authoritative, and frictionless vehicle booking environment spanning cars, motorbikes, and urban scooters. It blends modern corporate precision with dynamic mobility cues—projecting the dependability of enterprise fleet operators alongside the speed and polish of modern consumer platforms. 

The aesthetic is Modern High-Contrast Minimalist with tactile depth: ultra-clean canvas backgrounds, slate structural anchors, muted tonal interaction triggers, and precise technical tags. The interface inspires total confidence at every step—from discovery and spec comparison through insurance selection and keyless handover.

## Colors
The palette balances institutional authority with high-visibility functional cues using tonal spot variations:

- **Primary (`#5D78A4`)**: Slate Blue. Forms navigation bars, main action surfaces, dominant headings, and structural anchors.
- **Secondary / Accent (`#6E778A`)**: Neutral Slate. Highlights interactive states, active booking segments, calendar selections, link triggers, and key milestones.
- **Tertiary / Success (`#7E709C`)**: Muted Purple. Conveys instant confirmation, vehicle availability, insurance coverage badges, and battery/fuel full levels.
- **Warning / Alert (`#F59E0B`)**: Amber Orange. Signals limited inventory ("Only 1 left"), strict cancellation cutoff reminders, and caution notices.
- **Backgrounds**: Neutral light tint (`#F8FAFC`) for page canvases and sub-sections (`#F1F5F9`) to define visual partitions without hard dividers.
- **Surfaces**: Pure white (`#FFFFFF`) for vehicle cards, sticky checkout summaries, and modal sheets, wrapped with cool slate borders (`#E2E8F0`).
- **Typography**: Dark Neutral (`#76777c`) for primary hierarchy, Slate Charcoal (`#334155`) for readable body copy, and Slate Gray (`#64748B`) for specs, metadata, and timestamps.

## Typography
The system employs a dual-typeface structure tailored for premium transport utility:
- **Display & Headings (`Plus Jakarta Sans`)**: Provides crisp, geometric curvature with modern confidence. Tighter letter tracking gives vehicle names, prices, and promotional banners a sculpted, high-end feel.
- **Body & Controls (`Inter`)**: Chosen for hyper-neutral readability across dense tables, mileage conditions, terms, specs, and form inputs.

Numerical representations—notably daily rates, security deposit values, and odometer figures—must use tabular lining figures (`font-variant-numeric: tabular-nums`) to preserve alignment across catalog comparisons.

## Layout & Spacing
The layout adheres to an 8px base rhythm (with 4px sub-increments for compact badges and specs).

- **Desktop (1200px+)**: 12-column responsive grid with a maximum content container width of `1280px`. Gutter is 24px (`space-lg`), and outside margins are 32px (`space-xl`). Sticky filter rail occupies 3 columns; vehicle card listings span 9 columns (rendered as a 3-column sub-grid).
- **Tablet (768px - 1199px)**: 8-column grid with 20px gutters and 24px margins. Filter sidebars collapse into a sticky top filter drawer; listing cards transition to a 2-column layout.
- **Mobile (< 768px)**: 4-column fluid layout with 16px margins and 16px gutters. Listing cards render as single-column vertical cards. Interactive booking bars and "Book Now" CTAs anchor to a fixed bottom dock (`z-index: 50`) above mobile system navigation bars.

## Elevation & Depth
Depth is created through cool slate ambient drop shadows coupled with hairline borders (`1px solid #E2E8F0`), preventing muddiness and retaining crispness on retina displays:

- **Level 0 (Flat / Basemap)**: `none`. Used on page backgrounds (`#F8FAFC`) and embedded spec tables.
- **Level 1 (Cards & Inputs)**: `0 1px 3px 0 rgba(93, 120, 164, 0.04), 0 1px 2px -1px rgba(93, 120, 164, 0.04)`, bordered with `#E2E8F0`. Used for catalog vehicle cards, filter panels, and non-active state elements.
- **Level 2 (Hover & Active Cards)**: `0 10px 15px -3px rgba(93, 120, 164, 0.07), 0 4px 6px -4px rgba(93, 120, 164, 0.03)`. Elevates vehicle cards on hover, active drop-off pickers, and selected pricing tiers.
- **Level 3 (Sticky Booking Bars & Floating Widgets)**: `0 20px 25px -5px rgba(93, 120, 164, 0.08), 0 8px 10px -6px rgba(93, 120, 164, 0.04)`. Applied to floating search headers and sticky checkout modules.
- **Level 4 (Modals & Overlays)**: `0 25px 50px -12px rgba(93, 120, 164, 0.20)`. Used for image galleries, damage report inspector sheets, and payment verification modals.

## Shapes
The system utilizes a balanced, contemporary rounded geometry:
- **Base Components (`rounded-md` / 8px)**: Input fields, checkboxes, dropdown menus, and standard secondary action buttons.
- **Cards & Containers (`rounded-lg` / 16px to `rounded-xl` / 24px)**: Vehicle listing cards, checkout panels, price breakdowns, and vehicle gallery viewports.
- **Badges & Micro-Pills (`rounded-full` / 9999px)**: Vehicle feature tags (e.g., Automatic, 5 Seats, Electric, Unlimited Miles), status indicators, and category switchers (Cars, Bikes, Scooters).

## Components

### Buttons & Primary Triggers
- **Primary Action**: Background `#5D78A4`, text `#FFFFFF`, radius 8px, font `label-lg`. On hover: `#4C648B`. Focus: 3px outer ring `#6E778A` with 2px offset.
- **Secondary Action**: Background `#FFFFFF`, border 1px solid `#E2E8F0`, text `#5D78A4`. Hover: background `#F8FAFC`, border `#CBD5E1`.
- **Accent / Instant Book**: Background `#6E778A`, text `#FFFFFF`. Hover: `#5A6273`.

### Vehicle Cards
- Pure white `#FFFFFF` surface enclosed by a 1px border `#E2E8F0` and `rounded-xl` (16px) corners.
- 16:9 vehicle aspect image container on soft `#F8FAFC` slate backdrop with an absolute-positioned category pill (e.g., "Premium SUV", "E-Scooter") in the upper-left corner.
- Bottom partition featuring a high-contrast daily rate block (`headline-sm` in `#5D78A4`) paired with a muted `/day` suffix, right-aligned to a quick-action "Rent" button.

### Vehicle Specification Chips
- Pill-shaped (`rounded-full`), height 28px, padding 0 12px.
- Subtle background `#F1F5F9`, foreground `#334155`, font `label-sm`.
- Integrated 14px monochrome iconography representing seat count, fuel/range type, transmission, and luggage capacity.

### Search & Booking Bar
- Elevated container (`rounded-2xl` / 24px) utilizing Level 3 ambient shadow.
- Divided into three seamless segments: Location (Pickup & Return), Date & Time Range, and Vehicle Type.
- Segments feature subtle vertical divider lines (`#E2E8F0`); active focus states highlight the respective segment with a 1px `#6E778A` perimeter and white fill.

### Form Inputs & Date Pickers
- Height 48px, radius 8px, background `#FFFFFF`, border 1px solid `#CBD5E1`.
- Placeholder text in `#64748B`. Focused state transitions border to `#6E778A` with a soft slate halo (`box-shadow: 0 0 0 3px rgba(110, 119, 138, 0.15)`).

### Step Progression (Checkout Flow)
- Horizontal stepper linking Location > Extras & Insurance > Driver Verification > Confirmation.
- Completed steps display a `#7E709C` badge with check icon; current active step displays `#5D78A4` with bold white numbering; upcoming steps remain muted in `#E2E8F0` with `#64748B` labels.