// ===== NAVIGATION MENU =====
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Hide menu when clicking nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

// ===== ACTIVE LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const link = document.querySelector('.nav__link[href*=' + sectionId + ']');

        if (link) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

// ===== HEADER BACKGROUND ON SCROLL =====
function scrollHeader() {
    const header = document.getElementById('header');
    
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

// ===== SCROLL TO TOP BUTTON =====
const scrollTop = document.getElementById('scroll-top');

function toggleScrollTop() {
    if (this.scrollY >= 400) {
        scrollTop.classList.add('show');
    } else {
        scrollTop.classList.remove('show');
    }
}

window.addEventListener('scroll', toggleScrollTop);

if (scrollTop) {
    scrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== CONTACT FORM HANDLING =====
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            service: formData.get('service'),
            message: formData.get('message')
        };

        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        console.log('Form submitted:', data);

        // Show success message
        formSuccess.classList.add('show');
        contactForm.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            formSuccess.classList.remove('show');
        }, 5000);

        // In a real implementation, you would do something like:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Success:', data);
        //     formSuccess.classList.add('show');
        //     contactForm.reset();
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        //     alert('There was an error submitting your message. Please try again.');
        // });
    });
}

// ===== SMOOTH SCROLLING FOR ALL LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for just "#" links
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== ANIMATION ON SCROLL (OPTIONAL) =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to elements
const animatedElements = document.querySelectorAll('.service-card, .package-card, .feature-card, .testimonial-card');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== PHONE NUMBER CLICK TRACKING (ANALYTICS) =====
const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
phoneLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('Phone link clicked:', link.href);
        // You can add Google Analytics or other tracking here
        // gtag('event', 'phone_call', { 'event_category': 'engagement' });
    });
});

// ===== EMAIL LINK CLICK TRACKING (ANALYTICS) =====
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('Email link clicked:', link.href);
        // You can add Google Analytics or other tracking here
        // gtag('event', 'email_click', { 'event_category': 'engagement' });
    });
});

// ===== PREVENT FORM RESUBMISSION ON PAGE REFRESH =====
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// ===== HERO SLIDESHOW =====
const heroSlides = document.querySelectorAll('.hero__slide');
let currentSlide = 0;
const slideInterval = 5000; // 5 seconds between slides

function nextSlide() {
    // Remove active class from current slide
    heroSlides[currentSlide].classList.remove('active');
    
    // Move to next slide
    currentSlide = (currentSlide + 1) % heroSlides.length;
    
    // Add active class to new slide
    heroSlides[currentSlide].classList.add('active');
}

// Auto-advance slides
if (heroSlides.length > 1) {
    setInterval(nextSlide, slideInterval);
}

// ===== CONSOLE MESSAGE =====
console.log('%cSkyTrax Travel Agency', 'color: #0066cc; font-size: 24px; font-weight: bold;');
console.log('%cWebsite loaded successfully!', 'color: #00a86b; font-size: 14px;');
console.log('For inquiries, contact: skytraxpk@gmail.com');
console.log('Phone: +92 313 6936090 | +92 333 4444573');

