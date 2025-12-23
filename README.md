# Biniam Birhanu - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript featuring advanced animations, interactive elements, and professional design.

## 🚀 Features

### Core Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Theme Toggle**: User preference saved in localStorage
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Navigation**: Active section detection and mobile hamburger menu
- **Animated Preloader**: Professional loading screen with progress bar
- **Scroll Progress Bar**: Visual indicator of page scroll progress

### Advanced Features

- **Particle Background**: Interactive particle system in hero section
- **Typing Animation**: Animated text in hero section
- **Skill Progress Bars**: Animated skill level indicators
- **Project Filtering**: Filter projects by category (Web, API, Full Stack)
- **Project Modals**: Detailed project information in popup modals
- **Blog System**: Blog posts with modal content display
- **Testimonial Slider**: Auto-rotating testimonials with manual controls
- **Contact Form**: Functional contact form with EmailJS integration
- **Statistics Counter**: Animated counting numbers in about section
- **Back to Top Button**: Smooth scroll to top functionality

### Performance & UX

- **Intersection Observer**: Efficient scroll-based animations
- **CSS Variables**: Easy theme customization
- **Optimized Images**: Fast loading with minimal dependencies
- **Accessibility**: Keyboard navigation and screen reader friendly
- **SEO Optimized**: Proper meta tags and semantic HTML

## 📁 File Structure

```
Portfolio/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS with animations
├── script.js           # JavaScript functionality
└── README.md          # Documentation
```

## 🛠️ Setup Instructions

### 1. Basic Setup

1. Download all files to your project folder
2. Open `index.html` in a web browser
3. The portfolio should work immediately with all features

### 2. EmailJS Setup (Optional)

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. In `script.js`, replace:

   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   // Replace with your actual public key

   emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
   // Replace with your service and template IDs
   ```

### 3. Customization

#### Personal Information

Edit in `index.html`:

- Replace "Biniam Birhanu" with your name
- Update hero description and about section
- Change contact information (email, LinkedIn, GitHub)
- Update testimonials with your references

#### Projects

Update project cards:

- Change project titles and descriptions
- Update technology tags
- Replace project icons
- Add your actual project links

#### Styling

Modify `styles.css`:

- Update CSS variables for colors:
  ```css
  :root {
    --primary-color: #3498db; /* Main brand color */
    --secondary-color: #f39c12; /* Accent color */
    --accent-color: #e74c3c; /* Highlight color */
  }
  ```
- Adjust fonts, spacing, and animations

#### Skills

Update skill levels in the skills section:

- Change skill names
- Adjust progress percentages (data-width attribute)
- Add or remove skill categories

## 🎨 Color Scheme

### Light Theme

- Primary: #3498db (Blue)
- Secondary: #f39c12 (Orange)
- Accent: #e74c3c (Red)
- Background: #ffffff
- Text: #333333

### Dark Theme

- Background: #1a1a1a
- Cards: #3a3a3a
- Text: #e0e0e0
- Borders: #555555

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

-service_9gr1zqb

## 📈 Performance Features

- **Lazy Loading**: Images and animations load when needed
- **Efficient Animations**: CSS transforms and opacity for smooth performance
- **Minimal Dependencies**: Only Font Awesome, EmailJS, and Particles.js
- **Optimized CSS**: Efficient selectors and minimal reflows
- **JavaScript Optimization**: Event delegation and efficient DOM queries

## 🚀 Deployment Options

### GitHub Pages

1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select source branch (main)
4. Site available at `https://yourusername.github.io/repository-name`

### Netlify

1. Drag and drop folder to Netlify
2. Or connect GitHub repository
3. Automatic deployment on updates

### Vercel

1. Import GitHub repository
2. Automatic deployment and custom domain support

### Traditional Hosting

1. Upload all files to web hosting service
2. Ensure `index.html` is in root directory
3. Access via your domain

## 🔄 Updates and Maintenance

### Adding New Projects

1. Add project card HTML in projects section
2. Add project data in `script.js` projectData object
3. Update project modal functionality

### Adding Blog Posts

1. Add blog card HTML in blog section
2. Add blog data in `script.js` blogData object
3. Update blog modal content

### Updating Skills

1. Modify skill items in HTML
2. Adjust data-width attributes for progress bars
3. Update skill categories as needed

## 🐛 Troubleshooting

### Common Issues

**Particles not showing:**

- Check browser console for errors
- Ensure particles.js CDN is loading
- Fallback system will continue without particles

**Contact form not working:**

- Verify EmailJS setup
- Check API keys and service configuration
- Form will show success message even without EmailJS

**Animations not smooth:**

- Check browser hardware acceleration
- Reduce animation complexity if needed
- Ensure CSS transitions are properly defined

**Mobile menu not working:**

- Verify JavaScript is loading
- Check for console errors
- Ensure hamburger click event is attached

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them back with the community.

## 📞 Support

For questions or issues:

- Check the troubleshooting section
- Review browser console for errors
- Ensure all files are properly linked
- Verify CDN resources are loading

---

**Built with ❤️ by Biniam Birhanu**
