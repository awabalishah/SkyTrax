# 🎬 Hero Slideshow Guide

Your hero banner now features a beautiful auto-scrolling slideshow with three images and an elegant overlay!

## ✨ What's Included

### 🖼️ Three Background Images
- **01.jpg** - First image (starts on page load)
- **02.jpg** - Second image
- **03.jpg** - Third image

### 🎨 Beautiful Effects
- ✅ **Smooth Transitions** - 2-second fade between images
- ✅ **Ken Burns Effect** - Subtle zoom animation (8 seconds)
- ✅ **Brand-Colored Overlay** - Gradient using your theme colors
- ✅ **Center Focus** - Radial gradient keeps attention on text
- ✅ **Auto-Rotation** - Changes every 5 seconds

---

## ⚙️ Customization Options

### Change Slideshow Speed

**File:** `script.js` (Line 214)

```javascript
const slideInterval = 5000; // Change this number (in milliseconds)
```

**Examples:**
- `3000` = 3 seconds (faster)
- `5000` = 5 seconds (default)
- `7000` = 7 seconds (slower)
- `10000` = 10 seconds (very slow, dramatic)

---

### Adjust Transition Speed

**File:** `styles.css` (Line 253)

```css
transition: opacity 2s ease-in-out, transform 8s ease-out;
```

**Change the first number (opacity transition):**
- `1s` = Quick fade (1 second)
- `2s` = Smooth fade (default)
- `3s` = Slow fade (3 seconds)

---

### Adjust Ken Burns Zoom Effect

**File:** `styles.css` (Lines 259-270)

```css
.hero__slide.active {
    animation: kenburns 8s ease-out forwards;
}

@keyframes kenburns {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.1);  /* Change this for more/less zoom */
    }
}
```

**Zoom Options:**
- `scale(1.05)` = Very subtle zoom
- `scale(1.1)` = Subtle zoom (default)
- `scale(1.15)` = Noticeable zoom
- `scale(1.2)` = Dramatic zoom

**To Remove Ken Burns Effect:**
```css
.hero__slide.active {
    opacity: 1;
    /* Remove the animation line */
}
```

---

### Customize Overlay Colors

**File:** `styles.css` (Lines 279-285)

The overlay uses a diagonal gradient with your brand colors:

```css
background: linear-gradient(
    135deg,
    rgba(0, 102, 204, 0.75) 0%,    /* Primary blue */
    rgba(0, 73, 153, 0.65) 30%,    /* Darker blue */
    rgba(0, 0, 0, 0.5) 60%,        /* Black for contrast */
    rgba(0, 168, 107, 0.4) 100%    /* Secondary green */
);
```

**Adjust Overlay Darkness:**
- Higher numbers = Darker (0.0 to 1.0)
- Lower numbers = Lighter

**Examples:**
```css
/* Lighter overlay */
rgba(0, 102, 204, 0.5) 0%,
rgba(0, 73, 153, 0.4) 30%,
rgba(0, 0, 0, 0.3) 60%,
rgba(0, 168, 107, 0.2) 100%

/* Darker overlay */
rgba(0, 102, 204, 0.85) 0%,
rgba(0, 73, 153, 0.75) 30%,
rgba(0, 0, 0, 0.7) 60%,
rgba(0, 168, 107, 0.6) 100%
```

---

### Simple Black Overlay

If you prefer a simple black overlay instead:

**Replace lines 279-303 in `styles.css` with:**
```css
.hero__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Adjust 0.5 for darkness */
    z-index: 1;
}
```

---

## 🖼️ Adding More Images

### To Add a 4th Image:

1. **Add the image** to `images/hero/` folder (name it `04.jpg`)

2. **Update HTML** (`index.html`, line 61):
```html
<div class="hero__slideshow">
    <div class="hero__slide active" style="background-image: url('images/hero/01.jpg');"></div>
    <div class="hero__slide" style="background-image: url('images/hero/02.jpg');"></div>
    <div class="hero__slide" style="background-image: url('images/hero/03.jpg');"></div>
    <div class="hero__slide" style="background-image: url('images/hero/04.jpg');"></div>
</div>
```

That's it! The JavaScript automatically handles any number of slides.

---

## 🎨 Overlay Style Presets

### Preset 1: Brand Colors (Current)
```css
background: linear-gradient(
    135deg,
    rgba(0, 102, 204, 0.75) 0%,
    rgba(0, 73, 153, 0.65) 30%,
    rgba(0, 0, 0, 0.5) 60%,
    rgba(0, 168, 107, 0.4) 100%
);
```

### Preset 2: Dark & Dramatic
```css
background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.7) 100%
);
```

### Preset 3: Blue Gradient
```css
background: linear-gradient(
    135deg,
    rgba(0, 102, 204, 0.8) 0%,
    rgba(0, 73, 153, 0.7) 50%,
    rgba(0, 50, 100, 0.8) 100%
);
```

### Preset 4: Subtle
```css
background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.5) 100%
);
```

### Preset 5: Vibrant Colors
```css
background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.6) 0%,
    rgba(118, 75, 162, 0.6) 100%
);
```

---

## 🎬 Animation Presets

### Preset 1: Ken Burns (Current)
Subtle zoom in effect
```css
@keyframes kenburns {
    0% { transform: scale(1); }
    100% { transform: scale(1.1); }
}
```

### Preset 2: Ken Burns Reverse
Zoom out effect
```css
@keyframes kenburns {
    0% { transform: scale(1.1); }
    100% { transform: scale(1); }
}
```

### Preset 3: Pan Left
Horizontal movement
```css
@keyframes kenburns {
    0% { transform: scale(1.1) translateX(0); }
    100% { transform: scale(1.1) translateX(-5%); }
}
```

### Preset 4: Pan Right
```css
@keyframes kenburns {
    0% { transform: scale(1.1) translateX(0); }
    100% { transform: scale(1.1) translateX(5%); }
}
```

### Preset 5: Zoom + Pan
Combined effect
```css
@keyframes kenburns {
    0% { transform: scale(1) translateX(0); }
    100% { transform: scale(1.15) translateX(-3%); }
}
```

---

## 🔧 Troubleshooting

### Images Not Changing?
1. Check browser console (F12) for errors
2. Make sure all three images exist in `images/hero/` folder
3. Clear browser cache (Ctrl + F5)

### Transitions Too Fast/Slow?
- Adjust `slideInterval` in `script.js` (line 214)
- Adjust transition duration in `styles.css` (line 253)

### Text Not Readable?
- Increase overlay opacity in `styles.css` (lines 279-285)
- Make numbers higher (e.g., 0.5 → 0.7)

### Want to Disable Slideshow?
**Option 1:** Increase interval to very long
```javascript
const slideInterval = 999999999; // Essentially static
```

**Option 2:** Comment out the slideshow code
In `script.js`, add `//` before lines 228-230:
```javascript
// if (heroSlides.length > 1) {
//     setInterval(nextSlide, slideInterval);
// }
```

---

## 📊 Performance Tips

### For Faster Loading:
1. **Optimize images** - Compress at [TinyPNG.com](https://tinypng.com)
2. **Target size** - 300-500KB per image maximum
3. **Use WebP format** - Better compression, change `.jpg` to `.webp`
4. **Reduce resolution** - 1920x1080 is usually enough

### For Smoother Animation:
- Reduce Ken Burns zoom amount
- Use shorter transition durations
- Ensure images are optimized

---

## 🎨 Best Practices

### Image Selection:
✅ Choose images with similar composition  
✅ Consistent lighting across all images  
✅ Leave space in center for text  
✅ Use high-quality, sharp images  
✅ Avoid busy/cluttered backgrounds  

### Timing:
- **3-4 seconds** - Fast-paced, energetic
- **5-7 seconds** - Balanced (recommended)
- **8-10 seconds** - Slow, dramatic

### Overlay:
- Keep text readable (40-70% opacity)
- Match your brand colors
- Consider mobile readability

---

## 💡 Advanced: Manual Controls

Want to add navigation dots or arrows? Here's the HTML to add:

**After the slideshow div (line 62 in index.html):**
```html
<div class="hero__controls">
    <button class="hero__dot active" data-slide="0"></button>
    <button class="hero__dot" data-slide="1"></button>
    <button class="hero__dot" data-slide="2"></button>
</div>
```

Then add the JavaScript functionality for click handlers.

---

## 📞 Quick Reference

| Setting | File | Line | Default |
|---------|------|------|---------|
| Slide Duration | script.js | 214 | 5000ms (5s) |
| Fade Speed | styles.css | 253 | 2s |
| Zoom Amount | styles.css | 268 | 1.1 (10%) |
| Overlay Colors | styles.css | 279-285 | Brand gradient |

---

## ✅ Your Current Setup

- ✅ 3 images rotating automatically
- ✅ 5-second intervals
- ✅ 2-second smooth fades
- ✅ Subtle Ken Burns zoom effect
- ✅ Brand-colored gradient overlay
- ✅ Mobile responsive
- ✅ Performance optimized

**Enjoy your beautiful hero slideshow!** 🎬✨

---

**Last Updated:** October 2, 2025  
**Version:** 1.0 with Auto Slideshow

