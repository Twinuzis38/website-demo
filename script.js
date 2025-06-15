// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        showNotification('Thank you for your message! We will get back to you soon.', 'success');
        this.reset();
    });
}

// Notification system with enhanced animation
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Trigger reflow
    notification.offsetHeight;
    
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Enhanced scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            if (entry.target.classList.contains('fade-in')) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
            if (entry.target.classList.contains('slide-in-left')) {
                entry.target.style.transform = 'translateX(0)';
            }
            if (entry.target.classList.contains('slide-in-right')) {
                entry.target.style.transform = 'translateX(0)';
            }
            if (entry.target.classList.contains('scale-in')) {
                entry.target.style.transform = 'scale(1)';
            }
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in').forEach(el => {
    if (el.classList.contains('fade-in')) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
    }
    if (el.classList.contains('slide-in-left')) {
        el.style.transform = 'translateX(-100px)';
    }
    if (el.classList.contains('slide-in-right')) {
        el.style.transform = 'translateX(100px)';
    }
    if (el.classList.contains('scale-in')) {
        el.style.transform = 'scale(0.8)';
    }
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Add hover animations to cards
document.querySelectorAll('.service-card, .resource-card, .team-card, .goal-item').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    });
});

// Add ripple effect to buttons
document.querySelectorAll('button, .cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        button.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Mobile menu toggle with animation
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        mobileMenuToggle.classList.toggle('open'); // For hamburger animation
        mobileMenuToggle.setAttribute('aria-expanded',
            navLinks.classList.contains('show') ? 'true' : 'false'
        );
    });

    // Close menu when a link is clicked (optional, but good for UX)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) { // Only close on mobile
                navLinks.classList.remove('show');
                mobileMenuToggle.classList.remove('open');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
}

// Handle dropdown menus in mobile view
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
});

// Close mobile menu and dropdowns if window is resized above mobile breakpoint
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        if (navLinks) {
            navLinks.classList.remove('show');
        }
        if (mobileMenuToggle) {
            mobileMenuToggle.classList.remove('open');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// Background logo scroll animation
document.addEventListener('DOMContentLoaded', function() {
    const floatingLogo = document.querySelector('.floating-logo');
    if (floatingLogo) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            floatingLogo.style.transform = `translate(-50%, -50%) translate(${scrolled * 0.05}px, ${scrolled * 0.1}px) rotate(${scrolled * 0.01}deg)`;
        });
    }
}); 