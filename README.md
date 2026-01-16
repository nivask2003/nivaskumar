# Portfolio Website

A modern, minimal portfolio website built with HTML, CSS, JavaScript, and Bootstrap 5. This portfolio showcases my work as a WordPress Developer.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern & Minimal UI**: Clean design with smooth animations and transitions
- **Smooth Scrolling**: Enhanced navigation with smooth scroll effects
- **Scroll Animations**: Elements animate into view as you scroll
- **Interactive Project Cards**: Hover effects and animations on project showcases
- **Performance Optimized**: Fast loading times and optimized assets
- **SEO Friendly**: Semantic HTML and proper meta tags

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (Vanilla JS)
- Bootstrap 5
- Font Awesome (Icons)
- Google Fonts (Inter & Poppins)

## Project Structure

```
Portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Custom styles
├── js/
│   └── script.js       # Interactive functionality
├── assets/
│   └── images/         # Project screenshots/assets
└── README.md           # Project documentation
```

## Getting Started

1. Clone or download this repository
2. Open `index.html` in a web browser
3. That's it! No build process required.

## Customization

### Personal Information

Update the following in `index.html`:

- **Name**: Replace "Your Name" in the hero section and footer
- **Email**: Update the email address in the contact section
- **Social Links**: Update the social media links with your profiles
- **Projects**: Modify project descriptions and links as needed

### Colors

The color scheme can be customized in `css/style.css` by modifying the CSS variables in the `:root` selector:

```css
:root {
    --primary-color: #6366f1;
    --primary-dark: #4f46e5;
    --primary-light: #818cf8;
    --secondary-color: #8b5cf6;
    /* ... more variables */
}
```

### Adding Projects

To add more projects, copy the project card structure in the Projects section:

```html
<div class="col-lg-4 col-md-6">
    <div class="project-card">
        <!-- Project content -->
    </div>
</div>
```

## Sections

1. **Hero Section**: Introduction with name, title, and call-to-action buttons
2. **About Section**: Education, experience, and professional summary
3. **Skills Section**: Grid display of technical skills
4. **Projects Section**: Featured projects with links
5. **Contact Section**: Contact information and social links
6. **Footer**: Copyright and navigation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized CSS with efficient selectors
- Minified Bootstrap via CDN
- Lazy loading ready (for images)
- Smooth animations using CSS transitions
- Efficient JavaScript with event delegation

## License

This project is open source and available for personal use.

## Contact

For questions or suggestions, please reach out through the contact section on the website.

---

Built with ❤️ using Bootstrap 5 and modern web technologies.
