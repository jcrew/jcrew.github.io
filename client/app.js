// Modern JavaScript for professional personal website
document.addEventListener('DOMContentLoaded', function() {
    // Theme management
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Initialize theme
    function initializeTheme() {
        const savedTheme = localStorage.getItem('theme');
        const systemTheme = prefersDarkScheme.matches ? 'dark' : 'light';
        const currentTheme = savedTheme || systemTheme;
        
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateThemeIcon(currentTheme);
    }
    
    function updateThemeIcon(theme) {
        themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
        themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    }
    
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Update map theme if map exists
        if (window.worldMap) {
            updateMapTheme(newTheme);
        }
        
        // Add smooth transition effect
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Listen for system theme changes
    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            updateThemeIcon(newTheme);
        }
    });
    
    // Enhanced smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"], .btn[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 60; // Increased offset for better clearance
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active nav state
                updateActiveNav(targetId);
                
                // Add focus to target for accessibility
                targetElement.focus({ preventScroll: true });
            }
        });
    });
    
    // Active navigation management
    function updateActiveNav(activeId = null) {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        if (activeId) {
            // Manually set active state
            navLinks.forEach(link => {
                const href = link.getAttribute('href').substring(1);
                link.classList.toggle('active', href === activeId);
            });
            return;
        }
        
        // Auto-detect based on scroll position
        const scrollPosition = window.scrollY + 200; // Increased to account for sticky header
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = sectionId;
            }
        });
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href').substring(1);
            link.classList.toggle('active', href === currentSection);
        });
    }
    
    // Enhanced Intersection Observer for animations
    if ('IntersectionObserver' in window) {
        // Timeline animations
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Skills animations
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -30px 0px'
        });
        
        // Projects animations
        const projectsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -30px 0px'
        });
        
        // Initialize animations
        function initializeAnimations() {
            // Timeline items
            const timelineItems = document.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(40px)';
                item.style.transition = `opacity 0.8s ease ${index * 0.15}s, transform 0.8s ease ${index * 0.15}s`;
                timelineObserver.observe(item);
            });
            
            // Skill categories
            const skillCategories = document.querySelectorAll('.skill-category');
            skillCategories.forEach((category, index) => {
                category.style.opacity = '0';
                category.style.transform = 'translateY(30px)';
                category.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
                skillsObserver.observe(category);
            });
            
            // Project cards
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px) scale(0.95)';
                card.style.transition = `opacity 0.7s ease ${index * 0.12}s, transform 0.7s ease ${index * 0.12}s`;
                projectsObserver.observe(card);
            });
            
            // Stats animation
            const statItems = document.querySelectorAll('.stat-item');
            statItems.forEach((stat, index) => {
                stat.style.opacity = '0';
                stat.style.transform = 'scale(0.8)';
                stat.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
                skillsObserver.observe(stat);
            });
        }
        
        initializeAnimations();
    }
    
    // Enhanced keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
        
        // Quick navigation shortcuts
        if (e.altKey) {
            switch(e.key) {
                case '1':
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    break;
                case '2':
                    e.preventDefault();
                    document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' });
                    break;
                case '3':
                    e.preventDefault();
                    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                    break;
                case '4':
                    e.preventDefault();
                    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                    break;
                case '5':
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    break;
                case 't':
                    e.preventDefault();
                    toggleTheme();
                    break;
            }
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Performance optimized scroll handling
    let ticking = false;
    let lastScrollY = 0;
    
    function handleScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                
                // Update active navigation
                updateActiveNav();
                
                // Header transparency effect
                const header = document.querySelector('.header');
                if (currentScrollY > 100) {
                    header.style.background = 'rgba(15, 23, 42, 0.98)';
                    if (document.documentElement.getAttribute('data-theme') === 'light') {
                        header.style.background = 'rgba(255, 255, 255, 0.98)';
                    }
                } else {
                    header.style.background = 'rgba(15, 23, 42, 0.95)';
                    if (document.documentElement.getAttribute('data-theme') === 'light') {
                        header.style.background = 'rgba(255, 255, 255, 0.95)';
                    }
                }
                
                lastScrollY = currentScrollY;
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Email obfuscation for spam protection
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        const email = link.getAttribute('href').replace('mailto:', '');
        // Simple obfuscation - in production, use more sophisticated methods
        link.addEventListener('click', function(e) {
            // Could add analytics tracking here
            if ('gtag' in window) {
                gtag('event', 'contact', {
                    'event_category': 'engagement',
                    'event_label': 'email_click'
                });
            }
        });
    });
    
    // Contact form handling (if added later)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Handle form submission
            console.log('Contact form submitted');
        });
    }
    
    // Copy to clipboard functionality
    function copyToClipboard(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                showNotification('Copied to clipboard!');
            });
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showNotification('Copied to clipboard!');
        }
    }
    
    // Simple notification system
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--success-color);
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: var(--shadow-lg);
            z-index: 1000;
            opacity: 0;
            transform: translateY(-20px);
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        requestAnimationFrame(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        });
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Gallery modal functionality
    function initializeGallery() {
        const photoItems = document.querySelectorAll('.photo-item');
        
        // Create modal element
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <img class="modal-image" src="" alt="">
                <div class="modal-caption"></div>
            </div>
        `;
        document.body.appendChild(modal);
        
        const modalImg = modal.querySelector('.modal-image');
        const modalCaption = modal.querySelector('.modal-caption');
        const closeBtn = modal.querySelector('.close');
        
        // Add click listeners to gallery items
        photoItems.forEach(item => {
            item.addEventListener('click', function() {
                const img = this.querySelector('.gallery-image');
                const caption = this.querySelector('.photo-caption h4');
                const date = this.querySelector('.photo-date');
                
                modal.style.display = 'block';
                modalImg.src = img.src;
                modalImg.alt = img.alt;
                modalCaption.innerHTML = `<h3>${caption.textContent}</h3><p>${date.textContent}</p>`;
                
                // Prevent body scroll
                document.body.style.overflow = 'hidden';
            });
        });
        
        // Close modal functionality
        function closeModal() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        closeBtn.addEventListener('click', closeModal);
        
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // ESC key to close modal
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                closeModal();
            }
        });
    }
    
    // Initialize gallery after DOM content is loaded
    initializeGallery();
    
    // Initialize theme and scroll position
    initializeTheme();
    updateActiveNav();
    
    // Performance monitoring
    if ('performance' in window && 'mark' in performance) {
        performance.mark('website-interactive');
        
        // Measure page load performance
        window.addEventListener('load', () => {
            performance.mark('website-loaded');
            performance.measure('website-load-time', 'navigationStart', 'website-loaded');
            
            const loadTime = performance.getEntriesByName('website-load-time')[0];
            console.log(`🚀 Website loaded in ${loadTime.duration.toFixed(2)}ms`);
        });
    }
    
    // Add subtle parallax effect to hero section (disabled to prevent overlap)
    // const hero = document.querySelector('.hero-section');
    // if (hero) {
    //     window.addEventListener('scroll', () => {
    //         const scrolled = window.pageYOffset;
    //         const parallax = scrolled * 0.5;
    //         hero.style.transform = `translateY(${parallax}px)`;
    //     }, { passive: true });
    // }
    
    // Initialize Leaflet map
    initializeWorldMap();
    
    console.log('🎯 Professional portfolio loaded successfully!');
    console.log('📸 Gallery with career photos ready!');
    console.log('🗺️ Interactive world map with your global journey!');
    console.log('💡 Keyboard shortcuts: Alt+1-5 for navigation, Alt+T for theme toggle');
});

// Leaflet Map initialization
function initializeWorldMap() {
    // All locations with GPS coordinates
    const locations = [
        // North America
        { name: 'Boston, MA', lat: 42.3601, lng: -71.0589 },
        { name: 'Seattle, WA', lat: 47.6062, lng: -122.3321 },
        { name: 'San Francisco, CA', lat: 37.7749, lng: -122.4194 },
        { name: 'Sacramento, CA', lat: 38.5816, lng: -121.4944 },
        { name: 'Berkeley, CA', lat: 37.8715, lng: -122.2730 },
        { name: 'Foster City, CA', lat: 37.5585, lng: -122.2711 },
        { name: 'Mountain View, CA', lat: 37.4419, lng: -122.1430 },
        { name: 'Palo Alto, CA', lat: 37.4419, lng: -122.1430 },
        { name: 'San Diego, CA', lat: 32.7157, lng: -117.1611 },
        { name: 'Fresno, CA', lat: 36.7378, lng: -119.7871 },
        { name: 'Washington, DC', lat: 38.9072, lng: -77.0369 },
        { name: 'New York, NY', lat: 40.7128, lng: -74.0060 },
        { name: 'Dallas, TX', lat: 32.7767, lng: -96.7970 },
        { name: 'Oahu, HI', lat: 21.4389, lng: -158.0001 },
        { name: 'Kona, HI', lat: 19.6390, lng: -155.9969 },
        
        // Canada
        { name: 'Ottawa, Canada', lat: 45.4215, lng: -75.6972 },
        { name: 'Montreal, Canada', lat: 45.5017, lng: -73.5673 },
        { name: 'Banff, Canada', lat: 51.1784, lng: -115.5708 },
        
        // Mexico
        { name: 'Cancun, Mexico', lat: 21.1619, lng: -86.8515 },
        
        // Europe
        { name: 'London, UK', lat: 51.5074, lng: -0.1278 },
        { name: 'Paris, France', lat: 48.8566, lng: 2.3522 },
        { name: 'Madrid, Spain', lat: 40.4168, lng: -3.7038 },
        { name: 'Stockholm, Sweden', lat: 59.3293, lng: 18.0686 },
        { name: 'Linköping, Sweden', lat: 58.4109, lng: 15.6218 },
        { name: 'Malmö, Sweden', lat: 55.6059, lng: 13.0007 },
        { name: 'Oslo, Norway', lat: 59.9139, lng: 10.7522 },
        { name: 'Wrocław, Poland', lat: 51.1079, lng: 17.0385 },
        
        // Asia
        { name: 'Seoul, Korea', lat: 37.5665, lng: 126.9780 },
        { name: 'Tokyo, Japan', lat: 35.6762, lng: 139.6503 },
        { name: 'Yokohama, Japan', lat: 35.4437, lng: 139.6380 },
        { name: 'Beijing, China', lat: 39.9042, lng: 116.4074 },
        { name: 'Hong Kong', lat: 22.3193, lng: 114.1694 },
        { name: 'Kuala Lumpur, Malaysia', lat: 3.1390, lng: 101.6869 }
    ];

    // Initialize the map
    const map = L.map('google-map', {
        center: [20, 0],
        zoom: 2,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: true
    });

    // Store map globally for theme updates
    window.worldMap = map;

    // Get current theme and add appropriate tile layer
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    addMapTileLayer(map, currentTheme);

    // Custom marker icon
    const customIcon = L.divIcon({
        className: 'custom-marker',
        html: '<div class="marker-pin"></div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10]
    });

    // Add markers for each location
    locations.forEach(location => {
        const marker = L.marker([location.lat, location.lng], {
            icon: customIcon,
            title: location.name
        }).addTo(map);

        // Add popup
        marker.bindPopup(`
            <div style="
                padding: 8px 12px; 
                font-weight: 600; 
                color: #1e293b;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                text-align: center;
                min-width: 120px;
            ">
                📍 ${location.name}
            </div>
        `);
    });

    // Make map responsive
    setTimeout(() => {
        map.invalidateSize();
    }, 100);
}

// Function to add appropriate tile layer based on theme
function addMapTileLayer(map, theme) {
    // Remove existing tile layers
    map.eachLayer(function(layer) {
        if (layer instanceof L.TileLayer) {
            map.removeLayer(layer);
        }
    });

    // Add appropriate tile layer based on theme
    const tileLayerUrl = theme === 'light' 
        ? 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
        : 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';

    L.tileLayer(tileLayerUrl, {
        attribution: '',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);
}

// Function to update map theme
function updateMapTheme(theme) {
    if (window.worldMap) {
        addMapTileLayer(window.worldMap, theme);
    }
}