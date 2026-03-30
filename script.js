// --- Smooth Scrolling ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// --- Dynamic Island Header Shrink/Blur on Scroll ---
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.padding = '0.3rem 1.2rem';
        header.style.background = 'var(--header-bg-scroll)';
    } else {
        header.style.padding = '0.5rem 1.5rem';
        header.style.background = 'var(--header-bg)';
    }
});

// --- Active Nav Link Update ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');

window.addEventListener('scroll', () => {
    let current = '';
    const buffer = 200; // Trigger threshold
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - buffer) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// --- Staggered Reveal Animations ---
const revealElements = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        
        // Add active class
        entry.target.classList.add('active');
        
        // Optional: unobserve if you only want it to animate once
        // observer.unobserve(entry.target);
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});

// --- Dynamic Hover Glow on Glass Cards ---
const glassCards = document.querySelectorAll('.glass-card');

glassCards.forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Set CSS variables for the exact mouse position
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// --- Theme Toggle Logic ---
const themeToggleBtn = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

function initTheme() {
    try {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            if (savedTheme === 'light') {
                rootElement.classList.add('light-mode');
            }
        } else {
            // Fallback to system setting
            const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
            if (prefersLight) {
                rootElement.classList.add('light-mode');
            }
        }
    } catch (e) {
        console.warn('Theme init blocked:', e);
    }
    updateThemeIcon();
}

function updateThemeIcon() {
    if (!themeToggleBtn) return;
    const isLight = rootElement.classList.contains('light-mode');
    const icon = themeToggleBtn.querySelector('i');
    if (icon) {
        if (isLight) {
            icon.className = 'fa-solid fa-moon';
        } else {
            icon.className = 'fa-solid fa-sun';
        }
    }
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        rootElement.classList.toggle('light-mode');
        const isLight = rootElement.classList.contains('light-mode');
        try {
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        } catch (err) {}
        updateThemeIcon();
    });
}

// Listen for system theme changes safely
try {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    const handleThemeChange = (e) => {
        try {
            if (!localStorage.getItem('theme')) {
                if (e.matches) {
                    rootElement.classList.add('light-mode');
                } else {
                    rootElement.classList.remove('light-mode');
                }
                updateThemeIcon();
            }
        } catch (err) {}
    };
    
    if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleThemeChange);
    } else if (mediaQuery.addListener) {
        mediaQuery.addListener(handleThemeChange);
    }
} catch (e) {
    console.warn('Media query listener error:', e);
}

// Run theme init
initTheme();

console.log('Advanced Interactive Portfolio Loaded!');
