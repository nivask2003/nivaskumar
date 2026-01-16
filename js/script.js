// ============================================
// Smooth Scrolling for Navigation Links
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link, .navbar-brand');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                        bsCollapse.hide();
                    }
                }
            }
        });
    });
});

// ============================================
// Active Navigation Link on Scroll
// ============================================
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPosition = window.scrollY + 150; // Offset for navbar height
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ============================================
// Scroll Animations using Intersection Observer
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements that should animate on scroll
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.skill-card, .project-card, .about-content, .about-info, .contact-item');
    
    animateElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
});

// ============================================
// Navbar Background on Scroll
// ============================================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
    }
});

// ============================================
// Typing Effect for Hero Title (Optional Enhancement)
// ============================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment below to enable typing effect
// document.addEventListener('DOMContentLoaded', function() {
//     const heroTitle = document.querySelector('.hero-title');
//     if (heroTitle) {
//         const originalText = heroTitle.textContent;
//         typeWriter(heroTitle, originalText, 50);
//     }
// });

// ============================================
// Smooth Scroll to Top Button (Footer)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const footerLink = document.querySelector('.footer a[href="#home"]');
    if (footerLink) {
        footerLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// ============================================
// Project Card Interactive Effects
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// ============================================
// Skill Card Counter Animation (Optional)
// ============================================
function animateOnScroll(element) {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isVisible && !element.classList.contains('animated')) {
        element.classList.add('animated');
        // Add any counter or animation logic here if needed
    }
}

// ============================================
// External Link Security
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    
    externalLinks.forEach(link => {
        if (!link.hasAttribute('rel')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});

// ============================================
// Mobile Menu Close on Outside Click
// ============================================
document.addEventListener('click', function(e) {
    const navbar = document.querySelector('.navbar-collapse');
    const toggleButton = document.querySelector('.navbar-toggler');
    
    if (navbar && navbar.classList.contains('show')) {
        if (!navbar.contains(e.target) && !toggleButton.contains(e.target)) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbar);
            if (bsCollapse) {
                bsCollapse.hide();
            }
        }
    }
});

// ============================================
// Performance: Lazy Loading Images (if added later)
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// Contact Form - EmailJS Integration
// ============================================
(function() {
    // Initialize EmailJS with your Public Key
    // Get this from: https://dashboard.emailjs.com/admin/integration
    emailjs.init("6WcPGlS_8Nq4luIWG"); // You need to replace this with your EmailJS Public Key

    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const submitBtn = document.getElementById('submitBtn');
    const submitText = submitBtn.querySelector('.submit-text');
    const spinner = submitBtn.querySelector('.spinner-border');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                from_name: document.getElementById('name').value,
                from_email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                to_email: 'nivask457@gmail.com' // Your email address
            };

            // Show loading state
            submitBtn.disabled = true;
            submitText.textContent = 'Sending...';
            spinner.classList.remove('d-none');
            formMessage.classList.add('d-none');

            // Send email using EmailJS
            // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual values
            emailjs.send('service_hxeod05', 'template_241f6bn', formData)
                .then(function() {
                    // Success
                    formMessage.classList.remove('d-none', 'alert-danger');
                    formMessage.classList.add('alert-success');
                    formMessage.textContent = 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.';
                    contactForm.reset();
                    
                    // Reset button state
                    submitBtn.disabled = false;
                    submitText.textContent = 'Send Message';
                    spinner.classList.add('d-none');
                })
                .catch(function(error) {
                    // Error
                    console.error('EmailJS Error:', error);
                    formMessage.classList.remove('d-none', 'alert-success');
                    formMessage.classList.add('alert-danger');
                    formMessage.textContent = 'Sorry, there was an error sending your message. Please try again or email me directly at nivask457@gmail.com';
                    
                    // Reset button state
                    submitBtn.disabled = false;
                    submitText.textContent = 'Send Message';
                    spinner.classList.add('d-none');
                });
        });
    }
})();

// ============================================
// Console Message
// ============================================
console.log('%c👋 Welcome to my portfolio!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cInterested in working together? Let\'s connect!', 'font-size: 14px; color: #64748b;');
