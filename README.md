# Personal Portfolio Website

A responsive personal portfolio website showcasing skills, projects, and contact information. Built with HTML5, CSS3, and vanilla JavaScript.

## Features

- Responsive design (mobile, tablet, desktop)
- Semantic HTML5 structure
- CSS Grid and Flexbox layouts
- Accessible navigation (ARIA labels, keyboard support)
- Contact form with client-side validation
- Scroll-triggered reveal animations
- Active nav highlighting on scroll
- Mobile hamburger menu
- Hover effects and CSS transitions

## Technologies Used

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox, Media Queries)
- JavaScript (ES6+, IntersectionObserver API)
- Git for version control

## Project Structure

```
week1-portfolio/
├── index.html          # Main HTML file
├── css/
│   ├── variables.css   # CSS custom properties (design tokens)
│   ├── style.css       # Base styles and components
│   └── responsive.css  # Media queries (mobile-first)
├── js/
│   └── navigation.js   # Mobile menu, scroll effects, form validation
├── images/
│   ├── profile.jpg     # Profile photo (replace placeholder emoji)
│   ├── project1.jpg    # Project screenshot
│   └── icons/          # Favicon and social icons
├── README.md
└── .gitignore
```

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/week1-portfolio.git
   cd week1-portfolio
   ```

2. **Open in VS Code**
   ```bash
   code .
   ```

3. **Launch with Live Server**
   - Install the *Live Server* extension in VS Code
   - Right-click `index.html` → **Open with Live Server**
   - The site opens at `http://127.0.0.1:5500`

4. **Customise content**
   - Replace `John Doe` with your name throughout `index.html`
   - Add your real `images/profile.jpg` (remove the emoji placeholder)
   - Update project cards with your own projects and links
   - Fill in your real email and social URLs in the Contact section

## Customisation

### Changing the colour scheme
Edit `css/variables.css` and update the hex values under `:root`:

```css
:root {
  --accent:  #6c8eff;   /* primary accent (links, buttons) */
  --accent2: #a78bfa;   /* gradient end colour             */
  --bg:      #0d0f1a;   /* page background                 */
}
```

### Adding a new project card
Copy an existing `<article class="project-card">` block in `index.html`, update the title, description, tech tags, and href values.

## Accessibility

- All images include descriptive `alt` attributes
- Interactive elements have `aria-label` or visible labels
- Form fields use `aria-required`, `aria-invalid`, and `aria-describedby`
- Colour contrast meets WCAG AA standards
- `prefers-reduced-motion` is respected in `responsive.css`

## Browser Support

Tested and compatible with:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Quality Checklist

- [x] Semantic HTML5 elements used throughout
- [x] External CSS split into logical files
- [x] Responsive on 320 px → 1440 px+
- [x] CSS Grid and Flexbox layouts
- [x] Mobile hamburger navigation
- [x] Contact form with real-time validation
- [x] ARIA labels and roles
- [x] Alt text on all images
- [x] Keyboard-navigable
- [x] `prefers-reduced-motion` support
- [x] Cross-browser compatible

## License

© 2024 AC. All rights reserved.
