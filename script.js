// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
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

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');
    const body = document.body;

    // Toggle mobile menu
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            this.classList.toggle('open');
            navLinks.classList.toggle('show');
            
            // Prevent body scroll when menu is open
            if (navLinks.classList.contains('show')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });
    }

    // Handle all navigation links
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            const isDropdownParent = this.parentElement.classList.contains('dropdown');
            
            if (window.innerWidth <= 768) {
                if (isDropdownParent) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Close other dropdowns
                    dropdowns.forEach(other => {
                        if (other !== this.parentElement) {
                            other.classList.remove('active');
                        }
                    });
                    
                    this.parentElement.classList.toggle('active');
                } else {
                    // For non-dropdown links, close the menu
                    mobileMenuToggle.classList.remove('open');
                    navLinks.classList.remove('show');
                    body.style.overflow = '';
                    
                    // Close all dropdowns
                    dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
                }
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            const isClickInsideNav = navLinks.contains(e.target);
            const isClickOnToggle = mobileMenuToggle.contains(e.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('show')) {
                mobileMenuToggle.classList.remove('open');
                navLinks.classList.remove('show');
                body.style.overflow = '';
                
                // Close all dropdowns
                dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
            }
        }
    });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 768) {
                mobileMenuToggle.classList.remove('open');
                navLinks.classList.remove('show');
                body.style.overflow = '';
                dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
            }
        }, 250);
    });

    // Prevent touchmove on iOS when menu is open
    navLinks.addEventListener('touchmove', function(e) {
        e.stopPropagation();
    }, { passive: true });

    // Handle iOS keyboard issues
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            if (window.innerWidth <= 768) {
                setTimeout(() => {
                    this.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }, 300);
            }
        });
    });
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