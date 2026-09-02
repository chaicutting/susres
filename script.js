// Academic pages typically have minimal JavaScript.
// Keeping this script lightweight to handle simple responsive adjustments if needed.
document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for internal anchor links (if added in the future)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        });
    });
});
