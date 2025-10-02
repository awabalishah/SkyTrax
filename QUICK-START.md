# 🚀 Quick Start Guide - SkyTrax Website

Get your website up and running in 5 simple steps!

## Step 1: Add Your Hero Image ⭐

**This is the most important step!**

1. Find a beautiful travel or Islamic architecture image
2. Recommended sites:
   - [Unsplash](https://unsplash.com/s/photos/kaaba) - Search "kaaba" or "mosque"
   - [Pexels](https://pexels.com/search/mecca/) - Search "mecca" or "islamic"
3. Download the image
4. Optimize it at [TinyPNG.com](https://tinypng.com) (compress to under 500KB)
5. Rename it to `hero-bg.jpg`
6. Place it in the `images/hero/` folder

**Result:** Your homepage will have a stunning background instead of the placeholder!

---

## Step 2: Update Your Contact Information 📞

Open `index.html` and find/replace these (use Ctrl+H):

**Replace:**
- `+44 123 456 7890` → Your phone number
- `info@skytrax.com` → Your email address
- `123 Travel Street, London, UK, SW1A 1AA` → Your address
- Working hours text → Your actual hours

**Where to look:**
- Search for "tel:" to find all phone numbers
- Search for "mailto:" to find all emails
- Search for "Visit Us" to find addresses

---

## Step 3: Open the Website 🌐

**Method 1: Direct Open**
1. Find `index.html` in your folder
2. Right-click → Open with → Your web browser
3. The website will open!

**Method 2: Local Server (Recommended)**
1. Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code
2. Right-click `index.html` → "Open with Live Server"
3. Website opens with auto-refresh!

---

## Step 4: Customize Content ✏️

Open `index.html` and update:

**Company Name:**
- Line 21: Change "SkyTrax" to your company name
- Line 60-61: Update the hero headline

**Services:**
- Lines 136-270: Update service descriptions to match your offerings

**Packages:**
- Lines 272-410: Update Umrah package details and pricing

**About Section:**
- Lines 455-475: Write your company story

**Testimonials:**
- Lines 500-580: Add real customer reviews

---

## Step 5: Add More Images (Optional but Recommended) 🖼️

See [IMAGE-GUIDE.md](IMAGE-GUIDE.md) for detailed instructions.

**Priority images:**
1. `images/packages/package-3star.jpg` - 3-star hotel image
2. `images/packages/package-4star.jpg` - 4-star hotel image  
3. `images/packages/package-5star.jpg` - 5-star hotel image
4. `images/about/about-team.jpg` - Your team or office

---

## 🎨 Want to Change Colors?

Open `styles.css` and edit lines 2-15:

```css
:root {
    --primary-color: #0066cc;      /* Change to your brand color */
    --secondary-color: #00a86b;    /* Accent color */
}
```

**Color Picker Tools:**
- [Coolors.co](https://coolors.co) - Generate color palettes
- [HTML Color Codes](https://htmlcolorcodes.com) - Pick colors

---

## 📧 Setup Contact Form (Important!)

The contact form currently shows a success message but doesn't send emails.

**Easy Options:**

### Option 1: Formspree (Easiest - Free)
1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form endpoint
4. In `script.js`, line 38, replace the comment with:
```javascript
fetch('YOUR_FORMSPREE_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
```

### Option 2: EmailJS (Free tier available)
1. Sign up at [EmailJS.com](https://www.emailjs.com)
2. Follow their integration guide
3. Update the form handler in `script.js`

### Option 3: Your Backend
If you have a developer, they can create a backend API to handle form submissions.

---

## 🌍 Publishing Your Website

### Option 1: Web Hosting (Professional)
Upload these files to your hosting via FTP:
- index.html
- styles.css
- script.js
- images/ folder
- All other files

**Popular Hosts:**
- SiteGround
- Bluehost  
- HostGator

### Option 2: Free Hosting (For Testing)
- [Netlify](https://www.netlify.com) - Drag & drop folder
- [Vercel](https://vercel.com) - Free hosting
- [GitHub Pages](https://pages.github.com) - Free with GitHub

---

## ✅ Pre-Launch Checklist

Before going live, check:

- [ ] Hero image is displaying correctly
- [ ] All contact information is updated (phone, email, address)
- [ ] Company name is changed throughout
- [ ] Services descriptions are accurate
- [ ] Package details match your offerings
- [ ] Contact form is configured
- [ ] Website tested on mobile (use Chrome DevTools)
- [ ] All images are optimized (under 500KB each)
- [ ] Social media links are added/updated
- [ ] Working hours are correct

---

## 🆘 Common Issues

### Hero image not showing?
- Check file name: must be exactly `hero-bg.jpg`
- Check location: must be in `images/hero/` folder
- Try clearing browser cache (Ctrl + F5)

### Website looks weird on mobile?
- This is normal during development
- The design is responsive and will work on mobile
- Test with Chrome DevTools → Toggle Device Toolbar (Ctrl+Shift+M)

### Images too large/slow loading?
- Compress all images at [TinyPNG.com](https://tinypng.com)
- Target: Under 500KB for hero, under 200KB for others

---

## 📞 Need Help?

1. Check [README.md](README.md) for detailed documentation
2. Check [IMAGE-GUIDE.md](IMAGE-GUIDE.md) for image help
3. Email: info@skytrax.com (update this with your email!)

---

**Estimated Time to Launch:** 30-60 minutes

**Good luck with your website! 🚀**

