# JollyStudio Portfolio - AI Coding Agent Guidelines

## Project Overview
**JollyStudio** is a professional wedding/maternity photography portfolio website built with vanilla HTML, CSS, and JavaScript. The site showcases photography services and includes WhatsApp contact integration for client inquiries.

**Key Stack:** Vanilla HTML, CSS (in-page styles), Vanilla JavaScript (no frameworks)

## Architecture & Structure

### Design System
- **Color Palette:** Gold (#F2C94C), Maroon (#9B2B2B), Charcoal (#222222), Off-White (#FAF7F2)
- **Typography:** Playfair Display (headings), Poppins (body) from Google Fonts
- **CSS Approach:** All styles embedded in `<style>` tags using CSS custom properties (`:root` variables)
- **Key Variable Names:** `--primary-gold`, `--primary-maroon`, `--text-charcoal`, `--bg-offwhite`, `--transition`

### Core Components
1. **Navigation Bar** (`.navbar`)
   - Fixed position, semi-transparent background
   - Mobile responsive: hamburger menu that slides in from right (`.nav-menu` drawer)
   - Logo with name/accent split styling

2. **Hero Section** (`.hero`)
   - Full-height viewport (100vh) with background image and dark overlay
   - Centered text content with shadow effects
   - Fixed background attachment for parallax effect

3. **Services Section** (`.services-grid`)
   - Grid layout: 4 service cards linking to separate HTML pages
   - Each card is an `<a>` tag (not a div), linking to `pre-wedding.html`, `wedding.html`, `maternity.html`, `portfolio.html`
   - Hover effect: upward translation + gold bottom border

4. **Gallery Section** (`.gallery-grid`)
   - Responsive grid with hover zoom effect on images
   - Overlay with camera icon appears on hover
   - Currently uses Unsplash placeholder images

5. **Contact Section**
   - Two-column layout: contact info (left) + WhatsApp form (right)
   - Form triggers WhatsApp Web API integration

## Critical Workflows & Patterns

### WhatsApp Integration
**File:** `Home.html` (only file with complete implementation)  
**Pattern:** Direct WhatsApp Web API (`wa.me/` links)

```javascript
// Form submission opens WhatsApp with pre-populated message
const whatsappMessage = `*New Inquiry from Website*%0a%0a*Name:* ${name}%0a*Service:* ${service}%0a*Message:* ${message}`;
window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank').focus();
```

**Key Details:**
- Phone number hardcoded: `919820293428` (India format with country code)
- URL encoding: `%0a` for line breaks
- Floating WhatsApp button (`.float-wa`) at bottom-right

### Mobile Navigation
- Hamburger toggle adds `.active` class to drawer
- Drawer slides in from right at `-300px` to `0`
- Nav links auto-close drawer on click
- Responsive breakpoint: `768px`

### Component State Management
- Vanilla JavaScript event listeners (no framework)
- State stored in DOM classes (`.active`, `.hamburger.active`)
- No external state management

## Developer Conventions

### CSS Organization
- **Structure:** Reset → Variables → Utilities → Components → Responsive
- **Naming:** BEM-inspired with hyphenated class names (`.service-card`, `.gallery-overlay`)
- **Utilities:** `.container` (1200px max-width), `.section-padding` (80px), `.btn` (base styles)
- **Transitions:** All use `--transition` variable (0.3s ease)

### HTML Structure Patterns
- Semantic sections with IDs matching nav links: `#home`, `#about`, `#services`, `#gallery`, `#contact`
- Inline styles used for one-off layouts (flex layouts with gaps)
- Consistent use of Font Awesome 6.4.0 for icons

### File Status
- `Home.html`: Complete, fully functional
- `Portfolio.html`, `Maternity.html`, `Prewedding&Wedding.html`: Empty placeholders (need implementation)

## Service Pages (In Progress)
Each service card links to a separate page that should mirror the design system:
- `pre-wedding.html` - Cinematic location shoots
- `wedding.html` - Full event coverage & drone shots
- `maternity.html` - Gentle portraiture for parents
- `portfolio.html` - Professional headshots

**Template approach:** Copy `Home.html` structure, customize hero, gallery, and contact sections for each service.

## Cross-Component Communication
- All pages should use consistent navbar/footer
- Contact form logic repeats in each service page (WhatsApp API)
- Shared CSS variables ensure visual consistency across pages

## Important Notes for Agents
1. **No Build Process:** Direct `.html` files, no bundling or compilation
2. **CDN Dependencies:** Font Awesome (CSS), Google Fonts, Unsplash images
3. **Client-Side Only:** No backend integration except WhatsApp Web API
4. **Mobile-First Breakpoint:** 768px max-width triggers drawer navigation
5. **Accessibility Gap:** No ARIA labels; consider adding for improved screen reader support
