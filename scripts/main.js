document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav ul li a');
    const header = document.querySelector('header');

    // Smooth scrolling for navigation links
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            header.classList.add('hidden');
        } else {
            // Scrolling up
            header.classList.remove('hidden');
            header.classList.add('visible');
        }
        lastScrollY = window.scrollY;
    });
    
    header.addEventListener('mouseleave', function() {
        // Ensures header becomes transparent after hover
        header.classList.remove('visible');
    });
});
