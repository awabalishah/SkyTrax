# SkyTrax - Travel Agency Website

A modern, responsive travel agency website specializing in Umrah and Hajj packages, visa services, and flight ticketing. Built with HTML5, CSS3, and vanilla JavaScript.

## 🚀 Quick Start

**New to the project?** Start here: **[QUICK-START.md](QUICK-START.md)** - Get your website running in 30 minutes!

**Need to add images?** See: **[IMAGE-GUIDE.md](IMAGE-GUIDE.md)** - Complete image placement guide

---

## Features

- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Lead Generation Focused** - Prominent contact information and call-to-action buttons
- **Service Showcase** - Dedicated sections for Umrah, Hajj, Visa, and Ticketing services
- **Contact Form** - Easy-to-use contact form for customer inquiries
- **SEO Optimized** - Proper meta tags and semantic HTML structure
- **Fast Loading** - Optimized CSS and JavaScript for quick page loads
- **Accessible** - Built with accessibility best practices

## Sections

1. **Home/Hero Section** - Eye-catching introduction with main CTA
2. **Quick Contact Bar** - Visible contact information (phone, email, address, hours)
3. **Services Section** - Four main services with detailed descriptions
4. **Packages Section** - Featured Umrah packages (3-star, 4-star, 5-star)
5. **Why Choose Us** - Key benefits and features
6. **About Section** - Company information and statistics
7. **Testimonials** - Customer reviews and feedback
8. **Contact Section** - Detailed contact information and inquiry form
9. **CTA Section** - Final call-to-action before footer
10. **Footer** - Complete site navigation and contact details

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Poppins)

## File Structure

```
SkyTrax/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet with responsive design
├── script.js           # JavaScript for interactivity
└── README.md           # Project documentation
```

## Getting Started

1. **Clone or download the repository**
2. **Add your images** - Replace placeholder images in the designated areas
3. **Update contact information** - Modify phone numbers, emails, and address in:
   - `index.html` (all contact sections)
4. **Customize content** - Update company information, services, and testimonials
5. **Configure form submission** - Integrate with your backend or email service
6. **Deploy** - Upload to your web hosting service

## Customization Guide

### Add Your Images (IMPORTANT - DO THIS FIRST!)

**See detailed guide:** [IMAGE-GUIDE.md](IMAGE-GUIDE.md)

The website is ready to use but needs your images:

1. **Hero Background** (Required)
   - Place at: `images/hero/hero-bg.jpg`
   - Size: 1920x1080 pixels minimum
   - This is the main banner image everyone sees first

2. **Package Images** (Recommended)
   - `images/packages/package-3star.jpg`
   - `images/packages/package-4star.jpg`
   - `images/packages/package-5star.jpg`

3. **About Image** (Recommended)
   - Place at: `images/about/about-team.jpg`
   - Shows your office or team

**Quick Image Sources:**
- Unsplash.com (search: "mosque", "kaaba", "islamic architecture")
- Pexels.com (free high-quality images)

### Update Contact Information

Find and replace the following in `index.html`:

- **Phone**: `+44 123 456 7890` → Your phone number
- **Email**: `info@skytrax.com` → Your email
- **Address**: `123 Travel Street, London, UK, SW1A 1AA` → Your address
- **Hours**: Update working hours in multiple locations

### Change Colors

Edit CSS variables in `styles.css` (lines 2-15):

```css
:root {
    --primary-color: #0066cc;        /* Main brand color */
    --secondary-color: #00a86b;      /* Accent color */
    --accent-color: #ff6b35;         /* Highlight color */
}
```

### Configure Form Submission

In `script.js`, uncomment and configure the fetch API call (around line 75) to send form data to your backend:

```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
```

Or integrate with services like:
- Formspree
- EmailJS
- Netlify Forms
- Your own backend API

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- Minify CSS and JavaScript for production
- Optimize and compress images
- Consider lazy loading for images
- Add caching headers on server
- Use CDN for Font Awesome and Google Fonts

## SEO Recommendations

1. **Add meta descriptions** for better search engine visibility
2. **Update page title** with relevant keywords
3. **Add structured data** (JSON-LD) for local business
4. **Create sitemap.xml**
5. **Add robots.txt**
6. **Optimize images** with alt text
7. **Add Open Graph tags** for social media sharing

## Security Considerations

- Implement CAPTCHA on contact form to prevent spam
- Use HTTPS for all pages
- Sanitize form inputs on backend
- Implement rate limiting for form submissions
- Add Content Security Policy (CSP) headers

## Future Enhancements

- [ ] Add blog section for travel tips and updates
- [ ] Integrate booking system
- [ ] Add multi-language support (Arabic, Urdu)
- [ ] Implement live chat feature
- [ ] Add customer portal for booking management
- [ ] Integrate payment gateway
- [ ] Add photo gallery
- [ ] Create testimonial submission form

## Support

For questions or support, please contact:
- Email: info@skytrax.com
- Phone: +44 123 456 7890

## License

This project is proprietary. All rights reserved.

---

**Note**: Remember to replace all placeholder content (phone numbers, emails, addresses, images) with your actual business information before deploying to production.

