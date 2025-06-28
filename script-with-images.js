// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects
    const contentItems = document.querySelectorAll('.content-item');
    contentItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Button interactions
    const buttons = document.querySelectorAll('.btn, .action-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Rflix feature coming soon!');
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
    
    searchInput.addEventListener('focus', function() {
        searchIcon.style.color = '#ffffff';
    });

    searchInput.addEventListener('blur', function() {
        searchIcon.style.color = '#999';
    });

    // Search input functionality
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        console.log('Searching for:', searchTerm);
    });

    // Navigation menu functionality
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            console.log('Navigating to:', this.textContent);
        });
    });

    // Profile dropdown functionality
    const navProfile = document.querySelector('.nav-profile');
    if (navProfile) {
        navProfile.addEventListener('click', function() {
            console.log('Profile menu clicked');
            alert('Profile menu coming soon!');
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Escape key to close search
        if (e.key === 'Escape' && document.activeElement === searchInput) {
            searchInput.blur();
        }
        
        // Enter key to search
        if (e.key === 'Enter' && document.activeElement === searchInput) {
            const searchTerm = searchInput.value;
            if (searchTerm.trim()) {
                console.log('Searching for:', searchTerm);
                alert(`Searching for: ${searchTerm}`);
            }
        }
    });

    // Content item click functionality
    contentItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('.content-info h3')?.textContent || 'Content';
            console.log('Clicked on:', title);
            alert(`Opening ${title}...`);
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    console.log('Rflix with Images Loaded Successfully!');
}); 