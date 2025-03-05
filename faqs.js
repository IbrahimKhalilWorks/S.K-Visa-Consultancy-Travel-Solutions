document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            // Check if this item is already active
            const isActive = item.classList.contains('active');

            // Close all FAQ items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                const otherAnswer = otherItem.querySelector('.faq-answer');
                otherAnswer.style.maxHeight = null;
            });

            // If this item wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileToggleBtn = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileToggleBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.setAttribute('aria-expanded', 
            this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !mobileToggleBtn.contains(event.target)) {
            navMenu.classList.remove('active');
            mobileToggleBtn.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Dropdown menu functionality
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        // For mobile view
        toggle.addEventListener('click', function(e) {
            // Check if we're in mobile view
            if (window.innerWidth <= 992) {
                e.preventDefault();
                this.parentElement.classList.toggle('dropdown-open');
            }
        });
        
        // For desktop hover functionality
        const dropdownItem = toggle.parentElement;
        
        dropdownItem.addEventListener('mouseenter', function() {
            if (window.innerWidth > 992) {
                this.classList.add('dropdown-open');
            }
        });
        
        dropdownItem.addEventListener('mouseleave', function() {
            if (window.innerWidth > 992) {
                this.classList.remove('dropdown-open');
            }
        });
    });
});