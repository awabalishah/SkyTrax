# Image Placement Guide for SkyTrax Website

This guide shows you exactly where to place your images to replace the placeholders in the website.

## 📁 Folder Structure

```
SkyTrax/
├── images/
│   ├── hero/           # Hero/Banner images
│   ├── services/       # Service section images
│   ├── packages/       # Umrah/Hajj package images
│   ├── about/          # About section images
│   ├── testimonials/   # Customer photos (optional)
│   └── icons/          # Logo and icons
```

---

## 🖼️ Image Requirements & Placement

### 1. Hero Section (Main Banner)
**Location:** `images/hero/hero-bg.jpg`

**Recommended Specs:**
- **Size:** 1920 x 1080 pixels (minimum)
- **Format:** JPG or WebP
- **Quality:** High quality, compressed for web
- **Subject:** Beautiful mosque, Kaaba, or Islamic architecture with good lighting
- **File Name:** `hero-bg.jpg`

**Tips:**
- Use images with space in the center for text overlay
- Avoid busy images with too many details
- Ensure good contrast for white text
- Consider images with sky or open space in the upper portion

**Alternative Images:**
You can create multiple hero images and name them:
- `hero-bg.jpg` (main)
- `hero-bg-2.jpg` (alternative)
- `hero-bg-3.jpg` (seasonal)

To change the hero image, edit line 56 in `index.html`:
```html
<section class="hero" id="home" style="background-image: url('images/hero/hero-bg.jpg');">
```

---

### 2. Service Section Images (Optional Enhancement)
**Location:** `images/services/`

You can add background images or icons for each service:
- `umrah-service.jpg` - Umrah package imagery
- `hajj-service.jpg` - Hajj package imagery
- `visa-service.jpg` - Visa/passport imagery
- `tickets-service.jpg` - Flight/airplane imagery

**Recommended Specs:**
- **Size:** 800 x 600 pixels
- **Format:** JPG or PNG
- **Style:** Icons or clean imagery

---

### 3. Package Section Images
**Location:** `images/packages/`

**Required Images:**
- `package-3star.jpg` - 3-star hotel or package imagery
- `package-4star.jpg` - 4-star hotel or package imagery
- `package-5star.jpg` - 5-star luxury hotel or package imagery

**Recommended Specs:**
- **Size:** 800 x 600 pixels (4:3 ratio)
- **Format:** JPG
- **Subject:** Hotel exteriors, rooms, or Haram views
- **Quality:** High quality, compressed

**To Replace:**
In `index.html`, find the package cards (around line 236) and replace:
```html
<div class="package-image-placeholder">
```
With:
```html
<img src="images/packages/package-3star.jpg" alt="3 Star Umrah Package">
```

---

### 4. About Section Image
**Location:** `images/about/about-team.jpg`

**Recommended Specs:**
- **Size:** 1000 x 1000 pixels (square) or 1200 x 800 (landscape)
- **Format:** JPG
- **Subject:** 
  - Your office building
  - Team photo
  - Customer service team
  - Company meeting

**To Replace:**
In `index.html`, find the about section (around line 453) and replace:
```html
<div class="about__image-placeholder">
```
With:
```html
<img src="images/about/about-team.jpg" alt="SkyTrax Team">
```

---

### 5. Testimonial Images (Optional)
**Location:** `images/testimonials/`

**Files:**
- `customer-1.jpg`
- `customer-2.jpg`
- `customer-3.jpg`

**Recommended Specs:**
- **Size:** 200 x 200 pixels (square)
- **Format:** JPG or PNG
- **Subject:** Customer photos (with permission) or placeholder avatars

---

### 6. Logo & Icons
**Location:** `images/icons/`

**Optional Files:**
- `logo.png` - Your company logo (transparent background)
- `favicon.ico` - Browser tab icon (16x16, 32x32, 48x48)
- `logo-white.png` - White version for dark backgrounds

**Logo Specs:**
- **Size:** 200 x 60 pixels (approximate)
- **Format:** PNG with transparent background
- **Style:** Clean, professional

**To Add Logo:**
In `index.html`, replace line 19-22:
```html
<a href="#" class="nav__logo">
    <img src="images/icons/logo.png" alt="SkyTrax Logo">
</a>
```

---

## 🎨 Image Sourcing Recommendations

### Free Stock Photo Sites:
1. **Unsplash** - https://unsplash.com
   - Search: "mosque", "kaaba", "islamic architecture", "mecca", "medina"
   
2. **Pexels** - https://pexels.com
   - High-quality free images
   
3. **Pixabay** - https://pixabay.com
   - Free images and vectors

### Suggested Search Terms:
- "Kaaba at night"
- "Mecca pilgrimage"
- "Islamic architecture"
- "Mosque interior"
- "Medina prophet mosque"
- "Hajj pilgrims"
- "Travel landscape"
- "Hotel luxury interior"

---

## 🔧 Image Optimization

Before uploading images, optimize them for web:

### Online Tools:
1. **TinyPNG** - https://tinypng.com
   - Compresses JPG and PNG without quality loss
   
2. **Squoosh** - https://squoosh.app
   - Google's image optimization tool
   
3. **CompressJPEG** - https://compressjpeg.com

### Optimization Tips:
- Compress all images before uploading
- Target file size: 200-500KB for large images
- Use JPG for photos, PNG for graphics/logos
- Consider WebP format for better compression (modern browsers)

---

## 📐 Quick Image Specs Summary

| Section | File Name | Dimensions | Format | Max Size |
|---------|-----------|------------|--------|----------|
| Hero | hero-bg.jpg | 1920x1080 | JPG | 500KB |
| Packages | package-*star.jpg | 800x600 | JPG | 200KB |
| About | about-team.jpg | 1000x1000 | JPG | 300KB |
| Services | service-*.jpg | 800x600 | JPG | 200KB |
| Logo | logo.png | 200x60 | PNG | 50KB |
| Testimonials | customer-*.jpg | 200x200 | JPG | 50KB |

---

## 🚀 Testing Your Images

After adding images:

1. **Check Load Time:**
   - Open browser Developer Tools (F12)
   - Go to Network tab
   - Refresh page
   - Check image load times (should be under 2 seconds total)

2. **Check Mobile Display:**
   - Press F12 in browser
   - Toggle device toolbar
   - Test on different screen sizes

3. **Check Text Readability:**
   - Ensure hero text is readable over background image
   - Adjust overlay opacity if needed (edit `.hero__overlay` in styles.css)

---

## ⚠️ Important Notes

- Always ensure you have the rights to use images
- For customer photos, obtain written permission
- Keep backup copies of original high-resolution images
- Name files with lowercase and hyphens (no spaces)
- Test images on different devices and browsers

---

## 🆘 Need Help?

If images aren't showing:

1. **Check file name spelling** - Must match exactly (case-sensitive on some servers)
2. **Check file location** - Ensure images are in correct folders
3. **Check file format** - Use .jpg, .png, or .webp
4. **Clear browser cache** - Press Ctrl+F5 to hard refresh
5. **Check file paths** - Use forward slashes: `images/hero/hero-bg.jpg`

---

**Last Updated:** October 2, 2025
**Website Version:** 1.0

