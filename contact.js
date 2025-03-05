document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('enquiryForm');
    const fileInput = document.getElementById('documents');
    
    // File upload handling
    if (fileInput) {
        fileInput.addEventListener('change', function(e) {
            const fileName = e.target.files[0]?.name;
            const fileSize = e.target.files[0]?.size;
            const maxSize = 20 * 1024 * 1024; // 20MB in bytes
            
            if (fileSize > maxSize) {
                alert('File size exceeds 20MB limit');
                fileInput.value = '';
                return;
            }
            
            // Update file info text if needed
            const fileInfo = this.parentElement.querySelector('.file-info');
            if (fileName && fileInfo) {
                fileInfo.textContent = `Selected file: ${fileName}`;
            }
        });
    }
    
    // Form validation and submission
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset previous errors
            const errorElements = form.querySelectorAll('.form-group.error');
            errorElements.forEach(el => el.classList.remove('error'));
            
            // Validate required fields
            let hasError = false;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.parentElement.classList.add('error');
                    hasError = true;
                }
            });
            
            // Email validation
            const emailField = form.querySelector('input[type="email"]');
            if (emailField && emailField.value) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value)) {
                    emailField.parentElement.classList.add('error');
                    hasError = true;
                }
            }
            
            // If no errors, submit the form
            if (!hasError) {
                // Add your form submission logic here
                console.log('Form submitted successfully');
                form.reset();
            }
        });
    }
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