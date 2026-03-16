# Professional Portfolio

A modern, responsive portfolio website built with HTML5, CSS3, and JavaScript.

## Features

- ✨ Modern and clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Beautiful gradient hero section
- 🚀 Smooth scrolling navigation
- 💼 Project showcase with links
- 🎯 Skills section with organized categories
- 📧 Contact information display
- 🔗 Social media links
- ⚡ Smooth animations and transitions
- 🌓 Professional color scheme

## File Structure

```
Portfolio/
├── index.html       # Main HTML file
├── styles.css       # Styling and layout
├── script.js        # JavaScript interactivity
└── README.md        # This file
```

## Quick Start

1. Open `index.html` in your web browser to view the portfolio
2. To customize, edit the files according to sections below

## Customization Guide

### Personal Information

Open `index.html` and update:

1. **Name in title and navbar** (Line 6 & 18):
   ```html
   <title>Your Name - Professional Portfolio</title>
   <h1 class="logo">Your Name</h1>
   ```

2. **Hero Section** (Lines 32-38):
   - Update job title/subtitle
   - Update description
   - Customize call-to-action buttons

3. **About Section** (Lines 54-57):
   - Replace placeholder text with your bio
   - Add your professional summary

### Projects Section

Edit the project cards (Lines 68-107):

```html
<div class="project-card">
    <div class="project-header">
        <h3>Your Project Name</h3>
        <div class="project-links">
            <a href="https://github.com/yourprofile/project" target="_blank">
                <i class="fab fa-github"></i>
            </a>
            <a href="https://your-project-link.com" target="_blank">
                <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    </div>
    <p class="project-description">Your project description here</p>
    <div class="project-tech">
        <span class="tech-tag">Technology1</span>
        <span class="tech-tag">Technology2</span>
    </div>
</div>
```

### Skills Section

Update the skills in Lines 114-145:

```html
<div class="skill-category">
    <h3>Your Category</h3>
    <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>Skill 3</li>
    </ul>
</div>
```

### Contact Section

Update contact information (Lines 170-190):

- Email address (Line 178)
- Phone number (Line 184)
- Location (Line 190)

### Social Media Links

Update social links (Lines 194-199):

```html
<a href="https://github.com/yourprofile" target="_blank">
    <i class="fab fa-github"></i>
</a>
```

Available social icons:
- `fa-github` - GitHub
- `fa-linkedin` - LinkedIn
- `fa-twitter` - Twitter
- `fa-instagram` - Instagram
- `fa-codepen` - CodePen
- `fas fa-envelope` - Email

## Color Customization

Edit CSS variables in `styles.css` (Lines 9-17):

```css
:root {
    --primary-color: #2563eb;      /* Main blue color */
    --secondary-color: #1e40af;    /* Darker blue */
    --text-color: #1f2937;         /* Dark text */
    --bg-color: #ffffff;           /* Light background */
    --light-bg: #f9fafb;           /* Light gray background */
}
```

### Color Suggestions

**Professional Blue:**
- Primary: `#2563eb`
- Secondary: `#1e40af`

**Modern Dark:**
- Primary: `#6366f1`
- Secondary: `#4f46e5`

**Tech Green:**
- Primary: `#059669`
- Secondary: `#047857`

**Vibrant Purple:**
- Primary: `#9333ea`
- Secondary: `#7e22ce`

## Deploying Your Portfolio

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository named `portfolio`
2. Upload all files to the repository
3. Go to Settings → Pages → select main branch
4. Your site will be live at: `https://username.github.io/portfolio`

### Option 2: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your portfolio folder
3. Get a live link instantly

### Option 3: Custom Domain
1. Buy a domain from providers like Namecheap, GoDaddy, or Google Domains
2. Use any free hosting or deploy to GitHub Pages/Netlify
3. Point your domain to the hosting service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**: Compress project images before adding
2. **SEO**: Update meta tags for better search visibility
3. **Analytics**: Add Google Analytics by including tracking code
4. **Accessibility**: Use semantic HTML and proper ARIA labels

## Adding More Features

### Contact Form
Replace the plain contact info with a form service like:
- Formspree
- Netlify Forms
- Web3Forms

### Blog Section
Add a blog to showcase your writing:
```html
<section id="blog" class="blog">
    <!-- Blog posts here -->
</section>
```

### Dark Mode Toggle
Add a theme switcher using JavaScript

### Blog/Articles
Integrate a blog platform or markdown parser

## Tips for Success

✅ Keep it simple and readable
✅ Use high-quality project screenshots/demos
✅ Update regularly with new projects
✅ Include quantifiable achievements
✅ Use consistent formatting
✅ Test on mobile devices
✅ Check links regularly
✅ Add clear call-to-actions

## Common Issues & Solutions

**Issue**: Links not working
- **Solution**: Check that href addresses are correct and target="_blank" is used for external links

**Issue**: Images not showing
- **Solution**: Verify image paths are correct and use relative paths

**Issue**: Mobile layout broken
- **Solution**: Test in browser DevTools (F12) → Device Toolbar

## License

Free to use and modify for personal and commercial projects.

## Contact & Support

If you need help customizing your portfolio, consider:
- Consulting the CSS/HTML documentation
- Using browser DevTools (F12) to inspect and debug
- Testing changes in a local development server

---

**Happy Portfolio Building! 🚀**
