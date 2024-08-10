document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav ul li a');
    const header = document.querySelector('header');
    let timer;
    let isHome = true; // Variable to track if we're on the home page

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

    // Function to show header
    function showHeader() {
        header.classList.remove('transparent');
        header.style.display = 'block'; // Ensure the header is visible
    }

    // Function to hide header
    function hideHeader() {
        if (!isHome) {
            header.style.display = 'none';
        }
    }

    // Scroll event listener for header transparency and auto-hide
    window.addEventListener('scroll', function() {
        clearTimeout(timer);

        const scrollTop = window.scrollY;
        const homeSection = document.getElementById('home');

        // Check if we're on the home page
        if (scrollTop >= homeSection.offsetTop && scrollTop < (homeSection.offsetTop + homeSection.offsetHeight)) {
            isHome = true;
            showHeader(); // Always show header on home page
        } else {
            isHome = false;
            showHeader();

            timer = setTimeout(function() {
                hideHeader();
            }, 3000); // Hide the header after 3 seconds of inactivity
        }
    });

    // Initial hide of the header on other sections
    if (window.scrollY >= document.getElementById('home').offsetHeight) {
        hideHeader();
    }
});
