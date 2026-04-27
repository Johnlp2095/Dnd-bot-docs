# D&D Bot Toolkit Documentation - Setup Guide

Welcome to the D&D Bot Toolkit documentation website! This guide explains everything about the documentation structure and how to host it on GitHub Pages.

## 📚 Documentation Structure

```
docs/
├── index.html              # Main home page with component overview
├── search-index.html       # Searchable keyword index (Ctrl+F friendly)
├── guide.html              # Complete guide and FAQ
├── quick-ref.html          # One-page quick reference sheet
├── _config.yml             # Jekyll configuration for GitHub Pages
├── Gemfile                 # Ruby dependencies for Jekyll
├── robots.txt              # SEO optimization for search engines
├── sitemap.xml             # Sitemap for better indexing
├── css/
│   └── style.css           # Master stylesheet with dark mode support
├── components/
│   ├── dice-roller.html
│   ├── character-system.html
│   ├── combat-system.html
│   ├── spell-system.html
│   ├── database-system.html
│   └── game-rules.html
└── README.md               # This file
```

## 🚀 Features

### 🔍 Searchable Index
- **search-index.html**: Browse every keyword, method, and parameter
- Use Ctrl+F to search on any page
- Filters by type: Components, Methods, Parameters, Concepts
- 40+ indexed keywords

### 📖 Comprehensive Documentation
- **guide.html**: Complete user guide and FAQ
- **quick-ref.html**: One-page reference sheet (printable)
- Every method includes working code examples
- Cross-references between related components

### 🎨 Beautiful Design
- Modern, clean interface with professional styling
- Dark mode support (auto-detects system preference)
- Mobile-responsive design
- GitHub Pages optimized
- Fast loading with minimal dependencies

### 🌐 GitHub Pages Ready
- Jekyll configuration included
- Sitemap and robots.txt for SEO
- Automatic builds from `docs/` folder
- No build tools required

## 🔧 GitHub Pages Setup

### Step 1: Push to GitHub
```bash
git add docs/
git commit -m "Add D&D Bot Toolkit documentation website"
git push origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository settings
2. Scroll to "GitHub Pages" section
3. Select "Deploy from a branch"
4. Choose branch: `main`
5. Select folder: `/docs`
6. Click "Save"

### Step 3: Access Your Site
Your documentation will be available at:
```
https://yourusername.github.io/dnd-bot-copilot/docs
```

## 🎯 Navigation Guide

### Main Pages
- **index.html** - Start here! Overview of all 6 components
- **search-index.html** - Find anything with searchable keyword index
- **guide.html** - Learn how to use the documentation
- **quick-ref.html** - Print-friendly reference sheet

### Component Pages
Each component has its own page with:
- Complete method documentation
- Parameter explanations
- Working code examples
- Cross-references to related systems

### Pages Include
- Navigation bar (sticky, always visible)
- Breadcrumbs for context
- Code syntax highlighting
- Mobile-responsive layout
- Print-friendly styles

## 💡 Using the Documentation

### Finding Information
1. **For quick lookups**: Use [search-index.html](search-index.html) or press Ctrl+F
2. **For learning**: Start with [index.html](index.html) and click components
3. **For reference**: Keep [quick-ref.html](quick-ref.html) open
4. **For help**: Check [guide.html](guide.html) and FAQ

### Ctrl+F Tips
- Search for method names: "make_attack"
- Search for parameters: "modifier"
- Search for keywords: "damage", "healing"
- Search is case-insensitive

### Printing
Press Ctrl+P on any page to:
- Print to PDF
- Save offline
- Print for reference

## 🎨 Customization

### Colors
Edit `css/style.css` to change the color scheme:
```css
:root {
    --primary: #2c3e50;      /* Navy blue */
    --secondary: #3498db;    /* Bright blue */
    --accent: #e74c3c;       /* Red */
    --success: #27ae60;       /* Green */
    --bg-light: #ecf0f1;      /* Light gray */
    --bg-white: #ffffff;      /* White */
    --text-dark: #2c3e50;     /* Dark text */
    --text-light: #7f8c8d;    /* Light gray text */
}
```

### Dark Mode
Dark mode is automatically enabled based on system preferences. Customize in `css/style.css`:
```css
@media (prefers-color-scheme: dark) {
    :root {
        /* Dark mode colors */
    }
}
```

### Adding New Keywords
Edit `search-index.html` to add new entries:
```html
<div class="keyword-entry" data-filter="method">
    <strong>your_method()</strong>
    <span class="keyword-type method">Method</span>
    <div class="keyword-desc">Description here</div>
    <a href="components/your-component.html" class="keyword-link">View Details →</a>
</div>
```

## 📊 SEO & Analytics

### Sitemap
The `sitemap.xml` file helps search engines index all pages:
- Automatically generated
- Update URLs in the file to match your GitHub Pages URL

### Robots.txt
The `robots.txt` file controls search engine crawling:
- Excludes PrevVersions folder
- Allows fast crawling
- Links to sitemap

### Keywords
All pages include proper meta tags:
- Title tags for each page
- Description meta tags
- Open Graph tags for social sharing

## 🛠️ Maintenance

### Updating Documentation
1. Edit HTML files directly
2. Commit and push to GitHub
3. Changes appear automatically (within minutes)

### Adding New Components
1. Create `components/new-component.html`
2. Add entry to `search-index.html`
3. Update `sitemap.xml`
4. Add to index.html components section

### Regular Tasks
- Keep keyword index updated
- Verify all cross-reference links work
- Test on mobile devices
- Update examples with latest code

## 📱 Mobile Optimization

The documentation is fully responsive:
- Collapses navigation on small screens
- Adjustable font sizes
- Touch-friendly buttons
- Optimized for all devices

## ♿ Accessibility

Features include:
- Semantic HTML structure
- Proper heading hierarchy
- Color contrast compliance
- Keyboard navigation support
- Focus indicators on interactive elements

## 🔗 External Resources

- [GitHub Pages Documentation](https://pages.github.com/)
- [Jekyll Documentation](https://jekyllrb.com/)
- [D&D 5e Rules](https://www.dndbeyond.com/)
- [Web Accessibility](https://www.w3.org/WAI/)

## 📝 File Descriptions

| File | Purpose |
|------|---------|
| `index.html` | Main landing page with component cards |
| `search-index.html` | 40+ searchable keywords organized by letter |
| `guide.html` | Complete user guide with FAQ |
| `quick-ref.html` | One-page reference sheet (printable) |
| `css/style.css` | Master stylesheet (dark mode support) |
| `_config.yml` | Jekyll configuration |
| `Gemfile` | Ruby dependencies |
| `robots.txt` | Search engine crawling rules |
| `sitemap.xml` | XML sitemap for SEO |

## 🎓 A-Level Notes

This documentation website demonstrates:
- ✅ Professional web design
- ✅ Responsive design principles
- ✅ SEO optimization
- ✅ Accessibility best practices
- ✅ User experience design
- ✅ Documentation writing
- ✅ Static site generation
- ✅ Git workflow

Perfect for your end-of-year project showcase!

## 📞 Support

For questions about:
- **GitHub Pages**: See [GitHub's documentation](https://docs.github.com/)
- **Jekyll**: See [Jekyll's documentation](https://jekyllrb.com/docs/)
- **Documentation content**: Edit the relevant HTML file
- **Styling**: Modify `css/style.css`

---

**Built with ❤️ for the D&D Bot Toolkit A-Level Project**
