# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a professional software engineer portfolio website for Jaeyoon Lee (GitHub Pages). The site has been fully modernized from a legacy AngularJS-based architecture to modern vanilla web technologies, with v2 branch containing the enhanced professional version.

## Architecture

**Current Structure (v2 branch):**
- `index.html` - Professional portfolio with hero section, skills, experience, projects, and contact
- `client/static/css/style.css` - Modern CSS with dark/light theme support, animations, and professional styling
- `client/app.js` - Enhanced JavaScript with theme toggle, smooth animations, keyboard shortcuts, and performance optimizations
- Legacy files remain but are no longer used in production

**Legacy Structure (deprecated but present):**
- `index.jade` and `views/*.jade` - Jade template files (no longer compiled to HTML)
- `Gruntfile.js` and `package.json` - Legacy build system using Grunt and Bower dependencies
- `bower_components/` - Legacy frontend dependencies (AngularJS, Bootstrap 3)

## Development Commands

**How to Launch (v2 Professional Version):**

1. **Simple Static Server (Recommended):**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (if you have it)
   npx serve .
   
   # PHP (if available)
   php -S localhost:8000
   ```
   
2. **Using VS Code Live Server:**
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"
   
3. **Direct File Access:**
   - Open `index.html` directly in browser (some features may be limited due to CORS)

**Access the site:**
- Local: `http://localhost:8000`
- Features: Theme toggle, smooth animations, keyboard shortcuts (Alt+1-5, Alt+T)
- No build step required - pure vanilla HTML/CSS/JS

**Branch Information:**
- `master` - Original modernized version
- `v2` - Professional software engineer portfolio (current recommended version)

**Legacy Development (deprecated):**
- `npm start` or `grunt` - Starts Jade compilation and local server on port 8001
- `grunt publish` - Compiles Jade templates for production
- Dependencies: `npm install` (install legacy Grunt tasks and Connect framework)

## Key Implementation Details

**CSS Architecture (v2):**
- CSS custom properties for comprehensive theming system (dark/light mode)
- Professional color palette with indigo primary and cyan accents
- Mobile-first responsive design with breakpoints at 768px and 480px
- Advanced animations and micro-interactions using CSS transforms and transitions
- Accessibility features: focus management, reduced motion support, keyboard navigation, print styles
- Modern layout: CSS Grid for complex layouts, Flexbox for component alignment

**JavaScript Features (v2):**
- Dark/light theme toggle with system preference detection and localStorage persistence
- Enhanced Intersection Observer API for staggered animations (timeline, skills, projects)
- Smooth scrolling navigation with active state management and scroll-based header transparency
- Keyboard shortcuts: Alt+1-5 for section navigation, Alt+T for theme toggle
- Performance optimizations: requestAnimationFrame for scroll handling, lazy loading animations
- Professional features: email click tracking, notification system, copy-to-clipboard utilities

**Content Structure (v2):**
- Hero section with compelling tagline and call-to-action buttons
- Professional About section with career statistics and compelling narrative
- Technical Skills organized by categories with visual tags
- Enhanced Experience timeline with detailed achievements and quantified results
- Featured Projects showcase with technology stacks and descriptions
- Professional Contact section with multiple communication channels
- SEO-optimized meta tags and Open Graph properties

## Modernization Status

The site has been fully modernized and enhanced for professional use:
- ✅ Removed AngularJS dependency (was using 1.x)
- ✅ Replaced Bootstrap 3 with custom CSS Grid/Flexbox
- ✅ Eliminated Bower and Grunt build dependencies  
- ✅ Converted from Jade templates to static HTML
- ✅ Added modern JavaScript with ES6+ features
- ✅ Implemented responsive design and accessibility improvements
- ✅ **v2 Enhancements:** Professional portfolio structure, dark/light theme, advanced animations, keyboard shortcuts
- ✅ **Professional Features:** Skills showcase, enhanced timeline, project cards, contact integration
- ✅ **Performance:** Optimized loading, intersection observers, efficient scroll handling

**Current Recommendation:** Use the v2 branch for the professional software engineer portfolio. When making changes, work with the modern files (`index.html`, `client/static/css/style.css`, `client/app.js`) rather than the legacy Jade templates and build system.