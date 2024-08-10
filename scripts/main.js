document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    const homeSection = document.getElementById('home');
    let scrollTimeout;

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav ul li a');
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

    // Function to hide header after a delay
    function hideHeader() {
        header.style.opacity = '0';
        header.style.pointerEvents = 'none'; // Disable interactions when hidden
    }

    // Function to show header
    function showHeader() {
        header.style.opacity = '1';
        header.style.pointerEvents = 'auto'; // Enable interactions
    }

    // Scroll event listener
    window.addEventListener('scroll', function() {
        if (window.scrollY < homeSection.offsetHeight) {
            // If the user is on the home page, keep the header fixed and visible
            showHeader();
            clearTimeout(scrollTimeout);
        } else {
            // If the user is on other sections, hide the header after 3 seconds
            showHeader(); // Show the header when the user scrolls
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(hideHeader, 2000);
        }
    });

    // Ensure header is visible on page load
    showHeader();
});
